import React, { useState, useEffect, useRef, useMemo } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaCode } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiFirebase, SiVercel } from 'react-icons/si';
import { IoLogoPwa } from "react-icons/io5";
import { motion } from 'motion/react';
import DecryptedText from '../background/DecryptedText';
import TiltCard from '../background/TiltCard';
import Radar from '../background/Radar';
import ScrollReveal from 'scrollreveal';

function Skills({ isDarkMode }) {
  const descRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null); // { rowIdx, idx }
  const [dsaProgress, setDsaProgress] = useState(15);

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      delay: 150,
      reset: true
    });

    sr.reveal('.skills-header', { delay: 100, origin: 'top' });
    sr.reveal('.skills-marquee-container', { delay: 200, origin: 'bottom' });
  }, []);

  // Simulates learning progress expansion loop on DSA
  useEffect(() => {
    const interval = setInterval(() => {
      setDsaProgress((prev) => {
        if (prev >= 55) return 15;
        return prev + 1;
      });
    }, 280);
    return () => clearInterval(interval);
  }, []);

  const sectionBg = isDarkMode 
    ? "bg-[#030014]" 
    : "bg-indigo-50/10 backdrop-blur-sm";

  const headingColor = isDarkMode ? "text-white" : "text-gray-900";
  const subHeadingColor = isDarkMode ? "text-gray-400" : "text-gray-600";
  const cardBorder = isDarkMode ? "border-purple-500/20" : "border-gray-200";
  const cardBg = isDarkMode ? "bg-[#0d0925]/90 backdrop-blur-md" : "bg-white/60 backdrop-blur-md";
  const skillNameColor = isDarkMode ? "text-white" : "text-gray-800";
  const skillPercentageColor = isDarkMode ? "text-gray-300" : "text-gray-600";
  const progressBarBg = isDarkMode ? "bg-[#0b0720]" : "bg-gray-200";

  // Dividing all skills into 2 parallel streams for vertical layout balance
  const row1Skills = useMemo(() => [
    { name: "HTML5", percentage: 90, icon: <FaHtml5 />, color: "#ff6d00", glowClass: "shadow-orange-500/10 border-orange-500/20", special: "html5" },
    { name: "CSS3", percentage: 85, icon: <FaCss3Alt />, color: "#3b82f6", glowClass: "shadow-blue-500/10 border-blue-500/20", special: "css3" },
    { name: "JavaScript", percentage: 75, icon: <FaJs />, color: "#eab308", glowClass: "shadow-yellow-500/10 border-yellow-500/20", special: "js" },
    { name: "React.js", percentage: 80, icon: <FaReact />, color: "#06b6d4", glowClass: "shadow-cyan-500/10 border-cyan-500/20", special: "react" },
    { name: "Tailwind CSS", percentage: 85, icon: <SiTailwindcss />, color: "#06b6d4", glowClass: "shadow-sky-400/10 border-sky-400/20", special: "tailwind" },
    { name: "Node.js", percentage: 70, icon: <FaNodeJs />, color: "#22c55e", glowClass: "shadow-green-500/10 border-green-500/20", special: "node" },
    { name: "Express.js", percentage: 65, icon: <SiExpress />, color: "#4b5563", glowClass: "shadow-neutral-400/10 border-neutral-400/20", special: "express" }
  ], []);

  const row2Skills = useMemo(() => [
    { name: "MongoDB", percentage: 60, icon: <SiMongodb />, color: "#10b981", glowClass: "shadow-emerald-500/10 border-emerald-500/20", special: "mongodb" },
    { name: "Vercel", percentage: 80, icon: <SiVercel />, color: isDarkMode ? "#ffffff" : "#000000", glowClass: "shadow-black/10 border-black/20", special: "vercel" },
    { name: "Firebase", percentage: 75, icon: <SiFirebase />, color: "#f59e0b", glowClass: "shadow-amber-500/10 border-amber-500/20", special: "firebase" },
    { name: "Python", percentage: 50, icon: <FaPython />, color: "#eab308", glowClass: "shadow-yellow-500/10 border-yellow-500/20", special: "python" },
    { name: "C++", percentage: 45, icon: <FaCode />, color: "#3b82f6", glowClass: "shadow-blue-600/10 border-blue-600/20", special: "cpp" },
    { name: "DSA (Basic)", percentage: 15, icon: <IoLogoPwa />, color: "#ec4899", glowClass: "shadow-pink-500/10 border-pink-500/20", special: "dsa" }
  ], [isDarkMode]);

  const renderCard = (skill, rowIdx, idx) => {
    const isHovered = hoveredCard !== null && hoveredCard.rowIdx === rowIdx && hoveredCard.idx === idx;
    const isOtherCardHovered = hoveredCard !== null && !isHovered;

    const glowIntensity = skill.special === 'dsa' ? dsaProgress : skill.percentage;
    const baseScale = skill.special === 'dsa' ? 0.95 + (dsaProgress * 0.001) : 1.0;

    return (
      <div 
        key={`${skill.name}-${idx}`} 
        className="flex-shrink-0 w-[160px] sm:w-[190px] h-[120px] sm:h-[140px]"
      >
        <TiltCard isDarkMode={isDarkMode} intensity={10} className="w-full h-full">
          <motion.div
            animate={{
              scale: isOtherCardHovered ? 0.96 : baseScale,
              opacity: isOtherCardHovered ? 0.65 : 1.0,
            }}
            transition={{
              type: "spring",
              stiffness: 85,
              damping: 14
            }}
            onMouseEnter={() => setHoveredCard({ rowIdx, idx })}
            onMouseLeave={() => setHoveredCard(null)}
            className={`flex flex-col justify-between p-4 rounded-2xl border ${cardBorder} ${cardBg} shadow-lg 
                        backdrop-blur-md transition-all duration-300 h-full w-full relative overflow-hidden group`}
          >
            {/* Specific Special Visual Effects */}
            {/* 1. HTML5 Pulse */}
            {skill.special === "html5" && (
              <div className="absolute inset-0 rounded-2xl border border-orange-500/20 animate-pulse pointer-events-none shadow-[0_0_10px_rgba(255,109,0,0.08)]" />
            )}

            {/* 2. CSS3 Ripple */}
            {skill.special === "css3" && (
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none flex items-center justify-center">
                <div className="absolute w-[90%] h-[90%] border border-blue-500/15 rounded-full animate-[css3-ripple_2.5s_infinite_ease-out]" />
                <div className="absolute w-[90%] h-[90%] border border-blue-500/15 rounded-full animate-[css3-ripple_2.5s_infinite_ease-out_1.25s]" />
              </div>
            )}

            {/* 3. React Atom Orbits */}
            {skill.special === "react" && (
              <div className="absolute -inset-1 opacity-10 hover:opacity-25 transition-opacity duration-300 pointer-events-none flex items-center justify-center overflow-hidden">
                <div className="absolute w-[110%] h-[35%] border border-cyan-500/25 rounded-full animate-[spin_8s_linear_infinite]" />
                <div className="absolute w-[110%] h-[35%] border border-cyan-500/25 rounded-full animate-[spin_8s_linear_infinite]" style={{ transform: "rotate(60deg)" }} />
                <div className="absolute w-[110%] h-[35%] border border-cyan-500/25 rounded-full animate-[spin_8s_linear_infinite]" style={{ transform: "rotate(-60deg)" }} />
              </div>
            )}

            {/* 4. Tailwind Particles */}
            {skill.special === "tailwind" && (
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                {[...Array(3)].map((_, pIdx) => (
                  <motion.div
                    key={pIdx}
                    className="absolute w-1.5 h-1.5 bg-cyan-400/60 rounded-full"
                    animate={{
                      x: ["0%", "100%", "50%", "0%"],
                      y: ["100%", "0%", "60%", "100%"],
                      opacity: [0, 0.8, 0.4, 0]
                    }}
                    transition={{
                      duration: 3.5 + pIdx * 1.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: pIdx * 0.6
                    }}
                    style={{
                      left: `${20 + pIdx * 25}%`,
                      top: `${25 + pIdx * 15}%`
                    }}
                  />
                ))}
              </div>
            )}

            {/* 5. Node.js Radar Rings */}
            {skill.special === "node" && (
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none flex items-center justify-center">
                <div className="absolute w-[60%] h-[60%] border border-green-500/20 rounded-full animate-[ping_2s_infinite]" />
              </div>
            )}

            {/* 6. Python Floating Code */}
            {skill.special === "python" && (
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none text-[8px] font-mono text-yellow-600/10 select-none">
                {["def", "print", "class", "self"].map((sym, symIdx) => (
                  <motion.span
                    key={symIdx}
                    className="absolute"
                    animate={{
                      y: ["110%", "-20%"],
                      opacity: [0, 0.6, 0.6, 0]
                    }}
                    transition={{
                      duration: 5 + symIdx * 1.5,
                      repeat: Infinity,
                      ease: "linear",
                      delay: symIdx * 1.0
                    }}
                    style={{
                      left: `${12 + symIdx * 23}%`,
                    }}
                  >
                    {sym}
                  </motion.span>
                ))}
              </div>
            )}

            {/* 7. MongoDB Data Stream */}
            {skill.special === "mongodb" && (
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none flex justify-around opacity-15">
                {[...Array(3)].map((_, lIdx) => (
                  <div key={lIdx} className="w-[1px] h-full bg-gradient-to-b from-transparent via-emerald-600 to-transparent relative overflow-hidden">
                    <motion.div
                      className="absolute top-0 left-0 w-full h-[30%] bg-emerald-500"
                      animate={{
                        y: ["-100%", "300%"]
                      }}
                      transition={{
                        duration: 1.8 + lIdx * 0.7,
                        repeat: Infinity,
                        ease: "linear",
                        delay: lIdx * 0.3
                      }}
                    />
                  </div>
                ))}
              </div>
            )}

            {/* 8. Vercel Shards */}
            {skill.special === "vercel" && (
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none opacity-[0.08]">
                {[...Array(2)].map((_, vIdx) => (
                  <motion.div
                    key={vIdx}
                    className={`absolute border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[9px] ${isDarkMode ? 'border-b-white' : 'border-b-black'}`}
                    animate={{
                      rotate: [0, 360],
                      y: ["110%", "-20%"]
                    }}
                    transition={{
                      duration: 5 + vIdx * 2.0,
                      repeat: Infinity,
                      ease: "linear",
                      delay: vIdx * 1.5
                    }}
                    style={{
                      left: `${30 + vIdx * 30}%`
                    }}
                  />
                ))}
              </div>
            )}

            {/* 9. Firebase Sparks */}
            {skill.special === "firebase" && (
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none opacity-20">
                {[...Array(3)].map((_, fIdx) => (
                  <motion.div
                    key={fIdx}
                    className="absolute w-1.5 h-1.5 bg-amber-500 rounded-full"
                    animate={{
                      y: ["110%", "-20%"],
                      x: ["0%", fIdx % 2 === 0 ? "10%" : "-10%", "0%"],
                      opacity: [0, 0.8, 0]
                    }}
                    transition={{
                      duration: 3 + fIdx * 1.1,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: fIdx * 0.6
                    }}
                    style={{
                      left: `${25 + fIdx * 25}%`
                    }}
                  />
                ))}
              </div>
            )}

            {/* Premium Rising Spark Particles on Card Hover */}
            {isHovered && (
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                {[...Array(4)].map((_, pIdx) => (
                  <motion.div
                    key={pIdx}
                    className="absolute w-1 h-1 rounded-full"
                    style={{ backgroundColor: skill.color }}
                    initial={{ y: "110%", x: `${20 + pIdx * 20}%`, opacity: 0, scale: 0.4 }}
                    animate={{
                      y: ["100%", "10%"],
                      opacity: [0, 0.8, 0],
                      scale: [0.4, 1.2, 0.4]
                    }}
                    transition={{
                      duration: 1.2 + pIdx * 0.3,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: pIdx * 0.15
                    }}
                  />
                ))}
              </div>
            )}

            {/* Dynamic Border Strobe Ring on Hover */}
            <div 
              className="absolute inset-0 rounded-2xl border-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ borderColor: `${skill.color}50`, boxShadow: `inset 0 0 10px ${skill.color}15` }}
            />

            {/* Card Content Core */}
            <div className="flex items-center space-x-2.5 relative z-10">
              
              {/* Dashed Rotating Holographic Icon Ring */}
              <div 
                className="w-10 h-10 rounded-full border border-dashed border-gray-400/20 group-hover:border-solid transition-all duration-500 flex items-center justify-center flex-shrink-0"
                style={{ 
                  borderColor: isHovered ? `${skill.color}50` : undefined, 
                  animation: 'spin 12s linear infinite',
                  boxShadow: isHovered ? `0 0 8px ${skill.color}20` : undefined
                }}
              >
                <div
                  style={{ color: skill.color, animation: 'spin 12s linear infinite reverse' }}
                  className="text-xl sm:text-2xl group-hover:scale-105 transition-transform duration-300 flex-shrink-0"
                >
                  {skill.icon}
                </div>
              </div>

              <h4 className={`text-xs sm:text-sm font-bold tracking-wide ${skillNameColor} select-none truncate`}>
                {skill.name}
              </h4>
            </div>

            {/* Progress bar and energy percentage */}
            <div className="w-full mt-auto relative z-10">
              <div className={`flex justify-between items-center text-[9px] sm:text-xs font-semibold mb-1 ${skillPercentageColor}`}>
                <span>Proficiency</span>
                <span style={{ color: skill.color }}>{glowIntensity}%</span>
              </div>
              <div className={`w-full h-1.5 ${progressBarBg} rounded-full overflow-hidden relative`}>
                <motion.div
                  className="h-full rounded-full relative overflow-hidden"
                  initial={{ width: 0 }}
                  animate={{ width: `${glowIntensity}%` }}
                  transition={{ duration: 1.0, ease: "easeOut" }}
                  style={{
                    background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})`,
                    boxShadow: `0 0 6px ${skill.color}50`
                  }}
                >
                  {/* Moving Shimmer Energy Flow */}
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.45),transparent)] animate-[shimmer_1.5s_infinite_linear]" style={{ backgroundSize: '200% 100%' }} />
                </motion.div>
              </div>
            </div>

          </motion.div>
        </TiltCard>
      </div>
    );
  };

  return (
    <section 
      id="skills" 
      className="py-20 lg:py-28 relative z-10 overflow-hidden"
    >
      {/* High-Contrast Radar Canvas Background with proper layering behind the cards */}
      <div className={`absolute inset-0 w-full h-full -z-10 opacity-80 pointer-events-none ${sectionBg}`}>
        <Radar
          speed={0.8}
          scale={0.65}
          ringCount={8}
          spokeCount={12}
          ringThickness={0.08}
          spokeThickness={0.015}
          sweepSpeed={0.8}
          sweepWidth={1.5}
          sweepLobes={1}
          color={isDarkMode ? "#a855f7" : "#4f46e5"}
          backgroundColor={isDarkMode ? "#030014" : "#f5f3ff"}
          falloff={1.2}
          brightness={1.5}
          enableMouseInteraction={true}
          mouseInfluence={0.12}
        />
      </div>

      <div className="container mx-auto px-8 md:px-6 relative z-10 flex flex-col items-center">
        
        {/* Scrambler Scramble Title Effect */}
        <div className="skills-header mb-12 flex flex-col items-center text-center">
          <DecryptedText 
            text="Skills & Expertise" 
            animateOn="view"
            speed={40}
            className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight ${headingColor}`}
            encryptedClassName="text-purple-400 font-mono"
          />
          {/* Expanding underline effect */}
          <div className={`w-32 h-1.5 rounded-full mt-4 ${isDarkMode ? 'bg-gradient-to-r from-[#8b5cf6] to-[#d946ef]' : 'bg-gradient-to-r from-purple-600 to-indigo-500'} scale-x-0 animate-[expand-width_1s_ease-out_forwards]`} />
          
          <p 
            ref={descRef}
            className={`text-lg ${subHeadingColor} mt-6 max-w-3xl mx-auto font-medium leading-relaxed`}
          >
            Building interactive, scalable and visually immersive web experiences using a variety of modern tools.
          </p>
        </div>

        {/* Continuous Running Marquee Container (Categories removed, looping continuously right-to-left) */}
        <div className="skills-marquee-container w-full flex flex-col space-y-8 select-none overflow-hidden relative py-4">
          
          {/* Parallel Ticker Row 1 */}
          <div className="w-full overflow-hidden flex pointer-events-auto">
            <div className="flex animate-marquee hover:[animation-play-state:paused] gap-6" style={{ '--speed': '30s' }}>
              {/* Track A */}
              <div className="flex gap-6 pr-6 flex-shrink-0">
                {row1Skills.map((skill, idx) => renderCard(skill, 0, idx))}
              </div>
              {/* Track B (Seamless duplicate) */}
              <div className="flex gap-6 pr-6 flex-shrink-0">
                {row1Skills.map((skill, idx) => renderCard(skill, 0, idx))}
              </div>
            </div>
          </div>

          {/* Parallel Ticker Row 2 */}
          <div className="w-full overflow-hidden flex pointer-events-auto">
            <div className="flex animate-marquee hover:[animation-play-state:paused] gap-6" style={{ '--speed': '35s' }}>
              {/* Track A */}
              <div className="flex gap-6 pr-6 flex-shrink-0">
                {row2Skills.map((skill, idx) => renderCard(skill, 1, idx))}
              </div>
              {/* Track B (Seamless duplicate) */}
              <div className="flex gap-6 pr-6 flex-shrink-0">
                {row2Skills.map((skill, idx) => renderCard(skill, 1, idx))}
              </div>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        /* Infinite Marquee Animation loop */
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee-scroll var(--speed, 30s) linear infinite;
        }
        @keyframes marquee-scroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes expand-width {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes css3-ripple {
          0% { transform: scale(0.95); opacity: 0.15; }
          50% { opacity: 0.45; }
          100% { transform: scale(1.15); opacity: 0; }
        }
      `}</style>
    </section>
  );
}

export default Skills;