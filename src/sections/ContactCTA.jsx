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
        <span className="font-display text-[25vw] sm:text-[22vw] md:text-[22vw] font-black text-white/[0.04] uppercase tracking-tighter whitespace-nowrap">
          Let's Talk
        </span>
      </div>

      <div className="premium-container relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 sm:gap-14 lg:gap-8">

          {/* Left — Headline */}
          <div className="flex-1 lg:max-w-[60%] flex flex-col items-start text-left gap-2">
            <h2 className="cta-reveal font-display text-[clamp(2.2rem,7vw,6.5rem)] font-black text-white leading-[1] sm:leading-[0.95] tracking-[-0.03em] mb-5 sm:mb-6 md:mb-8">
              Ready to start your next project?
            </h2>
            <p className="cta-reveal text-white/80 text-[14px] sm:text-[15px] md:text-[20px] leading-relaxed mb-8 sm:mb-10 max-w-[480px]">
              We'd love to hear about your idea. Drop us a line and let's create something exceptional together.
            </p>
            <a
              href="mailto:info@webkraftery.com"
              className="cta-reveal contact-cta-btn group w-full sm:w-auto"
            >
              Send us a message
              <ArrowUpRight className="group-hover:rotate-45 transition-transform duration-300 w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            </a>
          </div>

          {/* Right — Contact info */}
          <div className="flex flex-col items-start justify-center gap-6 sm:gap-8 border-t border-white/10 lg:border-t-0 pt-8 sm:pt-10 lg:pt-0 lg:pl-8">
            {[
              { icon: Mail, label: "Email", value: "info@webkraftery.com", href: "mailto:info@webkraftery.com" },
              { icon: Phone, label: "Phone", value: "+91 989 979 4119", href: "tel:+919899794119" },
              { icon: MapPin, label: "Location", value: "Ghaziabad, UP, India", href: null },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="cta-reveal flex items-start gap-4 sm:gap-5 text-left">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    <Icon strokeWidth={2} className="text-white w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="pt-0.5 sm:pt-1 overflow-hidden min-w-0">
                    <span className="block text-white/50 text-[10px] sm:text-[11px] md:text-[13px] font-display font-bold tracking-[0.2em] uppercase mb-1 sm:mb-1.5">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a href={item.href} className="text-white font-medium text-[14px] sm:text-[15px] md:text-[20px] hover:underline underline-offset-4 decoration-white/30 hover:decoration-white transition-all break-words">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-white font-medium text-[14px] sm:text-[15px] md:text-[20px]">{item.value}</span>
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
