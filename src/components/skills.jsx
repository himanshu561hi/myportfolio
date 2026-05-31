import React, { useEffect, useRef } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt, FaCode } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si';
import { IoLogoPwa } from "react-icons/io5";
import DecryptedText from './DecryptedText';
import TiltCard from './TiltCard';
import SectionParticles from './SectionParticles';
import ScrollReveal from 'scrollreveal';

function Skills({ isDarkMode }) {
  const descRef = useRef(null);

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '30px',
      duration: 1000,
      delay: 150,
      reset: true
    });
    if (descRef.current) {
      sr.reveal(descRef.current, { delay: 100, origin: 'bottom' });
    }
  }, []);

  const sectionBg = isDarkMode 
    ? "bg-[#030014]" 
    : "bg-indigo-50/15 backdrop-blur-sm";

  const headingColor = isDarkMode ? "text-white" : "text-gray-900";
  const subHeadingColor = isDarkMode ? "text-gray-400" : "text-gray-600";
  const cardBg = isDarkMode ? "bg-[#0d0925]/90 backdrop-blur-md" : "bg-white/60 backdrop-blur-md";
  const cardBorder = isDarkMode ? "border-purple-500/20" : "border-gray-200";
  const iconColor = isDarkMode ? "text-teal-400" : "text-indigo-600";
  const skillNameColor = isDarkMode ? "text-white" : "text-gray-800";
  const skillPercentageColor = isDarkMode ? "text-gray-300" : "text-gray-600";
  const progressBarBg = isDarkMode ? "bg-[#0b0720]" : "bg-gray-200";
  const progressBarFill = isDarkMode ? "bg-gradient-to-r from-teal-500 to-cyan-400" : "bg-gradient-to-r from-purple-600 to-indigo-500";
  
  const skillsData = [
    { name: "HTML5", icon: <FaHtml5 />, percentage: 90 },
    { name: "CSS3", icon: <FaCss3Alt />, percentage: 85 },
    { name: "JavaScript", icon: <FaJs />, percentage: 55 },
    { name: "React.js", icon: <FaReact />, percentage: 75 },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, percentage: 80 },
    { name: "Express.js", icon: <SiExpress />, percentage: 60 },
    { name: "Node.js", icon: <FaNodeJs />, percentage: 60 },
    { name: "MongoDB", icon: <SiMongodb />, percentage: 52 },
    { name: "C++", icon: <FaCode />, percentage: 40 },
    { name: "Python", icon: <FaPython />, percentage: 40 },
    { name: "DSA (Basic)", icon: <IoLogoPwa />, percentage: 5 },
  ];

  return (
    <section id="skills" className={`py-16 lg:py-24 ${sectionBg} transition-colors duration-300 relative overflow-hidden z-10`}>
      
      {/* Canvas Interactive Nodes Particle Overlay */}
      <SectionParticles type="nodes" isDarkMode={isDarkMode} />

      <div className="container mx-auto px-8 md:px-4 text-center relative z-10 flex flex-col items-center">
        
        {/* Holographic Decrypting Scramble Title Effect */}
        <div className="mb-4 flex flex-col items-center justify-center">
          <DecryptedText 
            text="Skills & Expertise" 
            animateOn="view"
            speed={40}
            className={`text-3xl lg:text-5xl font-black tracking-tight ${headingColor}`}
            encryptedClassName="text-teal-400 font-mono"
          />
          {/* Expanding underline effect */}
          <div className={`w-32 h-1.5 rounded-full mt-4 ${isDarkMode ? 'bg-gradient-to-r from-teal-500 to-cyan-400' : 'bg-gradient-to-r from-purple-600 to-indigo-500'} scale-x-0 animate-[expand-width_1s_ease-out_forwards]`} />
        </div>

        <p 
          ref={descRef}
          className={`text-lg max-w-3xl mx-auto ${subHeadingColor} mb-12 font-medium leading-relaxed`}
        >
          Here are the technologies and tools I work with to create amazing digital experiences and bring ideas to life.
        </p>

        {/* Grid layout */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          {skillsData.map((skill, index) => (
            <TiltCard 
              key={index} 
              isDarkMode={isDarkMode} 
              intensity={15}
              className="w-full"
            >
              <div 
                className={`flex flex-col items-start p-5 rounded-2xl border ${cardBorder} ${cardBg} shadow-lg 
                            backdrop-blur-md transition-all duration-300 h-full w-full`}
              >
                <div className="flex items-center justify-between w-full mb-4">
                  <div className="flex items-center">
                    <div className={`text-4xl ${iconColor} mr-3 hidden sm:block transform group-hover:scale-110 transition-transform duration-300`}>
                      {skill.icon}
                    </div>
                    <h3 className={`text-base md:text-lg font-bold ${skillNameColor}`}>
                      {skill.name}
                    </h3>
                  </div>
                  <p className={`text-xs md:text-sm font-semibold ${skillPercentageColor}`}>
                    {skill.percentage}%
                  </p>
                </div>
                
                <div className="w-full">
                  <div className={`w-full h-2 rounded-full ${progressBarBg} overflow-hidden`}>
                    <div 
                      className={`h-full rounded-full ${progressBarFill} transition-all duration-1000 ease-out`} 
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
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

export default Skills;