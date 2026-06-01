import React, { useEffect, useRef } from 'react';
import { FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa';
import DecryptedText from '../background/DecryptedText';
import TiltCard from '../background/TiltCard';
import SectionParticles from '../background/SectionParticles';
import ScrollStack, { ScrollStackItem } from '../background/ScrollStack';
import ScrollReveal from 'scrollreveal';

function About({ isDarkMode, imagePlaceholderRef }) {
  const paragraphRef = useRef(null);

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '40px',
      duration: 1000,
      delay: 200,
      reset: true // Triggers reveal on both scroll up and scroll down
    });

    if (paragraphRef.current) {
      sr.reveal(paragraphRef.current, { delay: 100, origin: 'top' });
    }
  }, []);

  const sectionBg = isDarkMode 
    ? "bg-[#030014]" 
    : "bg-indigo-50/15 backdrop-blur-md";

  const headingColor = isDarkMode ? "text-white" : "text-gray-900";
  const subHeadingColor = isDarkMode ? "text-teal-400" : "text-indigo-600";
  const paraColor = isDarkMode ? "text-gray-300" : "text-gray-600";
  const cardBg = isDarkMode 
    ? "bg-[#0d0925] border-purple-500/20 text-white" 
    : "bg-white/90 border-gray-200/60 text-gray-800";
  const iconColor = isDarkMode ? "text-teal-400" : "text-indigo-600";
  const iconBg = isDarkMode ? "bg-teal-500/10" : "bg-indigo-500/10";
  
  return (
    <section id="about" className={`relative min-h-[auto] flex items-center py-20 lg:py-28 ${sectionBg} transition-all duration-300 overflow-hidden`}>
      
      {/* Blinking and Floating Dots (Stars Particle Overlay) - ONLY in this section */}
      <SectionParticles type="stars" isDarkMode={isDarkMode} />

      <div className="container mx-auto px-8 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-28 items-center relative z-10">
        
        {/* Left Side: Empty circular frame that accepts imagePlaceholderRef */}
        <div className="hidden lg:flex justify-center mb-12 lg:mb-0">
          <TiltCard isDarkMode={isDarkMode} intensity={8} className="rounded-full">
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-[#0f0b35] bg-gradient-to-tr from-indigo-500/5 to-teal-500/5 dark:from-indigo-400/5 dark:to-teal-400/5 backdrop-blur-md flex items-center justify-center">
              
              {/* This is the placeholder where the floating image from App.jsx will position itself */}
              <div 
                ref={imagePlaceholderRef}
                className="w-72 h-72 md:w-88 md:h-88 rounded-full bg-transparent flex-shrink-0"
              />
              
            </div>
          </TiltCard>
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col items-start text-left">
          <span className={`text-xl font-bold mb-3 ${subHeadingColor} tracking-wider uppercase`}>About Me</span>
          
          <div className="mb-6 flex flex-col items-start">
            <DecryptedText 
              text="Passionate about Building Modern Web Experiences." 
              animateOn="view"
              speed={35}
              className={`text-3xl sm:text-4xl lg:text-5xl font-black leading-tight ${headingColor} tracking-tight`}
              encryptedClassName="text-teal-400 font-mono"
            />
            <div className={`w-32 h-1.5 rounded-full mt-4 ${isDarkMode ? 'bg-gradient-to-r from-teal-500 to-cyan-400' : 'bg-gradient-to-r from-purple-600 to-indigo-500'} scale-x-0 animate-[expand-width_1s_ease-out_forwards]`} />
          </div>

          <p 
            ref={paragraphRef}
            className={`text-lg sm:text-xl ${paraColor} mb-8 leading-relaxed font-medium`}
          >
            I'm a dedicated Full-Stack Developer with over 1 year of hands-on experience in creating high-performance and user-friendly websites. I specialize in the MERN stack and am always learning new technologies to deliver exceptional results.
          </p>

          {/* Stacked Scrolling Cards using the React Bits ScrollStack component */}
          <div className="w-full max-w-lg">
            <ScrollStack 
              useWindowScroll={true} 
              itemDistance={24} 
              itemScale={0.03} 
              itemStackDistance={18} 
              baseScale={0.92}
              stackPosition="25%"
            >
              <ScrollStackItem itemClassName={`flex items-center p-5 border backdrop-blur-md transition-all duration-300 ${cardBg}`}>
                <div className={`p-4 mr-4 rounded-xl ${iconBg} ${iconColor} flex items-center justify-center shadow-inner flex-shrink-0`}>
                  <FaCode className="text-2xl sm:text-3xl" />
                </div>
                <div>
                  <h3 className={`text-lg sm:text-xl font-bold ${headingColor}`}>Expertise</h3>
                  <p className={`text-sm sm:text-base ${paraColor}`}>Full-Stack Development with React, Node.js, and MongoDB.</p>
                </div>
              </ScrollStackItem>

              <ScrollStackItem itemClassName={`flex items-center p-5 border backdrop-blur-md transition-all duration-300 ${cardBg}`}>
                <div className={`p-4 mr-4 rounded-xl ${iconBg} ${iconColor} flex items-center justify-center shadow-inner flex-shrink-0`}>
                  <FaBriefcase className="text-2xl sm:text-3xl" />
                </div>
                <div>
                  <h3 className={`text-lg sm:text-xl font-bold ${headingColor}`}>Experience</h3>
                  <p className={`text-sm sm:text-base ${paraColor}`}>1+ Years of professional experience in the industry.</p>
                </div>
              </ScrollStackItem>

              <ScrollStackItem itemClassName={`flex items-center p-5 border backdrop-blur-md transition-all duration-300 ${cardBg}`}>
                <div className={`p-4 mr-4 rounded-xl ${iconBg} ${iconColor} flex items-center justify-center shadow-inner flex-shrink-0`}>
                  <FaGraduationCap className="text-2xl sm:text-3xl" />
                </div>
                <div>
                  <h3 className={`text-lg sm:text-xl font-bold ${headingColor}`}>Education</h3>
                  <p className={`text-sm sm:text-base ${paraColor}`}>Bachelor's Degree in Computer Science.</p>
                </div>
              </ScrollStackItem>
            </ScrollStack>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes expand-width {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
}

export default About;
