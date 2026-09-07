import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";
import logo from "../assets/logos/1.png";

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[var(--bg-dark)] pt-32 pb-8 overflow-hidden border-t border-white/5">
      {/* Massive Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none w-full text-center overflow-hidden mix-blend-overlay">
        <span className="font-display text-[22vw] font-black text-white/[0.03] uppercase tracking-tighter whitespace-nowrap">
          WebKraftery
        </span>
      </div>

      <div className="premium-container relative z-10">
        
        {/* Massive Email CTA */}
        <div className="mb-24 md:mb-32">
          <p className="font-display text-[12px] font-bold tracking-[0.3em] text-[var(--accent)] uppercase mb-6">
            Got a project in mind?
          </p>
          <a 
            href="mailto:info@webkraftery.com" 
            className="group flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 w-full"
          >
            <h2 className="font-display text-[clamp(1.5rem,7vw,7rem)] font-black text-white tracking-[-0.03em] transition-colors duration-500 group-hover:text-white/70 break-all md:break-normal">
              info@webkraftery.com
            </h2>
            <div className="w-14 h-14 md:w-24 md:h-24 rounded-full border border-white/20 flex items-center justify-center bg-white/5 group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)] transition-all duration-500 shrink-0">
              <ArrowUpRight className="text-white group-hover:rotate-45 transition-transform duration-500 w-6 h-6 md:w-10 md:h-10" />
            </div>
          </a>
        </div>

        {/* Info Grid */}
        <div className="flex flex-col md:flex-row justify-between gap-12 lg:gap-16 mb-20 md:pr-12">
          
          {/* Column 1: Navigation */}
          <div className="w-full md:w-auto">
            <h4 className="font-display text-[11px] font-bold tracking-[0.2em] text-white/40 uppercase mb-8">
              Navigation
            </h4>
            <ul className="space-y-4">
              {["services", "expertise", "testimonials", "contact"].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="group flex items-center text-[15px] text-white hover:text-[var(--accent)] transition-colors capitalize font-medium"
                  >
                    <span className="relative pb-1">
                      {id === "contact" ? "Get in Touch" : id}
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--accent)] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Socials */}
          <div className="w-full md:w-auto">
            <h4 className="font-display text-[11px] font-bold tracking-[0.2em] text-white/40 uppercase mb-8">
              Socials
            </h4>
            <ul className="space-y-4">
              {[
                { name: "LinkedIn", icon: <FaLinkedinIn size={16} />, href: "#" },
                { name: "Twitter / X", icon: <FaTwitter size={16} />, href: "#" },
                { name: "Instagram", icon: <FaInstagram size={16} />, href: "#" },
                { name: "GitHub", icon: <FaGithub size={16} />, href: "#" },
              ].map((s, i) => (
                <li key={i}>
                  <a
                    href={s.href}
                    className="group flex items-center gap-4 text-[15px] text-white hover:text-[var(--accent)] transition-colors font-medium"
                  >
                    <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[var(--accent)]/20 transition-colors duration-500">
                      {s.icon}
                    </span>
                    <span className="relative pb-1">
                      {s.name}
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--accent)] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="WebKraftery" className="h-8 md:h-12 w-auto object-contain" />
          </div>

          <div className="flex flex-wrap gap-6 md:gap-8 text-[13px] text-white/40 font-medium w-full md:w-auto">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>

          <p className="text-white/40 text-[13px] font-medium w-full md:w-auto">
            © {year} WebKraftery. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;