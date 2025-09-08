
import React, { useState, useEffect } from 'react';
import { FaLinkedinIn, FaSun, FaMoon, FaGithub, FaBars, FaTimes } from 'react-icons/fa';

function Navbar({ isDarkMode, toggleTheme }) {
  const [activeLink, setActiveLink] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    // { name: 'Home', href: 'hero' },
    // { name: 'About', href: 'about' },
    { name: 'Projects', href: 'projects' },
    // { name: 'Skills', href: 'skills' },
    { name: 'Experience', href: 'experience' },
    { name: 'Qualification', href: 'qualification' },
    { name: 'Contact', href: 'contact' },
  ];

  const navbarClasses = isDarkMode
    ? "fixed top-6 left-1/2 -translate-x-1/2 w-11/12 max-w-screen-xl z-50 bg-gray-900/40 backdrop-blur-md text-white rounded-2xl shadow-lg"
    : "fixed top-6 left-1/2 -translate-x-1/2 w-11/12 max-w-screen-xl z-50 bg-white/80 backdrop-blur-md text-gray-800 rounded-2xl shadow-md";

  const brandColor = isDarkMode ? "text-white" : "text-gray-800";
  const activeLinkColor = isDarkMode ? "text-teal-300" : "text-indigo-600";
  const hoverLinkColor = isDarkMode ? "hover:text-teal-300" : "hover:text-indigo-600";
  const socialIconColor = isDarkMode ? "text-gray-400" : "text-gray-500";
  const hoverSocialIconColor = isDarkMode ? "hover:text-teal-300" : "hover:text-indigo-600";
  const themeBtnBg = isDarkMode ? "bg-gray-800/80 backdrop-blur-md" : "bg-gray-100/80 backdrop-blur-md";
  const themeBtnColor = isDarkMode ? "text-gray-400" : "text-gray-500";
  const hoverThemeBtnColor = isDarkMode ? "hover:text-teal-300" : "hover:text-indigo-600";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={navbarClasses}>
      <div className="flex justify-between items-center p-4">
        {/* Brand/Logo */}
        <div className="flex items-center space-x-2">
          <div className={`w-8 h-8 rounded-full ${isDarkMode ? 'bg-teal-500' : 'bg-indigo-500'} flex items-center justify-center text-white font-bold`}>H</div>
          <span className={`text-xl font-bold ${brandColor}`}>Himanshu Gupta</span>
        </div>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex space-x-8 text-base font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={`#${link.href}`}
                onClick={() => {
                  setActiveLink(link.name);
                  setIsMenuOpen(false);
                }}
                className={`transition-colors duration-300 transform hover:scale-105 ${
                  activeLink.toLowerCase() === link.name.toLowerCase() ? activeLinkColor : hoverLinkColor
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons & Theme Toggle Button (Desktop) */}
        <div className="hidden md:flex space-x-4 items-center">
          <a href="https://www.linkedin.com/in/himanshu561hi/" className={`text-lg ${socialIconColor} ${hoverSocialIconColor}`}><FaLinkedinIn /></a>
          <a href="https://github.com/himanshu561hi" className={`text-lg ${socialIconColor} ${hoverSocialIconColor}`}><FaGithub /></a>
          <button onClick={toggleTheme} className={`p-2 rounded-full ${themeBtnBg} ${themeBtnColor} ${hoverThemeBtnColor} transition-colors duration-300`}>
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <button onClick={toggleTheme} className={`p-2 rounded-full ${themeBtnBg} ${themeBtnColor} ${hoverThemeBtnColor} transition-colors duration-300`}>
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button onClick={toggleMenu} className={`text-2xl ${brandColor}`}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu (Sliding from top) */}
      <div className={`md:hidden absolute top-0 left-0 w-full h-screen ${isMenuOpen ? 'block' : 'hidden'} ${isDarkMode ? 'bg-gray-950/90' : 'bg-white/90'} backdrop-blur-lg z-40 transition-all duration-300 ease-in-out`}>
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <div className={`w-8 h-8 rounded-full ${isDarkMode ? 'bg-teal-500' : 'bg-indigo-500'} flex items-center justify-center text-white font-bold`}>H</div>
            <span className={`text-xl font-bold ${brandColor}`}>Himanshu Gupta</span>
          </div>
          <button onClick={toggleMenu} className={`text-2xl ${brandColor}`}><FaTimes /></button>
        </div>
        
        <ul className="flex flex-col items-center mt-20 h-full text-2xl font-bold space-y-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={`#${link.href}`}
                onClick={() => {
                  setActiveLink(link.name);
                  setIsMenuOpen(false); 
                }}
                className={`transition-colors duration-300 transform hover:scale-105 ${
                  activeLink.toLowerCase() === link.name.toLowerCase() ? activeLinkColor : hoverLinkColor
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
          <div className="flex space-x-6 mt-8">
            <a href="https://www.linkedin.com/in/himanshu561hi/" className={`text-3xl ${socialIconColor} ${hoverSocialIconColor}`}><FaLinkedinIn /></a>
            <a href="https://github.com/himanshu561hi" className={`text-3xl ${socialIconColor} ${hoverSocialIconColor}`}><FaGithub /></a>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;