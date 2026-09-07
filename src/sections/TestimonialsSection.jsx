import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "They delivered a dynamic, well-designed solution that truly elevated my digital presence. His attention to detail and technical skills are exceptional.",
    author: "Shashwat Prajapati",
    role: "Founder, Shazofyne",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote: "They translated our vision into a seamless and intuitive platform. The result exceeded our expectations — truly professional work.",
    author: "Rajeswar Tyagi",
    role: "Trustee, Ladlilaxmi",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote: "The application is incredibly fast and the user experience is flawless. We're genuinely impressed with the quality of work delivered.",
    author: "Shivam Tyagi",
    role: "Senior Educator",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
  },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);
  const quoteRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((p) => (p + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (quoteRef.current) {
      gsap.fromTo(quoteRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" });
    }
  }, [active]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".testimonial-block",
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.2, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%", toggleActions: "play none none reverse" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const t = testimonials[active];
  const prev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((p) => (p + 1) % testimonials.length);

  return (
    <section ref={sectionRef} id="testimonials" className="premium-section bg-[var(--bg-light)]">
      <div className="premium-container">
        
        {/* Editorial Header */}
        <div className="premium-grid mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-10 lg:col-span-8">
            <span className="font-display text-[var(--accent)] text-[12px] md:text-[14px] font-bold tracking-[0.25em] uppercase block mb-6">
              Client Voices
            </span>
            <h2 className="font-display text-[clamp(3rem,6vw,5.5rem)] font-black text-[var(--text-dark)] leading-[0.95] tracking-[-0.03em]">
              Don't just take our word for it<span className="text-[var(--accent)]">.</span>
            </h2>
          </div>
        </div>

        {/* Testimonial Core */}
        <div className="testimonial-block premium-grid">
          <div className="col-span-12 lg:col-span-9 lg:col-start-3">
            <div ref={quoteRef} className="relative">
              
              <Quote size={56} strokeWidth={1} className="text-[var(--accent)] mb-10 opacity-40 hidden md:block absolute -left-20 -top-4" />

              <blockquote className="font-display text-[clamp(1.5rem,3.5vw,3rem)] font-medium text-[var(--text-dark)] leading-[1.3] tracking-tight mb-12">
                "{t.quote}"
              </blockquote>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover shadow-lg"
                  />
                  <div>
                    <p className="font-display font-bold text-[var(--text-dark)] text-[16px] md:text-[18px]">{t.author}</p>
                    <p className="text-[var(--text-muted)] text-[14px] md:text-[15px]">{t.role}</p>
                  </div>
                </div>

                {/* Controls */}
                <div className="hidden md:flex items-center gap-4">
                  <button onClick={prev} className="w-12 h-12 rounded-full border border-[var(--border-light)] flex items-center justify-center text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accent-soft)] transition-all duration-300">
                    <ChevronLeft size={20} />
                  </button>
                  <button onClick={next} className="w-12 h-12 rounded-full border border-[var(--border-light)] flex items-center justify-center text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accent-soft)] transition-all duration-300">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
              
              {/* Mobile Controls */}
              <div className="flex md:hidden items-center justify-between mt-10 border-t border-[var(--border-light)] pt-6">
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={`rounded-full transition-all duration-400 ${
                        i === active ? "w-8 h-2 bg-[var(--accent)]" : "w-2 h-2 bg-[var(--border-light)]"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button onClick={prev} className="w-10 h-10 rounded-full border border-[var(--border-light)] flex items-center justify-center text-[var(--text-muted)]"><ChevronLeft size={16} /></button>
                  <button onClick={next} className="w-10 h-10 rounded-full border border-[var(--border-light)] flex items-center justify-center text-[var(--text-muted)]"><ChevronRight size={16} /></button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
