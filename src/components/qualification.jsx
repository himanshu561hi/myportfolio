// src/components/Qualification.jsx

import React from 'react';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';

function Qualification({ isDarkMode }) {
  const sectionBg = isDarkMode ? "bg-gray-800" : "bg-white";
  const headingColor = isDarkMode ? "text-white" : "text-gray-900";
  const subHeadingColor = isDarkMode ? "text-cyan-400" : "text-indigo-600";
  const cardBg = isDarkMode ? "bg-gray-700" : "bg-gray-100";
  const cardTextColor = isDarkMode ? "text-white" : "text-gray-800";
  const textColor = isDarkMode ? "text-gray-400" : "text-gray-600";
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
    <section id="qualification" className={`py-16 lg:py-24 flex items-center ${sectionBg} transition-colors duration-300`}>
      <div className="container mx-auto px-4 md:px-12 text-center">
        <span className={`text-xl font-semibold ${subHeadingColor}`}>My Education</span>
        <h2 className={`text-3xl lg:text-5xl font-extrabold ${headingColor} mb-16`}>
          Education & Certifications
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8">
          {qualificationsData.map((item) => (
            <div 
              key={item.id} 
              className={`flex flex-col items-center justify-center p-6 rounded-xl w-full lg:w-1/3 ${cardBg} shadow-lg transition-colors duration-300 transform hover:scale-105 hover:shadow-2xl`}
            >
              <div className={`p-3 mb-4 rounded-full ${iconColor} bg-opacity-20`}>
                <span className="text-3xl">{item.icon}</span>
              </div>
              <h3 className={`text-xl font-bold ${cardTextColor} mb-1`}>{item.degree}</h3>
              <p className={`text-sm ${subHeadingColor} mb-2`}>{item.institution}</p>
              <p className={`text-sm ${textColor} mb-4`}>{item.description}</p>
              <div className="mt-auto"> {/* This div will hold the marks at the bottom */}
                <p className={`text-sm font-semibold ${cardTextColor}`}>{item.marks}</p>
                <p className={`text-xs ${textColor}`}>{item.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Qualification;