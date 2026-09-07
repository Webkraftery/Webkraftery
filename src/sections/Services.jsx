import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PenTool, Code2, Database, TrendingUp, ArrowUpRight } from "lucide-react";

import uiuxImg from "../assets/services/service_uiux.png";
import frontendImg from "../assets/services/service_frontend.png";
import backendImg from "../assets/services/service_backend.png";
import growthImg from "../assets/services/service_growth.png";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "design",
    num: "01",
    icon: PenTool,
    title: "Digital Design & UI/UX",
    desc: "We craft interfaces that feel inevitable. By merging deep psychological user research with obsessive pixel-perfect precision, we build digital products that captivate instantly and convert effortlessly.",
    tags: ["User Research", "Wireframing", "Design Systems"],
    image: uiuxImg
  },
  {
    id: "frontend",
    num: "02",
    icon: Code2,
    title: "Frontend Engineering",
    desc: "The bridge between logic and beauty. We architect blazing-fast, accessible single-page applications using React. We obsess over 60fps animations, flawless responsive behavior, and zero-layout-shift performance.",
    tags: ["React.js", "Next.js", "WebGL", "GSAP"],
    image: frontendImg
  },
  {
    id: "backend",
    num: "03",
    icon: Database,
    title: "Backend Architecture",
    desc: "Bulletproof infrastructure you never have to worry about. We engineer secure Node.js microservices, design optimized databases, and build APIs capable of scaling from day one to millions of requests.",
    tags: ["Node.js", "PostgreSQL", "Cloud Native"],
    image: backendImg
  },
  {
    id: "growth",
    num: "04",
    icon: TrendingUp,
    title: "Growth & Optimization",
    desc: "A beautiful product means nothing if nobody sees it. We integrate deep technical SEO, continuous performance auditing, and analytics tracking to ensure your platform dominates the algorithmic curve.",
    tags: ["Technical SEO", "Performance Audits", "Analytics"],
    image: growthImg
  },
];

const Services = () => {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const panelsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = panelsRef.current;
      
      let mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        // Horizontal Scroll Animation
        gsap.to(panels, {
          xPercent: -100 * (panels.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            scrub: 1,
            snap: 1 / (panels.length - 1),
            // Scroll length determines how long it stays pinned
            end: () => "+=" + scrollContainerRef.current.offsetWidth,
          }
        });

        // Inner Image Parallax (Image moves slightly opposite to scroll direction)
        panels.forEach((panel, i) => {
          const img = panel.querySelector('.parallax-img');
          if (img) {
            gsap.fromTo(img, 
              { x: "-20%" },
              {
                x: "20%",
                ease: "none",
                scrollTrigger: {
                  trigger: sectionRef.current,
                  scrub: true,
                  start: () => "top top-=" + (i * window.innerWidth),
                  end: () => "top top-=" + ((i + 1) * window.innerWidth),
                }
              }
            );
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="relative bg-[#F7F5F2] text-[var(--text-dark)] overflow-hidden h-auto lg:h-screen flex flex-col justify-center">
      
      {/* Header (Static on mobile, Absolute on desktop) */}
      <div className="relative lg:absolute top-0 lg:top-16 left-0 lg:left-24 z-50 pointer-events-none px-6 md:px-12 lg:px-0 pt-16 lg:pt-0 mb-12 lg:mb-0">
        <span className="font-display text-[var(--accent)] text-[12px] md:text-[14px] font-bold tracking-[0.25em] uppercase block">
          Our Capabilities
        </span>
      </div>

      {/* Horizontal Scroll Track (Desktop) / Vertical Stack (Mobile) */}
      <div ref={scrollContainerRef} className="flex flex-col lg:flex-row h-auto lg:h-[85vh] w-full lg:w-[400vw] gap-32 lg:gap-0 pt-0 lg:pt-0 pb-32 lg:pb-0">
        {services.map((svc, i) => (
          <div 
            key={svc.id}
            ref={el => panelsRef.current[i] = el}
            className="w-full lg:w-[100vw] h-auto lg:h-full flex items-center justify-center relative px-6 md:px-12 lg:px-24"
          >
            
            {/* Constrained container width to prevent stretching and clipping */}
            <div className="w-full max-w-[1440px] mx-auto h-auto lg:h-full flex flex-col-reverse lg:flex-row items-center justify-center gap-10 lg:gap-12">
              
              {/* Left Content Half */}
              <div className="w-full lg:w-[45%] flex flex-col justify-center h-full z-10 lg:pr-12">
                
                <div className="flex items-center gap-6 mb-8 lg:mb-10">
                  <span className="font-display text-[4rem] lg:text-[7rem] font-black text-[#E5E1DC] leading-none tracking-tighter -ml-2 select-none">
                    {svc.num}
                  </span>
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-[#E5E1DC] flex items-center justify-center bg-white shadow-sm">
                    <svc.icon size={24} className="text-[var(--accent)]" />
                  </div>
                </div>

                <h3 className="font-display text-[clamp(2.5rem,8vw,4.5rem)] font-black leading-[1.05] lg:leading-[0.95] tracking-tight mb-8 text-[var(--text-dark)]">
                  {svc.title}
                </h3>

                <p className="text-[var(--text-body)] text-[15px] md:text-[16px] lg:text-[18px] leading-[1.8] max-w-[480px] font-light mb-12">
                  {svc.desc}
                </p>

                <div className="flex flex-wrap gap-3 mb-12">
                  {svc.tags.map(tag => (
                    <span key={tag} className="px-5 py-2.5 bg-white rounded-full text-[11px] lg:text-[12px] font-display font-semibold tracking-wider text-[var(--text-muted)] uppercase border border-[#E5E1DC] shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="flex items-center gap-4 text-[var(--text-dark)] font-display font-bold text-[12px] tracking-[0.2em] uppercase group w-fit">
                  Explore Module
                  <div className="w-12 h-12 rounded-full border border-[var(--text-dark)] flex items-center justify-center group-hover:bg-[var(--text-dark)] group-hover:text-white transition-all duration-300">
                    <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </button>
              </div>

              {/* Right Image Half - Restored to the "Museum-Core" framed aesthetic */}
              <div className="w-full lg:w-[50%] h-[35vh] sm:h-[45vh] lg:h-[75vh] flex items-center justify-center lg:justify-start">
                <div className="relative w-full max-w-[500px] lg:max-w-[600px] h-full rounded-[2rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.06)] border border-[#E5E1DC] bg-white group">
                  
                  {/* Parallax Image */}
                  <div className="absolute inset-0 w-[140%] h-[140%] -top-[20%] -left-[20%]">
                    <img 
                      src={svc.image} 
                      alt={svc.title}
                      className="parallax-img w-full h-full object-cover object-center group-hover:scale-105 opacity-90 group-hover:opacity-100 transition-all duration-1000 ease-out"
                    />
                  </div>
                  
                  {/* Soft Light-mode Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                  
                  {/* Overlay details - Restored from previous version */}
                  <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end pointer-events-none">
                    <span className="font-display font-bold text-white tracking-widest text-[10px] uppercase shadow-sm drop-shadow-md">
                      SYS.{svc.num} / Active
                    </span>
                    <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-white/40" />
                      <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
