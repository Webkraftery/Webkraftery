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
  const mobileCardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = panelsRef.current;
      
      let mm = gsap.matchMedia();

      // Desktop: Horizontal scroll
      mm.add("(min-width: 1024px)", () => {
        gsap.to(panels, {
          xPercent: -100 * (panels.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            scrub: 1,
            snap: 1 / (panels.length - 1),
            end: () => "+=" + scrollContainerRef.current.offsetWidth,
          }
        });

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

      // Mobile: Staggered card reveal
      mm.add("(max-width: 1023px)", () => {
        mobileCardsRef.current.forEach((card) => {
          if (card) {
            gsap.fromTo(card,
              { y: 60, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: card,
                  start: "top 85%",
                  toggleActions: "play none none reverse",
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
    <section ref={sectionRef} id="services" className="relative bg-[#F7F5F2] text-[var(--text-dark)] overflow-hidden h-auto lg:h-screen lg:flex lg:flex-col lg:justify-center">
      
      {/* ══════════════════════════════════════════════════════════════
          MOBILE / TABLET LAYOUT — Generously spaced premium cards
          ══════════════════════════════════════════════════════════════ */}
      <div className="lg:hidden services-mobile-wrapper">
        {/* Header */}
        <div className="services-mobile-container mb-12 sm:mb-16">
          <span className="font-display text-[var(--accent)] text-[12px] sm:text-[13px] font-bold tracking-[0.25em] uppercase block mb-3.5 sm:mb-4">
            Our Capabilities
          </span>
          <h2 className="font-display text-[clamp(2.2rem,8vw,3.6rem)] font-black text-[var(--text-dark)] leading-[1.08] tracking-[-0.03em]">
            What we do<span className="text-[var(--accent)]">.</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="services-mobile-container flex flex-col gap-10 sm:gap-12">
          {services.map((svc, i) => (
            <div 
              key={svc.id}
              ref={el => mobileCardsRef.current[i] = el}
              className="group relative services-mobile-card"
            >
              {/* Card Image Header */}
              <div className="relative h-[210px] sm:h-[250px] overflow-hidden">
                <img 
                  src={svc.image} 
                  alt={svc.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                
                {/* Number badge */}
                <div className="absolute top-5 left-5 sm:top-6 sm:left-6">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/20">
                    <svc.icon size={15} className="text-white" />
                    <span className="font-display text-[12px] font-bold tracking-[0.15em] text-white uppercase">
                      {svc.num}
                    </span>
                  </div>
                </div>

                {/* Status indicator */}
                <div className="absolute bottom-4 right-5 sm:bottom-5 sm:right-6 flex items-center gap-2 px-3 py-1 rounded-full bg-black/45 backdrop-blur-md border border-white/10">
                  <span className="font-display font-semibold text-white/75 tracking-widest text-[9px] uppercase">
                    Active
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>
              </div>

              {/* Card Content */}
              <div className="services-mobile-card-body">
                <h3 className="font-display text-[1.4rem] sm:text-[1.7rem] font-black leading-[1.2] tracking-tight mb-3.5 text-[var(--text-dark)]">
                  {svc.title}
                </h3>

                <p className="text-[var(--text-body)] text-[14px] sm:text-[15px] leading-[1.75] font-light mb-6">
                  {svc.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-7">
                  {svc.tags.map(tag => (
                    <span key={tag} className="px-3.5 py-1.5 bg-[#F5F2ED] rounded-full text-[10px] sm:text-[11px] font-display font-semibold tracking-wider text-[var(--text-muted)] uppercase whitespace-nowrap border border-[#E3DED8]">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA row */}
                <div className="pt-5 border-t border-[#E8E4DF] flex items-center justify-between">
                  <span className="font-display text-[11px] sm:text-[12px] font-bold tracking-[0.18em] text-[var(--text-dark)] uppercase">
                    Explore Module
                  </span>
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[var(--text-dark)]/25 flex items-center justify-center shrink-0 group-hover:bg-[var(--text-dark)] group-hover:text-white group-hover:border-[var(--text-dark)] transition-all duration-300">
                    <ArrowUpRight size={17} className="sm:w-[18px] sm:h-[18px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          DESKTOP LAYOUT — Horizontal scroll (unchanged)
          ══════════════════════════════════════════════════════════════ */}
      <div className="hidden lg:flex lg:flex-col lg:justify-center lg:h-screen">
        {/* Header */}
        <div className="absolute top-16 left-24 z-50 pointer-events-none">
          <span className="font-display text-[var(--accent)] text-[14px] font-bold tracking-[0.25em] uppercase block">
            Our Capabilities
          </span>
        </div>

        {/* Horizontal Scroll Track */}
        <div ref={scrollContainerRef} className="flex flex-row h-[85vh] w-[400vw]">
          {services.map((svc, i) => (
            <div 
              key={svc.id}
              ref={el => panelsRef.current[i] = el}
              className="w-[100vw] h-full flex items-center justify-center relative px-24"
            >
              <div className="w-full max-w-[1440px] mx-auto h-full flex flex-row items-center justify-center gap-12">
                
                {/* Left Content Half */}
                <div className="w-[45%] flex flex-col justify-center h-full z-10 pr-12">
                  
                  <div className="flex items-center gap-6 mb-10">
                    <span className="font-display text-[7rem] font-black text-[#E5E1DC] leading-none tracking-tighter -ml-2 select-none">
                      {svc.num}
                    </span>
                    <div className="w-14 h-14 rounded-full border border-[#E5E1DC] flex items-center justify-center bg-white shadow-sm">
                      <svc.icon size={24} className="text-[var(--accent)]" />
                    </div>
                  </div>

                  <h3 className="font-display text-[clamp(2.5rem,4vw,4.5rem)] font-black leading-[0.95] tracking-tight mb-8 text-[var(--text-dark)]">
                    {svc.title}
                  </h3>

                  <p className="text-[var(--text-body)] text-[18px] leading-[1.8] max-w-[480px] font-light mb-12">
                    {svc.desc}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-12">
                    {svc.tags.map(tag => (
                      <span key={tag} className="px-5 py-2.5 bg-white rounded-full text-[12px] font-display font-semibold tracking-wider text-[var(--text-muted)] uppercase border border-[#E5E1DC] shadow-sm">
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

                {/* Right Image Half */}
                <div className="w-[50%] h-[75vh] flex items-center justify-start">
                  <div className="relative w-full max-w-[600px] h-full rounded-[2rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.06)] border border-[#E5E1DC] bg-white group">
                    
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
                    
                    {/* Overlay details */}
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
      </div>

    </section>
  );
};

export default Services;
