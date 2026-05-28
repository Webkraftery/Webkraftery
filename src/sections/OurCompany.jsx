import React, { useEffect, useRef, memo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Plugin registered globally in main.jsx

const OurCompany = () => {
  const containerRef = useRef(null);
  const leftColRef = useRef(null);
  const ghostTextRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      // 1. Optimized Ghost Text Parallax
      // Using xPercent is smoother than x for layout engines
      gsap.to(ghostTextRef.current, {
        xPercent: -15, 
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: isMobile ? 0.5 : 1, // Faster scrub for mobile stability
        },
      });

      // 2. Batched Reveal Animation
      // Instead of multiple triggers, we use one trigger for the whole block
      gsap.fromTo(
        ".reveal-mask",
        { clipPath: "inset(100% 0% 0% 0%)", y: 30, opacity: 0 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: leftColRef.current,
            start: "top 85%",
            // Disable heavy scrub for the entrance to save CPU
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative z-20 pt-24 md:pt-48 pb-32 md:pb-48 px-6 md:px-12 bg-[#050505] overflow-hidden contain-paint"
    >
      {/* Background Noise - Reduced opacity for mobile performance */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-0" />

      {/* Ghost Background Text - Added will-change-transform for GPU acceleration */}
      <div 
        ref={ghostTextRef}
        className="absolute top-1/4 left-0 whitespace-nowrap opacity-[0.04] pointer-events-none select-none font-black text-[25vw] tracking-tighter uppercase text-white will-change-transform transform-gpu"
      >
        Digital Architecture • Digital Architecture •
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 relative z-10">
        <div ref={leftColRef} className="lg:col-span-7 flex flex-col justify-center">
          <div className="reveal-mask mb-6">
            <span className="block text-indigo-400 font-mono text-[10px] md:text-xs tracking-[0.5em] uppercase font-bold italic">
              The Studio
            </span>
          </div>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-light leading-[1.1] text-white">
            <div className="reveal-mask italic">Crafting with</div>
            <div className="reveal-mask font-black uppercase text-white md:text-transparent md:bg-clip-text md:bg-gradient-to-r md:from-white md:via-white md:to-white/30">
              Technical Grit.
            </div>
          </h2>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-center space-y-10 lg:pt-12">
          <div className="relative pl-8 border-l border-white/10">
            <p className="text-xl md:text-2xl leading-relaxed text-gray-300 font-light italic">
              Specializing in <span className="text-white font-medium not-italic underline decoration-indigo-500/50 underline-offset-8">high-frequency</span> digital ecosystems.
            </p>
          </div>
          <p className="text-gray-500 text-lg font-light leading-relaxed pl-8">
            Every line of code is optimized for peak performance and absolute scalability.
          </p>
        </div>
      </div>

      {/* Optimized Downward Boundary */}
      <div 
        className="absolute bottom-[-60px] md:bottom-[-100px] left-0 w-full h-32 md:h-52 bg-[#050505] z-30 pointer-events-none" 
        style={{ 
          clipPath: "ellipse(75% 100% at 50% 0%)",
          willChange: "transform"
        }} 
      />
      
      {/* Floating System HUD */}
      <div className="absolute bottom-[-20px] right-10 hidden xl:flex items-center gap-3 bg-white/[0.04] border border-white/10 px-4 py-2 rounded-lg z-40 backdrop-blur-md">
        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse shadow-[0_0_10px_#6366f1]" />
        <span className="text-[9px] font-mono tracking-tighter text-gray-200 uppercase">
          Engine_Status: Optimal
        </span>
      </div>
    </section>
  );
};

export default memo(OurCompany);