import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';
import resume from '../assets/resume.pdf';
import { FaLaptopCode, FaMobileAlt, FaChartBar, FaLinkedinIn } from 'react-icons/fa';
import SplitText from '../background/SplitText';
import BlurText from '../background/BlurText';
import DecryptedText from '../background/DecryptedText';
import SectionParticles from '../background/SectionParticles';

function HeroSection({ isDarkMode, imagePlaceholderRef }) {
  const typedEl = useRef(null);

  useEffect(() => {
    if (!typedEl.current) return;
    const typed = new Typed(typedEl.current, {
      strings: ["Full-Stack Developer", "MERN Stack Specialist", "Creative Programmer", "UI/UX Innovator"],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1800,
      loop: true,
      showCursor: true,
      cursorChar: "|"
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const sectionBg = isDarkMode 
    ? "bg-[#030014]" 
    : "bg-indigo-50/20 backdrop-blur-md";

  const textColor = isDarkMode ? "text-gray-100" : "text-gray-800";
  const headingColor = isDarkMode ? "text-white" : "text-gray-900";
  const spanColor = isDarkMode ? "text-teal-400" : "text-indigo-600";
  const paraColor = isDarkMode ? "text-gray-300" : "text-gray-600";
  const resumeBtnColor = isDarkMode ? "text-gray-300" : "text-gray-700";
  const resumeBtnHoverBg = isDarkMode ? "hover:bg-purple-950/40" : "hover:bg-white/70";
  const imageBg = isDarkMode ? "bg-gradient-to-br from-[#0c0828] via-[#030014] to-teal-950/40" : "bg-gradient-to-br from-indigo-50 via-white to-teal-50/30";
  const imageBorder = isDarkMode ? "border-[#0f0b35]" : "border-white";
  const imageSpinColor = isDarkMode ? "border-teal-400" : "border-indigo-500";
  const iconBg = isDarkMode ? "bg-[#0b0720]/90 border border-purple-500/20 backdrop-blur-md" : "bg-white/90 border border-gray-200/60 backdrop-blur-md";
  const iconColor = isDarkMode ? "text-teal-400" : "text-indigo-600";

  const skills = ["React", "Node.js", "JavaScript", "Python", "MongoDB", "TailwindCSS", "Git", "REST APIs"];

  return (
    <section className={`relative min-h-screen flex items-center justify-center pt-32 pb-16 lg:pt-28 lg:pb-24 ${sectionBg} ${textColor} transition-all duration-500 overflow-hidden`}>
      
      {/* Dense Vertical Rain Canvas Particles Overlay */}
      <SectionParticles type="rain" isDarkMode={isDarkMode} />

      {/* Modern 3D Floating Mesh/Glow Backgrounds */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] -z-10 animate-[float-large-0_15s_ease-in-out_infinite]" />
      <div className="absolute bottom-1/4 right-1/10 w-[450px] h-[450px] bg-teal-500/10 rounded-full blur-[150px] -z-10 animate-[float-large-1_18s_ease-in-out_infinite]" />

      {/* Main Content */}
      <div className="container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center px-6 md:px-8 lg:px-8">
        
        {/* Left Side: Text, Buttons, Skills */}
        <div className="flex flex-col items-start text-left space-y-8">
          <div className="space-y-6 w-full">
            {/* Split Text Heading for Hero */}
            <div className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] ${headingColor} tracking-tight`}>
              <SplitText 
                text="Building The Future" 
                className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] ${headingColor} tracking-tight`}
                delay={60}
                duration={0.8}
                ease="power4.out"
                splitType="words"
                textAlign="left"
              />
              <div className="text-xl sm:text-2xl font-bold tracking-normal block mt-4 text-gray-700 dark:text-gray-300">
                I am a <span className={`${spanColor} font-extrabold`} ref={typedEl}></span>
              </div>
              
              <BlurText 
                text="With Code, Creativity & Technology." 
                className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight ${headingColor} opacity-90 mt-3`}
                delay={40}
                animateBy="words"
                direction="bottom"
              />
            </div>
            
            <p className={`text-lg sm:text-xl ${paraColor} max-w-2xl leading-relaxed font-medium`}>
              Hi, I'm{' '}
              <DecryptedText 
                text="Himanshu" 
                animateOn="view"
                speed={80}
                className={`${spanColor} font-extrabold`} 
                parentClassName="inline"
              />
              ! A passionate Full-Stack Developer with over 1 year of professional experience in crafting high-performance, modern web applications. Focused on bringing innovative solutions to life.
            </p>
          </div>

          {/* Connect & Resume Actions */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="https://www.linkedin.com/in/himanshu561hi/" 
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center justify-center gap-3 overflow-hidden ${isDarkMode ? 'bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 shadow-teal-500/20' : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-indigo-500/20'} text-white font-bold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-0.5 transition-all duration-300`}
            >
              <FaLinkedinIn className="text-xl" />
              <span>Connect On LinkedIn</span>
            </a>
            
            <a 
              href={resume} 
              download
              className={`group flex items-center justify-center ${resumeBtnColor} font-bold py-4 px-8 rounded-2xl ${resumeBtnHoverBg} border border-gray-300/20 dark:border-gray-800/80 hover:border-gray-400/40 dark:hover:border-gray-700/60 shadow-lg transition-all duration-300 backdrop-blur-sm`}
            >
              <span>Resume</span>
              <span className="ml-3 text-xl transform group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
            </a>
          </div>

          {/* Quick Skill Badges */}
          <div className="flex flex-wrap gap-2.5 pt-4">
            {skills.map((skill, index) => (
              <span
                key={skill}
                className={`group flex items-center justify-center px-4 py-2.5 rounded-xl ${isDarkMode ? 'bg-[#0d0925] text-gray-200 border-purple-500/20 hover:border-teal-400/30' : 'bg-white/70 text-gray-700 border-gray-200/50 hover:border-indigo-400/30'} font-semibold text-xs border hover:scale-105 transition-all duration-300 cursor-default shadow-md hover:shadow-lg`}
                style={{
                  animationDelay: `${index * 0.08}s`
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Right Side: Flying Image Placeholder and Floating Icons */}
        <div className="relative flex justify-center items-center min-h-[350px] lg:min-h-[500px]">
          
          {/* Main Image Frame (The floating image will fly on top of this exact placeholder) */}
          <div className={`absolute w-72 h-72 lg:w-96 lg:h-96 rounded-full flex items-center justify-center ${imageBg} shadow-2xl overflow-hidden border-4 ${imageBorder}`}>
            
            {/* Animated Outer Ring */}
            <div className={`absolute inset-0 rounded-full border-4 ${imageSpinColor} opacity-50`} 
                 style={{ 
                   animation: 'spin 25s linear infinite',
                   borderTopColor: 'transparent', 
                   borderLeftColor: 'transparent'
                 }}>
            </div>
            
            {/* Secondary Inner Ring */}
            <div className={`absolute inset-2 rounded-full border-2 ${isDarkMode ? 'border-teal-500/20' : 'border-indigo-500/20'}`} 
                 style={{ 
                   animation: 'spin 18s linear infinite reverse',
                   borderTopColor: 'transparent', 
                   borderRightColor: 'transparent'
                 }}>
            </div>
            
            {/* Transparent placeholder container that matches the exact bounding client size */}
            <div 
              ref={imagePlaceholderRef}
              className="w-64 h-64 lg:w-88 lg:h-88 rounded-full bg-gradient-to-tr from-indigo-500/5 to-teal-500/5 dark:from-indigo-400/10 dark:to-teal-400/10 backdrop-blur-3xl z-10 flex-shrink-0"
            />
            
            {/* Overlay Glow Effect */}
            <div className={`absolute inset-0 rounded-full ${isDarkMode ? 'bg-gradient-to-t from-teal-500/10 to-transparent' : 'bg-gradient-to-t from-indigo-500/10 to-transparent'} opacity-30`}></div>
          </div>

          {/* Floating Technology-themed Icons with Better Positionings */}
          <div className={`absolute -top-6 left-16 lg:top-14 lg:left-14 lg:z-10 p-4 ${iconBg} rounded-2xl shadow-xl ${iconColor} text-2xl transform hover:scale-110 hover:rotate-12 transition-all duration-300 cursor-pointer`}
               style={{ animation: 'float-icon-1 6s ease-in-out infinite' }}>
            <FaLaptopCode />
          </div>
          
          <div className={`absolute top-10 right-4 z-10 lg:top-8 lg:right-6 lg:z-10 p-4 ${iconBg} rounded-2xl shadow-xl ${iconColor} text-2xl transform hover:scale-110 hover:rotate-12 transition-all duration-300 cursor-pointer`}
               style={{ animation: 'float-icon-2 8s ease-in-out infinite', animationDelay: '2s' }}>
            <FaMobileAlt />
          </div>
          
          <div className={`absolute bottom-6 left-1/2 p-4 ${iconBg} rounded-2xl shadow-xl ${iconColor} text-2xl transform hover:scale-110 hover:rotate-12 transition-all duration-300 cursor-pointer`}
               style={{ animation: 'float-icon-3 7s ease-in-out infinite', animationDelay: '4s' }}>
            <FaChartBar />
          </div>

          {/* Ambient glowing dots */}
          <div className={`absolute top-1/4 right-0 w-3 h-3 ${isDarkMode ? 'bg-teal-400' : 'bg-indigo-500'} rounded-full opacity-60`}
               style={{ animation: 'pulse 3s ease-in-out infinite' }}>
          </div>
          <div className={`absolute bottom-1/4 left-4 w-2 h-2 ${isDarkMode ? 'bg-cyan-400' : 'bg-pink-500'} rounded-full opacity-60`}
               style={{ animation: 'pulse 4s ease-in-out infinite', animationDelay: '1s' }}>
          </div>
        </div>
      </div>

      {/* Global CSS keyframes inside component scope */}
      <style>{`
        @keyframes float-large-0 {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          50% { transform: translateY(-40px) translateX(-20px) scale(1.15); }
        }
        
        @keyframes float-large-1 {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          50% { transform: translateY(30px) translateX(20px) scale(0.9); }
        }
        
        @keyframes float-icon-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(4deg); }
        }
        
        @keyframes float-icon-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(-4deg); }
        }
        
        @keyframes float-icon-3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(6deg); }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}

export default HeroSection;
