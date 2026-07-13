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
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full h-[72px] bg-white border-b border-[#ECECEC] z-50"
    >
      <div className="max-w-[1280px] mx-auto px-6 h-full flex items-center justify-between">
        {/* Left Side: Logo + Name */}
        <a href="#home" className="flex items-center gap-2 z-50">
          <div className="w-8 h-8 bg-[#F7DF1E] text-black font-bold flex items-center justify-center rounded-[4px] text-sm font-mono tracking-tighter">JS</div>
          <span className="text-[22px] font-space font-bold text-gray-900 leading-none tracking-tight">Himanshu</span>
        </a>

        {/* Right Side: Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8 h-full">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveSection(link.name)}
              className={`relative h-full flex items-center text-sm font-medium transition-colors ${
                activeSection === link.name ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              {link.name}
              
              {/* Active Blue Underline */}
              {activeSection === link.name && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-600 rounded-t-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          className="md:hidden text-gray-900 z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[72px] left-0 w-full bg-white shadow-lg border-b border-[#ECECEC] z-40 flex flex-col md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.name);
                  setIsMobileMenuOpen(false);
                }}
                className={`p-5 border-b border-gray-100 last:border-0 text-base font-medium transition-colors ${
                  activeSection === link.name ? 'text-blue-600 bg-blue-50/30' : 'text-gray-800'
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
