import React, { useRef, useState } from 'react';

export default function TiltCard({ children, className = '', isDarkMode, intensity = 15 }) {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // Mouse X coordinate relative to card
    const y = e.clientY - rect.top;  // Mouse Y coordinate relative to card

    // Set CSS custom variables for cursor tracking border glow
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);

    // Calculate rotation angles
    const xRotation = ((y / rect.height) - 0.5) * -intensity;
    const yRotation = ((x / rect.width) - 0.5) * intensity;

    setRotateX(xRotation);
    setRotateY(yRotation);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    
    const card = cardRef.current;
    if (card) {
      card.style.setProperty('--mouse-x', '-1000px');
      card.style.setProperty('--mouse-y', '-1000px');
    }
  };

  // Theme-specific neon glowing colors
  const glowColor = isDarkMode 
    ? 'rgba(45, 212, 191, 0.7)'  // Bright Teal
    : 'rgba(99, 102, 241, 0.6)';  // Indigo

  const bgBorder = isDarkMode
    ? 'bg-purple-950/30'
    : 'bg-gray-200';

  const cardStyle = {
    transform: isHovered 
      ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)` 
      : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-in-out',
    transformStyle: 'preserve-3d',
    willChange: 'transform'
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={cardStyle}
      className={`relative group rounded-2xl overflow-hidden p-[1px] transition-shadow duration-300 ${
        isHovered ? 'shadow-2xl shadow-purple-500/10' : 'shadow-lg'
      } ${bgBorder} ${className}`}
    >
      {/* Dynamic Cursor Glow Border Layer */}
      <div 
        className="absolute inset-0 pointer-events-none rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(280px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px), ${glowColor}, transparent 80%)`,
          zIndex: 0
        }}
      />

      {/* Inner Card Container (covers the glow leaving only a 1px border) */}
      <div 
        className={`relative z-10 w-full h-full rounded-2xl transition-colors duration-300 ${
          isDarkMode ? 'bg-[#0d0925]' : 'bg-white'
        }`}
        style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }}
      >
        {children}
      </div>

      <style>{`
        .group:hover::before {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
