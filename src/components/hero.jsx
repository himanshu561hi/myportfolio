import React from 'react';
import profilePic from '../assets/pic.png';
import resume from '../assets/resume.pdf';
import { FaLaptopCode, FaMobileAlt, FaChartBar } from 'react-icons/fa';

function HeroSection({ isDarkMode }) {
  const sectionBg = isDarkMode ? "bg-gradient-to-br from-gray-950 to-gray-900" : "bg-gradient-to-br from-indigo-50 to-purple-100";
  
  const textColor = isDarkMode ? "text-gray-200" : "text-gray-800";
  const headingColor = isDarkMode ? "text-white" : "text-gray-900";
  const spanColor = isDarkMode ? "text-teal-400" : "text-purple-600";
  const paraColor = isDarkMode ? "text-gray-400" : "text-gray-600";
  const resumeBtnColor = isDarkMode ? "text-gray-300" : "text-gray-700";
  const resumeBtnHoverBg = isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100";
  const statColor = isDarkMode ? "text-white" : "text-gray-900";
  const statParaColor = isDarkMode ? "text-gray-400" : "text-gray-500";
  const imageBg = isDarkMode ? "bg-gray-800" : "bg-gray-100";
  const imageBorder = isDarkMode ? "border-gray-700" : "border-white";
  const imageSpinColor = isDarkMode ? "border-teal-400" : "border-purple-200";
  const iconBg = isDarkMode ? "bg-gray-700" : "bg-white";
  const iconColor = isDarkMode ? "text-teal-400" : "text-purple-600";
  const tagBg = isDarkMode ? "bg-gray-700" : "bg-gray-200";
  const tagTextColor = isDarkMode ? "text-gray-200" : "text-gray-700";

  const skills = ["React", "Node.js", "JavaScript", "Python", "MongoDB"];

  return (
    <section className={`relative min-h-screen flex items-center justify-center pt-30 pb-16 lg:pt-26 lg:pb-24 ${sectionBg} ${textColor} transition-colors duration-300 overflow-hidden`}>
      
      <div className="container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-8 md:px-4">
        {/* Left Side: Text, Buttons, Stats */}
        <div className="flex flex-col items-start text-left">
          <h1 className={`text-4xl lg:text-5xl font-extrabold leading-tight ${headingColor} mb-6`}>
            Building <span className={spanColor}>The Future</span> With 
            Code, Creativity 
            and Technology.
          </h1>
          <p className={`text-lg ${paraColor} mb-8 max-w-lg`}>
            Hi, I'm Himanshu! With more than 1 years of experience, <br />
            I'm ready to be a part of your wonderful project!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a href="https://www.linkedin.com/in/himanshu561hi/" className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-teal-600 dark:to-cyan-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Connect With Me
            </a>
            <a href={resume} className={`flex items-center ${resumeBtnColor} font-semibold py-3 px-6 rounded-full ${resumeBtnHoverBg} transition-colors duration-300`}>
              Resume <span className="ml-2 text-xl">&rarr;</span>
            </a>
          </div>

          {/* Skill Tags */}
          <div className="flex flex-wrap gap-2 mt-0">
            {skills.map((skill) => (
              <span
                key={skill}
                className={`flex items-center justify-center px-5 py-2.5 rounded-full ${tagBg} ${tagTextColor} font-medium text-sm border border-transparent transition-colors duration-300`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Right Side: Image and Surrounding Icons */}
        <div className="relative flex justify-center items-center min-h-[auto] lg:min-h-[auto]">
          {/* Main Image in circular frame */}
          <div className={`relative w-75 h-75 lg:w-96 lg:h-96 rounded-full flex items-center justify-center ${imageBg} shadow-xl overflow-hidden border-4 ${imageBorder}`}>
            <div className={`absolute inset-0 rounded-full border-8 ${imageSpinColor} animate-spin-slow`} style={{ animationDuration: '20s', borderTopColor: 'transparent', borderLeftColor: 'transparent' }}></div>
            <img
              src={profilePic}
              alt="Himanshu"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Floating Icons */}
          <div className={`absolute top-1/4 left-0 p-3 ${iconBg} rounded-full shadow-md ${iconColor} text-2xl`}>
            <FaLaptopCode />
          </div>
          <div className={`absolute top-1/33 right-0 p-3 ${iconBg} rounded-full shadow-md ${iconColor} text-2xl`}>
            <FaMobileAlt />
          </div>
          <div className={`absolute bottom-1/4 left-1/4 p-3 ${iconBg} rounded-full shadow-md ${iconColor} text-2xl`}>
            <FaChartBar />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;