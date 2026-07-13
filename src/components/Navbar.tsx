import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Add smooth scrolling behavior for links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetAttr = anchor.getAttribute('href');
        if(targetAttr) {
          const target = document.querySelector(targetAttr);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'h-[70px] bg-white/40 backdrop-blur-xl border-b border-white/50 shadow-[0_4px_30px_rgba(0,0,0,0.03)]' 
          : 'h-[90px] bg-transparent'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 h-full flex items-center justify-between">
        {/* Left Side: Logo + Name */}
        <a href="#home" className="flex items-center gap-3 z-50 group">
          <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-200 text-black font-extrabold flex items-center justify-center rounded-[12px] text-[15px] font-mono tracking-tighter shadow-[0_2px_10px_rgba(250,204,21,0.3)] border border-yellow-100 group-hover:scale-105 group-hover:rotate-3 transition-transform duration-300">
            JS
          </div>
          <span className="text-[22px] font-space font-bold text-gray-900 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
            Himanshu
          </span>
        </a>

        {/* Right Side: Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-1.5 h-full">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveSection(link.name)}
              className={`relative h-[42px] px-5 flex items-center justify-center text-[15px] font-semibold transition-colors duration-300 rounded-full ${
                activeSection === link.name 
                  ? 'text-blue-700' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-white/30'
              }`}
            >
              <span className="relative z-10">{link.name}</span>
              
              {/* Active Pill Background */}
              {activeSection === link.name && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-white/60 shadow-[0_2px_10px_rgba(0,0,0,0.04)] rounded-full border border-white/80"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </a>
          ))}
          
          {/* Hire Me / Resume Button */}
          <div className="ml-2 pl-4 border-l border-gray-200/50">
            <a 
              href="#contact"
              className="h-[42px] px-6 inline-flex items-center justify-center text-[15px] font-bold text-white bg-gray-900 rounded-full hover:bg-blue-600 hover:shadow-[0_4px_14px_rgba(37,99,235,0.3)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Let's Talk
            </a>
          </div>
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          className="md:hidden text-gray-900 z-50 p-2.5 bg-white/50 backdrop-blur-md rounded-xl border border-white/60 shadow-sm active:scale-95 transition-all"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute top-[80px] left-4 right-4 bg-white/70 backdrop-blur-2xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-white/60 rounded-3xl z-40 flex flex-col md:hidden overflow-hidden p-2"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.name);
                  setIsMobileMenuOpen(false);
                }}
                className={`p-4 mx-2 my-1 rounded-2xl text-[16px] font-bold transition-all duration-300 flex items-center ${
                  activeSection === link.name 
                    ? 'text-blue-700 bg-white/80 shadow-sm border border-white/50' 
                    : 'text-gray-700 hover:bg-white/40'
                }`}
              >
                {link.name}
              </a>
            ))}
            
            <a 
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 mx-2 mb-2 p-4 rounded-2xl text-center text-[16px] font-bold text-white bg-gray-900 hover:bg-blue-600 transition-colors"
            >
              Let's Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
