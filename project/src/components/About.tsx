import React from 'react';
import { Lightbulb, Shield, Zap } from 'lucide-react';
import founderImg from '../assets/founderimg.jpeg';

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-dark-800 section-fade">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">
            About <span className="text-secondary-500">Optivance.ai</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Bridging the gap between cutting-edge AI technology and practical business solutions.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="bg-gradient-to-tr from-primary-600 to-secondary-500 rounded-2xl h-80 md:h-96 overflow-hidden">
                <img
                  src={founderImg}
                  alt="Devakumar GR, Founder"
                  className="w-full h-full object-cover object-center rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-dark-900 rounded-lg p-4 shadow-xl border border-dark-700">
                <p className="text-lg font-semibold">Devakumar GR</p>
                <p className="text-sm text-gray-400">Founder & CEO</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">Our Story</h3>
            <p className="text-gray-300 mb-6">
              Optivance.ai was founded by Devakumar GR, a VIT Chennai B.Tech graduate passionate about helping businesses automate and scale using the latest AI tools. With a strong technical background and a vision for practical AI applications, we bridge the gap between complex technology and business needs.
            </p>
            <h4 className="text-xl font-semibold mb-4 text-white">Our Values</h4>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-dark-800 p-4 rounded-lg border border-dark-700">
                <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center mb-3">
                  <Lightbulb className="w-5 h-5 text-primary-500" />
                </div>
                <h5 className="font-semibold mb-1 text-white">Innovation</h5>
                <p className="text-sm text-gray-400">Pushing boundaries with creative AI solutions</p>
              </div>
              <div className="bg-dark-800 p-4 rounded-lg border border-dark-700">
                <div className="w-10 h-10 bg-secondary-500/20 rounded-lg flex items-center justify-center mb-3">
                  <Shield className="w-5 h-5 text-secondary-500" />
                </div>
                <h5 className="font-semibold mb-1 text-white">Reliability</h5>
                <p className="text-sm text-gray-400">Building robust solutions you can depend on</p>
              </div>
              <div className="bg-dark-800 p-4 rounded-lg border border-dark-700">
                <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center mb-3">
                  <Zap className="w-5 h-5 text-primary-500" />
                </div>
                <h5 className="font-semibold mb-1 text-white">Transparency</h5>
                <p className="text-sm text-gray-400">Clear communication throughout our process</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
