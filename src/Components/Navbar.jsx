import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logos/logo2.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const scrollTo = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
          scrolled
            ? "bg-[var(--bg-dark)]/95 backdrop-blur-sm border-b border-[var(--border-dark)]"
            : "bg-transparent"
        }`}
      >
        <div className="premium-container h-[64px] sm:h-[72px] md:h-[80px] flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
            <img src={logo} alt="WebKraftery" className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain group-hover:scale-105 transition-transform duration-300" />
            <span className="font-display font-bold text-[15px] sm:text-[16px] md:text-[18px] tracking-[0.1em] text-white uppercase hidden sm:block">
              WebKraftery
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-9">
            {["services", "expertise", "testimonials"].map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-[13px] font-medium text-[var(--text-light-muted)] hover:text-white transition-colors capitalize"
              >
                {id}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="ml-4 nav-btn"
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-11 h-11 flex flex-col items-end justify-center gap-[5px] -mr-1"
            aria-label="Menu"
          >
            <span className={`block h-[2px] bg-white transition-all duration-300 origin-right ${mobileOpen ? "w-6 rotate-[-40deg]" : "w-7"}`} />
            <span className={`block h-[2px] bg-[var(--accent)] transition-all duration-300 ${mobileOpen ? "opacity-0 w-0" : "w-5"}`} />
            <span className={`block h-[2px] bg-white transition-all duration-300 origin-right ${mobileOpen ? "w-6 rotate-[40deg]" : "w-7"}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[99] bg-[var(--bg-dark)] flex flex-col justify-center items-center transition-all duration-500 md:hidden ${mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <div className="flex flex-col items-center gap-2 sm:gap-3">
          {["services", "expertise", "testimonials", "contact"].map((id, i) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="font-display text-[1.75rem] sm:text-[2rem] md:text-[2.5rem] font-bold text-white hover:text-[var(--accent)] transition-colors capitalize py-2 sm:py-3"
              style={{ transitionDelay: mobileOpen ? `${i * 80}ms` : "0ms" }}
            >
              {id === "contact" ? "Get in Touch" : id}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
