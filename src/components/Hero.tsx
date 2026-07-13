import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import Typed from 'typed.js';

import { SiReact, SiNodedotjs, SiMongodb, SiTypescript, SiGit } from 'react-icons/si';
import { Sparkles, ChevronDown } from 'lucide-react';
import himanshuImg from '../assets/him.png';
import { socialLinks } from '../data';

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Full Stack Developer',
        'MERN Stack Developer',
        'AI Enthusiast',
        'Open Source Contributor',
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
      cursorChar: '|',
    });

    return () => {
      typed.destroy();
    };
  }, []);



  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center bg-transparent pt-20 overflow-hidden">
      
      {/* Subtle Background Gradient Blobs removed to avoid overlapping with global app blobs */}

      <div className="max-w-[1200px] w-full mx-auto px-6 h-full flex flex-col lg:flex-row items-center justify-between relative z-10 gap-8 lg:gap-4">
        
        {/* Left Side: Typography & Call to Actions */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 mt-6 lg:mt-0"
        >
          {/* Small Intro Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 border border-blue-100 shadow-sm mb-5">
            <Sparkles size={16} className="text-blue-600" />
            <span className="text-sm font-bold tracking-wide uppercase text-blue-700">Hello, I'm</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-[38px] sm:text-[52px] lg:text-[72px] whitespace-nowrap font-space font-extrabold leading-[1.05] mb-3 tracking-tight text-gray-900">
            Himanshu Gupta
          </h1>
          
          {/* Animated Typing Role */}
          <div className="text-[20px] sm:text-[26px] lg:text-[32px] font-bold text-gray-800 mb-5 h-[40px] font-inter">
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600" ref={typedRef}></span>
          </div>
          
          {/* Short Impactful Description */}
          <p className="text-gray-600 text-[16px] lg:text-[17px] max-w-[480px] mb-5 leading-relaxed font-inter font-medium">
            Building scalable web applications, AI-powered solutions, and seamless digital experiences using modern technologies.
          </p>

          {/* Internship Status Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-md border border-gray-200 rounded-full shadow-sm mb-8 hover:bg-white transition-colors cursor-default">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-semibold text-gray-700">Open to Internship Opportunities</span>
          </div>
          
          {/* Dual Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 w-full sm:w-auto">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[15px] font-bold shadow-[0_8px_20px_rgba(37,99,235,0.25)] hover:shadow-[0_12px_25px_rgba(37,99,235,0.4)] transition-all flex items-center justify-center gap-2"
            >
              🚀 View Projects
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/70 backdrop-blur-md text-gray-800 text-[15px] font-bold border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all flex items-center justify-center gap-2"
            >
              📄 Download Resume
            </motion.a>
          </div>

          {/* Statistic Pills */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-10">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm border border-gray-200 rounded-full shadow-sm text-sm font-bold text-gray-700 cursor-default">
              <span>🚀</span> 5+ Projects
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm border border-gray-200 rounded-full shadow-sm text-sm font-bold text-gray-700 cursor-default">
              <span>💼</span> 3+ Internships
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm border border-gray-200 rounded-full shadow-sm text-sm font-bold text-gray-700 cursor-default">
              <span>🧩</span> 50+ DSA Problems
            </div>
          </div>
          
          {/* Premium Glass Social Icons */}
          <div className="flex items-center justify-center lg:justify-start gap-4 w-full">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full bg-white/70 backdrop-blur-md border border-white/80 text-gray-700 flex items-center justify-center hover:bg-white hover:text-blue-600 hover:shadow-[0_0_20px_rgba(37,99,235,0.25)] hover:border-blue-200 transition-all shadow-sm"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
        
        {/* Right Side: Visual Profile */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="w-full lg:w-[45%] flex justify-center items-center relative order-1 lg:order-2 h-[320px] sm:h-[380px] lg:h-[500px] mt-6 lg:mt-0"
        >
          <div className="relative flex items-center justify-center w-[250px] h-[250px] sm:w-[320px] sm:h-[320px] lg:w-[380px] lg:h-[380px]">
            
            {/* Animated Gradient Rings */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-15px] rounded-full border border-dashed border-blue-400/40 opacity-70"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-35px] rounded-full border border-blue-200/50 opacity-50"
            />

            {/* Premium Profile Image Container */}
            <div className="relative w-full h-full rounded-full bg-gradient-to-br from-blue-100 to-white shadow-[0_10px_40px_rgba(37,99,235,0.2)] overflow-hidden border-[4px] border-white/90 z-10 flex items-center justify-center">
               <img 
                src={himanshuImg} 
                alt="Himanshu Gupta"
                className="w-full h-full object-cover scale-[1.02]"
              />
            </div>

            {/* Floating Tech Badges */}
            <FloatingBadge icon={<SiReact className="text-[#61DAFB]" size={18}/>} label="React" className="top-[10%] left-[-5%] lg:left-[-10%]" delay={0} />
            <FloatingBadge icon={<SiNodedotjs className="text-[#339933]" size={18}/>} label="Node.js" className="top-[5%] right-[-5%] lg:right-[-10%]" delay={1.5} />
            <FloatingBadge icon={<SiMongodb className="text-[#47A248]" size={18}/>} label="MongoDB" className="bottom-[15%] right-[-10%] lg:right-[-15%]" delay={0.8} />
            <FloatingBadge icon={<SiTypescript className="text-[#3178C6]" size={18}/>} label="TypeScript" className="bottom-[10%] left-[-10%] lg:left-[-15%]" delay={2.2} />
            <FloatingBadge icon={<Sparkles className="text-purple-500" size={18}/>} label="AI" className="top-[45%] left-[-15%] lg:left-[-20%]" delay={1.2} />
            <FloatingBadge icon={<SiGit className="text-[#F05032]" size={18}/>} label="Git" className="top-[50%] right-[-15%] lg:right-[-20%]" delay={2.8} />
          </div>
        </motion.div>
        
      </div>

      {/* Subtle Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-400">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

// Sub-Component for the Floating Tech Badges
interface FloatingBadgeProps {
  icon: React.ReactNode;
  label: string;
  className?: string;
  delay: number;
}
const FloatingBadge = ({ icon, label, className, delay }: FloatingBadgeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
      transition={{ 
        opacity: { duration: 0.8, delay: delay },
        scale: { duration: 0.8, delay: delay, type: "spring", stiffness: 100 },
        y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: delay }
      }}
      className={`absolute z-20 flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/70 backdrop-blur-md border border-white/80 rounded-2xl shadow-[0_8px_16px_rgba(0,0,0,0.06)] ${className}`}
    >
      {icon}
      <span className="text-[12px] sm:text-[13px] font-bold text-gray-800">{label}</span>
    </motion.div>
  );
};

export default Hero;
