import React, { useEffect, useRef, useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaHandshake, FaDownload } from 'react-icons/fa';
import resume from '../assets/resume.pdf';
import DecryptedText from '../background/DecryptedText';
import TiltCard from '../background/TiltCard';

function Contact({ isDarkMode }) {
  const canvasRef = useRef(null);

  // Dynamic clipboard copy states
  const [copyEmailStatus, setCopyEmailStatus] = useState('Click to Copy');
  const [copyPhoneStatus, setCopyPhoneStatus] = useState('Click to Copy');
  const [copyLocationStatus, setCopyLocationStatus] = useState('Click to Copy');

  const handleCopyEmail = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText("himanshu561hi@gmail.com");
    setCopyEmailStatus("Copied!");
    setTimeout(() => setCopyEmailStatus("Click to Copy"), 2000);
  };

  const handleCopyPhone = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText("+91 8090860670");
    setCopyPhoneStatus("Copied!");
    setTimeout(() => setCopyPhoneStatus("Click to Copy"), 2000);
  };

  const handleCopyLocation = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText("Ghaziabad, Uttar Pradesh, India");
    setCopyLocationStatus("Copied!");
    setTimeout(() => setCopyLocationStatus("Click to Copy"), 2000);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      canvas.width = parent ? parent.offsetWidth : window.innerWidth;
      canvas.height = parent ? parent.offsetHeight : 600;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const symbols = ['{ }', 'const', 'let', 'function', '=>', '&&', '||', '<>', '</>', 'React', 'Node', 'import', 'export', 'JSON', 'API', 'npm', 'Vite', 'CSS', 'HTML', 'git', 'await', 'async', '[]', '()', 'map', 'filter'];
    const colors = isDarkMode 
      ? ['rgba(45, 212, 191, ', 'rgba(168, 85, 247, ', 'rgba(6, 182, 212, ']  // Teal, Purple, Cyan
      : ['rgba(99, 102, 241, ', 'rgba(236, 72, 153, ', 'rgba(79, 70, 229, ']; // Indigo, Pink, Purple

    class CodeParticle {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -30;
        this.symbol = symbols[Math.floor(Math.random() * symbols.length)];
        this.colorPrefix = colors[Math.floor(Math.random() * colors.length)];
        this.fontSize = Math.floor(Math.random() * 14) + 12; // 12px to 26px
        this.speedY = Math.random() * 0.9 + 0.4; // Slightly faster for visual presence
        this.speedX = (Math.random() - 0.5) * 0.25;
        this.opacity = Math.random() * 0.45 + 0.2; // Denser opacity for clear visibility
        this.angle = Math.random() * Math.PI * 2;
        this.spin = (Math.random() - 0.5) * 0.015;
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.angle += this.spin;
        if (this.y > canvas.height + 30 || this.x < -50 || this.x > canvas.width + 50) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.font = `bold ${this.fontSize}px Consolas, Monaco, monospace`;
        ctx.fillStyle = this.colorPrefix + this.opacity + ')';
        ctx.fillText(this.symbol, 0, 0);
        ctx.restore();
      }
    }

    const initParticles = () => {
      particles = [];
      const count = 90; // "huge volume" and highly spaced
      for (let i = 0; i < count; i++) {
        particles.push(new CodeParticle());
      }
    };
    initParticles();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDarkMode]);

  const sectionBg = isDarkMode 
    ? "bg-[#030014]" 
    : "bg-indigo-50/15 backdrop-blur-sm";

  const headingColor = isDarkMode ? "text-white" : "text-gray-900";
  const paraColor = isDarkMode ? "text-gray-300" : "text-gray-600";
  
  // Card styles
  const cardBg = isDarkMode ? "bg-[#0d0925]/90 border-purple-500/20 text-white" : "bg-white/90 border-gray-200 text-gray-800";
  const cardBorder = isDarkMode ? "border-purple-500/20" : "border-gray-200";
  const cardIconBg = isDarkMode ? "bg-teal-500/10 shadow-[0_0_15px_rgba(45,212,191,0.2)]" : "bg-indigo-600/10 shadow-[0_0_15px_rgba(99,102,241,0.15)]";
  const cardIconColor = isDarkMode ? "text-teal-400" : "text-indigo-600";
  const cardTitleColor = isDarkMode ? "text-white" : "text-gray-900";
  const cardInfoColor = isDarkMode ? "text-gray-300" : "text-gray-600";
  const cardInfoHoverColor = isDarkMode ? "text-teal-300" : "text-indigo-600";

  // Solid, highly visible CTA buttons
  const primaryBtn = isDarkMode
    ? "bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-500 hover:brightness-110 text-[#030014] shadow-[0_0_30px_rgba(45,212,191,0.45)] border border-teal-300/40"
    : "bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:brightness-110 text-white shadow-[0_10px_25px_rgba(99,102,241,0.25)] border border-indigo-500/30";

  const secondaryBtn = isDarkMode
    ? "bg-[#0d0925] border-2 border-purple-500/70 text-white shadow-[0_0_20px_rgba(168,85,247,0.25)] hover:border-purple-400 hover:text-purple-200 hover:shadow-[0_0_25px_rgba(168,85,247,0.45)]"
    : "bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50/50 shadow-[0_4px_12px_rgba(99,102,241,0.12)]";
  
  return (
    <section id="contact" className={`relative min-h-screen pt-20 pb-44 lg:pt-28 lg:pb-52 flex items-center text-center ${sectionBg} transition-colors duration-300 overflow-hidden z-10`}>
      
      {/* Code Floating Particles Canvas Overlay */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        style={{ mixBlendMode: isDarkMode ? 'screen' : 'multiply' }}
      />

      <div className="container mx-auto px-8 md:px-4 relative z-10 flex flex-col items-center">
        
        {/* Holographic Decrypted Scramble Title */}
        <div className="mb-4 flex flex-col items-center justify-center">
          <DecryptedText 
            text="Let's Work Together!" 
            animateOn="view"
            speed={40}
            className={`text-3xl lg:text-5xl font-black tracking-tight ${headingColor}`}
            encryptedClassName="text-purple-400 font-mono"
          />
          <div className={`w-32 h-1.5 rounded-full mt-4 ${isDarkMode ? 'bg-gradient-to-r from-[#8b5cf6] to-[#d946ef]' : 'bg-gradient-to-r from-purple-600 to-indigo-500'} scale-x-0 animate-[expand-width_1s_ease-out_forwards]`} />
        </div>

        <p className={`text-lg max-w-3xl mx-auto ${paraColor} mb-12 font-medium leading-relaxed`}>
          Ready to bring your ideas to life? I'm passionate about creating exceptional digital experiences and would love to collaborate on your next project.
        </p>

        {/* Contact Cards with click-to-copy dynamic tooltips */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 w-full">
          
          {/* Card 1: Email */}
          <TiltCard isDarkMode={isDarkMode} intensity={12}>
            <div 
              onClick={handleCopyEmail}
              className={`flex flex-col items-center justify-center p-8 rounded-2xl border ${cardBorder} ${cardBg} shadow-lg backdrop-blur-md transition-all duration-300 h-full group/card cursor-pointer relative overflow-visible hover:border-teal-400/50 hover:shadow-[0_0_25px_rgba(45,212,191,0.2)] hover:scale-[1.03]`}
            >
              {/* Clipboard Tooltip */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-teal-500 text-white dark:bg-teal-400 dark:text-[#030014] text-xs font-black rounded-lg opacity-0 group-hover/card:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-lg z-30 flex items-center gap-1.5">
                <span>{copyEmailStatus}</span>
                {copyEmailStatus === "Copied!" && <span>✓</span>}
                <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-teal-500 dark:bg-teal-400 rotate-45"></div>
              </div>

              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-5 ${cardIconBg} animate-[breathe_3s_ease-in-out_infinite]`}>
                <FaEnvelope className={`text-2xl ${cardIconColor}`} />
              </div>
              <h3 className={`text-xl font-extrabold ${cardTitleColor} mb-2`}>Email</h3>
              <p className="text-md font-semibold">
                <DecryptedText 
                  text="himanshu561hi@gmail.com" 
                  animateOn="hover"
                  speed={40}
                  className={`${cardInfoColor} group-hover/card:${cardInfoHoverColor} font-mono`}
                />
              </p>
              <span className={`text-[10px] uppercase font-bold tracking-wider mt-4 opacity-50 group-hover/card:opacity-100 transition-opacity duration-300 text-teal-400`}>
                Click to Copy
              </span>
            </div>
          </TiltCard>
          
          {/* Card 2: Phone */}
          <TiltCard isDarkMode={isDarkMode} intensity={12}>
            <div 
              onClick={handleCopyPhone}
              className={`flex flex-col items-center justify-center p-8 rounded-2xl border ${cardBorder} ${cardBg} shadow-lg backdrop-blur-md transition-all duration-300 h-full group/card cursor-pointer relative overflow-visible hover:border-teal-400/50 hover:shadow-[0_0_25px_rgba(45,212,191,0.2)] hover:scale-[1.03]`}
            >
              {/* Clipboard Tooltip */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-teal-500 text-white dark:bg-teal-400 dark:text-[#030014] text-xs font-black rounded-lg opacity-0 group-hover/card:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-lg z-30 flex items-center gap-1.5">
                <span>{copyPhoneStatus}</span>
                {copyPhoneStatus === "Copied!" && <span>✓</span>}
                <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-teal-500 dark:bg-teal-400 rotate-45"></div>
              </div>

              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-5 ${cardIconBg} animate-[breathe_3s_ease-in-out_infinite]`} style={{ animationDelay: '1s' }}>
                <FaPhone className={`text-2xl ${cardIconColor}`} />
              </div>
              <h3 className={`text-xl font-extrabold ${cardTitleColor} mb-2`}>Phone</h3>
              <p className="text-md font-semibold">
                <DecryptedText 
                  text="+91 8090860670" 
                  animateOn="hover"
                  speed={40}
                  className={`${cardInfoColor} group-hover/card:${cardInfoHoverColor} font-mono`}
                />
              </p>
              <span className={`text-[10px] uppercase font-bold tracking-wider mt-4 opacity-50 group-hover/card:opacity-100 transition-opacity duration-300 text-teal-400`}>
                Click to Copy
              </span>
            </div>
          </TiltCard>
          
          {/* Card 3: Location */}
          <TiltCard isDarkMode={isDarkMode} intensity={12}>
            <div 
              onClick={handleCopyLocation}
              className={`flex flex-col items-center justify-center p-8 rounded-2xl border ${cardBorder} ${cardBg} shadow-lg backdrop-blur-md transition-all duration-300 h-full group/card cursor-pointer relative overflow-visible hover:border-teal-400/50 hover:shadow-[0_0_25px_rgba(45,212,191,0.2)] hover:scale-[1.03]`}
            >
              {/* Clipboard Tooltip */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-teal-500 text-white dark:bg-teal-400 dark:text-[#030014] text-xs font-black rounded-lg opacity-0 group-hover/card:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-lg z-30 flex items-center gap-1.5">
                <span>{copyLocationStatus}</span>
                {copyLocationStatus === "Copied!" && <span>✓</span>}
                <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-teal-500 dark:bg-teal-400 rotate-45"></div>
              </div>

              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-5 ${cardIconBg} animate-[breathe_3s_ease-in-out_infinite]`} style={{ animationDelay: '2s' }}>
                <FaMapMarkerAlt className={`text-2xl ${cardIconColor}`} />
              </div>
              <h3 className={`text-xl font-extrabold ${cardTitleColor} mb-2`}>Location</h3>
              <p className="text-md font-semibold">
                <DecryptedText 
                  text="Ghaziabad, India" 
                  animateOn="hover"
                  speed={40}
                  className={`${cardInfoColor} group-hover/card:${cardInfoHoverColor} font-mono`}
                />
              </p>
              <span className={`text-[10px] uppercase font-bold tracking-wider mt-4 opacity-50 group-hover/card:opacity-100 transition-opacity duration-300 text-teal-400`}>
                Click to Copy
              </span>
            </div>
          </TiltCard>
        </div>
        
        {/* Prominent, Highly Visible Buttons with distinct neon accents */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8 w-full sm:w-auto font-black text-lg">
          <a 
            href="https://www.linkedin.com/in/himanshu561hi/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`flex items-center justify-center px-10 py-5 rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 ${primaryBtn} relative overflow-hidden`}
          >
            <FaHandshake className="mr-3 text-xl" /> Get In Touch
          </a>
          <a 
            href={resume} 
            download 
            className={`flex items-center justify-center px-10 py-5 rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 backdrop-blur-sm ${secondaryBtn} relative overflow-hidden`}
          >
            <FaDownload className="mr-3 text-xl" /> Download Resume
          </a>
        </div>
      </div>
      
      <style>{`
        @keyframes expand-width {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes breathe {
          0%, 100% { transform: scale(1); box-shadow: 0 0 10px rgba(45,212,191,0.15); }
          50% { transform: scale(1.06); box-shadow: 0 0 20px rgba(45,212,191,0.35); }
        }
      `}</style>
    </section>
  );
}

export default Contact;