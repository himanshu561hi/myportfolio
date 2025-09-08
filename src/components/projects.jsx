// import React from 'react';

// import projectImage1 from '../assets/project1.png';
// import projectImage2 from '../assets/project2.png';
// import projectImage3 from '../assets/project3.png';
// import { FaGithub } from 'react-icons/fa'; 

// function Projects({ isDarkMode }) {
//   const sectionBg = isDarkMode ? "bg-gray-900" : "bg-gray-100";
//   const headingColor = isDarkMode ? "text-white" : "text-gray-900";
//   const subHeadingColor = isDarkMode ? "text-gray-400" : "text-gray-600";
//   const linkColor = isDarkMode ? "text-teal-400 hover:text-teal-300" : "text-purple-600 hover:text-purple-700";
//   const cardBg = isDarkMode ? "bg-gray-800" : "bg-white";

//   const cardTitleColor = isDarkMode ? "text-white" : "text-gray-900";
//   const cardDescriptionColor = isDarkMode ? "text-gray-400" : "text-gray-600";
//   const buttonBg = isDarkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-900 hover:bg-gray-800";
//   const buttonTextColor = "text-white";
//   const githubButtonBg = isDarkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-200 hover:bg-gray-300";
//   const githubButtonTextColor = isDarkMode ? "text-white" : "text-gray-800";

//   const projectsData = [
//     {
//       id: 1,
//       image: projectImage1,
//       category: "AI Career Coach",
//       title: "AI Career",
//       description: "AI-powered career coach providing personalized guidance, resume support, and skill-based recommendations.",
//       link: "https://example.com/project1",
//       githubLink: "https://github.com/your-profile/smooth-smoothies" 
//     },
//     {
//       id: 2,
//       image: projectImage2,
//       category: "Editor's Portfolio",
//       title: "XZ001MEDIA",
//       description: "Portfolio of a skilled editor presenting professional editing, creative storytelling, and sharp attention to detail across multiple content formats.",
//       link: "https://xz001mediaz.netlify.app/",
//       githubLink: "https://github.com/himanshu561hi/portfolio_nishant"
//     },
//     {
//       id: 3,
//       image: projectImage3,
//       category: "GYM Website",
//       title: "The GYM",
//       description: "A modern gym website offering fitness programs, training guidance, and membership details.",
//       link: "https://thegymdelhi.netlify.app/",
//       githubLink: "https://github.com/himanshu561hi/TheGYM" 
//     }
//   ];

//   return (
//     <section id="projects" className={`py-16 lg:py-24 ${sectionBg} transition-colors duration-300`}>
//       <div className="container mx-auto px-6 md:px-4 text-center">
//         <h2 className={`text-5xl font-extrabold ${headingColor} mb-4`}>Projects</h2>
//         <p className={`text-lg ${subHeadingColor} mb-12 max-w-3xl mx-auto`}>
//           Below you can see some examples of my recent work. Check out my complete{' '}
//           <a href="#" className={`font-semibold ${linkColor}`}>
//             portfolio
//           </a>
//           . Have a project you would like to discuss?{' '}
//           <a href="#" className={`font-semibold ${linkColor}`}>
//             Let's make something great together!
//           </a>
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {projectsData.map((project) => (
//             <div
//               key={project.id}
//               className={`rounded-xl ${cardBg} shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}
//             >
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-56 object-cover"
//               />
//               <div className="p-6 text-left">
//                 <p className={`text-sm ${subHeadingColor} mb-2`}>{project.category}</p>
//                 <h3 className={`text-xl font-bold ${cardTitleColor} mb-2`}>{project.title}</h3>
//                 <p className={`text-base ${cardDescriptionColor} mb-6`}>{project.description}</p>
                
//                 <div className="flex gap-4">
                  
//                   <a
//                     href={project.githubLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={`inline-flex items-center px-4 py-3 rounded-full ${githubButtonBg} ${githubButtonTextColor} font-semibold text-sm transition-colors duration-300`}
//                   >
//                     <FaGithub className="text-xl" />
//                   </a>
                  
                  
//                   <a
//                     href={project.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={`inline-flex items-center px-6 py-3 rounded-full ${buttonBg} ${buttonTextColor} font-semibold text-sm transition-colors duration-300`}
//                   >
//                     View project
//                     <span className="ml-2 text-xl">&rarr;</span>
//                   </a>
                  
                  
//                 </div>
//               </div>
//             </div>
//           ))}

//         </div>
//         {/* "View all" link now at the bottom */}
//         <div className="text-center mt-12">
//           <a href="https://github.com/himanshu561hi" className={`font-semibold ${linkColor} text-lg`}>
//             View all
//             <span className="ml-2 text-xl">&rarr;</span>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Projects;




// src/components/Projects.jsx

import React from 'react';
import projectImage1 from '../assets/project1.png';
import projectImage2 from '../assets/project2.png';
import projectImage3 from '../assets/project3.png';
import { FaGithub } from 'react-icons/fa';

function Projects({ isDarkMode }) {
  // const sectionBg = isDarkMode ? "bg-gray-900/80 backdrop-blur-sm" : "bg-gray-100/80 backdrop-blur-sm";

  const sectionBg = isDarkMode ? "bg-gradient-to-r from-gray-950 to-gray-950" : "bg-gradient-to-r from-indigo-50 to-purple-100";
  const headingColor = isDarkMode ? "text-white" : "text-gray-900";
  const subHeadingColor = isDarkMode ? "text-gray-400" : "text-gray-600";
  const linkColor = isDarkMode ? "text-teal-400 hover:text-teal-300" : "text-purple-600 hover:text-purple-700";
  const cardBg = isDarkMode ? "bg-gray-800/80 backdrop-blur-sm" : "bg-white/80 backdrop-blur-sm";
  const cardTitleColor = isDarkMode ? "text-white" : "text-gray-900";
  const cardDescriptionColor = isDarkMode ? "text-gray-400" : "text-gray-600";
  const buttonBg = isDarkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-900 hover:bg-gray-800";
  const buttonTextColor = "text-white";
  const githubButtonBg = isDarkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-200 hover:bg-gray-300";
  const githubButtonTextColor = isDarkMode ? "text-white" : "text-gray-800";

const projectsData = [
    {
      id: 1,
      image: projectImage1,
      category: "AI Career Coach",
      title: "AI Career",
      description: "AI-powered career coach providing personalized guidance, resume support, and skill-based recommendations.",
      link: "https://mindstep.netlify.app/",
      githubLink: "https://github.com/your-profile/smooth-smoothies" 
    },
    {
      id: 2,
      image: projectImage2,
      category: "Editor's Portfolio",
      title: "XZ001MEDIA",
      description: "Portfolio of a skilled editor presenting professional editing, creative storytelling, and sharp attention to detail across multiple content formats.",
      link: "https://xz001mediaz.netlify.app/",
      githubLink: "https://github.com/himanshu561hi/portfolio_nishant"
    },
    {
      id: 3,
      image: projectImage3,
      category: "GYM Website",
      title: "The GYM",
      description: "A modern gym website offering fitness programs, training guidance, and membership details.",
      link: "https://thegymdelhi.netlify.app/",
      githubLink: "https://github.com/himanshu561hi/TheGYM" 
    }
  ];
  return (
    <section id="projects" className={`py-16 lg:py-24 ${sectionBg} transition-colors duration-300 relative z-10`}>
      <div className="container mx-auto px-8 md:px-4 text-center">
        <h2 className={`text-3xl lg:text-5xl font-extrabold ${headingColor} mb-4`}>Projects</h2>
        <p className={`text-lg ${subHeadingColor} mb-12 max-w-3xl mx-auto`}>
          Below you can see some examples of my recent work. Check out my complete{' '}
          <a href="#" className={`font-semibold ${linkColor}`}>
            portfolio
          </a>
          . Have a project you would like to discuss?{' '}
          <a href="#" className={`font-semibold ${linkColor}`}>
            Let's make something great together!
          </a>
        </p>

        <div className="flex overflow-x-scroll snap-x space-x-6 pb-4 md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-16 md:overflow-visible">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className={`w-80 flex-shrink-0 snap-center rounded-xl ${cardBg} shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-left">
                <p className={`text-sm ${subHeadingColor} mb-2`}>{project.category}</p>
                <h3 className={`text-xl font-bold ${cardTitleColor} mb-2`}>{project.title}</h3>
                <p className={`text-base ${cardDescriptionColor} mb-6`}>{project.description}</p>
                
                <div className="flex gap-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center px-4 py-3 rounded-full ${githubButtonBg} ${githubButtonTextColor} font-semibold text-sm transition-colors duration-300`}
                  >
                    <FaGithub className="text-xl" />
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center px-6 py-3 rounded-full ${buttonBg} ${buttonTextColor} font-semibold text-sm transition-colors duration-300`}
                  >
                    View project
                    <span className="ml-2 text-xl">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* --- बदलाव यहाँ समाप्त होता है --- */}
        
        <div className="text-center mt-12">
          <a href="#" className={`font-semibold ${linkColor} text-lg`}>
            View all 
            <span className="ml-2 text-xl">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;