import React, { useEffect, useRef, memo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Plugin registered globally in main.jsx

const ValueCard = memo(({ v, i }) => (
  <div 
    className={`${v.span} ${v.height} v-card group relative p-8 md:p-12 rounded-[1rem] flex flex-col justify-between overflow-hidden shadow-[15px_15px_0px_0px_#000] transition-all duration-500 hover:shadow-[5px_5px_0px_0px_#000] hover:translate-x-[10px] hover:translate-y-[10px] will-change-transform`}
    style={{ backgroundColor: v.color, color: v.text }}
  >
    <div className="flex justify-between items-start font-mono text-[10px] md:text-sm font-bold">
      <span className="bg-white text-black px-3 py-1 rounded-full shadow-sm">ID://{v.tag}</span>
      <span className="uppercase tracking-widest opacity-50 hidden sm:block">Confidential_Draft</span>
    </div>

    <div className="relative z-10">
      <h3 className="text-4xl md:text-7xl font-black leading-none uppercase mb-4 md:mb-6 whitespace-pre-line tracking-tighter">
        {v.title}
      </h3>
      <p className="text-base md:text-xl font-bold max-w-xs leading-tight opacity-90">
        {v.desc}
      </p>
    </div>

    <div className="absolute bottom-10 right-10 flex flex-col items-end gap-2 pointer-events-none">
       <div className="w-16 md:w-24 h-[2px] bg-current opacity-30" />
       <div className="w-10 md:w-16 h-[2px] bg-current opacity-30 group-hover:w-24 transition-all duration-700" />
    </div>
  </div>
));

// Static data — defined at module level so it's never re-created on re-renders
const values = [
  { title: "Radical\nInnovation", desc: "We invent protocols, we don't just follow patterns.", tag: "01", span: "lg:col-span-8", color: "#FF5F1F", text: "#000", height: "h-[400px] md:h-[500px]" },
  { title: "Atomic\nQuality", desc: "Precision down to the millisecond.", tag: "02", span: "lg:col-span-4", color: "#0047AB", text: "#FFF", height: "h-[400px] md:h-[500px]" },
  { title: "Fluid\nLogic", desc: "Systems that breathe and adapt in real-time.", tag: "03", span: "lg:col-span-4", color: "#00FA9A", text: "#000", height: "h-[350px] md:h-[400px]" },
  { title: "Legacy\nScale", desc: "Building the infrastructure for the next century.", tag: "04", span: "lg:col-span-8", color: "#1A1A1A", text: "#FFF", height: "h-[350px] md:h-[400px]" }
];

const OurValues = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".v-card");
      cards.forEach((card, i) => {
        gsap.from(card, {
          y: 100,
          opacity: 0,
          rotateY: i % 2 === 0 ? 8 : -8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "top 60%",
            scrub: 1,
            toggleActions: "play none none reverse",
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-32 md:py-48 bg-[#F0F0F0] overflow-visible contain-paint">
      
      {/* --- PREMIUM TOP BOUNDARY: DARK HUD STRIP --- */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform -translate-y-[100%] z-20">
        {/* Layer 1: The Curvy Cut-out */}
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[80px] md:h-[120px] fill-[#F0F0F0]">
          <path d="M0,0V120H1200V0C1200,0,864.5,112,600,112S0,0,0,0Z"></path>
        </svg>

        {/* Layer 2: The Dark HUD Trim (This adds the 'premium' feel) */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-black/10 flex items-center justify-center">
            <div className="flex gap-10 bg-black px-6 py-2 rounded-t-xl border-x border-t border-white/10 shadow-2xl">
                <span className="text-[8px] font-mono text-white/40 tracking-[0.5em] uppercase italic font-bold">Protocol_Shield_v.1</span>
                <div className="flex gap-2">
                    <div className="w-1 h-1 bg-indigo-500 rounded-full animate-pulse" />
                    <div className="w-1 h-1 bg-indigo-500/40 rounded-full" />
                </div>
            </div>
        </div>
      </div>

      {/* Layer 3: Soft Edge Shadow (Depth Effect) */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/[0.08] to-transparent pointer-events-none z-10" />

      {/* KINETIC BACKGROUND MARQUEE */}
      <div className="absolute top-24 left-0 w-full whitespace-nowrap opacity-[0.05] pointer-events-none select-none">
        <div className="animate-marquee-slow inline-block text-[15vh] md:text-[25vh] font-black uppercase tracking-tighter">
          ARCHITECTING THE FUTURE • BENDING THE LOGIC •
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 relative z-10">
        <header className="mb-20 md:mb-32 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <h2 className="text-[clamp(3rem,10vw,10rem)] font-black leading-[0.8] tracking-tighter text-black uppercase">
              THE <br /> <span className="text-transparent" style={{ WebkitTextStroke: "1.5px black" }}>VALUES.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 pb-4 hidden lg:block border-l-4 border-black pl-6">
            <p className="text-sm font-bold uppercase tracking-widest text-black">
              [ 2026_CORE_STACK ] <br />
              <span className="font-normal normal-case text-gray-500 italic font-mono uppercase text-[10px]">Integrity_Check: Passed</span>
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 perspective-[2000px]">
          {values.map((v, i) => (
            <ValueCard key={i} v={v} i={i} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-slow {
          animation: marquee 40s linear infinite;
        }
        .contain-paint { contain: paint; }
      `}</style>
    </section>
  );
};

export default OurValues;