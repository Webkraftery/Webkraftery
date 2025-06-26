import React from 'react';

const Badge = ({ variant, text }) => {
  const baseClasses = "px-6 py-2 rounded-full font-semibold text-sm tracking-wider transition-all duration-300 hover:scale-105";
  
  const variantClasses = {
    dark: "bg-slate-800 text-white hover:bg-slate-700",
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg",
    light: "bg-slate-200 text-slate-700 hover:bg-slate-300"
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]}`}>
      {text}
    </span>
  );
};

export default Badge;
