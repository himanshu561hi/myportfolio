import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const achievements = [
  {
    icon: "🏆",
    title: "Top 75",
    description: "Hacknovate 7.0",
    location: "ABESIT, Ghaziabad",
    details: "Ranked among the top 75 teams in Hacknovate 7.0 out of hundreds of participants. Built a complete web application within 24 hours addressing real-world problems. The experience involved intense brainstorming, rapid prototyping, and delivering a functional product.",
    images: [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop"
    ]
  },
  {
    icon: "🥇",
    title: "1st Place",
    description: "National Level Technical Paper Presentation",
    location: "AKGEC, Ghaziabad",
    details: "Secured 1st place for writing and presenting a comprehensive technical research paper on modern AI advancements and system architectures. Evaluated by a panel of industry experts on technical accuracy, originality, and presentation skills.",
    images: [
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop"
    ]
  },
  {
    icon: "🥉",
    title: "3rd Place",
    description: "TechnoHack 3.0",
    location: "INMANTAC, Ghaziabad",
    details: "Achieved 3rd place overall in TechnoHack 3.0 by developing an innovative solution using React, Node.js, and integrating AI APIs. Focused heavily on creating a seamless user experience and a highly scalable backend architecture.",
    images: [
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
    ]
  },
  {
    icon: "💻",
    title: "5+",
    description: "Production Projects Built",
    details: "Designed, developed, and deployed over 5 full-stack applications in production environments. These projects range from AI-powered tools to complex management dashboards, serving real users and handling live data.",
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    ]
  }
];

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
    <section id="achievements" className="relative w-full py-[80px] bg-transparent overflow-hidden">
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
            className="text-[40px] sm:text-[48px] lg:text-[54px] font-space font-extrabold text-gray-900 mb-6 leading-[1.1] tracking-tight"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
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
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-space font-bold text-gray-900 mb-1">{selectedAchievement.title}</h3>
                    <p className="text-blue-600 font-semibold text-sm sm:text-base">{selectedAchievement.description}</p>
                    {selectedAchievement.location && (
                      <p className="text-gray-500 font-medium text-xs sm:text-sm mt-1 flex items-center gap-1">
                        📍 {selectedAchievement.location}
                      </p>
                    )}
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
                
                {/* Images Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {selectedAchievement.images?.map((img: string, i: number) => (
                    <div key={i} className="relative group rounded-2xl overflow-hidden border border-gray-100 shadow-sm aspect-video bg-gray-50">
                      <img 
                        src={img} 
                        alt={`${selectedAchievement.title} screenshot ${i+1}`}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
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
