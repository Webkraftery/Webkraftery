import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const ContactCTA = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cta-reveal",
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%", toggleActions: "play none none reverse" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="premium-section bg-[var(--accent)] relative overflow-hidden">
      {/* Large background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none w-full text-center overflow-hidden mix-blend-overlay">
        <span className="font-display text-[18vw] md:text-[22vw] font-black text-white/[0.04] uppercase tracking-tighter whitespace-nowrap">
          Let's Talk
        </span>
      </div>

      <div className="premium-container relative z-10">
        <div className="premium-grid">
          
          {/* Left — Headline spans 7 columns */}
          <div className="col-span-12 lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="cta-reveal font-display text-[clamp(2.8rem,8vw,6.5rem)] font-black text-white leading-[0.9] tracking-[-0.03em] mb-8">
              Ready to start your next project?
            </h2>
            <p className="cta-reveal text-white/80 text-[15px] md:text-[20px] leading-relaxed mb-10 max-w-[480px]">
              We'd love to hear about your idea. Drop us a line and let's create something exceptional together.
            </p>
            <a
              href="mailto:info@webkraftery.com"
              className="cta-reveal flex md:inline-flex justify-center items-center gap-4 px-8 md:px-9 py-4 md:py-5 bg-white text-[var(--bg-dark)] font-display font-bold text-[13px] md:text-[14px] tracking-[0.15em] uppercase rounded-full border border-white hover:bg-[var(--bg-dark)] hover:text-white hover:border-[var(--bg-dark)] transition-all duration-400 group shadow-lg w-full md:w-max"
            >
              Send us a message
              <ArrowUpRight className="group-hover:rotate-45 transition-transform duration-400 w-4 h-4 md:w-5 md:h-5" />
            </a>
          </div>

          {/* Right — Contact info spans 4 columns, pushed right */}
          <div className="col-span-12 lg:col-span-4 lg:col-start-9 flex flex-col items-center lg:items-start justify-center gap-8 mt-16 lg:mt-0 border-t border-white/10 lg:border-t-0 pt-12 lg:pt-0">
            {[
              { icon: Mail, label: "Email", value: "info@webkraftery.com", href: "mailto:info@webkraftery.com" },
              { icon: Phone, label: "Phone", value: "+91 989 979 4119", href: "tel:+919899794119" },
              { icon: MapPin, label: "Location", value: "Ghaziabad, UP, India", href: null },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="cta-reveal flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-6 text-center lg:text-left">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    <Icon strokeWidth={2} className="text-white w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="pt-1 overflow-hidden">
                    <span className="block text-white/50 text-[11px] md:text-[13px] font-display font-bold tracking-[0.2em] uppercase mb-1.5">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a href={item.href} className="text-white font-medium text-[15px] md:text-[20px] hover:underline underline-offset-4 decoration-white/30 hover:decoration-white transition-all break-all md:break-normal">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-white font-medium text-[15px] md:text-[20px]">{item.value}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          
        </div>
      </div>

      {/* Decorative SVG shape linking to footer */}
      <svg className="absolute -bottom-1 left-0 w-full z-10" viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none">
        <path d="M0 80h1440V40C1200 70 240 0 0 40v40z" fill="var(--bg-dark)" />
      </svg>
    </section>
  );
};

export default ContactCTA;
