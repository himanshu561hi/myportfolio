// src/components/About.jsx

import React from 'react';
import aboutImage from '../assets/about.png'; // Import your profile picture
import { FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa';

function About({ isDarkMode }) {
  const sectionBg = isDarkMode ? "bg-gray-800" : "bg-white";


  const headingColor = isDarkMode ? "text-white" : "text-gray-900";
  const subHeadingColor = isDarkMode ? "text-cyan-400" : "text-indigo-600";
  const paraColor = isDarkMode ? "text-gray-400" : "text-gray-600";
  const cardBg = isDarkMode ? "bg-gray-700" : "bg-gray-100";
  const iconColor = isDarkMode ? "text-cyan-400" : "text-indigo-600";
  
  return (
    <section id="about" className={`min-h-screen flex items-center py-16 lg:py-24 ${sectionBg} transition-colors duration-300`}>
      <div className="container mx-auto px-4 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-35 items-center">
        {/* Left Side: Image & Stats */}
        <div className="flex justify-center lg:justify-center mb-12 lg:mb-0">
          <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700">
            <img 
              src={aboutImage}
              alt="Himanshu Gupta"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col items-start text-left">
          <span className={`text-xl font-semibold mb-3 ${subHeadingColor}`}>About Me</span>
          <h3 className={`text-4xl lg:text-4xl font-extrabold leading-tight ${headingColor} mb-6`}>
            Passionate about Building <br /> Modern Web Experiences.
          </h3>
          <p className={`text-lg ${paraColor} mb-8`}>
            I'm a dedicated Full-Stack Developer with over 1 year of hands-on experience in creating dynamic and user-friendly websites. I specialize in the MERN stack and am always learning new technologies to deliver exceptional results.
          </p>

          <div className="flex flex-col space-y-4 w-full max-w-lg">
            <div className={`flex items-center p-4 rounded-xl ${cardBg} transition-colors duration-300`}>
              <FaCode className={`text-3xl mr-4 ${iconColor}`} />
              <div>
                <h3 className={`text-xl font-bold ${headingColor}`}>Expertise</h3>
                <p className={`text-sm ${paraColor}`}>Full-Stack Development with React, Node.js, and MongoDB.</p>
              </div>
            </div>
            <div className={`flex items-center p-4 rounded-xl ${cardBg} transition-colors duration-300`}>
              <FaBriefcase className={`text-3xl mr-4 ${iconColor}`} />
              <div>
                <h3 className={`text-xl font-bold ${headingColor}`}>Experience</h3>
                <p className={`text-sm ${paraColor}`}>1+ Years of professional experience in the industry.</p>
              </div>
            </div>
            <div className={`flex items-center p-4 rounded-xl ${cardBg} transition-colors duration-300`}>
              <FaGraduationCap className={`text-3xl mr-4 ${iconColor}`} />
              <div>
                <h3 className={`text-xl font-bold ${headingColor}`}>Education</h3>
                <p className={`text-sm ${paraColor}`}>Bachelor's Degree in Computer Science.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;