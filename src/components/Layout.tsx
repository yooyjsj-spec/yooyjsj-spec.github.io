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
      
      <footer className="bg-white border-t-2 border-primary-600 py-12 mt-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-xl font-serif font-bold text-primary-700 mb-2">SMD LAB</h2>
          <p className="text-gray-500 text-sm mb-1">Sustainable Materials Design</p>
          <p className="text-gray-500 text-sm mb-6">
            Graduate Institute of Ferrous &amp; Eco Materials Technology (GIFT), POSTECH
          </p>
          <p className="text-gray-400 text-xs mb-4 leading-relaxed">
            77 Cheongam-ro, Nam-gu, Pohang-si, Gyeongsangbuk-do 37673, Republic of Korea
            <br />
            (37673) 경상북도 포항시 남구 청암로 77 포항공과대학교 친환경소재대학원
          </p>
          <div className="text-gray-400 text-xs">
            © {new Date().getFullYear()} SMD LAB, POSTECH GIFT. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};