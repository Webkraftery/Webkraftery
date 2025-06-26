import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const CTA= () => {
    const navigate = useNavigate();
    const sectionRefs = useRef([]);
  return (
    <div><div 
          ref={(el) => (sectionRefs.current[5] = el)}
          className=" z-10 max-w-4xl mx-auto my-20 p-10 bg-[#1e1e2f] rounded-2xl shadow-xl border border-blue-800"
        >
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-bold text-white">
              Ready for a Digital Transformation?
            </h2>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              Stop worrying about technology problems. Focus on your business.
              Let us provide the support you deserve.
            </p>
            <button
              onClick={() => navigate("/contactus")}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-600 text-white font-semibold text-lg hover:scale-105 transition-transform duration-300 shadow-md"
            >
              Contact Us Today
            </button>
          </div>
        </div></div>
  )
}

export default CTA