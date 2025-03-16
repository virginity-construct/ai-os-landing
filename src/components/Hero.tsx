"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
      <div className="hero-gradient absolute inset-0 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-8 z-10 section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="heading-xl text-white">
            <span className="text-primary">AI OS</span> that builds businesses autonomously
          </h1>
          
          <p className="subheading mt-6">
            Cut your dev team by 90%. Spin up businesses on autopilot. 
            Build the machine that builds machines.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <motion.a 
              href="#waitlist" 
              className="btn-primary text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join the Waitlist
            </motion.a>
            
            <motion.a 
              href="#investor" 
              className="btn-secondary text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request Investor Deck
            </motion.a>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <a href="#features" className="flex flex-col items-center text-gray-400 hover:text-white transition-colors">
          <span className="mb-2">Discover More</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 animate-bounce" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
