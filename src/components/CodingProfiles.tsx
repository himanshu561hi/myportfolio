import React from 'react';
import { motion } from 'motion/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import { ExternalLink } from 'lucide-react';

const profiles = [
  {
    platform: "GitHub",
    description: "Explore my open-source projects, contributions, and daily commits.",
    link: "https://github.com/himanshu561hi",
    icon: <FaGithub />,
    iconColor: "text-gray-900",
  },
  {
    platform: "LinkedIn",
    description: "Connect with me for professional updates and collaborations.",
    link: "https://www.linkedin.com/in/himanshu561hi/",
    icon: <FaLinkedin />,
    iconColor: "text-blue-700",
  },
  {
    platform: "LeetCode",
    description: "Check out my progress on Data Structures and Algorithms.",
    link: "https://leetcode.com/u/HimanshuGupta_561/",
    icon: <SiLeetcode />,
    iconColor: "text-yellow-600",
  },
  {
    platform: "GeeksforGeeks",
    description: "Practicing coding challenges and computer science concepts.",
    link: "https://www.geeksforgeeks.org/user/himanshuguqp9i/",
    icon: <SiGeeksforgeeks />,
    iconColor: "text-green-600",
  }
];

const CodingProfiles = () => {
  return (
    <section id="profiles" className="relative w-full py-[80px] bg-transparent overflow-hidden">
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
            className="text-[40px] sm:text-[48px] lg:text-[54px] font-space font-extrabold text-gray-900 mb-6 leading-[1.1] tracking-tight"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {profiles.map((profile, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              className="flex flex-col h-full p-8 bg-white/30 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_rgba(31,38,135,0.1)] rounded-[28px] hover:shadow-[0_0_30px_rgba(37,99,235,0.12)] hover:-translate-y-2 hover:border-blue-300 transition-all duration-300 group"
            >
              <div className={`text-[46px] mb-6 ${profile.iconColor} transform group-hover:scale-110 transition-transform duration-300 origin-left`}>
                {profile.icon}
              </div>
              
              <h3 className="text-[22px] font-space font-bold text-gray-900 mb-3">
                {profile.platform}
              </h3>
              
              <p className="text-gray-600 text-[15px] leading-relaxed font-medium mb-8 flex-grow">
                {profile.description}
              </p>
              
              <a 
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[15px] font-semibold text-blue-600 hover:text-blue-700 transition-colors mt-auto group/btn w-fit"
              >
                Visit Profile
                <ExternalLink size={16} className="transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CodingProfiles;
