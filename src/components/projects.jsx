import React, { useState, useEffect } from 'react';
import projectImage1 from '../assets/project1.png';
import projectImage2 from '../assets/project2.png';
import projectImage3 from '../assets/project3.png';
import { FaGithub, FaTimes, FaGlobe, FaChevronRight } from 'react-icons/fa';
import DecryptedText from './DecryptedText';
import TiltCard from './TiltCard';
import ShapeGrid from './ShapeGrid';
import ScrollReveal from 'scrollreveal';

function Projects({ isDarkMode }) {
  const [flippedCards, setFlippedCards] = useState({});

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      delay: 150,
      reset: true // Animates both on scroll up and scroll down
    });

    sr.reveal('.projects-header', { delay: 100, origin: 'top' });
    sr.reveal('.project-card-perspective', { delay: 200, interval: 120, origin: 'bottom' });
  }, []);

  const toggleFlip = (id, event) => {
    if (event) event.stopPropagation();
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const sectionBg = isDarkMode 
    ? "bg-[#030014]" 
    : "bg-indigo-50/10 backdrop-blur-sm";

  const headingColor = isDarkMode ? "text-white" : "text-gray-900";
  const subHeadingColor = isDarkMode ? "text-gray-400" : "text-gray-600";
  const linkColor = isDarkMode ? "text-teal-400 hover:text-teal-300" : "text-purple-600 hover:text-purple-700";
  
  const cardTitleColor = isDarkMode ? "text-white" : "text-gray-900";
  const cardDescriptionColor = isDarkMode ? "text-gray-300" : "text-gray-600";
  const buttonBg = isDarkMode ? "bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 shadow-teal-500/10" : "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-indigo-500/10";
  const detailsBtnBg = isDarkMode ? "bg-[#0b0720] border border-purple-500/20 text-purple-300 hover:bg-[#120d36]" : "bg-gray-100 border border-gray-200 text-gray-700 hover:bg-gray-200";

  const projectsData = [
    {
      id: 1,
      image: projectImage1,
      category: "AI Career Coach",
      title: "MindStep AI",
      techStack: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS", "OpenAI API"],
      description: "AI-powered career coach providing personalized guidance, resume support, and skill-based recommendations.",
      elaboratedDescription: "MindStep AI is a full-stack career development ecosystem. Built on React and Node.js, it leverages advanced OpenAI models to parse user skills, deliver contextual career growth advice, conduct real-time AI resume grading, automate tailor-made cover letters, and build sequential, interactive tech skill roadmap tracks.",
      link: "https://mindstep.netlify.app/",
      githubLink: "https://github.com/himanshu561hi" 
    },
    {
      id: 2,
      image: projectImage2,
      category: "Editor's Portfolio",
      title: "XZ001MEDIA",
      techStack: ["React", "TailwindCSS", "Vite", "React Icons", "Framer Motion"],
      description: "Creative digital portfolio tailored for professional editors, showcasing video editing reels and creative motion assets.",
      elaboratedDescription: "XZ001MEDIA is a premium video production showcase application. It integrates robust customized HTML5 video modules, modern glassmorphic dynamic grid systems, fluid Framer Motion transitions, and fully responsive media feeds, delivering a striking 3D presentation deck for corporate editors and filmmakers.",
      link: "https://xz001mediazz.netlify.app/",
      githubLink: "https://github.com/himanshu561hi/portfolio_nishant"
    },
    {
      id: 3,
      image: projectImage3,
      category: "GYM Website",
      title: "The GYM",
      techStack: ["React", "Vite", "TailwindCSS", "React Icons", "VanillaTilt"],
      description: "A modern gym website offering fitness programs, training guidance, and membership details.",
      elaboratedDescription: "The GYM is an interactive hub for local physical fitness centers. Built with a high-fidelity mobile-first architecture, it features a working digital BMI calculator, animated schedule selectors, immersive tilt-action membership option cards, integrated trainer lists, and dynamic testimonials sliders.",
      link: "https://thegym01.netlify.app/",
      githubLink: "https://github.com/himanshu561hi/TheGYM" 
    }
  ];

  return (
    <section id="projects" className={`py-20 lg:py-28 ${sectionBg} transition-colors duration-300 relative z-10 overflow-hidden`}>
      
      {/* High-Contrast ShapeGrid Grid-Pattern Animated Canvas Background (Hexagon pattern in diagonal motion) */}
      <div className="absolute inset-0 w-full h-full -z-10 opacity-80 pointer-events-none">
        <ShapeGrid 
          speed={0.35} 
          squareSize={42}
          direction='diagonal'
          borderColor={isDarkMode ? 'rgba(168, 85, 247, 0.45)' : 'rgba(99, 102, 241, 0.4)'}
          hoverFillColor={isDarkMode ? 'rgba(45, 212, 191, 0.3)' : 'rgba(99, 102, 241, 0.2)'}
          shape='hexagon'
          hoverTrailAmount={6}
        />
      </div>

      <div className="container mx-auto px-8 md:px-6 relative z-10 flex flex-col items-center">
        
        <div className="projects-header mb-4 flex flex-col items-center text-center">
          <DecryptedText 
            text="Projects & Showcase" 
            animateOn="view"
            speed={40}
            className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight ${headingColor}`}
            encryptedClassName="text-purple-400 font-mono"
          />
          <div className={`w-32 h-1.5 rounded-full mt-4 ${isDarkMode ? 'bg-gradient-to-r from-[#8b5cf6] to-[#d946ef]' : 'bg-gradient-to-r from-purple-600 to-indigo-500'} scale-x-0 animate-[expand-width_1s_ease-out_forwards]`} />
          
          <p className={`text-lg ${subHeadingColor} mt-6 max-w-3xl mx-auto font-medium leading-relaxed`}>
            Below you can see some examples of my recent work. Check out my complete{' '}
            <a href="https://github.com/himanshu561hi" target="_blank" rel="noopener noreferrer" className={`font-semibold ${linkColor}`}>
              GitHub profile
            </a>
            . Have an exciting project in mind?{' '}
            <a href="#contact" className={`font-semibold ${linkColor}`}>
              Let's build something exceptional together!
            </a>
          </p>
        </div>

        {/* 3 Columns for desktop/laptop, 2 for tablet, 1 for mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mt-12 w-full">
          {projectsData.map((project) => {
            const isFlipped = !!flippedCards[project.id];
            return (
              <div 
                key={project.id} 
                className="project-card-perspective w-full h-[540px] flex-shrink-0 cursor-default"
              >
                {/* 3D Card Inner container */}
                <div className={`project-card-inner w-full h-full ${isFlipped ? 'flipped' : ''}`}>
                  
                  {/* FRONT SIDE */}
                  <div className="project-card-front w-full h-full absolute inset-0 z-10">
                    <TiltCard 
                      isDarkMode={isDarkMode} 
                      intensity={6} 
                      className="w-full h-full"
                    >
                      {/* Set bg-transparent to allow TiltCard's active glowing borders & deep dynamic bg to display */}
                      <div className="w-full h-full rounded-2xl bg-transparent overflow-hidden flex flex-col">
                        
                        {/* Image Container with Ambient Overlay */}
                        <div className="overflow-hidden h-52 relative group-hover:scale-102 transition-transform duration-500 flex-shrink-0">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/80 via-transparent to-transparent" />
                          <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${isDarkMode ? 'bg-[#030014] text-teal-400 border border-teal-500/20' : 'bg-white text-purple-600 border border-purple-500/20'}`}>
                            {project.category}
                          </span>
                        </div>
                        
                        {/* Card Front Content */}
                        <div className="p-6 text-left flex flex-col flex-grow">
                          <h3 className={`text-2xl font-bold ${cardTitleColor} mb-2`}>{project.title}</h3>
                          <p className={`text-sm sm:text-base ${cardDescriptionColor} mb-4 line-clamp-3 leading-relaxed flex-grow`}>
                            {project.description}
                          </p>
                          
                          {/* Tech Stack Pills */}
                          <div className="flex flex-wrap gap-1.5 mb-6">
                            {project.techStack.map((tech) => (
                              <span 
                                key={tech} 
                                className={`text-[10px] sm:text-[11px] font-semibold px-2 py-1 rounded-md ${isDarkMode ? 'bg-purple-950/30 text-purple-300 border border-purple-800/10' : 'bg-gray-100 text-gray-600 border border-gray-200'}`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          
                          {/* Action Buttons */}
                          <div className="flex gap-3 mt-auto items-center">
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`flex-grow inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl ${buttonBg} text-white font-bold text-sm transition-all duration-300 hover:scale-103 hover:shadow-lg`}
                            >
                              <FaGlobe className="text-base" />
                              <span>Live Demo</span>
                            </a>
                            <button
                              onClick={(e) => toggleFlip(project.id, e)}
                              className={`px-4 py-3 rounded-xl ${detailsBtnBg} font-bold text-sm transition-all duration-300 hover:scale-103 inline-flex items-center gap-1.5`}
                            >
                              <span>Details</span>
                              <FaChevronRight className="text-xs" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </TiltCard>
                  </div>
                  
                  {/* BACK SIDE (ELABORATED DETAILS) */}
                  <div className="project-card-back w-full h-full absolute inset-0 z-0">
                    <TiltCard 
                      isDarkMode={isDarkMode} 
                      intensity={6} 
                      className="w-full h-full"
                    >
                      {/* Set bg-transparent to allow TiltCard's active glowing borders & deep dynamic bg to display */}
                      <div className="w-full h-full rounded-2xl bg-transparent overflow-hidden p-7 text-left flex flex-col">
                        
                        {/* Header of back card */}
                        <div className="flex justify-between items-center mb-5 pb-3 border-b border-gray-300/10">
                          <div>
                            <span className={`text-xs font-bold tracking-wider uppercase ${subHeadingColor}`}>Elaborated Specs</span>
                            <h3 className={`text-2xl font-black ${cardTitleColor}`}>{project.title}</h3>
                          </div>
                          <button
                            onClick={(e) => toggleFlip(project.id, e)}
                            className={`p-2.5 rounded-full ${isDarkMode ? 'bg-[#030014] text-gray-300 hover:text-white border border-purple-500/20' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-all duration-300 hover:scale-110`}
                          >
                            <FaTimes className="text-lg" />
                          </button>
                        </div>
                        
                        {/* Detail Description */}
                        <div className="flex-grow flex flex-col justify-start">
                          <h4 className={`text-sm font-bold uppercase mb-2 ${isDarkMode ? 'text-teal-400' : 'text-purple-600'}`}>Detailed Overview</h4>
                          <p className={`text-sm sm:text-base ${cardDescriptionColor} leading-relaxed font-medium mb-6`}>
                            {project.elaboratedDescription}
                          </p>
                          
                          <h4 className={`text-sm font-bold uppercase mb-2.5 ${isDarkMode ? 'text-teal-400' : 'text-purple-600'}`}>Architecture & Tech</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                              <span 
                                key={tech} 
                                className={`text-xs font-bold px-3 py-1.5 rounded-lg ${isDarkMode ? 'bg-purple-950/20 text-purple-300 border border-purple-500/10' : 'bg-indigo-50 text-indigo-700 border border-indigo-200'}`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Back Card Actions */}
                        <div className="flex gap-3 mt-auto items-center">
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex-grow inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl ${isDarkMode ? 'bg-[#030014] text-teal-400 hover:text-teal-300 border border-teal-500/20 hover:border-teal-400/40' : 'bg-gray-100 hover:bg-gray-200 text-purple-600 border border-purple-500/20'} font-bold text-sm transition-all duration-300 hover:scale-103`}
                          >
                            <FaGithub className="text-lg" />
                            <span>GitHub Source</span>
                          </a>
                          <button
                            onClick={(e) => toggleFlip(project.id, e)}
                            className={`px-5 py-3.5 rounded-xl ${buttonBg} text-white font-bold text-sm transition-all duration-300 hover:scale-103 hover:shadow-lg`}
                          >
                            <span>Back To Front</span>
                          </button>
                        </div>
                      </div>
                    </TiltCard>
                  </div>
                  
                </div>
              </div>
            );
          })}
        </div>
       
        <div className="text-center mt-16">
          <a href="https://github.com/himanshu561hi" target="_blank" rel="noopener noreferrer" className={`font-semibold ${linkColor} text-lg inline-flex items-center group`}>
            Explore all other codebases on GitHub
            <span className="ml-2 text-xl transform group-hover:translate-x-1.5 transition-transform duration-300">&rarr;</span>
          </a>
        </div>
      </div>

      {/* 3D Flip Card Effect scoped stylesheet */}
      <style>{`
        .project-card-perspective {
          perspective: 1500px;
        }
        .project-card-inner {
          transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.15);
          transform-style: preserve-3d;
          position: relative;
        }
        .project-card-inner.flipped {
          transform: rotateY(180deg);
        }
        .project-card-front, .project-card-back {
          backface-visibility: hidden;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .project-card-back {
          transform: rotateY(180deg);
        }
        @keyframes expand-width {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
}

export default Projects;