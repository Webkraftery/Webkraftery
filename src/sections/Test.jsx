import React from 'react';
import { Shield } from 'lucide-react';
import IconGrid from './IconGrid';
import Badge from './Badge';

const Test = () => {
  return (
    <div className=" flex items-center justify-center px-4">
      <div className="text-center max-w-4xl mx-auto">
        {/* Icon Section */}
        <div className="flex items-center justify-center gap-6 mb-12 hover:scale-120 hover:gap-10 transition-all delay-300">
          <IconGrid />
          <div className="relative">
            <div className="bg-slate-800 rounded-2xl p-8 shadow-2xl border border-slate-700 ">
              <Shield 
                size={48} 
                className="text-blue-400 mx-auto animate-pulse hover:scale-150 transition-all delay-200"
                strokeWidth={1.5}
              />
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-cyan-400 rounded-full"></div>
            </div>
          </div>
          <div className="bg-blue-600 rounded-xl p-4 shadow-lg">
            <div className="text-white text-xl font-bold">⚡</div>
          </div>
        </div>

        {/* Main Title */}
        <div className="mb-8">
          <h1 className="text-6xl flex flex-col md:flex-row overflow-hidden md:text-7xl font-bold mb-4">
            <span className="text-slate-500">WEB</span>
            <span className="text-slate-400 mx-4 hidden md:block ">·</span>
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              KRAFTERY
            </span>
          </h1>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Badge variant="dark" text="SECURE" />
          <Badge variant="primary" text="ADVANCED" />
          <Badge variant="light" text="FUTURE" />
        </div>

        {/* Subtle Animation Lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-24 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent animate-pulse delay-1000"></div>
          <div className="absolute top-1/4 left-1/4 w-32 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-24 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent animate-pulse delay-1000"></div>
        </div>
      </div>
    </div>
  );
};

export default Test;