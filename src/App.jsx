import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import CodingProfiles from './components/CodingProfiles';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { AnimatedNetworkBackground } from './components/AnimatedNetworkBackground';

function App() {
  return (
    <div className="relative min-h-screen bg-transparent">
      {/* Fixed Background Gradient Blobs to enhance Glassmorphism */}
      <div className="fixed inset-0 w-full h-full overflow-hidden z-[-10] pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-indigo-500/30 rounded-full blur-[100px]"></div>
      </div>
      
      <AnimatedNetworkBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <CodingProfiles />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
