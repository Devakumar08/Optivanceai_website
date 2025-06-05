import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Replace these with your actual values
  const AIRTABLE_API_KEY = 'pat32rRvagPTbovUR.66d9b098feb4b9dd5956a81e51bdd243be8579d93ba89b5441a804f23f8b4523';
  const AIRTABLE_BASE_ID = 'app5kLk3YVn9uGmHw'; // You need to provide this
  const AIRTABLE_TABLE_NAME = 'Table 1'; // You need to provide this

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const submitToAirtable = async (data: typeof formData) => {
    try {
      const response = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: {
            Name: data.name,
            email: data.email,
            company: data.company,
            message: data.message,
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error submitting to Airtable:', error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitToAirtable(formData);
      alert('Thanks for reaching out! We will contact you soon.');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      alert('There was an error submitting the form. Please try again.');
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section bg-dark-800 section-fade">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Get in <span className="text-secondary-500">Touch</span>
          </h2>
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
                  <a
                    href="mailto:optivance.devaku@gmail.com"
                    className="text-gray-400 hover:underline"
                  >
                    optivance.devakumar@gmail.com
                  </a>
                </div>
              </div>
              {/* Calendly Button */}
              <div className="mt-4">
                <a
                  href="https://calendly.com/optivance-devakumar?hide_gdpr_banner=1&hide_event_type_details=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 rounded-full font-bold shadow-lg transition-colors"
                  style={{
                    background: "#00E0FF",
                    color: "#181F2A",
                    border: "none",
                    fontSize: "1rem",
                    fontWeight: 700,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                    cursor: "pointer"
                  }}
                >
                  Schedule time with me
                </a>
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
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent text-white disabled:opacity-50"
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
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent text-white disabled:opacity-50"
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
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent text-white disabled:opacity-50"
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
                  disabled={isSubmitting}
                  rows={4}
                  className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent text-white resize-none disabled:opacity-50"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                aria-label="Get a Free Consultation"
                className="w-full btn btn-primary flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4 mr-2" />
                {isSubmitting ? 'Submitting...' : 'Get a Free Consultation'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
