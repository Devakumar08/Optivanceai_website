import React from 'react';
import { CheckCircle } from 'lucide-react';
// If your component is in src/components/
import founderImg from '../assets/founderimg.jpeg';


const reasons = [
  'Engineered by a VIT Chennai graduate with hands-on experience in leading AI automation platforms',
  'Deep understanding of both technical AI capabilities and business requirements',
  'Personalized approach to each client project with dedicated support',
  'Transparent development process with regular updates and clear communication',
  'Post-implementation support and optimization',
  'Commitment to delivering solutions that provide real ROI',
];

const badges = [
  'VIT Chennai Alumni',
  'Make.com Certified Developer',
  'Voiceflow Expert',
  'AI Solutions Provider',
];

const WhyChoose: React.FC = () => {
  return (
    <section id="why-choose" className="section bg-dark-900 section-fade">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Why Choose <span className="text-secondary-500">Optivance</span></h2>
          <p className="section-subtitle mx-auto">
            Partner with a team that understands both the technical and business aspects of AI automation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-secondary-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-300">{reason}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-white">Trust Badges</h3>
              <div className="flex flex-wrap gap-3">
                {badges.map((badge, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-dark-800 border border-dark-700 rounded-full text-sm font-medium text-gray-300"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="p-1 bg-gradient-to-tr from-primary-500 to-secondary-500 rounded-2xl">
              <div className="bg-dark-800 p-8 rounded-xl">
                <div className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 p-6 rounded-lg mb-6">
                  <blockquote className="text-lg italic text-gray-300">
                    Empowering your business with AI-driven solutions. Simplify operations, unlock growth, and let’s build the future—together!
                  </blockquote>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-dark-700 mr-4 flex items-center justify-center text-xs text-gray-400">
                    <img
  src={founderImg}
  alt="Devakumar GR, Founder"
  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-secondary-500"
/>

                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Devakumar GR</h4>
                    <p className="text-sm text-gray-400">Founder & CEO, Optivance.ai</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-dark-900 rounded-lg p-4 shadow-xl border border-dark-700">
              <p className="text-sm font-medium text-secondary-500">+98%</p>
              <p className="text-xs text-gray-400">Client satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
