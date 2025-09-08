// // src/components/Skills.jsx

// import React from 'react';
// import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt, FaCode } from 'react-icons/fa';
// import { SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si';
// import { IoLogoPwa } from "react-icons/io5";

// function Skills({ isDarkMode }) {
//   const sectionBg = isDarkMode ? "bg-gray-950" : "bg-gray-100";
//   const headingColor = isDarkMode ? "text-white" : "text-gray-900";
//   const cardBg = isDarkMode ? "bg-gray-800/60 backdrop-blur-md" : "bg-white/60 backdrop-blur-md";
//   const cardBorder = isDarkMode ? "border-gray-700" : "border-gray-200";
//   const iconColor = isDarkMode ? "text-teal-400" : "text-indigo-600";
//   const skillNameColor = isDarkMode ? "text-white" : "text-gray-800";
//   const skillPercentageColor = isDarkMode ? "text-gray-400" : "text-gray-600";
//   const progressBarBg = isDarkMode ? "bg-gray-700" : "bg-gray-300";
//   const progressBarFill = isDarkMode ? "bg-purple-600" : "bg-purple-500";
  
//   const skillsData = [
//     { name: "HTML5", icon: <FaHtml5 />, percentage: "90%" },
//     { name: "CSS3", icon: <FaCss3Alt />, percentage: "85%" },
//     { name: "JavaScript", icon: <FaJs />, percentage: "60%" },
//     { name: "React.js", icon: <FaReact />, percentage: "65%" },
//     { name: "Tailwind CSS", icon: <SiTailwindcss />, percentage: "80%" },
//     { name: "Express.js", icon: <SiExpress />, percentage: "45%" },
//     { name: "Node.js", icon: <FaNodeJs />, percentage: "50%" },
//     { name: "MongoDB", icon: <SiMongodb />, percentage: "62%" },
//     { name: "C++", icon: <FaCode />, percentage: "40%" },
//     { name: "Python", icon: <FaPython />, percentage: "45%" },
//     { name: "DSA (Basic)", icon: <IoLogoPwa />, percentage: "6%" },
//   ];

//   return (
//     <section id="skills" className={`py-16 lg:py-24 ${sectionBg} transition-colors duration-300`}>
//       <div className="container mx-auto px-4 md:px-12 text-center">
//         <h2 className={`text-5xl font-extrabold ${headingColor} mb-12`}>
//           Skills & Expertise
//         </h2>
        

//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
//           {skillsData.map((skill, index) => (
//             <div 
//               key={index} 
//               className={`flex flex-col items-center justify-between p-6 rounded-xl border ${cardBorder} ${cardBg} shadow-lg 
//                           transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}
//             >
//               <div className={`text-6xl ${iconColor} mb-4`}>
//                 {skill.icon}
//               </div>
//               <h3 className={`text-lg font-bold ${skillNameColor} mb-3`}>{skill.name}</h3>
//               <div className="w-full text-center">
//                 <p className={`text-sm ${skillPercentageColor} mb-1`}>{skill.percentage}</p>
//                 <div className={`w-full h-1.5 rounded-full ${progressBarBg} overflow-hidden`}>
//                   <div 
//                     className={`h-full rounded-full ${progressBarFill}`} 
//                     style={{ width: skill.percentage }}
//                   ></div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Skills;





// src/components/Skills.jsx

import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt, FaCode } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si';
import { IoLogoPwa } from "react-icons/io5";

function Skills({ isDarkMode }) {
  const sectionBg = isDarkMode ? "bg-gray-950" : "bg-gray-100";
  const headingColor = isDarkMode ? "text-white" : "text-gray-900";
  const subHeadingColor = isDarkMode ? "text-gray-400" : "text-gray-600"; // Added this variable for the new line
  const cardBg = isDarkMode ? "bg-gray-800/60 backdrop-blur-md" : "bg-white/60 backdrop-blur-md";
  const cardBorder = isDarkMode ? "border-gray-700" : "border-gray-200";
  const iconColor = isDarkMode ? "text-teal-400" : "text-indigo-600";
  const skillNameColor = isDarkMode ? "text-white" : "text-gray-800";
  const skillPercentageColor = isDarkMode ? "text-gray-400" : "text-gray-600";
  const progressBarBg = isDarkMode ? "bg-gray-700" : "bg-gray-300";
  const progressBarFill = isDarkMode ? "bg-purple-600" : "bg-purple-500";
  
  const skillsData = [
    { name: "HTML5", icon: <FaHtml5 />, percentage: "90%" },
    { name: "CSS3", icon: <FaCss3Alt />, percentage: "85%" },
    { name: "JavaScript", icon: <FaJs />, percentage: "80%" },
    { name: "React.js", icon: <FaReact />, percentage: "75%" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, percentage: "80%" },
    { name: "Express.js", icon: <SiExpress />, percentage: "70%" },
    { name: "Node.js", icon: <FaNodeJs />, percentage: "70%" },
    { name: "MongoDB", icon: <SiMongodb />, percentage: "82%" },
    { name: "C++", icon: <FaCode />, percentage: "60%" },
    { name: "Python", icon: <FaPython />, percentage: "70%" },
    { name: "DSA (Basic)", icon: <IoLogoPwa />, percentage: "60%" },
  ];

  return (
    <section id="skills" className={`py-16 lg:py-24 ${sectionBg} transition-colors duration-300`}>
      <div className="container mx-auto px-4 md:px-12 text-center">
        <h2 className={`text-5xl font-extrabold ${headingColor} mb-4`}>
          Skills & Expertise
        </h2>
        <p className={`text-lg max-w-3xl mx-auto ${subHeadingColor} mb-12`}>
          Here are the technologies and tools I work with to create amazing digital experiences and bring ideas to life.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {skillsData.map((skill, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center justify-between p-6 rounded-xl border ${cardBorder} ${cardBg} shadow-lg 
                          transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}
            >
              <div className={`text-6xl ${iconColor} mb-4`}>
                {skill.icon}
              </div>
              <h3 className={`text-lg font-bold ${skillNameColor} mb-3`}>{skill.name}</h3>
              <div className="w-full text-center">
                <p className={`text-sm ${skillPercentageColor} mb-1`}>{skill.percentage}</p>
                <div className={`w-full h-1.5 rounded-full ${progressBarBg} overflow-hidden`}>
                  <div 
                    className={`h-full rounded-full ${progressBarFill}`} 
                    style={{ width: skill.percentage }}
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