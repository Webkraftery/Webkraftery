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
        <div className="premium-container h-[80px] flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="WebKraftery" className="w-12 h-12 md:w-14 md:h-14 object-contain group-hover:scale-105 transition-transform duration-300" />
            <span className="font-display font-bold text-[18px] tracking-[0.1em] text-white uppercase hidden sm:block">
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
              className="ml-4 px-7 py-3 border border-white/20 text-white text-[12px] font-bold tracking-[0.15em] uppercase rounded-full hover:bg-white hover:text-[var(--bg-dark)] transition-all duration-300"
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-12 h-12 flex flex-col items-end justify-center gap-[5px] -mr-2"
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
        {["services", "expertise", "testimonials", "contact"].map((id, i) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="font-display text-[2rem] sm:text-[2.5rem] font-bold text-white hover:text-[var(--accent)] transition-colors capitalize py-3"
            style={{ transitionDelay: mobileOpen ? `${i * 80}ms` : "0ms" }}
          >
            {id === "contact" ? "Get in Touch" : id}
          </button>
        ))}
      </div>
    </>
  );
};

export default Navbar;
