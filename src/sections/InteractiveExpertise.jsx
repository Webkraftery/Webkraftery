import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

const expertiseAreas = [
  {
    title: "Digital Platforms",
    subtitle: "Enterprise-grade web applications",
    video: "https://videos.pexels.com/video-files/3129977/3129977-uhd_2560_1440_30fps.mp4",
  },
  {
    title: "Immersive 3D",
    subtitle: "WebGL & Spatial computing",
    video: "https://videos.pexels.com/video-files/3129595/3129595-uhd_2560_1440_30fps.mp4",
  },
  {
    title: "Motion & Interaction",
    subtitle: "Fluid animations & micro-interactions",
    video: "https://videos.pexels.com/video-files/2759477/2759477-uhd_3840_2160_30fps.mp4",
  },
  {
    title: "Brand Ecosystems",
    subtitle: "Cohesive digital identity systems",
    video: "https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4",
  },
];

const InteractiveExpertise = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const sectionRef = useRef(null);
  const videoRefs = useRef([]);
  const itemRefs = useRef([]);

  // Setup Intersection Observer for mobile active states
  useEffect(() => {
    // Only run on mobile/tablet (hover handles desktop)
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    
    if (mediaQuery.matches) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveIdx(index);
          }
        });
      }, {
        root: null,
        threshold: 0.6,
        rootMargin: "-20% 0px -30% 0px"
      });

      itemRefs.current.forEach(item => {
        if (item) observer.observe(item);
      });

      return () => observer.disconnect();
    }
  }, []);

  // Optimize: Only play the active video, pause the rest to save GPU/CPU
  useEffect(() => {
    videoRefs.current.forEach((vid, i) => {
      if (vid) {
        if (i === activeIdx) {
          vid.play().catch(() => {});
        } else {
          vid.pause();
        }
      }
    });
  }, [activeIdx]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".expertise-item",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="expertise" className="premium-section relative min-h-[100svh] bg-[var(--bg-dark)] flex items-center overflow-hidden">
      {/* Background Videos */}
      {expertiseAreas.map((area, i) => (
        <video
          key={i}
          ref={(el) => (videoRefs.current[i] = el)}
          autoPlay={i === 0}
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
            activeIdx === i ? "opacity-50" : "opacity-0"
          }`}
          style={{ willChange: "opacity" }}
        >
          <source src={area.video} type="video/mp4" />
        </video>
      ))}

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-dark)] via-[var(--bg-dark)]/80 to-[var(--bg-dark)]/40" />
      <div className="absolute inset-0 bg-[var(--bg-dark)]/30" />

      <div className="relative z-10 w-full premium-container">
        
        {/* Grid Header */}
        <div className="premium-grid mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-8 lg:col-span-6">
            <span className="font-display text-[var(--accent)] text-[12px] md:text-[14px] font-bold tracking-[0.25em] uppercase block mb-6">
              Our Expertise
            </span>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] font-black text-white leading-[0.95] tracking-[-0.03em]">
              Pushing boundaries<span className="text-[var(--accent)]">.</span>
            </h2>
          </div>
        </div>

        {/* List */}
        <div className="flex flex-col gap-0 border-t border-white/10">
          {expertiseAreas.map((area, i) => (
            <div
              key={i}
              ref={(el) => (itemRefs.current[i] = el)}
              data-index={i}
              className="expertise-item group relative flex items-center justify-between py-8 md:py-16 border-b border-white/10 cursor-pointer overflow-hidden"
              onMouseEnter={() => setActiveIdx(i)}
            >
              {/* Animated Background Highlight */}
              <div className={`absolute inset-0 bg-white/[0.03] origin-bottom transition-transform duration-700 ease-out ${activeIdx === i ? 'scale-y-100' : 'scale-y-0 lg:group-hover:scale-y-100'}`} />
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-12 pointer-events-none">
                <span className="text-[var(--accent)] font-display text-sm md:text-base font-bold tracking-[0.2em] w-12 hidden md:block">
                  0{i + 1}
                </span>
                <h3 className={`font-display text-[clamp(1.8rem,5vw,5rem)] font-black uppercase tracking-[-0.02em] transition-all duration-700 ${
                  activeIdx === i ? "text-white translate-x-2 md:translate-x-6" : "text-white/40"
                }`}>
                  {area.title}
                </h3>
              </div>

              <div className="relative z-10 flex items-center gap-4 md:gap-8 pointer-events-none">
                <p className={`hidden lg:block font-display text-[16px] font-light tracking-wide transition-all duration-700 ${
                  activeIdx === i ? "text-white opacity-100 translate-x-0" : "text-white/0 opacity-0 -translate-x-6"
                }`}>
                  {area.subtitle}
                </p>
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full border flex items-center justify-center transition-all duration-700 shrink-0 ${
                  activeIdx === i ? "border-[var(--accent)] bg-[var(--accent)] text-white" : "border-white/20 text-white/40 lg:group-hover:border-white/50 lg:group-hover:text-white"
                }`}>
                  <ArrowRight size={24} className={activeIdx === i ? "-rotate-45 transition-transform duration-700 w-5 h-5 md:w-7 md:h-7" : "transition-transform duration-700 w-5 h-5 md:w-7 md:h-7"} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveExpertise;
