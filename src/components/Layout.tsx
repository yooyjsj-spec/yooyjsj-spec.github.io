import React from 'react';
import { Navbar } from './Navbar';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-800 flex flex-col font-sans">
      <Navbar />
      <motion.main 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex-grow pt-20"
      >
        {children}
      </motion.main>
      
      <footer className="bg-white border-t border-gray-200 py-12 mt-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-xl font-serif font-bold text-primary-900 mb-2">ADAM LAB</h2>
          <p className="text-gray-500 text-sm mb-6">AI Analysis & Defense Aerospace Materials</p>
          <div className="text-gray-400 text-xs">
            © {new Date().getFullYear()} ADAM LAB. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};