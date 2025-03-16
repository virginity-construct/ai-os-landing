"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SystemDiagram from './SystemDiagram';

const AgentCard = ({ title, description, index }: { title: string; description: string; index: number }) => {
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
      className="agent-card"
    >
      <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

const AgentSystem = () => {
  const agents = [
    {
      title: "Content Strategist",
      description: "Analyzes market trends and competition to develop optimal content strategies for maximum impact."
    },
    {
      title: "Content Creator",
      description: "Produces high-quality written content from blog posts to technical documentation and marketing copy."
    },
    {
      title: "Media Generator",
      description: "Creates visual assets, videos, and interactive media to complement written content."
    },
    {
      title: "Distribution Agent",
      description: "Handles content publishing, social media management, and audience targeting."
    },
    {
      title: "Monetization Agent",
      description: "Implements and optimizes revenue streams from subscriptions to affiliate marketing."
    },
    {
      title: "Analyst Agent",
      description: "Tracks performance metrics and provides actionable insights for continuous improvement."
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="agents" className="section bg-gray-950">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="heading-lg">The 6 Core Agents</h2>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
          AI OS is powered by six specialized agents working in harmony to build and grow businesses autonomously.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agents.map((agent, index) => (
          <AgentCard
            key={index}
            title={agent.title}
            description={agent.description}
            index={index}
          />
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-16 max-w-4xl mx-auto"
      >
        <h3 className="text-2xl font-bold mb-6 text-center">System Diagram</h3>
        <SystemDiagram />
      </motion.div>
    </section>
  );
};

export default AgentSystem;
