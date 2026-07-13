import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { Mail, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

const Footer = () => {
  return (
    <footer className="w-full bg-white/30 backdrop-blur-2xl border-t border-white/60 pt-20 pb-10 relative z-10 mt-10">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          
          {/* Brand & Bio (Spans 5 cols) */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <h2 className="text-3xl font-space font-extrabold text-gray-900 tracking-tight flex items-center gap-2">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 rounded-xl text-2xl shadow-sm">
                JS
              </span>
              Himanshu
            </h2>
            <p className="text-gray-600 text-[16px] leading-relaxed max-w-sm">
              A passionate Full Stack Developer focused on building scalable web applications, integrating AI services, and creating modern, intuitive user experiences.
            </p>
            <a 
              href="mailto:himanshu561hi@gmail.com" 
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors w-fit group"
            >
              himanshu561hi@gmail.com
              <ArrowUpRight size={18} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          {/* Quick Links (Spans 3 cols) */}
          <div className="md:col-span-3 flex flex-col gap-6 md:pl-8">
            <h3 className="text-lg font-space font-bold text-gray-900 tracking-wide uppercase">Quick Links</h3>
            <ul className="flex flex-col gap-4 text-[15.5px] text-gray-600 font-medium">
              <li><a href="#home" className="hover:text-blue-600 hover:translate-x-1 inline-block transition-all duration-300">Home</a></li>
              <li><a href="#about" className="hover:text-blue-600 hover:translate-x-1 inline-block transition-all duration-300">About</a></li>
              <li><a href="#skills" className="hover:text-blue-600 hover:translate-x-1 inline-block transition-all duration-300">Skills</a></li>
              <li><a href="#projects" className="hover:text-blue-600 hover:translate-x-1 inline-block transition-all duration-300">Projects</a></li>
              <li><a href="#experience" className="hover:text-blue-600 hover:translate-x-1 inline-block transition-all duration-300">Experience</a></li>
            </ul>
          </div>

          {/* Connect & Socials (Spans 4 cols) */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <h3 className="text-lg font-space font-bold text-gray-900 tracking-wide uppercase">Connect</h3>
            <p className="text-gray-600 text-[15.5px] mb-2 leading-relaxed">
              Feel free to reach out for collaborations, opportunities, or just a friendly chat.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/himanshu561hi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 bg-white/60 border border-gray-200 rounded-xl flex items-center justify-center text-gray-700 hover:bg-gray-900 hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 text-xl"
              >
                <FaGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/himanshu561hi/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 bg-white/60 border border-gray-200 rounded-xl flex items-center justify-center text-gray-700 hover:bg-blue-700 hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 text-xl"
              >
                <FaLinkedin />
              </a>
              <a 
                href="mailto:himanshu561hi@gmail.com" 
                className="w-12 h-12 bg-white/60 border border-gray-200 rounded-xl flex items-center justify-center text-gray-700 hover:bg-red-500 hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 text-xl"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://leetcode.com/u/HimanshuGupta_561/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 bg-white/60 border border-gray-200 rounded-xl flex items-center justify-center text-gray-700 hover:bg-yellow-600 hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 text-xl"
              >
                <SiLeetcode />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300/60 to-transparent mb-8"></div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm font-medium text-gray-500">
          <p>© 2026 Himanshu Gupta. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5">
            Made with <span className="text-red-500 animate-pulse text-lg">❤️</span> by Himanshu Gupta
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
