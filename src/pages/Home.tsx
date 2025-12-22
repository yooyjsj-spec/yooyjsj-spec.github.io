import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Plane, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { ASSETS } from '../data/assets';

export const Home: React.FC = () => {
  return (
    <Layout>
      <div className="w-full bg-white">
        {/* Hero Section */}
        <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
          {/* Soft Background Image - Fixed Asset */}
          <div className="absolute inset-0">
            <img 
              src={ASSETS.IMAGES.HOME_HERO}
              alt="Aerospace Background" 
              className="w-full h-full object-cover"
            />
            {/* Elegant Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/60 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center md:text-left w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="inline-block px-3 py-1 mb-6 border border-white/30 rounded-full bg-white/10 backdrop-blur-sm">
                <span className="text-white text-xs tracking-widest font-semibold uppercase">Excellence in Research</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
                ADAM LAB
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 font-light max-w-2xl mb-10 leading-relaxed drop-shadow-md">
                <span className="font-semibold text-white">Advancing Aerospace and Defense Materials </span> through <span className="font-semibold text-white"> Microstructural Design of Advanced Alloys</span>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/research" className="px-8 py-4 bg-white text-primary-900 rounded-lg font-medium shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all flex items-center justify-center gap-2 group">
                  Our Research <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/contact" className="px-8 py-4 bg-transparent border border-white/40 text-white rounded-lg font-medium hover:bg-white/10 transition-all text-center">
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section - Soft Atmosphere */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              
              {/* Text Content */}
              <motion.div
                className="flex-1"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-sm font-bold text-primary-600 uppercase tracking-widest mb-3">About Us</h2>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-8 leading-tight">
                  Innovating for the Future of Defense & Aerospace
                </h3>
                <div className="prose prose-lg text-gray-600 mb-8 text-justify">
                  <p>
                    ADAM Lab (AI Analysis & Defense Aerospace Materials) is a premier research facility dedicated to the convergence of material science and artificial intelligence. We focus on designing next-generation superalloys that can withstand the most extreme environments.
                  </p>
                  <p>
                    By leveraging machine learning algorithms, we predict microstructural behaviors and optimize material properties faster than traditional methods allow.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {[
                    { icon: Cpu, label: "AI Analysis", desc: "Data-driven insights" },
                    { icon: Plane, label: "Aerospace", desc: "Next-gen materials" },
                    { icon: Shield, label: "Defense", desc: "Strategic applications" }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl shadow-soft hover:shadow-soft-hover transition-all duration-300 border border-gray-100">
                      <item.icon className="w-8 h-8 text-primary-600 mb-3" />
                      <h4 className="font-bold text-gray-900 mb-1">{item.label}</h4>
                      <span className="text-xs text-gray-500">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Video Content */}
              <motion.div
                className="flex-1 w-full"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative rounded-2xl p-2 bg-white shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 group">
                  <video
                    src={ASSETS.VIDEOS.ABOUT_bg}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="aspect-video w-full rounded-xl bg-gray-100 object-cover"
                  />
                  {/* Optional caption if needed */}
                </div>
                <div className="mt-8 text-center lg:text-left ml-4">
                   <p className="text-sm text-gray-500 italic">"Visualizing atomic structures through advanced simulation"</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};