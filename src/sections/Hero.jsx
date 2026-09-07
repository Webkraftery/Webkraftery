import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const sectionRef = useRef(null);

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
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
      >
        <source src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" type="video/mp4" />
      </video>
      <div className="video-overlay" />

      {/* Content */}
      <div className="relative z-10 w-full pt-32 pb-32">
        <div className="premium-container premium-grid">
          
          {/* Main Headline Block - Centered */}
          <div className="col-span-12 md:col-span-10 md:col-start-2">
            
            {/* Tagline */}
            <div className="overflow-hidden mb-8 md:mb-12">
              <p className="hero-line font-display text-[12px] md:text-[14px] font-bold tracking-[0.25em] text-[var(--accent)] uppercase text-center md:text-left">
                Digital Agency — Est. 2026
              </p>
            </div>

            {/* Staggered Headline */}
            <h1 className="mb-10 md:mb-16">
              <div className="overflow-hidden">
                <span className="hero-line block font-display text-[clamp(2.8rem,10vw,8rem)] font-black text-white leading-[0.95] md:leading-[0.9] tracking-[-0.03em] text-left">
                  We build
                </span>
              </div>
              <div className="overflow-hidden">
                <span className="hero-line block font-display text-[clamp(2.8rem,10vw,8rem)] font-black leading-[0.95] md:leading-[0.9] tracking-[-0.03em] text-center text-white/50">
                  websites that
                </span>
              </div>
              <div className="overflow-hidden">
                <span className="hero-line block font-display text-[clamp(2.8rem,10vw,8rem)] font-black leading-[0.95] md:leading-[0.9] tracking-[-0.03em] text-right text-[var(--accent)]">
                  actually work.
                </span>
              </div>
            </h1>

            {/* Subtitle & CTAs */}
            <div className="flex flex-col md:flex-row md:justify-end items-center md:items-start gap-8 md:gap-16">
              <p className="hero-sub text-[var(--text-light-muted)] text-[16px] md:text-[20px] max-w-[480px] leading-relaxed text-center md:text-left">
                High-performance web experiences for brands that refuse to blend in. Engineering meets artistry.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto">
                <button
                  onClick={() => scrollTo("contact")}
                  className="hero-cta w-full sm:w-auto px-8 py-4 bg-[var(--accent)] text-white font-display font-bold text-[13px] tracking-wider uppercase rounded-full hover:bg-[var(--accent-hover)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(255,77,46,0.3)] text-center"
                >
                  Start a Project
                </button>
                <button
                  onClick={() => scrollTo("expertise")}
                  className="hero-cta w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-display font-medium text-[13px] tracking-wider uppercase rounded-full hover:bg-white hover:text-[var(--bg-dark)] transition-all duration-300 text-center"
                >
                  See Our Expertise
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Ticker */}
      <div className="hero-ticker absolute bottom-0 left-0 w-full border-t border-white/[0.08] bg-[var(--bg-dark)]/60 backdrop-blur-md py-5 overflow-hidden">
        <div className="ticker-track">
          {[...ticker, ...ticker, ...ticker, ...ticker].map((t, i) => (
            <span key={i} className="inline-flex items-center gap-6 mx-6 text-[13px] font-display font-semibold tracking-[0.15em] text-white/40 uppercase whitespace-nowrap">
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