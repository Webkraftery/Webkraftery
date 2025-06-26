import React from 'react';
import TestimonialsSection from './TestimonialsSection';

const Clients = () => {
  return (
    <div className="bg-purple-100 relative z-13 py-20 px-4 shadow-lg rounded-lg border-white">
      <div className="max-w-[90vw] paraFont-900 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-purple-800">Our Valued Clients</h2>
        <p className="text-center text-lg text-white mb-8">
          We are proud to have partnered with a diverse range of businesses, helping them achieve their digital goals.
        </p>
        <div className="grid p-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
          {/* Client Logo 1 */}
          <div className="p-4 border rounded-lg shadow-md flex items-center justify-center h-32 w-full max-w-[180px] transform hover:scale-105 transition-transform duration-300">
            <img
              src="https://placehold.co/120x60/E0BBE4/6C3483?text=Client+A"
              alt="Client Logo A"
              className="max-h-full max-w-full object-contain"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/120x60/E0BBE4/6C3483?text=Logo" }}
            />
          </div>

          {/* Client Logo 2 */}
          <div className="p-4 bg-white rounded-lg shadow-md flex items-center justify-center h-32 w-full max-w-[180px] transform hover:scale-105 transition-transform duration-300">
            <img
              src="https://placehold.co/120x60/957DAD/6C3483?text=Client+B"
              alt="Client Logo B"
              className="max-h-full max-w-full object-contain"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/120x60/957DAD/6C3483?text=Logo" }}
            />
          </div>

          {/* Client Logo 3 */}
          <div className="p-4 bg-white rounded-lg shadow-md flex items-center justify-center h-32 w-full max-w-[180px] transform hover:scale-105 transition-transform duration-300">
            <img
              src="https://placehold.co/120x60/D291BC/6C3483?text=Client+C"
              alt="Client Logo C"
              className="max-h-full max-w-full object-contain"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/120x60/D291BC/6C3483?text=Logo" }}
            />
          </div>

          {/* Client Logo 4 */}
          <div className="p-4 bg-white rounded-lg shadow-md flex items-center justify-center h-32 w-full max-w-[180px] transform hover:scale-105 transition-transform duration-300">
            <img
              src="https://placehold.co/120x60/FFC72C/6C3483?text=Client+D"
              alt="Client Logo D"
              className="max-h-full max-w-full object-contain"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/120x60/FFC72C/6C3483?text=Logo" }}
            />
          </div>

          {/* Client Logo 5 */}
          <div className="p-4 bg-white rounded-lg shadow-md flex items-center justify-center h-32 w-full max-w-[180px] transform hover:scale-105 transition-transform duration-300">
            <img
              src="https://placehold.co/120x60/A0DAA9/6C3483?text=Client+E"
              alt="Client Logo E"
              className="max-h-full max-w-full object-contain"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/120x60/A0DAA9/6C3483?text=Logo" }}
            />
          </div>

          {/* Client Logo 6 */}
          <div className="p-4 bg-white rounded-lg shadow-md flex items-center justify-center h-32 w-full max-w-[180px] transform hover:scale-105 transition-transform duration-300">
            <img
              src="https://placehold.co/120x60/F0F8FF/6C3483?text=Client+F"
              alt="Client Logo F"
              className="max-h-full max-w-full object-contain"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/120x60/F0F8FF/6C3483?text=Logo" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
