import React from 'react';
import { Layout } from '../components/Layout';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Info } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-10">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-500">We are always looking for new collaborations and students.</p>
        </motion.div>

        {/* Relocation notice — remove once the move is fully settled */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 flex items-start gap-4 rounded-2xl border border-primary-200 bg-primary-50 px-6 py-5"
        >
          <Info className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
          <div className="text-sm leading-relaxed">
            <p className="font-bold text-primary-800 mb-1">Lab Relocation &middot; 연구실 이전 안내</p>
            <p className="text-gray-600">
              SMD Lab moved to <strong className="text-gray-800">POSTECH GIFT</strong> in September 2026.
              All correspondence should now be directed to the Pohang address below.
              <br />
              SMD 연구실(구 ADAM Lab)은 2026년 9월부로 <strong className="text-gray-800">포스텍 친환경소재대학원(GIFT)</strong>으로 이전하였습니다.
            </p>
          </div>
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
                  <h4 className="text-gray-900 font-bold mb-1 uppercase text-sm tracking-wide">Address</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Graduate Institute of Ferrous &amp; Eco Materials Technology (GIFT),<br />
                    Pohang University of Science and Technology (POSTECH).<br />
                    77, Cheongam-ro, Nam-gu, Pohang-si, Gyeongsangbuk-do, 37673, Republic of Korea.
                  </p>
                  <p className="text-gray-500 leading-relaxed mt-3 text-sm">
                    (37673) 경상북도 포항시 남구 청암로 77<br />
                    포항공과대학교 친환경소재대학원
                  </p>
                </div>
              </div>

               <div className="flex items-start gap-5">
                <div className="p-3 bg-primary-50 rounded-full text-primary-600 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold mb-1 uppercase text-sm tracking-wide">OFFICE</h4>
                  {/* TODO: replace with the lab's direct GIFT extension once assigned. */}
                  <p className="text-gray-600">+82-54-279-XXXX</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="p-3 bg-primary-50 rounded-full text-primary-600 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold mb-1 uppercase text-sm tracking-wide">E-MAIL</h4>
                  <p className="text-gray-600 hover:text-primary-600 transition-colors cursor-pointer">
                    <a href="mailto:jb.seol@postech.ac.kr">jb.seol@postech.ac.kr</a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Embed - Pointing to POSTECH GIFT */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="h-[400px] lg:h-auto bg-gray-100 relative"
          >
             <iframe 
               src="https://www.google.com/maps?q=77%20Cheongam-ro%2C%20Nam-gu%2C%20Pohang-si%2C%20Gyeongsangbuk-do%2C%2037673%2C%20Republic%20of%20Korea&z=16&output=embed"
               width="100%" 
               height="100%" 
               style={{border:0}} 
               allowFullScreen={true} 
               loading="lazy"
               title="POSTECH GIFT Location"
               className="grayscale hover:grayscale-0 transition-all duration-500"
             ></iframe>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};
