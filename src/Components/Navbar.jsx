import React, { useState, useCallback } from 'react';
import {
  FaHome, FaBuilding, FaCogs, FaBars, FaMobile, FaAndroid, FaApple,
  FaShieldAlt, FaWrench, FaUsers, FaQuestionCircle, FaLightbulb, FaPhoneAlt
} from 'react-icons/fa';
import { GrTasks } from "react-icons/gr";
import { MdClose, MdInfo, MdSupervisorAccount } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Logo from '../Components/Logo';

const itSolutions = [
  { name: 'Custom Website Development', path: '/solutions/web-development', icon: <FaWrench /> },
  { name: 'Backend Development', path: '/solutions/backend-development', icon: <FaCogs /> },
  { name: 'Frontend Development', path: '/solutions/frontend-development', icon: <FaMobile /> },
  { name: 'React Development', path: '/solutions/react-development', icon: <FaAndroid /> },
  { name: 'UI/UX Design', path: '/solutions/ui-ux', icon: <FaApple /> },
  { name: 'Software Maintenance & Support', path: '/solutions/software-maintenanace', icon: <FaShieldAlt /> },
  { name: 'Advertising', path: '/solutions/google-advertising', icon: <FaLightbulb /> },
];

const company = [
  { name: 'About', path: '/company/aboutcompany', icon: <MdInfo /> },
  { name: 'Mission, Vision and Values', path: '/company/vision-mission', icon: <FaLightbulb /> },
  { name: 'Leadership Team', path: '/company/team', icon: <MdSupervisorAccount /> },
  { name: 'Why Choose Us', path: '/company/why-choose-us', icon: <FaUsers /> },
  { name: 'FAQ', path: '/company/faq', icon: <FaQuestionCircle /> },
];

const navItems = [
  { name: 'Home', path: '/', icon: <FaHome /> },
  { name: 'IT Solutions', icon: <FaCogs />, children: itSolutions },
  { name: 'Company', icon: <FaBuilding />, children: company },
  { name: 'Portfolio', path: '/portfolio', icon: <GrTasks /> },
  { name: 'Contact Us', path: '/contactus', icon: <FaPhoneAlt /> },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const toggleMobileDropdown = useCallback((name) => {
    setMobileDropdown(prev => (prev === name ? null : name));
  }, []);

  const handleMouseEnter = useCallback((name) => {
    setActiveDropdown(name);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsOpen(false);
    setMobileDropdown(null);
  }, []);

  return (
    <nav className="noto-serif bg-gray-800 text-white shadow-lg shadow-black/30 fixed top-0 w-full z-50 border-b border-white/10 mb-50">

      <div className="max-w-7xl mx-auto px-2 py-1 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold overflow-hidden hover:scale-120 transition-all delay-100">
          <Link to="/" onClick={closeMobileMenu}>
            <div className="p-1 shadow-md">
              <Logo/>
            </div>
          </Link>
        </div>

        {/* Hamburger */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <MdClose /> : <FaBars />}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:items-center gap-6 text-sm md:text-xl font-sans font-semibold tracking-wide">
          {navItems.map((item, idx) => (
            <li
              key={idx}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              {item.path ? (
                <Link
                  to={item.path}
                  className="flex items-center gap-1 cursor-pointer hover:text-purple-400 select-none py-2 px-1 relative group hover:scale-110 transition-all delay-110"
                >
                  {item.icon}
                  <span>{item.name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-400 transition-all duration-300 group-hover:w-full  hover:scale-110  delay-110"></span>
                </Link>
              ) : (
                <div className="flex items-center gap-1 cursor-pointer hover:text-purple-400 select-none py-2 px-1 relative group  hover:scale-110 transition-all delay-110">
                  {item.icon}
                  <span>{item.name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-400 transition-all duration-300 group-hover:w-full  hover:scale-110  delay-110"></span>
                </div>
              )}

              {item.children && (
                <ul
                  className={`absolute text-lg z-50 bg-white text-black mt-[7px] p-2 rounded shadow-lg w-78 origin-top transition-all duration-200 ease-out transform font-sans font-medium tracking-wide
                    ${activeDropdown === item.name ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}
                    group-hover:scale-y-100 group-hover:opacity-100 group-hover:pointer-events-auto
                  `}
                >
                  {item.children.map((subItem, subIdx) => (
                    <li
                      key={subIdx}
                      className="px-4 py-2 hover:bg-purple-100 hover:text-purple-700 transition-colors flex items-center gap-2"
                    >
                      <Link to={subItem.path} className="flex items-center gap-2 w-full h-full">
                        {subItem.icon}
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 text-lg h-full w-64 bg-purple-900 text-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 overflow-y-auto
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex justify-end p-4">
          <MdClose className="text-3xl cursor-pointer" onClick={closeMobileMenu} />
        </div>
        <ul className="flex flex-col mt-4 px-4 font-sans font-semibold tracking-wide">
          {navItems.map((item, idx) => (
            <li key={idx} className="mb-2">
              {item.path ? (
                <Link
                  to={item.path}
                  onClick={closeMobileMenu}
                  className="flex items-center gap-2 cursor-pointer px-2 py-3 hover:bg-purple-700 rounded select-none"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ) : (
                <div
                  onClick={() => toggleMobileDropdown(item.name)}
                  className="flex items-center gap-2 cursor-pointer px-2 py-3 hover:bg-purple-700 rounded select-none"
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {item.children && (
                    <svg
                      className={`w-4 h-4 ml-auto transition-transform ${
                        mobileDropdown === item.name ? 'rotate-90' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
              )}

              {item.children && mobileDropdown === item.name && (
                <ul className="pl-6 mt-1 space-y-1">
                  {item.children.map((subItem, subIdx) => (
                    <li key={subIdx}>
                      <Link
                        to={subItem.path}
                        onClick={closeMobileMenu}
                        className="flex items-center gap-2 px-2 py-2 rounded hover:bg-purple-700 transition-colors"
                      >
                        {subItem.icon}
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
      <div className='bg-purple-200 max-w-full h-0.5'></div>
    </nav>
  );
};

export default Navbar;
