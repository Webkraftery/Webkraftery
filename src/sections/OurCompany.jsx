import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const OurCompany = () => {
  const containerRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);
  const ctaRef = useRef(null);
  const gradientBgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Continuous gradient animation (independent of scroll)
      gsap.to(gradientBgRef.current, {
        backgroundPosition: "100% 50%",
        duration: 15,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Left column animation with scrub
      gsap.fromTo(
        leftColRef.current.querySelectorAll("h2, p"),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: leftColRef.current,
            start: "top 85%",
            end: "top 50%",
            scrub: 1.5,
            markers: false, // Set to true to debug positions
          },
        }
      );

      // Right column animation with scrub
      gsap.fromTo(
        rightColRef.current.querySelectorAll("p, strong"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: rightColRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: 1.2,
          },
        }
      );

      // CTA animation with scrub
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 85%",
            end: "top 60%",
            scrub: 1,
          },
        }
      );

      // Continuous subtle glow on CTA
      gsap.to(ctaRef.current.querySelector("span:last-child"), {
        opacity: 0.3,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative z-10 py-4  md:px-8 flex flex-col items-center overflow-hidden"
      style={{
        background:'#8b5cf6',
        boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.25)",
      }}
    >
      {/* Animated gradient overlay */}
      <div
        ref={gradientBgRef}
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"

      />

      <div className="max-w-7xl mx-auto grid grid-cols-1  md:grid-cols-2 gap-12 p-6 relative z-10">
        {/* Left Column */}
        <div
          ref={leftColRef}
          className="flex flex-col justify-center space-y-4"
        >
          <p className="text-sm text-purple-200 font-medium tracking-wider uppercase mb-2">
            Our Company
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
            "WebKraftery – Where Ideas Turn Into Impactful Software"
          </h2>
        </div>

        {/* Right Column */}
        <div ref={rightColRef} className="flex items-center text-justify">
          <p className="text-lg md:text-xl leading-relaxed text-purple-100/90">
            WebKraftery  is a privately owned{" "}
            <strong className="text-white font-semibold">
              software development company
            </strong>{" "}
            specializing in custom web solutions and{" "}
            <strong className="text-white font-semibold">
              digital transformation services
            </strong>
            . Our team of experienced professionals delivers cutting-edge{" "}
            <strong className="text-white font-semibold">
              web applications
            </strong>{" "}
            and{" "}
            <strong className="text-white font-semibold">
              SEO-optimized platforms
            </strong>{" "}
            tailored to meet your unique business goals.
          </p>
        </div>
      </div>

      {/* Glowing CTA Button */}
      <div
        ref={ctaRef}
        className="relative z-10 mt-16 px-8 py-4 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group"
      >
        <span className="text-xl text-white font-semibold tracking-wide relative z-10">
          Discover Our Solutions →
        </span>
        <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
      </div>
    </div>
  );
};

export default OurCompany;

