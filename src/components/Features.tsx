"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FeatureCard = ({ title, description, index }: { title: string; description: string; index: number }) => {
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
      className="fact-card"
    >
      <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

const Features = () => {
  const features = [
    {
      title: "90% Dev Team Reduction",
      description: "Replace large development teams with autonomous AI agents that build and maintain your software."
    },
    {
      title: "Self-Improving AI",
      description: "Our system continuously learns and optimizes itself, getting more efficient with every task."
    },
    {
      title: "Autonomous Business Launch",
      description: "From ideation to execution, AI OS can launch entire businesses with minimal human oversight."
    },
    {
      title: "6 Integrated AI Agents",
      description: "A complete ecosystem of specialized agents working together to build and grow your business."
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="features" className="section bg-black">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="heading-lg">Fast Facts</h2>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
          AI OS is revolutionizing how businesses are built and operated in the digital age.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
