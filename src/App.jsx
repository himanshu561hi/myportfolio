import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import HeroSection from './components/hero';
import About from './components/about';
import Projects from './components/projects';
import Skills from './components/skills'; 
import Experience from './components/experience';
import Qualification from './components/qualification';
import Contact from './components/contact'; 
import Footer from './components/footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

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

  return (
    <div className="bg-white dark:bg-gray-950 transition-colors duration-300 min-h-screen text-gray-800 dark:text-white">
      <div className="relative z-0">
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <HeroSection isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} /> 
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


