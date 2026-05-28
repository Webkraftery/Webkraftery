import React, { useEffect, useRef } from "react";
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import OurValues from "../sections/OurValues";
import OurCompany from "../sections/OurCompany";
import TestimonialsSection from "../sections/TestimonialsSection";
import CTA from "../Components/Common/CTA";
import ProjectVault from "../sections/ProjectShowcase";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

// gsap.registerPlugin is called once globally in main.jsx

const HomePage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // 1. Initialize Lenis Smooth Scroll
    // This makes animations feel 10x faster and smoother by decoupling scroll from the browser's main thread.
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      // Disable touch smoothing — native iOS/Android momentum is faster than JS simulation
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 2. Optimized GSAP Logic
    let mm = gsap.matchMedia();

    mm.add({
      isDesktop: "(min-width: 1024px)",
      isMobile: "(max-width: 1023px)"
    }, (context) => {
      let { isDesktop } = context.conditions;
      const sections = gsap.utils.toArray(".reveal-section");

      sections.forEach((section) => {
        const content = section.querySelector(".content-inner");
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "top top",
            scrub: isDesktop ? 1 : 0.5, // Faster scrub on mobile
            // Use toggleActions for non-scrub triggers to save memory
          }
        });

        // DESKTOP: Full visual suite
        // MOBILE: Removes blur/clipPath to prevent "hanging"
        tl.fromTo(section, 
          { 
            scale: 0.85,
            opacity: 0,
            ...(isDesktop && { 
              filter: "blur(12px) brightness(0.5)",
              clipPath: "circle(20% at 50% 50%)" 
            })
          },
          {
            scale: 1,
            opacity: 1,
            ...(isDesktop && { 
              filter: "blur(0px) brightness(1)",
              clipPath: "circle(100% at 50% 50%)"
            }),
            ease: "power2.out"
          }
        );

        // Parallax depth (kept for both, but simplified for performance)
        if (content) {
          gsap.fromTo(content, 
            { z: isDesktop ? -400 : -100, opacity: 0 },
            { 
              z: 0, 
              opacity: 1,
              scrollTrigger: {
                trigger: section,
                start: "top 90%",
                end: "top 20%",
                scrub: true
              }
            }
          );
        }
      });
    });

    return () => {
      lenis.destroy();
      mm.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative bg-[#020202] text-white selection:bg-indigo-500">
      <div className="relative">
        
        <section className="relative z-10 h-screen overflow-hidden">
          <Hero />
        </section>

        {/* Using standard margin-top for mobile to avoid layout calculation lag */}
        <section className="reveal-section relative z-20 mt-[-10vh] lg:mt-[-20vh]">
          <div className="content-inner perspective-[1000px]">
            <OurCompany />
          </div>
        </section>

        <section className="reveal-section relative z-30 mt-[-10vh] lg:mt-[-20vh]">
          <div className="content-inner perspective-[1000px]">
            <Services />
          </div>
        </section>

        <section className="relative z-40">
          <ProjectVault />
        </section>

        <section className="reveal-section relative z-30 mt-[-10vh] lg:mt-[-20vh]">
          <div className="content-inner perspective-[1000px]">
            <OurValues />
          </div>
        </section>

        <section className="reveal-section relative z-20">
          <div className="content-inner perspective-[1000px]">
            <TestimonialsSection />
          </div>
        </section>

        <div className="relative z-50 bg-[#020202] border-t border-white/5 shadow-[0_-50px_100px_rgba(0,0,0,0.9)]">
          <CTA />
        </div>
      </div>

      {/* Atmospheric noise is hidden on mobile to save massive amounts of battery/GPU */}
      <div className="hidden lg:block fixed inset-0 pointer-events-none opacity-[0.02] z-[9999] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <style>{`
        .reveal-section {
          /* GPU layer is promoted by GSAP automatically during animation — no permanent will-change needed */
          transform: translateZ(0);
          background: #020202;
          backface-visibility: hidden;
        }
        .content-inner {
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
};

export default HomePage;