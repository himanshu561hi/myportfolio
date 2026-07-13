import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

import { achievements } from '../data';

const Achievements = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<any>(null);

  // Prevent body scroll when modal is open
  React.useEffect(() => {
    if (selectedAchievement) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedAchievement]);

  return (
    <section id="achievements" className="relative w-full py-[50px] md:py-[80px] bg-transparent overflow-hidden">
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
            Achievements
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[32px] sm:text-[48px] lg:text-[54px] font-space font-extrabold text-gray-900 mb-6 leading-[1.1] tracking-tight"
          >
            Milestones & Achievements
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 text-[17px] sm:text-[19px] leading-[1.7]"
          >
            A few highlights from my learning journey, internships, and development experience.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1000px] mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              onClick={() => setSelectedAchievement(achievement)}
              className="flex flex-col items-center text-center pt-8 px-8 pb-[10px] bg-white/30 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_rgba(31,38,135,0.1)] rounded-[28px] hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] hover:-translate-y-2 hover:border-blue-300 transition-all duration-300 group cursor-pointer h-full"
            >
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300 origin-center">
                {achievement.icon}
              </div>
              <h3 className="text-[22px] font-space font-bold text-gray-900 mb-3">
                {achievement.title}
              </h3>
              <p className="text-gray-600 text-[15px] leading-relaxed font-medium">
                {achievement.description}
              </p>
              
              <div className="mt-auto pt-4 w-full flex justify-center">
                {achievement.location && (
                  <p className="text-gray-400 text-[13px] font-medium flex items-center gap-1">
                    📍 {achievement.location}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedAchievement && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-gray-900/40 backdrop-blur-sm"
            onClick={() => setSelectedAchievement(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 sm:p-8 border-b border-gray-100 shrink-0">
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{selectedAchievement.icon}</span>
                  <div className="flex flex-col min-w-0">
                    <h3 className="text-2xl sm:text-3xl font-space font-bold text-gray-900 mb-1 truncate">{selectedAchievement.title}</h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-0.5">
                      <p className="text-blue-600 font-semibold text-sm sm:text-base">{selectedAchievement.description}</p>
                      {selectedAchievement.location && (
                        <div className="flex items-center gap-3">
                          <span className="hidden sm:inline-block text-gray-300">•</span>
                          <p className="text-gray-500 font-medium text-xs sm:text-sm flex items-center gap-1">
                            📍 {selectedAchievement.location}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedAchievement(null)}
                  className="p-2.5 text-gray-400 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors self-start sm:self-center"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto">
                <div className="mb-8">
                  <h4 className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-3">About this achievement</h4>
                  <p className="text-gray-700 leading-relaxed text-[15px] sm:text-[16px]">
                    {selectedAchievement.details}
                  </p>
                </div>
                
                {/* Images Gallery */}
                <div className="flex flex-col sm:flex-row gap-5 pt-1">
                  {selectedAchievement.images?.map((img: string, i: number) => (
                    <div key={i} className="flex-1 relative group rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-gray-50 flex items-center justify-center">
                      <img 
                        src={img} 
                        alt={`${selectedAchievement.title} screenshot ${i+1}`}
                        className="w-full h-auto object-contain rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Achievements;
