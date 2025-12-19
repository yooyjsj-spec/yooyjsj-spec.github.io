import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, BookOpen, FileText, Award, Calendar } from 'lucide-react';
import { journalData } from '../data/journals';
import { ASSETS } from '../data/assets';

type Tab = 'journals' | 'conferences' | 'patents';

export const Publications: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('journals');

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4 tracking-tight">Publications</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Our research output across leading scientific journals, international conferences, and intellectual property.
          </p>
        </motion.div>

        {/* Custom Tab Navigation */}
        <div className="flex justify-center mb-16">
          <div className="flex space-x-2 bg-gray-100/50 p-1.5 rounded-xl border border-gray-200">
            {[
              { id: 'journals', label: 'Journals', icon: BookOpen },
              { id: 'conferences', label: 'Conferences', icon: FileText },
              { id: 'patents', label: 'Patents', icon: Award }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as Tab)}
                className={`
                  relative px-6 py-3 rounded-lg flex items-center gap-2 text-sm font-bold tracking-wide transition-all duration-300
                  ${activeTab === tab.id ? 'text-primary-700' : 'text-gray-500 hover:text-gray-900'}
                `}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white rounded-lg shadow-sm border border-gray-200"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <tab.icon size={16} />
                  {tab.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          {activeTab === 'journals' && (
            <motion.div
              key="journals"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 gap-6"
            >
              {journalData.map((pub, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-hover border border-gray-100 transition-all duration-300 group"
                >
                  <div className="flex flex-col md:flex-row h-full">
                    {/* Image Section */}
                    <div className="md:w-48 lg:w-64 h-48 md:h-auto bg-gray-50 shrink-0 relative overflow-hidden border-b md:border-b-0 md:border-r border-gray-100 flex items-center justify-center">
                       <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200" />
                       <img 
                          src={pub.image || ASSETS.JOURNALS.DEFAULT_COVER}
                          alt="Journal Cover"
                          className="w-full h-full object-cover relative z-10 opacity-90 group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            // Fallback if image fails to load
                            if (e.currentTarget.src !== ASSETS.JOURNALS.DEFAULT_COVER) {
                                e.currentTarget.src = ASSETS.JOURNALS.DEFAULT_COVER;
                            } else {
                                // If default also fails, hide image
                                e.currentTarget.style.display = 'none';
                            }
                          }}
                       />
                    </div>

                    {/* Content Section */}
                    <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span className="text-primary-700 font-bold text-sm tracking-wide bg-primary-50 px-2 py-1 rounded">
                            {pub.journal}
                          </span>
                          <span className="text-gray-400 text-sm flex items-center gap-1">
                            <Calendar size={14} /> {pub.date}
                          </span>
                        </div>
                        
                        <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-900 mb-3 leading-snug group-hover:text-primary-800 transition-colors">
                          {pub.title}
                        </h3>
                      </div>

                      <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-end">
                        {pub.doi && (
                          <a 
                            href={pub.doi} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gray-900 text-white font-medium text-sm hover:bg-primary-600 transition-colors group/btn"
                          >
                            Read Paper
                            <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'conferences' && (
            <motion.div
              key="conferences"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-300"
            >
              <FileText size={48} className="text-gray-300 mb-4" />
              <h3 className="text-xl font-bold text-gray-400">Conference Proceedings</h3>
              <p className="text-gray-400 mt-2">Data coming soon...</p>
            </motion.div>
          )}

          {activeTab === 'patents' && (
            <motion.div
              key="patents"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-300"
            >
              <Award size={48} className="text-gray-300 mb-4" />
              <h3 className="text-xl font-bold text-gray-400">Patents</h3>
              <p className="text-gray-400 mt-2">Data coming soon...</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
};