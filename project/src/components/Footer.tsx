import React from 'react';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 pt-16 pb-8 border-t border-dark-800">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-heading font-bold text-white mb-4">
              Optivance<span className="text-secondary-500">.ai</span>
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Custom AI automation solutions for ambitious businesses. Transform your operations with chatbots, voice assistants, and intelligent workflows.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-gray-400 hover:text-secondary-500 hover:bg-dark-700 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-gray-400 hover:text-secondary-500 hover:bg-dark-700 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-gray-400 hover:text-secondary-500 hover:bg-dark-700 transition-colors">
                <Github size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-gray-400 hover:text-secondary-500 hover:bg-dark-700 transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-gray-400 hover:text-secondary-500 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-secondary-500 transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-secondary-500 transition-colors">Services</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-secondary-500 transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-secondary-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-secondary-500 transition-colors">AI Workflow Automation</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-secondary-500 transition-colors">Custom Chatbots</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-secondary-500 transition-colors">Voice Bots</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-secondary-500 transition-colors">Process Optimization</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-dark-800 pt-8 flex flex-col md:flex-row md:items-center justify-between">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Optivance.ai. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;