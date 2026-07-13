import React from 'react';
import { motion } from 'motion/react';
import { FaCode, FaLaptopCode, FaBriefcase, FaBrain } from 'react-icons/fa';

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
    {children}
  </span>
);

const StatCard = ({ icon, count, label, delay }: { icon: React.ReactNode, count: string, label: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ delay, duration: 0.6, ease: "easeOut" }}
    whileHover={{ y: -8, scale: 1.02 }}
    className="flex flex-col items-center justify-center p-6 bg-white/30 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_rgba(31,38,135,0.1)] rounded-[24px] hover:shadow-[0_15px_30px_rgb(0,0,0,0.08)] transition-all duration-300"
  >
    <div className="text-blue-500 mb-3 text-3xl">{icon}</div>
    <div className="text-3xl sm:text-4xl font-space font-bold text-gray-900">{count}</div>
    <div className="text-sm sm:text-base text-gray-600 font-medium tracking-wide mt-1 text-center">{label}</div>
  </motion.div>
);

const About = () => {
  return (
    <section id="about" className="relative w-full min-h-[95vh] flex items-center justify-center py-20 bg-transparent overflow-hidden">
      <div className="max-w-[1500px] w-full mx-auto px-6 h-full flex flex-col items-center justify-center">
        
        {/* Content */}
        <div className="w-full flex flex-col items-center text-center">
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-blue-600 font-bold tracking-[0.25em] uppercase text-sm mb-4"
          >
            About Me
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[40px] sm:text-[48px] lg:text-[54px] font-space font-extrabold text-gray-900 mb-6 leading-[1.1] tracking-tight"
          >
            Know Who I Am
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 text-[17px] sm:text-[19px] leading-[1.7] max-w-[1000px] space-y-5 mb-12"
          >
            <p>
              Hi, I'm Himanshu Gupta.
            </p>
            <p>
              A passionate <Highlight>Full Stack Developer</Highlight> focused on building scalable web applications and <Highlight>AI</Highlight>-powered products.
            </p>
            <p>
              I specialize in <Highlight>JavaScript</Highlight>, <Highlight>React</Highlight>, <Highlight>Node.js</Highlight>, <Highlight>Express.js</Highlight>, <Highlight>MongoDB</Highlight>, <Highlight>TypeScript</Highlight> and <Highlight>Tailwind CSS</Highlight>.
            </p>
            <p>
              I enjoy solving real-world problems, building clean UI, learning modern technologies and creating impactful software.
            </p>
          </motion.div>

          {/* Premium Cards Grid - 4 Columns on Desktop */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 w-full max-w-[1200px]">
            <StatCard icon={<FaCode />} count="5+" label="Projects" delay={0.3} />
            <StatCard icon={<FaLaptopCode />} count="10+" label="Technologies" delay={0.4} />
            <StatCard icon={<FaBriefcase />} count="3+" label="Internships" delay={0.5} />
            <StatCard icon={<FaBrain />} count="50+" label="DSA Problems" delay={0.6} />
          </div>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col sm:flex-row justify-center gap-5 w-full sm:w-auto"
          >
            <a 
              href="/resume.pdf"
              download="Himanshu_Gupta_Resume.pdf"
              className="px-9 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold shadow-[0_10px_20px_rgba(37,99,235,0.2)] hover:shadow-[0_15px_30px_rgba(37,99,235,0.35)] hover:-translate-y-1 transition-all duration-300 text-center text-lg"
            >
              Download Resume
            </a>
            <a 
              href="https://www.linkedin.com/in/himanshu561hi/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-9 py-4 bg-white/70 backdrop-blur-md text-gray-800 rounded-full font-semibold border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 hover:bg-white hover:-translate-y-1 transition-all duration-300 text-center text-lg"
            >
              Let's Connect
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
