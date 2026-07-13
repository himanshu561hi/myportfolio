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

  useEffect(() => {
    // Add smooth scrolling behavior for links with offset for fixed navbar
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetAttr = anchor.getAttribute('href');
        if(targetAttr) {
          const target = document.querySelector(targetAttr);
          if (target) {
            const navHeight = 40; // Account for navbar height but respect section padding
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-[1152px] h-[72px] bg-white/40 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_rgba(31,38,135,0.08)] rounded-[24px] z-50"
    >
      <div className="w-full h-full px-6 md:px-8 flex items-center justify-between">
        {/* Left Side: Logo + Name */}
        <a href="#home" className="flex items-center gap-3 z-50 group">
          <div className="w-9 h-9 bg-[#F7DF1E] text-black font-bold flex items-center justify-center rounded-xl text-sm font-mono tracking-tighter shadow-md group-hover:scale-105 transition-transform duration-300">
            JS
          </div>
          <span className="text-[22px] font-space font-bold text-gray-900 leading-none tracking-tight group-hover:text-blue-600 transition-colors">
            Himanshu
          </span>
        </a>

        {/* Right Side: Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-2 h-full">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveSection(link.name)}
              className={`relative px-4 py-2 flex items-center text-[15px] font-semibold transition-all duration-300 rounded-full ${
                activeSection === link.name ? 'text-blue-700' : 'text-gray-600 hover:text-gray-900 hover:bg-white/20'
              }`}
            >
              <span className="relative z-10">{link.name}</span>
              
              {/* Active Glass Pill */}
              {activeSection === link.name && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-white/60 shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-white/70 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          className="md:hidden text-gray-900 z-50 p-2.5 bg-white/40 hover:bg-white/60 rounded-full transition-colors border border-white/50 shadow-sm"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[80px] left-0 w-full bg-white/30 backdrop-blur-2xl shadow-[0_15px_40px_rgba(31,38,135,0.15)] border border-white/50 rounded-3xl z-40 flex flex-col md:hidden overflow-hidden p-3"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.name);
                  setIsMobileMenuOpen(false);
                }}
                className={`p-4 rounded-2xl mb-2 last:mb-0 text-[16px] font-semibold transition-all ${
                  activeSection === link.name 
                  ? 'text-blue-700 bg-white/60 shadow-sm border border-white/70' 
                  : 'text-gray-700 hover:bg-white/40 hover:text-gray-900'
                }`}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
