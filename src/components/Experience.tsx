import React from 'react';
import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';

import { experiences } from '../data';

const Experience = () => {
  return (
    <section id="experience" className="relative w-full py-[50px] md:py-[80px] bg-transparent overflow-hidden">
      <div className="max-w-[1200px] w-full mx-auto px-6 flex flex-col items-center">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20 w-full max-w-[800px]">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-blue-600 font-bold tracking-[0.25em] uppercase text-sm mb-4"
          >
            Experience
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[32px] sm:text-[48px] lg:text-[54px] font-space font-extrabold text-gray-900 mb-6 leading-[1.1] tracking-tight"
          >
            My Professional Journey
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 text-[17px] sm:text-[19px] leading-[1.7]"
          >
            My internship experience, professional growth, and the technologies I've worked with while building real-world applications.
          </motion.p>
        </div>

        {/* Timeline Section */}
        <div className="relative w-full mx-auto mt-4">
          
          {/* Vertical Animated Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-[12px] md:left-1/2 top-0 bottom-0 w-[3px] md:w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent transform md:-translate-x-1/2 rounded-full"
          />

          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={index} className={`relative flex flex-col md:flex-row items-center w-full mb-10 md:mb-16 last:mb-0 ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                
                {/* Circular Node */}
                <div className="absolute left-[12px] md:left-1/2 w-[16px] h-[16px] md:w-[22px] md:h-[22px] rounded-full bg-gradient-to-r from-blue-500 to-purple-600 transform -translate-x-1/2 shadow-[0_0_15px_rgba(37,99,235,0.6)] z-10 items-center justify-center top-8 md:top-auto flex">
                  <div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 bg-white rounded-full"></div>
                </div>
                
                {/* Experience Card */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -20 : 20, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  className={`w-full md:w-[47%] pl-[40px] md:pl-0 ${isEven ? 'md:pr-[50px]' : 'md:pl-[50px]'}`}
                >
                  <div className="p-6 sm:p-7 bg-white/30 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_rgba(31,38,135,0.1)] rounded-[24px] hover:shadow-[0_8px_25px_rgba(37,99,235,0.12)] hover:-translate-y-1 transition-all duration-300">
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2 sm:gap-0">
                      <div>
                        <h3 className="text-[20px] sm:text-[22px] font-space font-bold text-gray-900 mb-0.5">{exp.company}</h3>
                        <h4 className="text-[16px] font-inter font-semibold text-blue-600 flex items-center gap-1.5">
                          <Briefcase size={15} />
                          {exp.role}
                        </h4>
                      </div>
                      <div className="inline-block self-start px-3 py-1 text-[11px] font-bold tracking-wide text-blue-700 bg-blue-100/80 rounded-full border border-blue-200/50">
                        {exp.duration}
                      </div>
                    </div>
                    
                    <ul className="space-y-1.5 mb-5 text-gray-600 text-[15px] leading-relaxed">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-500 mr-2.5 mt-0.5 text-[16px] leading-none">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <motion.span 
                          key={tech}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + (i * 0.05) }}
                          className="px-3 py-1 text-[12.5px] font-semibold text-blue-700 bg-blue-50/70 border border-blue-200/80 rounded-full hover:bg-blue-100 hover:-translate-y-0.5 hover:shadow-[0_0_12px_rgba(37,99,235,0.2)] transition-all duration-300 cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Experience;
