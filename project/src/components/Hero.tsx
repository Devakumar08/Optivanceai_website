import React, { useEffect } from 'react';

const Hero: React.FC = () => {
  useEffect(() => {
    // Simple particle animation for hero background
    const canvas = document.getElementById('particles-canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;
    
    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', setCanvasSize);
    setCanvasSize();
    
    // Particle properties
    const particlesArray: Particle[] = [];
    const numberOfParticles = 80;
    
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = `rgba(${Math.random() * 50 + 0}, ${Math.random() * 150 + 180}, ${Math.random() * 255}, ${Math.random() * 0.5 + 0.2})`;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }
      
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }
    
    // Create particles
    const init = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };
    
    // Animation loop
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (const particle of particlesArray) {
        particle.update();
        particle.draw();
      }
      
      requestAnimationFrame(animate);
    };
    
    init();
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      <canvas id="particles-canvas" className="absolute inset-0 z-0"></canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900/95 via-dark-900/80 to-dark-900 z-10"></div>
      
      <div className="container relative z-20">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in">
            Unlock the Power of <br />
            <span className="text-secondary-500">AI Automation</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl animate-slide-up">
            Custom chatbots, voice assistants, and workflow automation for ambitious businesses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
            <a href="#contact" className="btn btn-primary">
              Get a Free Consultation
            </a>
            <a href="#services" className="btn btn-outline">
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;