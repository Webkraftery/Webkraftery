import React from 'react';
import { Mail, Phone, User, Pen } from 'lucide-react';

const CTACard = ({ 
  name, 
  role, 
  email, 
  phone, 
  bio,
  logoText = "WEB KRAFTERY" 
}) => {
  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <div className="bg-white border-2 border-gray-800 rounded-xl p-6 w-72 shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Header with Logo */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 border-2 border-gray-800 rounded-full flex items-center justify-center">
          <User className="w-5 h-5 text-gray-800" />
        </div>
        <div>
          <h3 className="font-bold text-gray-800 text-sm tracking-wide">
            {logoText}
          </h3>
        </div>
      </div>

      {/* Contact Information */}
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-gray-900">
          {name}
        </h2>
        
        <p className="text-gray-600 font-medium">
          {role}
        </p>
        
        <div className="pt-2 space-y-2">
          <button
            onClick={handleEmailClick}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200 group"
          >
            <Mail className="w-4 h-4" />
            <span className="group-hover:underline">{email}</span>
          </button>
          
          <button
            onClick={handlePhoneClick}
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors duration-200 group"
          >
            <Phone className="w-4 h-4" />
            <span className="group-hover:underline">{phone}</span>
          </button>
          <div className='flex flex-row justify-center text-justify gap-1'>
            <div>
                <Pen className=" w-4 h-4 items-center text-black"/>
            </div>
            <p>{bio}</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CTACard;
