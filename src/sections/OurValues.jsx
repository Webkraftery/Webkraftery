import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const OurValues = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);
  const blobRefs = useRef([]);

  // Initialize animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Master timeline for perfect sequencing
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          end: "top 30%",
          scrub: 1.5,
          markers: false, // Set to true for debugging
          toggleActions: "play none none reverse"
        }
      });

      // Heading animation with character splitting
      tl.fromTo(headingRef.current, 
        { 
          y: 50, 
          opacity: 0,
          filter: "blur(5px)"
        },
        { 
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power4.out"
        },
        0
      );

      // Card animations with perfect stagger
      cardRefs.current.forEach((card, i) => {
        tl.fromTo(card,
          {
            y: 80 + (i * 10),
            opacity: 0,
            scale: 0.92,
            rotationX: 15,
            transformOrigin: "center bottom"
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotationX: 0,
            duration: 0.8,
            ease: "back.out(1.4)"
          },
          0.1 * i // Beautiful staggered timing
        );
      });

      // Background blobs animation
      blobRefs.current.forEach((blob, i) => {
        gsap.fromTo(blob,
          {
            scale: 0,
            opacity: 0,
            x: gsap.utils.random(-200, 200),
            y: gsap.utils.random(-100, 100)
          },
          {
            scale: 1,
            opacity: 0.2,
            duration: 2,
            ease: "elastic.out(1, 0.5)",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 90%",
              scrub: 1.5
            }
          }
        );
      });

      // Subtle background color shift
      gsap.fromTo(containerRef.current,
        { backgroundColor: "rgba(243, 232, 255, 0)" },
        {
          backgroundColor: "rgba(243, 232, 255, 0.8)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            scrub: 1
          }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const values = [
    {
      title: "Innovation",
      description: "We constantly explore new technologies and creative approaches to deliver cutting-edge solutions.",
      icon: "💡",
      color: "from-violet-500/10 to-fuchsia-500/10"
    },
    {
      title: "Client-Centricity", 
      description: "Your success is our priority. We listen, understand, and tailor our services to meet your goals.",
      icon: "❤️",
      color: "from-rose-500/10 to-pink-500/10"
    },
    {
      title: "Quality Excellence",
      description: "Committed to delivering high-quality, robust web solutions that stand the test of time.",
      icon: "✨",
      color: "from-amber-500/10 to-yellow-500/10"
    },
    {
      title: "Transparency",
      description: "Open communication and clear processes at the heart of our operations.",
      icon: "🔍",
      color: "from-sky-500/10 to-cyan-500/10"
    },
    {
      title: "Continuous Growth",
      description: "We foster a culture of learning to better serve our clients and team.",
      icon: "📈",
      color: "from-emerald-500/10 to-teal-500/10"
    }
  ];

  return (
    <section 
      ref={containerRef}
      className="relative py-32 px-4 overflow-hidden isolate"
    >
      {/* Floating blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            ref={el => blobRefs.current[i] = el}
            className="absolute rounded-full bg-gray-500"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(60px)',
              opacity: 0
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 
          ref={headingRef}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-violet-600 opacity-0"
        >
          Our Core Values
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              ref={el => cardRefs.current[index] = el}
              className={`bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/30 hover:border-white/50 relative overflow-hidden group opacity-0`}
            >
              {/* Animated gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl`}></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="text-5xl mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-black transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300 flex-grow">
                  {value.description}
                </p>
                <div className="mt-6 h-1 w-0 group-hover:w-full bg-violet-500 transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurValues;