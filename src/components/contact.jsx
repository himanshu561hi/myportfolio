// src/components/Contact.jsx

import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaHandshake, FaDownload } from 'react-icons/fa';
import resume from '../assets/resume.pdf';

function Contact({ isDarkMode }) {
  // const sectionBg = isDarkMode ? "bg-gradient-to-br from-gray-950 to-gray-900" : "bg-gradient-to-br from-indigo-50 to-purple-100";

  const sectionBg = isDarkMode ? "bg-gradient-to-r from-gray-950 to-gray-950" : "bg-gradient-to-r from-indigo-50 to-purple-100";
  const headingColor = isDarkMode ? "text-white" : "text-gray-900";
  const paraColor = isDarkMode ? "text-gray-400" : "text-gray-600";
  const cardBg = isDarkMode ? "bg-gray-800/60 backdrop-blur-md" : "bg-white/60 backdrop-blur-md";
  const cardBorder = isDarkMode ? "border-gray-700" : "border-gray-200";
  const cardIconBg = isDarkMode ? "bg-teal-500/10" : "bg-indigo-600/10";
  const cardIconColor = isDarkMode ? "text-teal-400" : "text-indigo-600";
  const cardTitleColor = isDarkMode ? "text-white" : "text-gray-900";
  const cardInfoColor = isDarkMode ? "text-gray-400" : "text-gray-600";
  
  return (
    <section id="contact" className={`min-h-screen py-16 lg:py-24 flex items-center text-center ${sectionBg} transition-colors duration-300`}>
      <div className="container mx-auto px-8 md:px-4">
        <h2 className={`text-3xl lg:text-5xl font-extrabold ${headingColor} mb-4`}>
          Let's Work Together!
        </h2>
        <p className={`text-lg max-w-3xl mx-auto ${paraColor} mb-12`}>
          Ready to bring your ideas to life? I'm passionate about creating exceptional digital experiences and would love to collaborate on your next project.
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Card 1: Email */}
          <div className={`flex flex-col items-center justify-center p-8 rounded-xl border ${cardBorder} ${cardBg} shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}>
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${cardIconBg}`}>
              <FaEnvelope className={`text-2xl ${cardIconColor}`} />
            </div>
            <h3 className={`text-xl font-bold ${cardTitleColor}`}>Email</h3>
            <p className={`text-md ${cardInfoColor}`}>himanshu561hi@gmail.com</p>
          </div>
          
          {/* Card 2: Phone */}
          <div className={`flex flex-col items-center justify-center p-8 rounded-xl border ${cardBorder} ${cardBg} shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}>
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${cardIconBg}`}>
              <FaPhone className={`text-2xl ${cardIconColor}`} />
            </div>
            <h3 className={`text-xl font-bold ${cardTitleColor}`}>Phone</h3>
            <p className={`text-md ${cardInfoColor}`}>+91 8090860670</p>
          </div>
          
          {/* Card 3: Location */}
          <div className={`flex flex-col items-center justify-center p-8 rounded-xl border ${cardBorder} ${cardBg} shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}>
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${cardIconBg}`}>
              <FaMapMarkerAlt className={`text-2xl ${cardIconColor}`} />
            </div>
            <h3 className={`text-xl font-bold ${cardTitleColor}`}>Location</h3>
            <p className={`text-md ${cardInfoColor}`}>Ghaziabad, India</p>
          </div>
        </div>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <a href="https://www.linkedin.com/in/himanshu561hi/" className="flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-teal-600 dark:to-cyan-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <FaHandshake className="mr-2" /> Get In Touch
          </a>
          <a href={resume} className="flex items-center justify-center px-8 py-4 rounded-full border border-gray-400 dark:border-gray-600 bg-white/10 dark:bg-gray-700/50 text-gray-800 dark:text-white font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            <FaDownload className="mr-2" /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;