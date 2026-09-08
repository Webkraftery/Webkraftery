import React, { useState, useEffect } from "react";
import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { ArrowUp, ArrowUpRight, Globe } from "lucide-react";
import logo from "../assets/logos/logo2.png";

const Footer = () => {
  const year = new Date().getFullYear();
  const [time, setTime] = useState("");

  // Live IST time display for agency prestige
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true };
      setTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[var(--bg-dark)] text-white pt-20 sm:pt-28 md:pt-36 pb-12 sm:pb-16 overflow-hidden border-t border-white/[0.08]">
      {/* Subtle Background Watermark */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none w-full text-center overflow-hidden">
        <span className="font-display text-[18vw] font-black text-white/[0.025] uppercase tracking-tighter whitespace-nowrap block leading-none">
          WebKraftery
        </span>
      </div>

      <div className="premium-container relative z-10">
        
        {/* Main Grid: 4 Strategic Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 sm:gap-14 lg:gap-16 pb-16 sm:pb-20 md:pb-24 border-b border-white/[0.12]">
          
          {/* Col 1: Brand & Studio Status (5 cols on desktop) */}
          <div className="sm:col-span-2 lg:col-span-5 flex flex-col items-start text-left">
            <div className="flex items-center gap-3.5 mb-6 group cursor-pointer" onClick={scrollToTop}>
              <img src={logo} alt="WebKraftery" className="w-10 h-10 sm:w-11 sm:h-11 object-contain group-hover:scale-105 transition-transform duration-300" />
              <span className="font-display font-black text-[22px] sm:text-[24px] tracking-[0.08em] text-white uppercase">
                WebKraftery<span className="text-[var(--accent)]">.</span>
              </span>
            </div>

            <p className="text-[#D1CBC4] text-[14px] sm:text-[15px] leading-[1.75] max-w-[420px] font-normal mb-8">
              Engineering high-performance web applications, immersive 3D environments, and iconic digital brand systems for ambitious global companies.
            </p>
           
          </div>

          {/* Col 2: Navigation Sitemap (2 cols on desktop) */}
          <div className="lg:col-span-2 flex flex-col items-start text-left">
            <h4 className="font-display text-[12px] sm:text-[13px] font-bold tracking-[0.22em] text-[var(--accent)] uppercase mb-5 sm:mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 sm:space-y-3.5 flex flex-col items-start">
              {[
                { label: "Home", action: scrollToTop },
                { label: "Our Capabilities", action: () => scrollTo("services") },
                { label: "Core Expertise", action: () => scrollTo("expertise") },
                { label: "Client Reviews", action: () => scrollTo("testimonials") },
                { label: "Start a Project", action: () => scrollTo("contact") },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={item.action}
                    className="group flex items-center text-[14px] sm:text-[15px] text-[#EAE5DF] hover:text-white transition-colors text-left font-medium"
                  >
                    <span className="relative pb-0.5">
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--accent)] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services / Capabilities (2 cols on desktop) */}
          <div className="lg:col-span-2 flex flex-col items-start text-left">
            <h4 className="font-display text-[12px] sm:text-[13px] font-bold tracking-[0.22em] text-[var(--accent)] uppercase mb-5 sm:mb-6">
              Expertise
            </h4>
            <ul className="space-y-3 sm:space-y-3.5 flex flex-col items-start text-[14px] sm:text-[15px] text-[#D1CBC4] font-medium">
              <li className="hover:text-white transition-colors cursor-default">Digital Platforms</li>
              <li className="hover:text-white transition-colors cursor-default">Immersive 3D</li>
              <li className="hover:text-white transition-colors cursor-default">Motion & WebGL</li>
              <li className="hover:text-white transition-colors cursor-default">Design Systems</li>
              <li className="hover:text-white transition-colors cursor-default">Performance SEO</li>
            </ul>
          </div>

          {/* Col 4: Direct Channels & Socials (3 cols on desktop) */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            <h4 className="font-display text-[12px] sm:text-[13px] font-bold tracking-[0.22em] text-[var(--accent)] uppercase mb-5 sm:mb-6">
              Connect
            </h4>
            
            <a 
              href="mailto:info@webkraftery.com" 
              className="text-[16px] sm:text-[17px] font-display font-semibold text-white hover:text-[var(--accent)] transition-colors mb-2.5 flex items-center gap-1.5 group"
            >
              info@webkraftery.com
              <ArrowUpRight size={16} className="text-white/80 group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a 
              href="tel:+919899794119" 
              className="text-[15px] sm:text-[16px] text-[#D1CBC4] hover:text-white transition-colors mb-6 font-medium"
            >
              +91 989 979 4119
            </a>

            {/* Social Pill Icons */}
            <div className="flex items-center gap-3">
              {[
                { name: "LinkedIn", icon: <FaLinkedinIn size={15} />, href: "https://linkedin.com" },
                { name: "Twitter / X", icon: <FaTwitter size={15} />, href: "https://twitter.com" },
                { name: "Instagram", icon: <FaInstagram size={15} />, href: "https://instagram.com" },
                { name: "GitHub", icon: <FaGithub size={15} />, href: "https://github.com" },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-10 h-10 rounded-full border border-white/20 bg-white/[0.06] flex items-center justify-center text-white hover:text-white hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300 shadow-sm"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Credits & Back to Top Bar */}
        <div className="pt-10 sm:pt-14 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 text-left">
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-[12px] sm:text-[13px] text-[#A8A199]">
            <span>© {year} WebKraftery Studio. All rights reserved.</span>
            <div className="flex items-center gap-4 text-[#D1CBC4]">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;