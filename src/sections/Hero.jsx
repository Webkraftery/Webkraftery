import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, MeshTransmissionMaterial, Environment } from "@react-three/drei";
import * as THREE from "three";

// ─── Device Capability Detection ──────────────────────────────────────────────
// Returns 'high' | 'medium' | 'low' based on hardware signals
const getDeviceTier = () => {
  if (typeof window === "undefined") return "medium";

  const cores  = navigator.hardwareConcurrency || 4;
  const memory = navigator.deviceMemory || 4; // GB, Chrome only (other browsers return undefined → default 4)
  const isMobile = window.innerWidth < 768;

  // Low-end: ≤4 cores OR ≤2GB RAM
  if (cores <= 4 || memory <= 2) return "low";
  // Medium: mobile viewport but decent hardware
  if (isMobile) return "medium";
  // High: desktop with good hardware
  return "high";
};

// ─── Quality Config per tier ─────────────────────────────────────────────────
const Q = {
  high: {
    particles:      1200,
    torusSeg:       [150, 32],
    sphereSeg:      [1, 48, 48],
    transmitSamples: 4,
    transmitBackside: true,
    distortSpeed:   3,
    distortAmount:  0.4,
    floatSpeed:     [2, 3],
    dpr:            [1, 1.5],
    antialias:      true,
    environment:    true,
    fov:            45,
  },
  medium: {
    particles:      350,
    torusSeg:       [80, 16],
    sphereSeg:      [1, 24, 24],
    transmitSamples: 1,
    transmitBackside: false,
    distortSpeed:   2,
    distortAmount:  0.3,
    floatSpeed:     [1.5, 2],
    dpr:            [1, 1],
    antialias:      false,
    environment:    false,
    fov:            55,
  },
  low: {
    particles:      120,
    torusSeg:       [50, 10],
    sphereSeg:      [1, 14, 14],
    transmitSamples: 1,
    transmitBackside: false,
    distortSpeed:   1,
    distortAmount:  0.15,
    floatSpeed:     [1, 1.5],
    dpr:            [1, 1],
    antialias:      false,
    environment:    false,
    fov:            60,
  },
};

// ─── Floating Shapes ─────────────────────────────────────────────────────────
const FloatingShapes = ({ tier }) => {
  const q = Q[tier];
  const isMobile = tier !== "high";

  return (
    // No scale reduction on mobile — just reposition the objects
    <group>
      <Float
        speed={q.floatSpeed[0]}
        rotationIntensity={isMobile ? 1 : 1.5}
        floatIntensity={isMobile ? 1 : 2}
      >
        <mesh position={isMobile ? [-0.3, 1.6, 0] : [-2.5, 1, 0]}>
          <torusKnotGeometry args={[0.8, 0.25, ...q.torusSeg]} />
          {tier === "low" ? (
            <meshPhysicalMaterial
              color="#a5b4fc"
              transmission={0.7}
              roughness={0.05}
              metalness={0}
              ior={1.4}
              thickness={1.5}
              transparent
              opacity={0.9}
            />
          ) : (
            <MeshTransmissionMaterial
              backside={q.transmitBackside}
              samples={q.transmitSamples}
              thickness={1.5}
              chromaticAberration={tier === "high" ? 0.05 : 0.02}
              anisotropy={0.1}
              distortion={0.1}
              color="#a5b4fc"
            />
          )}
        </mesh>
      </Float>

      <Float
        speed={q.floatSpeed[1]}
        rotationIntensity={isMobile ? 1 : 2}
        floatIntensity={1}
      >
        <mesh position={isMobile ? [0.8, -1.5, -0.5] : [2.5, -1, -1]}>
          <sphereGeometry args={q.sphereSeg} />
          {tier === "low" ? (
            <meshStandardMaterial
              color="#8b5cf6"
              metalness={0.6}
              roughness={0.15}
            />
          ) : (
            <MeshDistortMaterial
              color="#8b5cf6"
              speed={q.distortSpeed}
              distort={q.distortAmount}
              radius={1}
              metalness={0.5}
              roughness={0.2}
            />
          )}
        </mesh>
      </Float>
    </group>
  );
};

// ─── Particle Field ───────────────────────────────────────────────────────────
// Using a typed Float32Array for position math — avoids JS object overhead per particle
const Particles = ({ tier }) => {
  const count = Q[tier].particles;
  const mesh  = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Pre-compute particle data in typed arrays for fast iteration
  const { tArr, speedArr, posArr } = useMemo(() => {
    const tArr     = new Float32Array(count);
    const speedArr = new Float32Array(count);
    const posArr   = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      tArr[i]           = Math.random() * 100;
      speedArr[i]       = 0.005 + Math.random() / 300;
      posArr[i * 3]     = (Math.random() - 0.5) * 20;
      posArr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      posArr[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return { tArr, speedArr, posArr };
  }, [count]);

  useFrame(() => {
    for (let i = 0; i < count; i++) {
      tArr[i] += speedArr[i];
      const t = tArr[i];
      dummy.position.set(
        posArr[i * 3]     + Math.cos(t) * 0.5,
        posArr[i * 3 + 1] + Math.sin(t) * 0.5,
        posArr[i * 3 + 2]
      );
      const s = Math.abs(Math.cos(t)) * 0.03 + 0.01;
      dummy.scale.set(s, s, s);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    }
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <dodecahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color="#ffffff" emissive="#6366f1" />
    </instancedMesh>
  );
};

// ─── Hero ─────────────────────────────────────────────────────────────────────
const Hero = () => {
  const [tier, setTier] = useState("medium"); // safe default on SSR

  useEffect(() => {
    setTier(getDeviceTier());
  }, []);

  const q = Q[tier];
  const isMobile = tier !== "high";

  return (
    <section className="relative h-[100svh] w-full flex items-center justify-center bg-[#030303] overflow-hidden">

      {/* 3D Background — same shapes always, quality scales with device tier */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, isMobile ? 6 : 5], fov: q.fov }}
          dpr={q.dpr}
          gl={{
            antialias:       q.antialias,
            powerPreference: "high-performance",
            alpha:           true,
          }}
        >
          <ambientLight intensity={0.2} />
          <spotLight position={[10, 10, 10]} angle={0.15} intensity={tier === "high" ? 1 : 0.8} />

          <FloatingShapes tier={tier} />
          <Particles     tier={tier} />

          {/* IBL Environment — only on high-end, saves a texture lookup per fragment */}
          {q.environment && <Environment preset="city" />}
        </Canvas>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col items-center">
        <div className="text-center max-w-5xl">

          <div className="overflow-hidden mb-4">
            <span className="inline-block text-indigo-400 font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs">
              Est. 2026 — Digital Agency
            </span>
          </div>

          <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-black text-white leading-[1.1] tracking-tighter mb-8">
            Architects of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-indigo-200 to-indigo-500">
              Digital Success.
            </span>
          </h1>

          <p className="text-gray-400 text-sm md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            We craft high-performance digital experiences where{" "}
            <span className="text-white font-medium">art meets code.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-10 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all duration-300 hover:pr-14">
              <span className="relative z-10">Start a Project</span>
              <span className="absolute right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">→</span>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute top-10 right-10 z-20">
        <div className="flex gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-white/20" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;