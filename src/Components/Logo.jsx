import React from 'react';
import { Shield } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-3 ">
      {/* Shield Icon Container */}
      <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-3 shadow-lg hover:shadow-amber-700/100">
        <Shield 
          size={35} 
          className="text-white" 
          fill="currentColor"
        />
        {/* Small blue dot indicator */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-400 rounded-full border-2 border-white"></div>
      </div>
      
      {/* Text Logo */}
      <div className="flex flex-col">
        <div className="text-3xl font-bold tracking-tight">
          <span className="text-blue-600">WEB</span>
        </div>
        <div className="text-md font-bold text-blue-600 tracking-wider uppercase -mt-1">
          KRAFTERY
        </div>
      </div>
    </div>
  );
};

export default Logo;