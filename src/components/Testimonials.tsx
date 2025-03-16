"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TestimonialCard = ({ quote, author, role, index }: { quote: string; author: string; role: string; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-900 p-6 rounded-lg border border-gray-800"
    >
      <svg className="h-8 w-8 text-primary mb-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <p className="text-gray-300 mb-4">{quote}</p>
      <div>
        <p className="font-bold">{author}</p>
        <p className="text-gray-400 text-sm">{role}</p>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "AI OS has completely transformed how we build products. What used to take a team of 20 developers now requires just 2 people overseeing the AI agents.",
      author: "Sarah Johnson",
      role: "CTO, TechVenture"
    },
    {
      quote: "The speed at which AI OS can iterate and launch new features is mind-blowing. We've increased our product development velocity by 500%.",
      author: "Michael Chen",
      role: "Founder, StartupX"
    },
    {
      quote: "As an investor, I've seen the impact of AI OS across multiple portfolio companies. It's not just cost-cutting—it's a fundamental shift in how software is built.",
      author: "David Williams",
      role: "Partner, Future Capital"
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="testimonials" className="section bg-black">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="heading-lg">What Early Adopters Say</h2>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
          Companies using AI OS are seeing unprecedented results in development speed and efficiency.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            quote={testimonial.quote}
            author={testimonial.author}
            role={testimonial.role}
            index={index}
          />
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-16 text-center"
      >
        <h3 className="text-xl font-bold mb-6">As Seen On</h3>
        <div className="flex flex-wrap justify-center gap-8 opacity-70">
          <div className="h-12 w-32 bg-gray-800 rounded flex items-center justify-center">TechCrunch</div>
          <div className="h-12 w-32 bg-gray-800 rounded flex items-center justify-center">Forbes</div>
          <div className="h-12 w-32 bg-gray-800 rounded flex items-center justify-center">Wired</div>
          <div className="h-12 w-32 bg-gray-800 rounded flex items-center justify-center">VentureBeat</div>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
