import React from 'react';
import { motion } from 'motion/react';
import { 
  FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaGithub, FaRobot, FaMicrophone 
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiTypescript, SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiSupabase, SiPostman, SiVercel, SiNetlify, SiRender, SiOpenai, SiGoogle
} from 'react-icons/si';

const technologies = [
  { name: 'React.js', icon: <FaReact className="text-[#61DAFB]" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-black" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" /> },
  { name: 'JavaScript', icon: <FaJsSquare className="text-[#F7DF1E]" /> },
  { name: 'HTML5', icon: <FaHtml5 className="text-[#E34F26]" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-[#1572B6]" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" /> },
  { name: 'Express.js', icon: <SiExpress className="text-gray-800" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
  { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" /> },
  { name: 'Supabase', icon: <SiSupabase className="text-[#3ECF8E]" /> },
  { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" /> },
  { name: 'GitHub', icon: <FaGithub className="text-gray-900" /> },
  { name: 'Postman', icon: <SiPostman className="text-[#FF6C37]" /> },
  { name: 'Vercel', icon: <SiVercel className="text-black" /> },
  { name: 'Netlify', icon: <SiNetlify className="text-[#00C7B7]" /> },
  { name: 'Render', icon: <SiRender className="text-black" /> },
  { name: 'OpenAI API', icon: <SiOpenai className="text-black" /> },
  { name: 'Gemini API', icon: <SiGoogle className="text-[#4285F4]" /> },
  { name: 'Groq API', icon: <FaRobot className="text-orange-500" /> },
  { name: 'Vapi AI', icon: <FaMicrophone className="text-purple-500" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="relative w-full py-[80px] bg-transparent overflow-hidden">
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
            My Skills
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[40px] sm:text-[48px] lg:text-[54px] font-space font-extrabold text-gray-900 mb-6 leading-[1.1] tracking-tight"
          >
            Technologies I Work With
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 text-[17px] sm:text-[19px] leading-[1.7]"
          >
            I build scalable web applications, AI-powered products, and modern user experiences using these technologies.
          </motion.p>
        </div>

        {/* Skills Chips Container */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-x-[20px] gap-y-[22px] w-full"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: index * 0.04, duration: 0.4, ease: "easeOut" }}
              className="group flex items-center gap-2.5 w-fit px-[24px] py-[14px] bg-white/30 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_rgba(31,38,135,0.1)] rounded-full hover:shadow-[0_8px_25px_rgba(37,99,235,0.15)] hover:border-blue-400 hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <div className="text-[20px] transform group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                {tech.icon}
              </div>
              <span className="text-[16px] font-inter font-semibold text-gray-800 tracking-wide whitespace-nowrap">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
