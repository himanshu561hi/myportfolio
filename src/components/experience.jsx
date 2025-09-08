// src/components/Experience.jsx

import React from 'react';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';


function Experience({ isDarkMode }) {
  const sectionBg = isDarkMode ? "bg-gradient-to-br from-gray-950 to-gray-900" : "bg-gradient-to-br from-indigo-50 to-purple-100";
  const headingColor = isDarkMode ? "text-white" : "text-gray-900";
  const subHeadingColor = isDarkMode ? "text-cyan-400" : "text-indigo-600";
  const cardBg = isDarkMode ? "bg-gray-700" : "bg-gray-100";
  const cardTextColor = isDarkMode ? "text-white" : "text-gray-800";
  const textColor = isDarkMode ? "text-gray-400" : "text-gray-600";
  const lineColor = isDarkMode ? "border-l-gray-600" : "border-l-gray-300";
  const dotColor = isDarkMode ? "bg-teal-400" : "bg-indigo-600";
  const linkColor = isDarkMode ? "text-teal-300 hover:text-teal-200" : "text-indigo-600 hover:text-indigo-500";

  const experienceData = [
    {
      id: 1,
      role: "Web Development Intern",
      company: "CodeAlpha",
      duration: "Jan 2025 - Apr 2025",
      description: "Developed and maintained web applications using React and Node.js. Collaborated with a team of developers to deliver high-quality code and scalable solutions.",
      icon: <FaBriefcase />,
      certificateUrl: "https://drive.google.com/file/d/1ldM9KMykcnG7cChzlpH5NLGVAUOH_FmD/view?usp=sharing"
    },
    {
      id: 2,
      role: "Web Development Intern",
      company: "Codsoft",
      duration: "Sep 2023 - Oct 2023",
      description: "Assisted in the development of front-end components and worked with RESTful APIs. Gained hands-on experience in modern web development practices.",
      icon: <FaBriefcase />,
      certificateUrl: "https://drive.google.com/file/d/1HVPXoHS7Yd6Ro8DxLESTj7iTTWxIxaQx/view?usp=sharing"
    },
    {
      id: 3,
      role: "Hackground India 2k25",
      company: "TechVerse",
      duration: "Sep 2025",
      description: "",
      icon: <FaBriefcase />,
      certificateUrl: "https://drive.google.com/file/d/1vxq5uaKbmijLbEAzThQ0EhZ59K8Arngf/view?usp=sharing"
    }
  ];

  return (
    <section id="experience" className={`min-h-screen py-16 lg:py-24 flex items-center ${sectionBg} transition-colors duration-300`}>
      <div className="container mx-auto px-4 md:px-12 text-center">
        <span className={`text-xl font-semibold ${subHeadingColor}`}>My Journey</span>
        <h2 className={`text-4xl lg:text-5xl font-extrabold ${headingColor} mb-16`}>
          Work Experience & Professional History
        </h2>

        <div className="flex flex-col items-center">
          <div className="relative border-l-4 border-gray-300 dark:border-gray-600 pl-8">
            {experienceData.map((item) => (
              <div key={item.id} className="mb-10 relative">
                {/* Timeline dot */}
                <div className={`absolute -left-10 transform -translate-y-1/2 mt-6 h-6 w-6 rounded-full flex items-center justify-center ${dotColor}`}>
                  <span className="text-sm text-white">{item.icon}</span>
                </div>
                
                {/* Timeline card */}
                <div className={`p-6 rounded-xl text-left ${cardBg} shadow-lg transition-colors duration-300`}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className={`text-xl font-bold ${cardTextColor}`}>{item.role}</h3>
                    <span className={`text-sm ${textColor}`}>{item.duration}</span>
                  </div>
                  <p className={`text-md font-medium ${subHeadingColor} mb-2`}>{item.company}</p>
                  <p className={`text-sm ${textColor} mb-4`}>
                    {item.description}
                  </p>
                  <a 
                    href={item.certificateUrl} 
                    download 
                    className={`inline-flex items-center text-sm font-semibold ${linkColor}`}
                  >
                    Download Certificate
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;