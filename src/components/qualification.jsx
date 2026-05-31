// src/components/Qualification.jsx

import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import DecryptedText from './DecryptedText';
import TiltCard from './TiltCard';
import SectionParticles from './SectionParticles';

function Qualification({ isDarkMode }) {
  const sectionBg = isDarkMode 
    ? "bg-[#030014]" 
    : "bg-indigo-50/15 backdrop-blur-sm";

  const headingColor = isDarkMode ? "text-white" : "text-gray-900";
  const subHeadingColor = isDarkMode ? "text-cyan-400" : "text-indigo-600";
  const cardBg = isDarkMode ? "bg-[#0d0925] border border-purple-500/20 text-white" : "bg-white/60 backdrop-blur-md";
  const cardTextColor = isDarkMode ? "text-white" : "text-gray-800";
  const textColor = isDarkMode ? "text-gray-300" : "text-gray-600";
  const iconColor = isDarkMode ? "text-teal-400" : "text-purple-600";

  const qualificationsData = [
    {
      id: 1,
      degree: "Bachelor of Technology",
      institution: "Hi-Tech Institute Of Engineering & Technology",
      duration: "2023 - 2027",
      description: "Computer Science & Engineering",
      marks: "6.8 CGPA",
      icon: <FaGraduationCap />,
    },
    {
      id: 2,
      degree: "12th Grade",
      institution: "B.N. Inter College",
      duration: "2020 - 2022",
      description: "Science Stream",
      marks: "64%",
      icon: <FaGraduationCap />,
    },
    {
      id: 3,
      degree: "10th Grade",
      institution: "M.N.R.D. Inter College",
      duration: "2018 - 2020",
      description: "All Subjects",
      marks: "78%",
      icon: <FaGraduationCap />,
    }
  ];

  return (
    <section id="qualification" className={`relative py-16 lg:py-24 flex items-center ${sectionBg} transition-colors duration-300 overflow-hidden z-10`}>
      
      {/* Canvas Nebula Particle Overlay */}
      <SectionParticles type="nebula" isDarkMode={isDarkMode} />

      <div className="container mx-auto px-8 md:px-4 text-center relative z-10 flex flex-col items-center">
        <span className={`text-xl font-bold mb-3 block ${subHeadingColor} tracking-wider uppercase`}>My Education</span>
        
        <div className="mb-16 flex flex-col items-center justify-center">
          <DecryptedText 
            text="Education & Certifications" 
            animateOn="view"
            speed={40}
            className={`text-3xl lg:text-5xl font-black tracking-tight ${headingColor}`}
            encryptedClassName="text-teal-400 font-mono"
          />
          <div className={`w-32 h-1.5 rounded-full mt-4 ${isDarkMode ? 'bg-gradient-to-r from-teal-500 to-cyan-400' : 'bg-gradient-to-r from-purple-600 to-indigo-500'} scale-x-0 animate-[expand-width_1s_ease-out_forwards]`} />
        </div>

        <div className="flex flex-col lg:flex-row items-stretch justify-center space-y-8 lg:space-y-0 lg:space-x-8 w-full">
          {qualificationsData.map((item) => (
            <TiltCard 
              key={item.id} 
              isDarkMode={isDarkMode} 
              intensity={12}
              className="w-full lg:w-1/3 flex"
            >
              <div 
                className={`flex flex-col items-center justify-center p-8 rounded-2xl w-full ${cardBg} border border-gray-300/10 shadow-lg backdrop-blur-md transition-colors duration-300 h-full`}
              >
                <div className={`p-4 mb-4 rounded-full ${iconColor} bg-teal-500/10 flex items-center justify-center`}>
                  <span className="text-4xl">{item.icon}</span>
                </div>
                <h3 className={`text-2xl font-bold ${cardTextColor} mb-2`}>{item.degree}</h3>
                <p className={`text-md font-semibold ${subHeadingColor} mb-2`}>{item.institution}</p>
                <p className={`text-sm ${textColor} mb-6 leading-relaxed`}>{item.description}</p>
                <div className="mt-auto">
                  <p className={`text-lg font-bold ${cardTextColor} mb-1`}>{item.marks}</p>
                  <p className={`text-xs font-semibold ${textColor}`}>{item.duration}</p>
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

export default Qualification;