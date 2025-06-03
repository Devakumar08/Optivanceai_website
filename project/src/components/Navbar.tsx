import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Why Us', href: '#why-choose' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background on scroll
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = `#${section.getAttribute('id')}`;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-900/95 backdrop-blur-sm shadow-lg shadow-dark-900/20' : 'bg-transparent'}`}>
      <div className="container">
        <nav className="flex items-center justify-between py-4">
          <a href="#hero" className="flex items-center">
            <span className="text-2xl font-heading font-bold text-white">
              Optivance<span className="text-secondary-500">.ai</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className={`nav-link ${activeSection === link.href ? 'active' : ''}`}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn btn-primary ml-4">
              Get Started
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden text-gray-200 hover:text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden fixed inset-0 z-40 bg-dark-900/98 transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="container p-5 flex flex-col space-y-6 pt-20">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="text-xl font-medium text-gray-200 hover:text-secondary-500 py-2"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#contact" 
            className="btn btn-primary w-full text-center mt-4"
            onClick={closeMenu}
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;