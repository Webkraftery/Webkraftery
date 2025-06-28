import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Environment } from "@react-three/drei";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Test from "./Test";

gsap.registerPlugin(ScrollTrigger);

// 1. Floating Shapes
const FloatingShapes = () => {
  const group = useRef();

  useFrame(({ clock }) => {
    group.current.rotation.x = clock.getElapsedTime() * 0.1;
    group.current.rotation.y = clock.getElapsedTime() * 0.2;
    group.current.position.y = Math.sin(clock.getElapsedTime()) * 0.2;
  });

  return (
    <group ref={group}>
      <mesh position={[-1.5, 0, 0]}>
        <torusKnotGeometry args={[1, 0.4, 100, 32]} />
        <meshStandardMaterial
          color="#6366f1"
          metalness={0.9}
          roughness={0.1}
          emissive="#6366f1"
          emissiveIntensity={0.3}
        />
      </mesh>
      <mesh position={[1.5, 1, -1]}>
        <icosahedronGeometry args={[0.8, 0]} />
        <meshStandardMaterial
          color="#8b5cf6"
          metalness={0.7}
          roughness={0.3}
          transparent
          opacity={0.9}
        />
      </mesh>
    </group>
  );
};

// 2. Particle System
const Particles = ({ count = 1500 }) => {
  const particlesRef = useRef();

  useEffect(() => {
    const particles = particlesRef.current;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 20;
      colors[i] = 0.5 + Math.random() * 0.5;
    }

    particles.geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    particles.geometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors, 3)
    );
  }, [count]);

  return (
    <points ref={particlesRef}>
      <bufferGeometry attach="geometry" />
      <pointsMaterial
        attach="material"
        size={0.05}
        sizeAttenuation
        transparent
        opacity={0.5}
        vertexColors
      />
    </points>
  );
};

const Hero = () => {
  const heroRef = useRef();
  const contentRef = useRef();

  useEffect(() => {
    // Ensure text is visible immediately on load
    gsap.set(contentRef.current.children, { opacity: 1, y: 0 });
    
    // Then apply the animation
    gsap.from(contentRef.current.children, {
      opacity: 0,
      y: 50,
      stagger: 0.1,
      duration: 1,
      delay: 0.3, // Small delay to ensure DOM is ready
      ease: "power3.out",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top bottom",
        toggleActions: "play none none none",
      },
    });

    // Clean up ScrollTrigger on unmount
    return () => {
      ScrollTrigger.getAll().forEach(instance => instance.kill());
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="mt-10 relative h-screen w-full overflow-hidden flex items-center justify-center bg-black"
    >
      {/* 3D Canvas */}
      <div className="absolute inset-0 h-full w-full opacity-80">
        <Canvas gl={{ antialias: true }}>
          <ambientLight intensity={0.3} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={0.5} />
          <pointLight position={[-10, -10, -10]} intensity={0.3} />
          
          <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
            <FloatingShapes />
          </Float>
          
          <Particles />
          <Environment preset="dawn" />
          <OrbitControls 
            enableZoom={false} 
            autoRotate 
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </div>

      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30 z-10" />

      {/* Text Content - Now with guaranteed visibility */}
      <div 
        ref={contentRef}
        className="relative z-20 container mx-auto px-6 text-center"
        style={{ opacity: 1 }} // Initial opacity set
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white 
            drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
          From Idea to Launch <br></br>We Bring Your Vision To Life
        </h1>
        <Test/>
        
      </div>
      {/* Scrolling Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="flex flex-col items-center">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full animate-scroll-indicator" />
          </div>
          <span className="text-xs text-white mt-2">SCROLL</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;