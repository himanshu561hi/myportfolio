import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt, FaCode } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si';
import { IoLogoPwa } from "react-icons/io5";

function Skills({ isDarkMode }) {
  const sectionBg = isDarkMode ? "bg-gray-950" : "bg-gray-100";
  const headingColor = isDarkMode ? "text-white" : "text-gray-900";
  const subHeadingColor = isDarkMode ? "text-gray-400" : "text-gray-600";
  const cardBg = isDarkMode ? "bg-gray-800/60 backdrop-blur-md" : "bg-white/60 backdrop-blur-md";
  const cardBorder = isDarkMode ? "border-gray-700" : "border-gray-200";
  const iconColor = isDarkMode ? "text-teal-400" : "text-indigo-600";
  const skillNameColor = isDarkMode ? "text-white" : "text-gray-800";
  const skillPercentageColor = isDarkMode ? "text-gray-400" : "text-gray-600";
  const progressBarBg = isDarkMode ? "bg-gray-700" : "bg-gray-300";
  const progressBarFill = isDarkMode ? "bg-purple-600" : "bg-purple-500";
  
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
    <section id="skills" className={`py-16 lg:py-24 ${sectionBg} transition-colors duration-300`}>
      <div className="container mx-auto px-4 md:px-12 text-center">
        <h2 className={`text-3xl lg:text-5xl font-extrabold ${headingColor} mb-4`}>
          Skills & Expertise
        </h2>
        <p className={`text-lg max-w-3xl mx-auto ${subHeadingColor} mb-12`}>
          Here are the technologies and tools I work with to create amazing digital experiences and bring ideas to life.
        </p>

        {/* This div handles the layout for all screen sizes */}
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-start p-3 md:p-4 rounded-xl border ${cardBorder} ${cardBg} shadow-lg 
                          transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}
            >
              {/* This flex container for icon, name and percentage */}
              <div className="flex items-center justify-between w-full mb-2 md:mb-4"> {/* Adjusted margin-bottom */}
                {/* Conditional rendering for icon based on screen size */}
                <div className="flex items-center">
                  <div className={`text-3xl ${iconColor} mr-3 hidden md:block`}>
                    {skill.icon}
                  </div>
                  <h3 className={`text-lg md:text-xl font-bold ${skillNameColor}`}> {/* Adjusted font size */}
                    {skill.name}
                  </h3>
                </div>
                <p className={`text-sm ${skillPercentageColor}`}>
                  {skill.percentage}%
                </p>
              </div>
              
              <div className="w-full">
                <div className={`w-full h-1.5 rounded-full ${progressBarBg} overflow-hidden`}>
                  <div 
                    className={`h-full rounded-full ${progressBarFill}`} 
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;