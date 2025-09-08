
import React, { useState, useEffect } from 'react';
import { FaLinkedinIn, FaSun, FaMoon, FaGithub } from 'react-icons/fa';

function Navbar({ isDarkMode, toggleTheme }) {
  const [activeLink, setActiveLink] = useState('Home');

  const navLinks = [
    { name: 'Home', href: 'hero' },
    { name: 'Projects', href: 'projects' },
    { name: 'Experience', href: 'experience' },
    { name: 'Contact', href: 'contact' },
  ];

  const navbarClasses = isDarkMode 
    ? "fixed top-6 left-1/2 -translate-x-1/2 w-11/12 max-w-screen-xl z-50 bg-gray-900/40 backdrop-blur-md text-white rounded-2xl shadow-lg"
    : "fixed top-6 left-1/2 -translate-x-1/2 w-11/12 max-w-screen-xl z-50 bg-white rounded-2xl shadow-md";

  const brandColor = isDarkMode ? "text-white" : "text-gray-800";
  const activeLinkColor = isDarkMode ? "text-teal-300" : "text-indigo-600";
  const hoverLinkColor = isDarkMode ? "hover:text-teal-300" : "text-black hover:text-indigo-600";
  const socialIconColor = isDarkMode ? "text-gray-400" : "text-gray-500";
  const hoverSocialIconColor = isDarkMode ? "hover:text-teal-300" : "hover:text-indigo-600";
  const themeBtnBg = isDarkMode ? "bg-gray-800" : "bg-gray-100";
  const themeBtnColor = isDarkMode ? "text-gray-400" : "text-gray-500";
  const hoverThemeBtnColor = isDarkMode ? "hover:text-teal-300" : "hover:text-indigo-600";

  return (
    <nav className={navbarClasses}>
      <div className="flex justify-between items-center p-4">
        {/* Brand/Logo */}
        <div className="flex items-center space-x-2">
          <div className={`w-8 h-8 rounded-full ${isDarkMode ? 'bg-teal-500' : 'bg-indigo-500'} flex items-center justify-center text-white font-bold`}>H</div>
          <span className={`text-xl font-bold ${brandColor}`}>Himanshu Gupta</span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-base font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={`#${link.href.toLowerCase()}`}
                onClick={() => setActiveLink(link.name)}
                className={`transition-colors duration-300 transform hover:scale-105 ${
                  activeLink === link.name.toLowerCase() ? activeLinkColor : hoverLinkColor
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons & Theme Toggle Button */}
        <div className="hidden md:flex space-x-4 items-center">
          {/* <a href="#" className={`text-lg ${socialIconColor} ${hoverSocialIconColor}`}><FaFacebookF /></a> */}
          {/* <a href="#" className={`text-lg ${socialIconColor} ${hoverSocialIconColor}`}>< /></a> */}
          <a href="https://www.linkedin.com/in/himanshu561hi/" className={`text-lg ${socialIconColor} ${hoverSocialIconColor}`}><FaLinkedinIn /></a>
          <a href="https://github.com/himanshu561hi" className={`text-lg ${socialIconColor} ${hoverSocialIconColor}`}><FaGithub /></a>


          <button onClick={toggleTheme} className={`p-2 rounded-full ${themeBtnBg} ${themeBtnColor} ${hoverThemeBtnColor} transition-colors duration-300`}>
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden flex items-center">
          <button>Menu</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;