import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(".hero-line", { y: 120, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.12, duration: 1.2 }, 0.4)
        .fromTo(".hero-sub", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.5")
        .fromTo(".hero-cta", { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.7 }, "-=0.4")
        .fromTo(".hero-ticker", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.3");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const ticker = ["Web Development", "UI/UX Design", "React", "Backend Systems", "SEO", "Maintenance"];

  return (
    <section ref={sectionRef} className="relative min-h-[100svh] flex flex-col justify-center bg-[var(--bg-dark)] overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
      >
        <source src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" type="video/mp4" />
      </video>
      <div className="video-overlay" />

      {/* Content */}
      <div className="relative z-10 w-full py-20 sm:py-24 md:py-32">
        <div className="premium-container">
          
          {/* Main Headline Block */}
          <div className="w-full max-w-[1200px] mx-auto md:px-4">
            
            {/* Tagline */}
            <div className="overflow-hidden mb-6 sm:mb-8 md:mb-12">
              <p className="hero-line font-display text-[11px] sm:text-[12px] md:text-[14px] font-bold tracking-[0.25em] text-[var(--accent)] uppercase text-center md:text-left">
                Digital Agency — Est. 2026
              </p>
            </div>

            {/* Staggered Headline */}
            <h1 className="mb-14 sm:mb-10 md:mb-18">
              <div className="overflow-hidden pb-1 sm:pb-2 md:pb-0">
                <span className="hero-line block font-display text-[clamp(2.2rem,9vw,8rem)] font-black text-white leading-[1.05] sm:leading-none md:leading-[0.9] tracking-[-0.03em] text-left">
                  We build
                </span>
              </div>
              <div className="overflow-hidden pb-1 sm:pb-2 md:pb-0">
                <span className="hero-line block font-display text-[clamp(2.2rem,9vw,8rem)] font-black leading-[1.05] sm:leading-none md:leading-[0.9] tracking-[-0.03em] text-left sm:text-center text-white/50">
                  websites that
                </span>
              </div>
              <div className="overflow-hidden pb-1 sm:pb-2 md:pb-0">
                <span className="hero-line block font-display text-[clamp(2.2rem,9vw,8rem)] font-black leading-[1.05] sm:leading-none md:leading-[0.9] tracking-[-0.03em] text-left sm:text-right text-[var(--accent)]">
                  actually work.
                </span>
              </div>
            </h1>

            {/* Subtitle & CTAs */}
            <div className="flex flex-col md:flex-row md:justify-end items-start md:items-start gap-8 sm:gap-8 md:gap-16">
              <p className="hero-sub text-[var(--text-light-muted)] text-[14px] sm:text-[16px] md:text-[20px] max-w-[480px] leading-relaxed text-left sm:text-center md:text-left">
                High-performance web experiences for brands that refuse to blend in. Engineering meets artistry.
              </p>

              <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-5 shrink-0 w-full sm:w-auto">
                <button
                  onClick={() => scrollTo("contact")}
                  className="hero-cta hero-btn hero-btn-primary w-full sm:w-auto"
                >
                  Start a Project
                </button>
                <button
                  onClick={() => scrollTo("expertise")}
                  className="hero-cta hero-btn hero-btn-secondary w-full sm:w-auto"
                >
                  See Our Expertise
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Ticker */}
      <div className="hero-ticker absolute bottom-0 left-0 w-full border-t border-white/[0.08] bg-[var(--bg-dark)]/60 backdrop-blur-md py-3 sm:py-5 overflow-hidden">
        <div className="ticker-track">
          {[...ticker, ...ticker, ...ticker, ...ticker].map((t, i) => (
            <span key={i} className="inline-flex items-center gap-4 sm:gap-6 mx-4 sm:mx-6 text-[11px] sm:text-[13px] font-display font-semibold tracking-[0.15em] text-white/40 uppercase whitespace-nowrap">
              {t}
              <svg width="6" height="6" viewBox="0 0 6 6"><circle cx="3" cy="3" r="3" fill="var(--accent)" opacity="0.6"/></svg>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;