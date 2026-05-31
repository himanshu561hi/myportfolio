import React from 'react';
import { FaHeart, FaWhatsapp, FaGithub, FaLinkedinIn, FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

function Footer({ isDarkMode }) {
  const footerBg = isDarkMode 
    ? "bg-gradient-to-b from-[#02000f] via-[#05001f] to-[#01000c] border-t border-purple-500/10" 
    : "bg-gradient-to-b from-gray-50 via-gray-100 to-gray-150 border-t border-gray-300/40";

  const textColor = isDarkMode ? "text-gray-300" : "text-gray-600";
  const headingColor = isDarkMode ? "text-white" : "text-gray-900";
  const accentColor = isDarkMode ? "text-teal-400" : "text-indigo-600"; // Accent color for highlights
  const dividerColor = isDarkMode ? "bg-purple-950/40 border-b border-purple-500/5" : "bg-gray-300/50"; // Divider line color

  // Glassmorphic interactive cards for social icons
  const glassCardBg = isDarkMode ? "bg-white/[0.04] backdrop-blur-md border border-white/[0.08]" : "bg-gray-800/[0.04] backdrop-blur-md border border-gray-800/[0.08]";
  const glassIconColor = isDarkMode ? "text-white" : "text-gray-900";
  const glassIconHoverBg = isDarkMode ? "hover:bg-teal-500/[0.15] hover:border-teal-400/45 hover:shadow-[0_0_20px_rgba(45,212,191,0.25)]" : "hover:bg-indigo-600/[0.12] hover:border-indigo-500/45 hover:shadow-[0_4px_15px_rgba(99,102,241,0.2)]";
  const glassIconHoverText = isDarkMode ? "hover:text-teal-300" : "hover:text-indigo-700";

  return (
    <footer className={`py-16 ${footerBg} transition-colors duration-300 relative z-10 overflow-visible`}>
      
      {/* Dynamic Layered CRISP WHITE WAVE Separator between CTA and Footer */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] h-[90px] -translate-y-full pointer-events-none z-20">
        <svg className="relative block w-[200%] h-full" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ minWidth: '200%' }}>
          {/* Wave 1 - Outer Translucent Glow Layer */}
          <path 
            d="M0,60 C150,90 350,30 500,60 C650,90 850,30 1000,60 C1150,90 1350,30 1500,60 C1650,90 1850,30 2000,60 L2000,120 L0,120 Z" 
            className="fill-white/10 dark:fill-white/5"
            style={{ 
              animation: 'wave-slide-slow 22s linear infinite',
              willChange: 'transform'
            }}
          />
          {/* Wave 2 - Mid Translucent White Layer */}
          <path 
            d="M0,60 C200,40 400,80 600,60 C800,40 1000,80 1200,60 C1400,40 1600,80 1800,60 C2000,40 2200,80 2400,60 L2400,120 L0,120 Z" 
            className="fill-white/25 dark:fill-white/15"
            style={{ 
              animation: 'wave-slide-mid 15s linear infinite',
              willChange: 'transform'
            }}
          />
          {/* Wave 3 - Front Solid Layer - CRISP WHITE WAVE divider */}
          <path 
            d="M0,60 C100,75 200,45 300,60 C400,75 500,45 600,60 C700,75 800,45 900,60 C1000,75 1100,45 1200,60 L1200,120 L0,120 Z" 
            className="fill-white dark:fill-white"
            style={{ 
              animation: 'wave-slide-fast 11s linear infinite',
              willChange: 'transform'
            }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-8 md:px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left relative z-30">
        
        {/* Left Section: Portfolio Title and Tagline with Hover Grow Underline */}
        <div className="flex flex-col items-center md:items-start justify-center transition-all duration-500 group/title cursor-default">
          <h2 className={`text-3xl lg:text-4xl font-black leading-tight ${headingColor} mb-2 transition-transform duration-300 group-hover/title:translate-x-1`}>
            Himanshu's <br />
            <span className={`${accentColor} relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-teal-400 after:scale-x-0 group-hover/title:after:scale-x-100 after:transition-transform after:duration-500`}>Portfolio</span>
          </h2>
          <p className={`text-base ${textColor} max-w-sm font-medium leading-relaxed mt-2 group-hover/title:text-teal-400/80 transition-colors duration-300`}>
            "Crafting modern digital experiences <br /> with passion & precision."
          </p>
        </div>

        {/* Center Section: Social Icons with interactive floating and 360 spin */}
        <div className="flex flex-col items-center md:items-center">
          <h3 className={`text-xl lg:text-2xl font-black ${headingColor} mb-6 tracking-wide`}>Let's Connect</h3>
          <div className="grid grid-cols-3 gap-4">
            
            {/* WhatsApp */}
            <a href="https://wa.link/0ecl22" target="_blank" rel="noopener noreferrer" 
               className={`flex items-center justify-center w-14 h-14 rounded-2xl ${glassCardBg} ${glassIconHoverBg} transition-all duration-300 transform hover:-translate-y-2 hover:scale-115 hover:rotate-[360deg] shadow-lg`}
               style={{ animation: 'float-slow-1 5s ease-in-out infinite' }}>
              <FaWhatsapp className={`text-2xl ${glassIconColor} ${glassIconHoverText}`} />
            </a>
            
            {/* GitHub */}
            <a href="https://github.com/himanshu561hi" target="_blank" rel="noopener noreferrer" 
               className={`flex items-center justify-center w-14 h-14 rounded-2xl ${glassCardBg} ${glassIconHoverBg} transition-all duration-300 transform hover:-translate-y-2 hover:scale-115 hover:rotate-[360deg] shadow-lg`}
               style={{ animation: 'float-slow-2 6s ease-in-out infinite', animationDelay: '0.4s' }}>
              <FaGithub className={`text-2xl ${glassIconColor} ${glassIconHoverText}`} />
            </a>
            
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/himanshu561hi/" target="_blank" rel="noopener noreferrer" 
               className={`flex items-center justify-center w-14 h-14 rounded-2xl ${glassCardBg} ${glassIconHoverBg} transition-all duration-300 transform hover:-translate-y-2 hover:scale-115 hover:rotate-[360deg] shadow-lg`}
               style={{ animation: 'float-slow-3 7s ease-in-out infinite', animationDelay: '0.8s' }}>
              <FaLinkedinIn className={`text-2xl ${glassIconColor} ${glassIconHoverText}`} />
            </a>
            
            {/* Gmail */}
            <a href="mailto:himanshu561hi@gmail.com" 
               className={`flex items-center justify-center w-14 h-14 rounded-2xl ${glassCardBg} ${glassIconHoverBg} transition-all duration-300 transform hover:-translate-y-2 hover:scale-115 hover:rotate-[360deg] shadow-lg`}
               style={{ animation: 'float-slow-1 5s ease-in-out infinite', animationDelay: '1.2s' }}>
              <SiGmail className={`text-2xl ${glassIconColor} ${glassIconHoverText}`} />
            </a>
            
            {/* Instagram */}
            <a href="https://www.instagram.com/_oye_himanshu/" target="_blank" rel="noopener noreferrer" 
               className={`flex items-center justify-center w-14 h-14 rounded-2xl ${glassCardBg} ${glassIconHoverBg} transition-all duration-300 transform hover:-translate-y-2 hover:scale-115 hover:rotate-[360deg] shadow-lg`}
               style={{ animation: 'float-slow-2 6s ease-in-out infinite', animationDelay: '1.6s' }}>
              <FaInstagram className={`text-2xl ${glassIconColor} ${glassIconHoverText}`} />
            </a>
            
            {/* Telegram */}
            <a href="https://t.me/himanshu561hi" target="_blank" rel="noopener noreferrer" 
               className={`flex items-center justify-center w-14 h-14 rounded-2xl ${glassCardBg} ${glassIconHoverBg} transition-all duration-300 transform hover:-translate-y-2 hover:scale-115 hover:rotate-[360deg] shadow-lg`}
               style={{ animation: 'float-slow-3 7s ease-in-out infinite', animationDelay: '2s' }}>
              <FaTelegramPlane className={`text-2xl ${glassIconColor} ${glassIconHoverText}`} />
            </a>
          </div>
        </div>

        {/* Right Section: Location with elegant glow */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right justify-center group/loc cursor-default">
          <h3 className={`text-xl lg:text-2xl font-black ${headingColor} mb-4 tracking-wide group-hover/loc:text-teal-400 transition-colors duration-300`}>Location</h3>
          <p className={`text-2xl font-black ${accentColor} animate-[glow-pulse_3s_ease-in-out_infinite]`}>Gorakhpur</p>
          <p className={`text-base font-bold ${textColor}`}>Uttar Pradesh, India</p>
        </div>
      </div>

      {/* Footer Bottom (Copyright and Made with love with beating heart) */}
      <div className="container mx-auto px-4 md:px-12 mt-12 text-center relative z-30">
        <div className={`w-full h-px ${dividerColor} max-w-lg mx-auto mb-6`}></div>
        <p className={`text-sm ${textColor} mb-2 font-medium`}>
          © 2025 All rights reserved
        </p>
        <p className={`text-sm ${textColor} flex items-center justify-center font-bold`}>
          Made with <FaHeart className="mx-2 text-red-500 animate-[heart-beat_1.4s_infinite] origin-center" /> by 
          <span className={`font-black ${accentColor} ml-1`}>Himanshu Gupta</span>
        </p>
      </div>

      {/* Scoped CSS animations for waves and custom beating/spinning effects */}
      <style>{`
        @keyframes wave-slide-slow {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-500px, 0, 0); }
        }
        @keyframes wave-slide-mid {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(600px, 0, 0); }
        }
        @keyframes wave-slide-fast {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-300px, 0, 0); }
        }
        @keyframes float-slow-1 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }
        @keyframes float-slow-2 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        @keyframes float-slow-3 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-9px); }
        }
        @keyframes heart-beat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.22); }
          40% { transform: scale(1.05); }
          60% { transform: scale(1.25); }
        }
        @keyframes glow-pulse {
          0%, 100% { 
            text-shadow: 0 0 4px rgba(45,212,191,0.25); 
            transform: scale(1);
          }
          50% { 
            text-shadow: 0 0 16px rgba(45,212,191,0.85), 0 0 24px rgba(45,212,191,0.45); 
            transform: scale(1.04);
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;