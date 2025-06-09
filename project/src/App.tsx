import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import WhyChoose from './components/WhyChoose';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useScrollAnimation from './utils/scrollAnimation';
import CalendlyPopup from './components/CalendlyPopup';

function App() {
  // Initialize scroll animations
  useScrollAnimation();

  // Update title
  useEffect(() => {
    document.title = 'Optivance.ai | AI Automation Agency';
  }, []);

  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <WhyChoose />
      <Contact />
      <Footer />
      <CalendlyPopup />
     
    </div>
  );
}

export default App;
