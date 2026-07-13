import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { profiles } from '../data';

const CodingProfiles = () => {
  return (
    <section id="profiles" className="relative w-full py-[50px] md:py-[80px] bg-transparent overflow-hidden">
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
            Coding Profiles
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[32px] sm:text-[48px] lg:text-[54px] font-space font-extrabold text-gray-900 mb-6 leading-[1.1] tracking-tight"
          >
            Find Me Online
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 text-[17px] sm:text-[19px] leading-[1.7]"
          >
            Explore my coding profiles, open-source work, and professional presence.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 w-full">
          {profiles.map((profile, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              className="flex flex-col h-full p-4 sm:p-8 bg-white/30 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_rgba(31,38,135,0.1)] rounded-[20px] sm:rounded-[28px] hover:shadow-[0_0_30px_rgba(37,99,235,0.12)] hover:-translate-y-2 hover:border-blue-300 transition-all duration-300 group"
            >
              <div className={`text-[32px] sm:text-[46px] mb-4 sm:mb-6 ${profile.iconColor} transform group-hover:scale-110 transition-transform duration-300 origin-left`}>
                {profile.icon}
              </div>
              
              <h3 className="text-[16px] sm:text-[22px] font-space font-bold text-gray-900 mb-2 sm:mb-3">
                {profile.platform}
              </h3>
              
              <p className="text-gray-600 text-[12px] sm:text-[15px] leading-relaxed font-medium mb-5 sm:mb-8 flex-grow">
                {profile.description}
              </p>
              
              <a 
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 sm:gap-2 text-[13px] sm:text-[15px] font-semibold text-blue-600 hover:text-blue-700 transition-colors mt-auto group/btn w-fit"
              >
                <span className="hidden sm:inline">Visit Profile</span>
                <span className="inline sm:hidden">Visit</span>
                <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CodingProfiles;
