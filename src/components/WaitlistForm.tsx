"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WaitlistForm = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    email: '',
    use_case: '',
    profession: '',
    work_email: '',
    social_links: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    if (!formData.email) {
      setFormStatus({
        success: false,
        message: 'Email is required'
      });
      return;
    }

    setIsSubmitting(true);
    setFormStatus({});

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (response.ok) {
        setFormStatus({
          success: true,
          message: data.message || 'Successfully joined the waitlist!'
        });
        // Reset form on success
        setFormData({
          email: '',
          use_case: '',
          profession: '',
          work_email: '',
          social_links: '',
        });
      } else {
        setFormStatus({
          success: false,
          message: data.message || 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({
        success: false,
        message: 'Network error. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="waitlist" className="section bg-black">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
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
              <label htmlFor="email" className="block text-left text-gray-300 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="profession" className="block text-left text-gray-300 mb-2">
                Profession
              </label>
              <input
                type="text"
                id="profession"
                name="profession"
                value={formData.profession}
                onChange={handleChange}
                className="form-input"
                placeholder="e.g., Developer, Entrepreneur, Marketer"
              />
            </div>

            <div>
              <label htmlFor="work_email" className="block text-left text-gray-300 mb-2">
                Work Email
              </label>
              <input
                type="email"
                id="work_email"
                name="work_email"
                value={formData.work_email}
                onChange={handleChange}
                className="form-input"
                placeholder="your@work.com"
              />
            </div>

            <div>
              <label htmlFor="use_case" className="block text-left text-gray-300 mb-2">
                How do you plan to use AI OS?
              </label>
              <textarea
                id="use_case"
                name="use_case"
                value={formData.use_case}
                onChange={handleChange}
                className="form-input h-32 resize-none"
                placeholder="Tell us about your use case..."
              ></textarea>
            </div>

            <div>
              <label htmlFor="social_links" className="block text-left text-gray-300 mb-2">
                Social Links
              </label>
              <input
                type="text"
                id="social_links"
                name="social_links"
                value={formData.social_links}
                onChange={handleChange}
                className="form-input"
                placeholder="LinkedIn, Twitter, etc."
              />
            </div>

            {formStatus.message && (
              <div className={`p-4 rounded-lg ${formStatus.success ? 'bg-green-900/50 text-green-200' : 'bg-red-900/50 text-red-200'}`}>
                {formStatus.message}
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  'Join Waitlist'
                )}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default WaitlistForm;
