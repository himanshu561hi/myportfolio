import React from 'react';
import { motion } from 'motion/react';
import { Send, MapPin, Mail, Phone, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="relative w-full py-[80px] bg-transparent overflow-hidden">
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
            Contact
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[40px] sm:text-[48px] lg:text-[54px] font-space font-extrabold text-gray-900 mb-6 leading-[1.1] tracking-tight"
          >
            Let's Build Something Amazing Together
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 text-[17px] sm:text-[19px] leading-[1.7]"
          >
            Have an idea, opportunity, or collaboration? I'd love to hear from you.
          </motion.p>
        </div>

        {/* Two-Column Layout */}
        <div className="flex flex-col lg:flex-row gap-10 w-full mt-4">
          
          {/* Left: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full lg:w-3/5 p-8 sm:p-10 bg-white/60 backdrop-blur-[20px] border border-white/80 rounded-[28px] shadow-[0_8px_32px_rgba(0,0,0,0.04)]"
          >
            <form className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="name" className="text-sm font-bold text-gray-700 tracking-wide uppercase">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Your name" 
                    className="w-full bg-white/50 border border-gray-200 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all text-gray-800 placeholder-gray-400"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="email" className="text-sm font-bold text-gray-700 tracking-wide uppercase">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Your email address" 
                    className="w-full bg-white/50 border border-gray-200 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all text-gray-800 placeholder-gray-400"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="subject" className="text-sm font-bold text-gray-700 tracking-wide uppercase">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  placeholder="How can I help you?" 
                  className="w-full bg-white/50 border border-gray-200 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all text-gray-800 placeholder-gray-400"
                />
              </div>

              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="message" className="text-sm font-bold text-gray-700 tracking-wide uppercase">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  placeholder="Write your message here..." 
                  className="w-full bg-white/50 border border-gray-200 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all text-gray-800 placeholder-gray-400 resize-none"
                ></textarea>
              </div>

              <button 
                type="button" 
                className="group flex items-center justify-center gap-3 w-full sm:w-fit px-10 py-4 mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold shadow-[0_10px_20px_rgba(37,99,235,0.2)] hover:shadow-[0_15px_30px_rgba(37,99,235,0.35)] hover:-translate-y-1 transition-all duration-300 text-lg"
              >
                Send Message
                <Send size={18} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Right: Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-2/5 flex flex-col gap-8 p-8 sm:p-10 bg-gradient-to-br from-blue-50/80 to-white/60 backdrop-blur-[20px] border border-white/80 rounded-[28px] shadow-[0_8px_32px_rgba(0,0,0,0.04)]"
          >
            
            <div className="flex items-start gap-5 group">
              <div className="flex-shrink-0 w-14 h-14 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <Mail size={24} />
              </div>
              <div className="flex flex-col pt-1">
                <span className="text-sm font-bold text-gray-500 tracking-wider uppercase mb-1">Email</span>
                <a href="mailto:himanshu561hi@gmail.com" className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">himanshu561hi@gmail.com</a>
              </div>
            </div>

            <div className="flex items-start gap-5 group">
              <div className="flex-shrink-0 w-14 h-14 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <Phone size={24} />
              </div>
              <div className="flex flex-col pt-1">
                <span className="text-sm font-bold text-gray-500 tracking-wider uppercase mb-1">Phone</span>
                <a href="tel:+918090860670" className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">+91 80908 60670</a>
              </div>
            </div>

            <div className="flex items-start gap-5 group">
              <div className="flex-shrink-0 w-14 h-14 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <MapPin size={24} />
              </div>
              <div className="flex flex-col pt-1">
                <span className="text-sm font-bold text-gray-500 tracking-wider uppercase mb-1">Location</span>
                <span className="text-lg font-semibold text-gray-900 leading-snug">Ghaziabad, Uttar Pradesh, India</span>
              </div>
            </div>

            <div className="w-full h-[1px] bg-gray-200/60 my-2"></div>

            <div className="flex flex-col gap-4">
              <span className="text-sm font-bold text-gray-500 tracking-wider uppercase">Connect Online</span>
              <div className="flex gap-4">
                <a href="https://github.com/himanshu561hi" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-900 hover:text-white hover:-translate-y-1 transition-all duration-300 text-2xl">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/himanshu561hi/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-blue-700 hover:bg-blue-700 hover:text-white hover:-translate-y-1 transition-all duration-300 text-2xl">
                  <FaLinkedin />
                </a>
              </div>
            </div>

            <a 
              href="/resume.pdf"
              download="Himanshu_Gupta_Resume.pdf"
              className="mt-auto group flex items-center justify-between w-full p-5 bg-white border border-gray-200 rounded-2xl hover:border-blue-400 hover:shadow-md transition-all duration-300"
            >
              <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">Download Resume</span>
              <ArrowRight size={20} className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
            </a>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
