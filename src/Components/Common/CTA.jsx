import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Plugin registered globally in main.jsx

const CTA = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Snappy Content Reveal (Non-scrubbed for performance)
      gsap.fromTo(contentRef.current, 
        { y: 100, opacity: 0, scale: 0.9 },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%", // Triggers once to avoid "stuck" feeling
            toggleActions: "play none none reverse"
          }
        }
      );

      // 2. Performance-friendly Parallax
      gsap.to(".cta-bg-text", {
        x: -200,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5, // Smooth but not heavy
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full py-40 bg-[#030303] overflow-hidden"
    >
      {/* --- UNIQUE BOUNDARY: THE STEP-UP --- */}
      {/* This creates a sharp "quirky" architectural cut instead of a heavy curve */}
      <div className="absolute top-0 left-0 w-full h-32 bg-white pointer-events-none" 
           style={{ clipPath: "polygon(0 0, 100% 0, 100% 20%, 50% 100%, 0 20%)" }}>
      </div>

      {/* --- KINETIC BACKGROUND --- */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <div className="absolute top-1/2 left-0 -translate-y-1/2 whitespace-nowrap opacity-[0.03] pointer-events-none select-none font-black text-[22vw] leading-none uppercase tracking-tighter italic">
        <span className="cta-bg-text inline-block">INITIATE_ASCENSION • START_NOW • </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div ref={contentRef} className="flex flex-col items-center text-center">
          
          {/* THE RADAR HUD */}
          <div className="relative mb-16">
            <div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border border-indigo-500/30 animate-ping" />
              <div className="absolute w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_15px_#6366f1]" />
            </div>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <span className="font-mono text-[9px] tracking-[0.5em] text-indigo-400 uppercase font-bold">Signal_Detected</span>
            </div>
          </div>

          {/* SUPER PREMIUM TYPOGRAPHY */}
          <h2 className="text-[clamp(3.5rem,12vw,10rem)] font-black text-white tracking-tighter leading-[0.8] uppercase mb-12">
            LET’S <br />
            <span className="text-transparent italic" style={{ WebkitTextStroke: "1.5px white" }}>
              TRANSCEND.
            </span>
          </h2>

          <p className="text-gray-500 text-lg md:text-2xl font-light max-w-2xl mb-16 leading-relaxed italic">
            Your vision deserves <span className="text-white">mathematical certainty</span>. 
            Connect with our engineering lead today.
          </p>

          {/* THE "COMMAND" BUTTON */}
          <button
            onClick={() => navigate("/contactus")}
            className="group relative px-14 py-6 bg-white rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
          >
            <span className="relative z-10 text-black font-black font-mono tracking-[0.3em] text-xs uppercase">
              Establish Link // 01
            </span>
            
            {/* Quirky Fill Animation */}
            <div className="absolute inset-0 bg-indigo-600 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)]" />
            <span className="absolute inset-0 flex items-center justify-center text-white font-black font-mono tracking-[0.3em] text-xs uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
              Establish Link // 01
            </span>
          </button>

          {/* METADATA FOOTER */}
          {/* <div className="mt-32 w-full flex flex-col md:flex-row items-center justify-between gap-8 border-t border-white/5 pt-12">
             <div className="flex gap-6">
                <span className="text-[10px] font-mono text-white/20 tracking-widest uppercase italic">Lat: 28.6139° N</span>
                <span className="text-[10px] font-mono text-white/20 tracking-widest uppercase italic">Long: 77.2090° E</span>
             </div>
             
             <div className="flex gap-2">
                {[1,2,3,4].map(i => <div key={i} className="w-1 h-1 bg-white/10 rounded-full" />)}
             </div>

             <div className="text-[10px] font-mono text-white/20 tracking-[0.4em] uppercase">
               ©2026_WebKraftery_Systems
             </div>
          </div> */}

        </div>
      </div>
    </section>
  );
}

export default CTA;