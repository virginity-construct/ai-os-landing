"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function InvestorSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    investmentRange: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    if (!formData.email) {
      setFormStatus({ success: false, message: 'Email is required' });
      return;
    }
    
    setIsLoading(true);
    
    try {
      // For static export, we'll simulate form submission
      // In a real deployment, this would call the API endpoint
      console.log('Investor form submitted:', formData);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      setFormStatus({
        success: true,
        message: 'Thank you for your interest! Our team will contact you shortly.',
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        investmentRange: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({
        success: false,
        message: 'Something went wrong. Please try again later.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="investors" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Investor Relations
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join us in revolutionizing the future of AI and business automation. We're seeking strategic partners who share our vision.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto bg-gray-900 p-8 rounded-xl border border-gray-800 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-gray-300 mb-2">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="Your company"
                />
              </div>
              <div>
                <label htmlFor="investmentRange" className="block text-gray-300 mb-2">Investment Range</label>
                <select
                  id="investmentRange"
                  name="investmentRange"
                  value={formData.investmentRange}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  required
                >
                  <option value="">Select range</option>
                  <option value="$10k-$50k">$10k-$50k</option>
                  <option value="$50k-$250k">$50k-$250k</option>
                  <option value="$250k-$1M">$250k-$1M</option>
                  <option value="$1M+">$1M+</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white h-32"
                placeholder="Tell us about your investment interests..."
              ></textarea>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-md hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              {isLoading ? 'Submitting...' : 'Submit Inquiry'}
            </motion.button>
          </form>
          
          {formStatus && (
            <div className={`mt-6 p-4 rounded-md ${formStatus.success ? 'bg-green-800/50 text-green-200' : 'bg-red-800/50 text-red-200'}`}>
              {formStatus.message}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
