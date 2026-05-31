import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/navbar';
import HeroSection from './components/hero';
import About from './components/about';
import Projects from './components/projects';
import Skills from './components/skills'; 
import Experience from './components/experience';
import Qualification from './components/qualification';
import Contact from './components/contact'; 
import Footer from './components/footer';

// Profile picture asset
import profilePic from './assets/pic.png';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme !== 'light'; // Default to dark mode
  });

  const heroImagePlaceholderRef = useRef(null);
  const aboutImagePlaceholderRef = useRef(null);
  const floatingImageRef = useRef(null);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
  };

  // Flying Developer Image coordinate interpolation script
  useEffect(() => {
    const updateFloatingImage = () => {
      const heroPlaceholder = heroImagePlaceholderRef.current;
      const aboutPlaceholder = aboutImagePlaceholderRef.current;
      const floatingImage = floatingImageRef.current;

      if (!heroPlaceholder || !aboutPlaceholder || !floatingImage) return;

      const heroRect = heroPlaceholder.getBoundingClientRect();
      const aboutRect = aboutPlaceholder.getBoundingClientRect();

      // Start interpolation at scroll 0, end at about placeholder center-view
      const startScroll = 0;
      const endScroll = aboutPlaceholder.getBoundingClientRect().top + window.scrollY - window.innerHeight / 2.5;
      const currentScroll = window.scrollY;

      let progress = 0;
      if (endScroll > 0) {
        progress = Math.min(1, Math.max(0, (currentScroll - startScroll) / endScroll));
      }

      // Linear interpolation
      const left = heroRect.left + (aboutRect.left - heroRect.left) * progress;
      const top = heroRect.top + (aboutRect.top - heroRect.top) * progress;
      const width = heroRect.width + (aboutRect.width - heroRect.width) * progress;
      const height = heroRect.height + (aboutRect.height - heroRect.height) * progress;

      // Apply coordinates dynamically
      floatingImage.style.left = `${left}px`;
      floatingImage.style.top = `${top}px`;
      floatingImage.style.width = `${width}px`;
      floatingImage.style.height = `${height}px`;
      floatingImage.style.opacity = '1';
      floatingImage.style.display = 'block';
    };

    // Delay initial layout calculation slightly to ensure CSS styles are painted
    const initTimeout = setTimeout(() => {
      updateFloatingImage();
    }, 150);

    window.addEventListener('scroll', updateFloatingImage);
    window.addEventListener('resize', updateFloatingImage);

    return () => {
      clearTimeout(initTimeout);
      window.removeEventListener('scroll', updateFloatingImage);
      window.removeEventListener('resize', updateFloatingImage);
    };
  }, []);

  return (
    <div className="bg-white dark:bg-[#030014] transition-colors duration-500 min-h-screen text-gray-800 dark:text-white relative overflow-hidden">
      
      {/* Shared Floating Developer Profile Image */}
      <div 
        ref={floatingImageRef}
        className="fixed z-40 rounded-full overflow-hidden shadow-2xl transition-all duration-75 pointer-events-none border-4 border-white dark:border-purple-950/80"
        style={{
          opacity: 0,
          display: 'none',
          willChange: 'top, left, width, height'
        }}
      >
        <img 
          src={profilePic} 
          alt="Himanshu Gupta Profile" 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
        />
      </div>

      <div className="relative z-10">
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <HeroSection isDarkMode={isDarkMode} imagePlaceholderRef={heroImagePlaceholderRef} />
        <About isDarkMode={isDarkMode} imagePlaceholderRef={aboutImagePlaceholderRef} /> 
        <Projects isDarkMode={isDarkMode} />
        <Skills isDarkMode={isDarkMode} />
        <Experience isDarkMode={isDarkMode} />
        <Qualification isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
        <Footer isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}

export default App;


