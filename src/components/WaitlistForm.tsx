"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
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
      console.log('Form submitted:', formData);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      setFormStatus({
        success: true,
        message: 'Thank you for joining our waitlist! We\'ll be in touch soon.',
      });
      
      // Reset form
      setFormData({ email: '', name: '' });
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="waitlist" className="section bg-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="heading-lg mb-4">Join the Waitlist</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Be among the first to experience the power of AI OS and transform how you build businesses.
        </p>

        <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
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
            
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-md hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              {isLoading ? 'Submitting...' : 'Join Waitlist'}
            </motion.button>
          </form>
          
          {formStatus && (
            <div className={`mt-4 p-3 rounded-md ${formStatus.success ? 'bg-green-800/50 text-green-200' : 'bg-red-800/50 text-red-200'}`}>
              {formStatus.message}
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default WaitlistForm;
