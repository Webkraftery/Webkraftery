import React, { useState, useEffect, useRef } from "react";
import { MdClose, MdArrowOutward } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import logo from "../assets/logo2.png";

const itSolutions = [
  { name: "Web Dev", path: "/solutions/web-development" },
  { name: "Architecture", path: "/solutions/backend-development" },
  { name: "Interface", path: "/solutions/frontend-development" },
  { name: "Atomic JS", path: "/solutions/react-development" },
  { name: "Experience", path: "/solutions/ui-ux" },
  { name: "Security", path: "/solutions/software-maintenanace" },
  { name: "Ads", path: "/solutions/google-advertising" },
];

const secondaryLinks = [
  { name: "About Us", path: "/company/aboutcompany" },
  { name: "Teams", path: "/company/team" },
  { name: "Works", path: "/portfolio" },
  { name: "Our Vision", path: "/company/vision-mission" }, // New Link 1
  { name: "Faqs", path: "/company/faq" }, // New Link 2
  { name: "Contact", path: "/contactus" }, // New Link 3
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const overlayRef = useRef(null);
  const location = useLocation();

  // Handle Scroll & Route changes
  useEffect(() => {
    let rafId = null;
    const handleScroll = () => {
      // RAF throttle: only calls setState once per animation frame
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
        rafId = null;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    setIsOpen(false);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      gsap.to(overlayRef.current, {
        y: 0,
        duration: 0.8,
        ease: "power4.inOut",
      });
      gsap.fromTo(
        ".nav-item-anim",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.05, delay: 0.4, ease: "expo.out" },
      );
    } else {
      document.body.style.overflow = "auto";
      gsap.to(overlayRef.current, {
        y: "-100%",
        duration: 0.6,
        ease: "power4.inOut",
      });
    }
  }, [isOpen]);

  return (
    <>
      {/* --- HUD NAVBAR --- */}
      <nav
        className={`fixed top-0 w-full z-[100] transition-all duration-500 px-5 md:px-12 py-3 flex justify-between items-center ${
          scrolled
            ? "bg-black/80 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 md:w-12 md:h-12 object-contain"
          />
          <span className="text-[14px] md:text-[18px] font-black tracking-[0.3em] text-white uppercase">
            EBKRAFTERY
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/contactus"
            className="hidden md:flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-white/70 hover:text-purple-400 transition-colors"
          >
            Start_Project <MdArrowOutward />
          </Link>

          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
            className="flex items-center gap-3 group"
          >
            <span className="hidden sm:block text-[10px] tracking-[0.3em] text-white/50 group-hover:text-white transition-colors">
              MENU
            </span>
            <div className="flex flex-col gap-1.5 items-end">
              <div className="w-8 h-[2px] bg-white group-hover:w-10 transition-all" />
              <div className="w-5 h-[2px] bg-purple-500" />
            </div>
          </button>
        </div>
      </nav>

      {/* --- FULLSCREEN OVERLAY (Mobile-First Scrollable) --- */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[110] bg-[#080808] translate-y-[-100%] flex flex-col overflow-y-auto"
      >
        {/* Header inside Menu */}
        <div className="flex justify-between items-center px-6 py-6 md:px-12 border-b border-white/5">
          <button
            onClick={() => setIsOpen(false)}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 text-white active:scale-90 transition-transform"
          >
            <MdClose size={28} />
          </button>
        </div>

        {/* Content Container */}
        <div className="flex flex-col md:flex-row flex-grow">
          {/* Section 1: Services */}
          <div className="w-full md:w-[60%] p-8 md:p-20 flex flex-col justify-center">
            <p className="nav-item-anim text-purple-500 font-mono text-[10px] tracking-[0.4em] uppercase mb-8 md:mb-12">
              Services
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
              {itSolutions.map((item, i) => (
                <Link
                  key={i}
                  to={item.path}
                  className="nav-item-anim group flex items-center justify-between border-b border-white/10 py-3 md:py-4"
                >
                  <span className="text-2xl md:text-5xl font-light text-white/40 group-hover:text-white transition-colors">
                    {item.name}
                  </span>
                  <MdArrowOutward className="text-purple-500 opacity-0 group-hover:opacity-100 transition-all" />
                </Link>
              ))}
            </div>
          </div>

          {/* Section 2: Main Navigation */}
          <div className="w-full md:w-[40%] bg-white/[0.02] p-8 md:p-20 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/5">
            <div className="flex flex-col gap-4 md:gap-6">
              <p className="nav-item-anim text-white/20 font-mono text-[10px] tracking-[0.4em] uppercase mb-2">
                 Navigation
              </p>

              {secondaryLinks.map((link, i) => (
                <Link
                  key={i}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="nav-item-anim text-3xl md:text-5xl lg:text-6xl font-black italic uppercase text-white hover:text-purple-500 transition-all duration-300 tracking-tighter hover:translate-x-2"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Footer Information */}
            <div className="mt-12 md:mt-0 pt-10 border-t border-white/10 flex flex-row justify-between items-end">
              {/* <div>
                <p className="text-[10px] text-white/20 uppercase font-mono mb-1">
                  HQ / India
                </p>
                <p className="text-[11px] text-white/60 uppercase">
                  28.6692° N, 77.4538° E
                </p>
              </div> */}
              <p className="text-[10px] text-white/20 uppercase font-mono">
                © 2026 WEBKRAFTERY
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- Adaptive Status Dot --- */}
      {/* <div className="fixed bottom-6 right-6 z-[100] md:right-10 md:bottom-10 pointer-events-none">
        <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full">
          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_#10b981]" />
          <span className="font-mono text-[8px] tracking-widest text-white/40 uppercase">
            Live
          </span>
        </div>
      </div> */}
    </>
  );
};

export default Navbar;
