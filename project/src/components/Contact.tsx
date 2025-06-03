import React, { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thanks for reaching out! We will contact you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <section id="contact" className="section bg-dark-800 section-fade">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Get in <span className="text-secondary-500">Touch</span></h2>
          <p className="section-subtitle mx-auto">
            Ready to transform your business with AI automation? Let's start the conversation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white">Let's Discuss Your Project</h3>
            <p className="text-gray-300 mb-8">
              Whether you're looking to automate workflows, create a custom chatbot, or develop a voice assistant, we're here to help. Fill out the form, and we'll get back to you within 24 hours.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-secondary-500/20 flex items-center justify-center mr-4">
                  <Mail className="w-5 h-5 text-secondary-500" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Email Us</h4>
                  <p className="text-gray-400"> optivance.devakumar@gmail.com </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-secondary-500/20 flex items-center justify-center mr-4">
                  <Phone className="w-5 h-5 text-secondary-500" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Call Us</h4>
                  <p className="text-gray-400">+91 70108 17168</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="card">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent text-white"
                  placeholder="John Smith"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent text-white"
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent text-white"
                  placeholder="Your Company Ltd."
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent text-white resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full btn btn-primary flex items-center justify-center"
              >
                <Send className="w-4 h-4 mr-2" />
                Get a Free Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
