import React from 'react';
import { Layout } from '../components/Layout';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-500">We are always looking for new collaborations and students.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-soft overflow-hidden border border-gray-100">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }}
            className="p-10 lg:p-16 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h3>
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="p-3 bg-primary-50 rounded-full text-primary-600 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold mb-1 uppercase text-sm tracking-wide">ADDRESS (ENGINEERING BUILDING - OFFICE 431)</h4>
                  <p className="text-gray-600 leading-relaxed">
                    School of Advanced Materials Engineering, Kookmin University.<br />
                    77, Jeongneung-ro, Seongbuk-gu, Seoul, 02707, Republic of Korea.
                  </p>
                </div>
              </div>

               <div className="flex items-start gap-5">
                <div className="p-3 bg-primary-50 rounded-full text-primary-600 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold mb-1 uppercase text-sm tracking-wide">OFFICE</h4>
                  <p className="text-gray-600">+82-2-910-5014</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="p-3 bg-primary-50 rounded-full text-primary-600 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold mb-1 uppercase text-sm tracking-wide">E-MAIL</h4>
                  <p className="text-gray-600 hover:text-primary-600 transition-colors cursor-pointer">
                    <a href="mailto:jb.seol@kookmin.ac.kr">jb.seol@kookmin.ac.kr</a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Embed - Pointing to Kookmin University */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="h-[400px] lg:h-auto bg-gray-100 relative"
          >
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3160.528659424729!2d126.99554331531295!3d37.61093597980838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cbc6285800001%3A0x879737190e800366!2sKookmin%20University!5e0!3m2!1sen!2skr!4v1625555555555!5m2!1sen!2skr" 
               width="100%" 
               height="100%" 
               style={{border:0}} 
               allowFullScreen={true} 
               loading="lazy"
               title="Kookmin University Location"
               className="grayscale hover:grayscale-0 transition-all duration-500"
             ></iframe>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};