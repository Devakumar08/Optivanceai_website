import React from 'react';
import { MessageSquare, Mic, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Hotel Booking Chatbot',
    description: 'Conversational AI for hotel bookings and guest services, connected to live datasets for real-time updates.',
    icon: <MessageSquare size={24} />,
    iconBg: 'bg-primary-500/20',
    iconColor: 'text-primary-400',
    techStack: ['Voiceflow', 'Make.com', 'Hotel PMS API'],
    demoLink: '#',
  },
  {
    title: 'Voice AI Bot',
    description: 'A quirky, conversational AI assistant that responds to your voice and text with humor and personality. Try the live demo!',
    icon: <Mic size={24} />,
    iconBg: 'bg-secondary-500/20',
    iconColor: 'text-secondary-400',
    techStack: ['React', 'OpenAI', 'Web Speech API'],
    demoLink: 'https://theuselessfunnyassistant.netlify.app/',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section bg-dark-800 section-fade">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Project <span className="text-secondary-500">Highlights</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Explore our recent AI automation projects that deliver real business results.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card hover:shadow-lg hover:shadow-secondary-500/5 overflow-hidden group">
              <div className="flex items-start">
                <div className={`mr-5 ${project.iconBg} p-3 rounded-lg ${project.iconColor}`}>
                  {project.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-dark-700 rounded-full text-xs text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 border-t border-dark-700 pt-4">
                <a 
                  href={project.demoLink}
                  className="inline-flex items-center text-secondary-500 hover:text-secondary-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="mr-2">View Project Details</span>
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              
              <div className="mt-6 bg-dark-700 h-48 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-gray-400">Project Preview</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
