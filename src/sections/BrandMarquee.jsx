import React from "react";

const brands = [
  "SHAZOFYNE",
  "LADLILAXMI",
  "WIPPO",
  "TASTE YHA HAI",
  "VOICEHIRE",
  "MYSTIQ",
];

const BrandMarquee = () => {
  return (
    <section className="bg-[var(--bg-dark)] py-8 sm:py-10 md:py-16 border-y border-white/5 overflow-hidden">
      <div className="premium-container mb-6 sm:mb-8 md:mb-12 text-center">
        <p className="font-display text-[10px] sm:text-[11px] md:text-[13px] font-bold tracking-[0.15em] sm:tracking-[0.2em] text-[var(--text-light-muted)] uppercase">
          Trusted by forward-thinking brands globally
        </p>
      </div>

      <div className="relative w-full flex overflow-hidden">
        {/* Gradient fades for edges */}
        <div className="absolute top-0 bottom-0 left-0 w-10 sm:w-16 md:w-32 bg-gradient-to-r from-[var(--bg-dark)] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-10 sm:w-16 md:w-32 bg-gradient-to-l from-[var(--bg-dark)] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-[ticker-scroll_30s_linear_infinite] w-max">
          {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
            <div key={i} className="flex items-center justify-center w-[140px] sm:w-[180px] md:w-[280px] shrink-0">
              <span className="font-display font-black text-lg sm:text-xl md:text-3xl text-white/20 uppercase tracking-[0.1em] sm:tracking-widest hover:text-white transition-colors duration-500 cursor-default select-none">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandMarquee;
