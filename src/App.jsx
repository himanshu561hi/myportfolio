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
