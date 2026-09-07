import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "../sections/Hero";
import BrandMarquee from "../sections/BrandMarquee";
import Services from "../sections/Services";
import InteractiveExpertise from "../sections/InteractiveExpertise";
import TestimonialsSection from "../sections/TestimonialsSection";
import ContactCTA from "../sections/ContactCTA";

const HomePage = () => {
  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    // Sync Lenis with GSAP ScrollTrigger to prevent scroll hanging/jitter
    lenis.on('scroll', ScrollTrigger.update);

    const update = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative">
      <Hero />
      <Services />
      <InteractiveExpertise />
      <BrandMarquee />
      <TestimonialsSection />
      <ContactCTA />
    </div>
  );
};

export default HomePage;