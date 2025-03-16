"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 flex justify-between items-center bg-black bg-opacity-80 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center">
        <motion.div 
          className="text-2xl font-bold text-white flex items-center"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-primary mr-1">AI</span>OS
        </motion.div>
      </div>
      
      <nav className="hidden md:flex space-x-8">
        <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
        <a href="#agents" className="text-gray-300 hover:text-white transition-colors">Agents</a>
        <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
      </nav>
      
      <motion.a 
        href="#waitlist" 
        className="btn-primary text-sm md:text-base py-2 px-4 md:py-2 md:px-6"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Join Waitlist
      </motion.a>
    </motion.header>
  );
};

export default Header;
