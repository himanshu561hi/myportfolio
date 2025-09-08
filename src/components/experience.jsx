// import React from 'react';
// import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

// function Experience({ isDarkMode }) {
//   // const sectionBg = isDarkMode ? "bg-gray-950/80 backdrop-blur-sm" : "bg-white/80 backdrop-blur-sm";

//   const sectionBg = isDarkMode ? "bg-gradient-to-r from-gray-950 to-gray-950" : "bg-gradient-to-r from-indigo-50 to-purple-100";
//   const headingColor = isDarkMode ? "text-white" : "text-gray-900";
//   const subHeadingColor = isDarkMode ? "text-cyan-400" : "text-indigo-600";
//   const cardBg = isDarkMode ? "bg-gray-800" : "bg-gray-100";
//   const cardTextColor = isDarkMode ? "text-white" : "text-gray-800";
//   const textColor = isDarkMode ? "text-gray-400" : "text-gray-600";
//   const lineColor = isDarkMode ? "bg-gray-700" : "bg-gray-300";
//   const dotColor = isDarkMode ? "bg-teal-400" : "bg-indigo-600";
//   const linkColor = isDarkMode ? "text-teal-300 hover:text-teal-200" : "text-indigo-600 hover:text-indigo-500";
//   const iconColor = isDarkMode ? "text-white" : "text-white";

//   const experienceData = [
//     {
//       id: 1,
//       role: "Web Development Intern",
//       company: "CodeAlpha",
//       duration: "Jan 2025 - Apr 2025",
//       description: "Developed and maintained web applications using React and Node.js. Collaborated with a team of developers to deliver high-quality code and scalable solutions.",
//       icon: <FaBriefcase />,
//       certificateUrl: "https://drive.google.com/file/d/1HVPXoHS7Yd6Ro8DxLESTj7iTTWxIxaQx/view?usp=sharing"
//     },
//     {
//       id: 2,
//       role: "Web Development Intern",
//       company: "Codsoft",
//       duration: "Sep 2024 - Oct 2024",
//       description: "Assisted in the development of front-end components and worked with RESTful APIs. Gained hands-on experience in modern web development practices.",
//       icon: <FaBriefcase />,
//       certificateUrl: "https://drive.google.com/file/d/1ldM9KMykcnG7cChzlpH5NLGVAUOH_FmD/view?usp=sharing"
//     },
//     {
//       id: 3,
//       role: "Hackground India 2k25",
//       company: "TechVerse",
//       duration: "Sep 2025",
//       description: "Participated in a major hackathon event. Developed innovative solutions within a team environment.",
//       icon: <FaBriefcase />,
//       certificateUrl: "https://drive.google.com/file/d/1vxq5uaKbmijLbEAzThQ0EhZ59K8Arngf/view?usp=sharing"
//     }
//   ];

//   return (
//     <section id="experience" className={`min-h-screen py-16 lg:py-24 flex items-center justify-center ${sectionBg} transition-colors duration-300`}>
//       <div className="container mx-auto px-8 md:px-4 text-center">
//         <span className={`text-xl font-semibold ${subHeadingColor}`}>My Journey</span>
//         <h2 className={`text-3xl lg:text-5xl font-extrabold ${headingColor} mb-16`}>
//           Work Experience & Professional History
//         </h2>

//         {/* Desktop Timeline */}
//         <div className="hidden md:block relative w-full">
//           <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 ${lineColor}`}></div>
//           <div className="flex flex-col items-center">
//             {experienceData.map((item, index) => (
//               <div 
//                 key={item.id} 
//                 className={`flex w-full justify-between items-center mb-10 relative`}
//               >
//                 {/* Left side content */}
//                 {index % 2 === 0 ? (
//                   <>
//                     <div className="w-5/12 p-6 rounded-xl text-right">
//                       <h3 className={`text-2xl font-bold ${cardTextColor}`}>{item.role}</h3>
//                       <p className={`text-md font-medium ${subHeadingColor} mb-2`}>{item.company}</p>
//                       <span className={`text-sm ${textColor} block mb-2`}>{item.duration}</span>
//                       <p className={`text-sm ${textColor} mb-4`}>{item.description}</p>
//                       {item.certificateUrl && (
//                         <a 
//                           href={item.certificateUrl} 
//                           target="_blank" 
//                           rel="noopener noreferrer" 
//                           className={`inline-flex items-center text-sm font-semibold ${linkColor}`}
//                         >
//                           View Certificate
//                         </a>
//                       )}
//                     </div>
//                     <div className={`absolute left-1/2 transform -translate-x-1/2 h-10 w-10 rounded-full ${dotColor} flex items-center justify-center`}>
//                       <span className={`${iconColor}`}>{item.icon}</span>
//                     </div>
//                     <div className="w-5/12"></div>
//                   </>
//                 ) : (
//                   <>
//                     <div className="w-5/12"></div>
//                     <div className={`absolute left-1/2 transform -translate-x-1/2 h-10 w-10 rounded-full ${dotColor} flex items-center justify-center`}>
//                       <span className={`${iconColor}`}>{item.icon}</span>
//                     </div>
//                     <div className="w-5/12 p-6 rounded-xl text-left">
//                       <h3 className={`text-2xl font-bold ${cardTextColor}`}>{item.role}</h3>
//                       <p className={`text-md font-medium ${subHeadingColor} mb-2`}>{item.company}</p>
//                       <span className={`text-sm ${textColor} block mb-2`}>{item.duration}</span>
//                       <p className={`text-sm ${textColor} mb-4`}>{item.description}</p>
//                       {item.certificateUrl && (
//                         <a 
//                           href={item.certificateUrl} 
//                           target="_blank" 
//                           rel="noopener noreferrer" 
//                           className={`inline-flex items-center text-sm font-semibold ${linkColor}`}
//                         >
//                           View Certificate
//                         </a>
//                       )}
//                     </div>
//                   </>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
        
//         {/* Mobile Timeline (as a fallback) */}
//         <div className="md:hidden flex flex-col items-center">
//           <div className="relative border-l-4 border-gray-300 dark:border-gray-600 pl-8">
//             {experienceData.map((item) => (
//               <div key={item.id} className="mb-10 relative">
//                 <div className={`absolute -left-5 transform -translate-y-1/2 top-4 h-10 w-10 rounded-full ${dotColor} flex items-center justify-center`}>
//                   <span className={`${iconColor}`}>{item.icon}</span>
//                 </div>
//                 <div className={`p-6 rounded-xl text-left ${cardBg} shadow-lg transition-colors duration-300`}>
//                   <h3 className={`text-xl font-bold ${cardTextColor}`}>{item.role}</h3>
//                   <p className={`text-md font-medium ${subHeadingColor} mb-2`}>{item.company}</p>
//                   <span className={`text-sm ${textColor} block mb-2`}>{item.duration}</span>
//                   <p className={`text-sm ${textColor} mb-4`}>{item.description}</p>
//                   {item.certificateUrl && (
//                     <a 
//                       href={item.certificateUrl} 
//                       target="_blank" 
//                       rel="noopener noreferrer" 
//                       className={`inline-flex items-center text-sm font-semibold ${linkColor}`}
//                     >
//                       View Certificate
//                     </a>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Experience;




// src/components/Experience.jsx

import React from 'react';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

function Experience({ isDarkMode }) {
  const sectionBg = isDarkMode ? "bg-gradient-to-r from-gray-950 to-gray-950" : "bg-gradient-to-r from-indigo-50 to-purple-100";
  const headingColor = isDarkMode ? "text-white" : "text-gray-900";
  const subHeadingColor = isDarkMode ? "text-cyan-400" : "text-indigo-600";
  const cardBg = isDarkMode ? "bg-gray-800" : "bg-gray-100";
  const cardTextColor = isDarkMode ? "text-white" : "text-gray-800";
  const textColor = isDarkMode ? "text-gray-400" : "text-gray-600";
  const lineColor = isDarkMode ? "bg-gray-700" : "bg-gray-300";
  const dotColor = isDarkMode ? "bg-teal-400" : "bg-indigo-600";
  const linkColor = isDarkMode ? "text-teal-300 hover:text-teal-200" : "text-indigo-600 hover:text-indigo-500";
  const iconColor = isDarkMode ? "text-white" : "text-white";

  const experienceData = [
    {
      id: 1,
      role: "Web Development Intern",
      company: "CodeAlpha",
      duration: "Jan 2025 - Apr 2025",
      description: "Developed and maintained web applications using React and Node.js. Collaborated with a team of developers to deliver high-quality code and scalable solutions.",
      icon: <FaBriefcase />,
      certificateUrl: "https://drive.google.com/file/d/1HVPXoHS7Yd6Ro8DxLESTj7iTTWxIxaQx/view?usp=sharing"
    },
    {
      id: 2,
      role: "Web Development Intern",
      company: "Codsoft",
      duration: "Sep 2024 - Oct 2024",
      description: "Assisted in the development of front-end components and worked with RESTful APIs. Gained hands-on experience in modern web development practices.",
      icon: <FaBriefcase />,
      certificateUrl: "https://drive.google.com/file/d/1ldM9KMykcnG7cChzlpH5NLGVAUOH_FmD/view?usp=sharing"
    },
    {
      id: 3,
      role: "Hackground India 2k25",
      company: "TechVerse",
      duration: "Sep 2025",
      description: "Participated in a major hackathon event. Developed innovative solutions within a team environment.",
      icon: <FaBriefcase />,
      certificateUrl: "https://drive.google.com/file/d/1vxq5uaKbmijLbEAzThQ0EhZ59K8Arngf/view?usp=sharing"
    }
  ];

  return (
    <section id="experience" className={`min-h-screen py-16 lg:py-24 flex items-center justify-center ${sectionBg} transition-colors duration-300`}>
      <div className="container mx-auto px-8 md:px-4 text-center">
        <span className={`text-xl font-semibold ${subHeadingColor}`}>My Journey</span>
        <h2 className={`text-3xl lg:text-5xl font-extrabold ${headingColor} mb-16`}>
          Work Experience & Professional History
        </h2>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative w-full">
          <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 ${lineColor}`}></div>
          <div className="flex flex-col items-center">
            {experienceData.map((item, index) => (
              <div 
                key={item.id} 
                className={`flex w-full justify-between items-center mb-10 relative`}
              >
                {/* Left side content */}
                {index % 2 === 0 ? (
                  <>
                    <div className="w-5/12 p-6 rounded-xl text-right">
                      <h3 className={`text-2xl font-bold ${cardTextColor}`}>{item.role}</h3>
                      <p className={`text-md font-medium ${subHeadingColor} mb-2`}>{item.company}</p>
                      <span className={`text-sm ${textColor} block mb-2`}>{item.duration}</span>
                      <p className={`text-sm ${textColor} mb-4`}>{item.description}</p>
                      {item.certificateUrl && (
                        <a 
                          href={item.certificateUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className={`inline-flex items-center text-sm font-semibold ${linkColor}`}
                        >
                          View Certificate
                        </a>
                      )}
                    </div>
                    <div className={`absolute left-1/2 transform -translate-x-1/2 h-10 w-10 rounded-full ${dotColor} flex items-center justify-center`}>
                      <span className={`${iconColor}`}>{item.icon}</span>
                    </div>
                    <div className="w-5/12"></div>
                  </>
                ) : (
                  <>
                    <div className="w-5/12"></div>
                    <div className={`absolute left-1/2 transform -translate-x-1/2 h-10 w-10 rounded-full ${dotColor} flex items-center justify-center`}>
                      <span className={`${iconColor}`}>{item.icon}</span>
                    </div>
                    <div className="w-5/12 p-6 rounded-xl text-left">
                      <h3 className={`text-2xl font-bold ${cardTextColor}`}>{item.role}</h3>
                      <p className={`text-md font-medium ${subHeadingColor} mb-2`}>{item.company}</p>
                      <span className={`text-sm ${textColor} block mb-2`}>{item.duration}</span>
                      <p className={`text-sm ${textColor} mb-4`}>{item.description}</p>
                      {item.certificateUrl && (
                        <a 
                          href={item.certificateUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className={`inline-flex items-center text-sm font-semibold ${linkColor}`}
                        >
                          View Certificate
                        </a>
                      )}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile Timeline (as a fallback) */}
        <div className="md:hidden flex flex-col items-center">
          <div className="relative pl-8"> {/* यहां से border-l-4 हटा दिया गया है */}
            {experienceData.map((item) => (
              <div key={item.id} className="mb-10 relative">
                <div className={`absolute -left-5 transform -translate-y-1/2 top-4 h-10 w-10 rounded-full ${dotColor} flex items-center justify-center`}>
                  <span className={`${iconColor}`}>{item.icon}</span>
                </div>
                <div className={`p-6 rounded-xl text-left ${cardBg} shadow-lg transition-colors duration-300`}>
                  <h3 className={`text-xl font-bold ${cardTextColor}`}>{item.role}</h3>
                  <p className={`text-md font-medium ${subHeadingColor} mb-2`}>{item.company}</p>
                  <span className={`text-sm ${textColor} block mb-2`}>{item.duration}</span>
                  <p className={`text-sm ${textColor} mb-4`}>{item.description}</p>
                  {item.certificateUrl && (
                    <a 
                      href={item.certificateUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`inline-flex items-center text-sm font-semibold ${linkColor}`}
                    >
                      View Certificate
                    </a>
                  )}
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