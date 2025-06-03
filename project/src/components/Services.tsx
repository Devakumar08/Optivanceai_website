import React from 'react';
import { Bot, MessageSquare, Mic, GitMerge } from 'lucide-react';

const services = [
  {
    icon: <GitMerge size={28} />,
    title: 'AI Workflow Automation',
    description: 'Streamline your business processes with custom AI-powered workflows using Make.com and other leading platforms.',
    bgClass: 'from-primary-500/20 to-primary-700/20',
    iconClass: 'text-primary-400',
  },
  {
    icon: <MessageSquare size={28} />,
    title: 'Custom Chatbots',
    description: 'Intelligent conversational interfaces built with Voiceflow, designed to engage customers and provide instant support.',
    bgClass: 'from-secondary-500/20 to-secondary-700/20',
    iconClass: 'text-secondary-400',
  },
  {
    icon: <Mic size={28} />,
    title: 'Voice Bots',
    description: 'Advanced voice assistants using Vapi and Bland.ai for interviews, appointments, and personalized customer interactions.',
    bgClass: 'from-primary-500/20 to-primary-700/20',
    iconClass: 'text-primary-400',
  },
  {
    icon: <Bot size={28} />,
    title: 'Process Optimization',
    description: 'End-to-end integration and optimization of your existing workflows with AI-powered automation tools.',
    bgClass: 'from-secondary-500/20 to-secondary-700/20',
    iconClass: 'text-secondary-400',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services\" className="section bg-dark-900 section-fade">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">What We <span className="text-secondary-500">Do</span></h2>
          <p className="section-subtitle mx-auto">
            We build and deploy AI-powered chatbots, voice bots, and process automations using industry-leading tools like Make.com, Voiceflow, Vapi, Bland.ai, and Retell.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="card group hover:transform hover:scale-105"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.bgClass} flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300`}>
                <div className={service.iconClass}>
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#projects" className="btn btn-outline">
            See Our Work in Action
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;