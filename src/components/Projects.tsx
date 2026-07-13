import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, CheckCircle2 } from 'lucide-react';

import { projects } from '../data';

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  return (
    <section id="projects" className="relative w-full py-[50px] md:py-[80px] bg-transparent overflow-hidden">
      <div className="max-w-[1200px] w-full mx-auto px-6 flex flex-col items-center">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 w-full max-w-[800px]">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-blue-600 font-bold tracking-[0.25em] uppercase text-sm mb-4"
          >
            My Projects
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[32px] sm:text-[48px] lg:text-[54px] font-space font-extrabold text-gray-900 mb-6 leading-[1.1] tracking-tight"
          >
            Interactive Showcase
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 text-[17px] sm:text-[19px] leading-[1.7]"
          >
            Select a project below to explore its features, technologies, and live demonstrations.
          </motion.p>
        </div>

        {/* Interactive Swapping Showcase */}
        <div className="w-full flex flex-col gap-8">
          
          {/* Top: Large Glass Showcase Window */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col lg:flex-row bg-white/30 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_rgba(31,38,135,0.1)] rounded-[32px] overflow-hidden min-h-[400px]"
          >
            {/* Left: Animated Image Viewer */}
            <div className="w-full lg:w-[55%] relative overflow-hidden bg-gray-900/5 flex items-center justify-center p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-white/40">
              
              {/* Blurred Background Image for depth */}
              <AnimatePresence mode="wait">
                <motion.img 
                  key={`bg-${activeIndex}`}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 0.15, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  src={activeProject.image}
                  className="absolute inset-0 w-full h-full object-cover blur-2xl"
                />
              </AnimatePresence>
              
              {/* Main Crisp Image */}
              <div className="relative z-10 w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/30 group">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={`img-${activeIndex}`}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </AnimatePresence>
              </div>
            </div>

            {/* Right: Dynamic Content */}
            <div className="w-full lg:w-[45%] p-6 sm:p-8 flex flex-col relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`content-${activeIndex}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="flex flex-col h-full"
                >
                  <h3 className="text-[28px] sm:text-[32px] font-space font-bold text-gray-900 mb-3 leading-tight">
                    {activeProject.title}
                  </h3>
                  <p className="text-gray-600 text-[15.5px] leading-relaxed mb-6">
                    {activeProject.description}
                  </p>
                  
                  {/* Dynamic Features List */}
                  {activeProject.features && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4 mb-6">
                      {activeProject.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-[14.5px] text-gray-700 font-medium">
                          <CheckCircle2 size={16} className="text-blue-500 mr-2.5 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Chips */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {activeProject.tech.map((tech, i) => (
                      <span key={i} className="px-3.5 py-1.5 text-[13px] font-semibold text-blue-700 bg-blue-50/70 border border-blue-200/80 rounded-full shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-4 mt-auto pt-4 border-t border-gray-200/50">
                    <a href={activeProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 bg-white/50 border-2 border-gray-200 text-gray-700 rounded-full font-semibold hover:border-gray-900 hover:text-gray-900 hover:bg-white hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                      <Github size={18} />
                      Source Code
                    </a>
                    <a href={activeProject.demo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold shadow-[0_8px_20px_rgba(37,99,235,0.2)] hover:shadow-[0_12px_25px_rgba(37,99,235,0.35)] hover:-translate-y-1 transition-all duration-300">
                      <ExternalLink size={18} />
                      Live Preview
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Bottom: Thumbnail Selector */}
          <div className="flex gap-4 sm:gap-6 overflow-x-auto md:justify-center pb-6 pt-4 px-2 w-full snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {projects.map((project, index) => (
              <button 
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`relative flex-shrink-0 w-[240px] sm:w-[280px] h-[140px] sm:h-[160px] rounded-2xl overflow-hidden group snap-start transition-all duration-500 text-left ${
                  activeIndex === index 
                  ? 'ring-4 ring-blue-500 ring-offset-2 scale-[1.02] shadow-xl opacity-100' 
                  : 'opacity-60 hover:opacity-100 hover:scale-[1.02] shadow-md border border-white/50'
                }`}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className={`absolute inset-0 transition-colors duration-500 ${
                  activeIndex === index 
                  ? 'bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent' 
                  : 'bg-black/50 group-hover:bg-black/30 bg-gradient-to-t from-black/80 to-transparent'
                }`}></div>
                <div className="absolute bottom-4 left-5 right-5">
                  <p className={`text-[15px] sm:text-base font-bold truncate transition-colors duration-300 drop-shadow-md ${
                    activeIndex === index ? 'text-white' : 'text-gray-200'
                  }`}>
                    {project.title}
                  </p>
                </div>
              </button>
            ))}
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default Projects;
