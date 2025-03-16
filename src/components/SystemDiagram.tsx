"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SystemDiagram = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Animation variants for the diagram elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const agents = [
    { id: 1, name: "Content Strategist", color: "#346DDB" },
    { id: 2, name: "Content Creator", color: "#4A80E3" },
    { id: 3, name: "Media Generator", color: "#6093EB" },
    { id: 4, name: "Distribution Agent", color: "#76A6F3" },
    { id: 5, name: "Monetization Agent", color: "#8CB9FB" },
    { id: 6, name: "Analyst Agent", color: "#A2CCF4" }
  ];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="relative h-96 md:h-[500px] bg-gray-900 rounded-xl border border-gray-800 p-6 overflow-hidden"
    >
      {/* Central AI OS Hub */}
      <motion.div 
        variants={itemVariants}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-primary bg-opacity-20 flex items-center justify-center z-10"
      >
        <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center">
          <span className="text-xl font-bold text-white">AI OS</span>
        </div>
      </motion.div>

      {/* Agent Nodes */}
      {agents.map((agent, index) => {
        // Calculate position in a circle around the center
        const angle = (index * (360 / agents.length)) * (Math.PI / 180);
        const radius = 150; // Distance from center
        const top = `calc(50% + ${Math.sin(angle) * radius}px)`;
        const left = `calc(50% + ${Math.cos(angle) * radius}px)`;

        return (
          <motion.div
            key={agent.id}
            variants={itemVariants}
            className="absolute w-24 h-24 rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2"
            style={{ 
              top, 
              left, 
              backgroundColor: agent.color,
              boxShadow: `0 0 15px ${agent.color}40`
            }}
          >
            <div className="text-center text-xs font-medium text-white px-1">
              {agent.name}
            </div>
          </motion.div>
        );
      })}

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#346DDB" />
          </marker>
        </defs>
        <g className="lines">
          {agents.map((agent, index) => {
            const angle = (index * (360 / agents.length)) * (Math.PI / 180);
            const radius = 150;
            const x2 = 50 + Math.cos(angle) * radius;
            const y2 = 50 + Math.sin(angle) * radius;

            return (
              <motion.line
                key={`line-${agent.id}`}
                variants={itemVariants}
                x1="50%" 
                y1="50%" 
                x2={`${x2}%`} 
                y2={`${y2}%`}
                stroke="#346DDB"
                strokeWidth="2"
                strokeDasharray="5,5"
                markerEnd="url(#arrowhead)"
              />
            );
          })}
        </g>
      </svg>

      {/* Background Decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
    </motion.div>
  );
};

export default SystemDiagram;
