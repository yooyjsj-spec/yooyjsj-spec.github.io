import React from 'react';
import { Layout } from '../components/Layout';
import { motion } from 'framer-motion';
import { Mail, GraduationCap, MapPin, Phone, Building2 } from 'lucide-react';
import { MetallicBackground } from '../components/MetallicBackground';
import { ASSETS } from '../data/assets';

// Define local interfaces for the specific data structure requested
interface Student {
  name: string;
  email: string;
  research: string;
  image?: string;
}

export const People: React.FC = () => {
  
  const mastersStudents: Student[] = [
    { name: "Chohyun Lee", email: "cho0410@kookmin.ac.kr", research: "Superalloy Design" },
    { name: "Wonhee Jo", email: "jwonh0104@kookmin.ac.kr", research: "Microstructure Analysis" },
    { name: "Jeongung Park", email: "wjddnd636@kookmin.ac.kr", research: "Mechanical Properties" },
    { name: "Minyoung Lee", email: "5368min@kookmin.ac.kr", research: "Phase Transformation" },
    { name: "Minyu Kang", email: "kminyu@kookmin.ac.kr", research: "Corrosion Resistance" },
    { name: "Seonghyun Yang", email: "sorntmf@kookmin.ac.kr", research: "Alloy Processing" },
  ];

  const undergradStudents: Student[] = [
    { name: "Seunggyu Hong", email: "hongsg4665@kookmin.ac.kr", research: "Data Analysis" },
    { name: "Hyunyoung Park", email: "jury1390@kookmin.ac.kr", research: "Lab Assistant" },
    { name: "Dawon Kang", email: "dawon1242@kookmin.ac.kr", research: "Material Synthesis" },
    { name: "Hyungjin Park", email: "chemilk02@kookmin.ac.kr", research: "Sample Prep" },
    { name: "Youngjae Yoo", email: "yooyjsj@kookmin.ac.kr", research: "Simulation Support" },
    { name: "Bogeun Park", email: "qkrqhrms9@kookmin.ac.kr", research: "Literature Review" },
  ];

  return (
    <Layout>
      {/* Professor Section with Metallic Animation */}
      <section className="relative w-full py-20 overflow-hidden">
        <MetallicBackground />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/40"
          >
            <div className="flex flex-col lg:flex-row gap-12">
              
              {/* Professor Image Area */}
              <div className="w-full lg:w-1/3 flex flex-col items-center text-center">
                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg mb-6 border-4 border-white">
                  <img 
                    src={ASSETS.PEOPLE.PROFESSOR}
                    alt="Prof. Jae Bok-Seol" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-3xl font-serif font-bold text-slate-900 mb-2">Jae Bok Seol</h2>
                <span className="text-primary-700 font-bold uppercase tracking-widest text-sm mb-4">Associate Professor</span>
                
                <div className="w-full space-y-3 text-left bg-slate-50 p-6 rounded-xl border border-slate-100">
                  <div className="flex items-start gap-3 text-sm text-slate-600">
                    <Building2 className="w-4 h-4 mt-1 shrink-0 text-primary-600" />
                    <span>
                      Office 431, Engineering Building<br/>
                      School of Advanced Materials Engineering<br/>
                      Kookmin University
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <MapPin className="w-4 h-4 shrink-0 text-primary-600" />
                    <span>Seoul, 02707, Republic of Korea</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <Phone className="w-4 h-4 shrink-0 text-primary-600" />
                    <span>+82-2-910-5014</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <Mail className="w-4 h-4 shrink-0 text-primary-600" />
                    <a href="mailto:jb.seol@kookmin.ac.kr" className="hover:text-primary-700 transition-colors">jb.seol@kookmin.ac.kr</a>
                  </div>
                </div>
              </div>

              {/* Professor Details Area */}
              <div className="w-full lg:w-2/3 space-y-10">
                
                {/* Education */}
                <div>
                  <h3 className="text-xl font-bold text-slate-800 border-b-2 border-primary-200 pb-2 mb-6 flex items-center gap-2">
                    <GraduationCap className="text-primary-600" /> Education
                  </h3>
                  <div className="space-y-6 pl-4 border-l-2 border-slate-200 ml-2">
                    {[
                      { year: "2007 – 2011", degree: "Ph.D. in Materials Science and Engineering", loc: "POSTECH, Pohang" },
                      { year: "2004 – 2006", degree: "M.S. in Materials Science and Engineering", loc: "POSTECH, Pohang" },
                      { year: "1997 – 2004", degree: "B.S. in Materials Science and Engineering", loc: "Korea University, Seoul" }
                    ].map((edu, i) => (
                      <div key={i} className="relative pl-6">
                        <div className="absolute -left-[21px] top-1.5 w-3 h-3 bg-primary-500 rounded-full border-2 border-white"></div>
                        <span className="text-sm font-bold text-primary-700 block mb-1">{edu.year}</span>
                        <h4 className="text-lg font-semibold text-slate-900">{edu.degree}</h4>
                        <p className="text-slate-500">{edu.loc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <h3 className="text-xl font-bold text-slate-800 border-b-2 border-primary-200 pb-2 mb-6 flex items-center gap-2">
                    <Building2 className="text-primary-600" /> Professional Experience
                  </h3>
                  <div className="space-y-6 pl-4 border-l-2 border-slate-200 ml-2">
                    {[
                      { year: "2024 – Present", role: "Associate Professor (Head of ADAM Lab)", loc: "School of Materials Science & Engineering, Kookmin University (KMU), Seoul" },
                      { year: "2020 – 2024", role: "Associate Professor", loc: "Dept. of Materials Engineering, Gyeongsang National University (GNU), Jinju" },
                      { year: "2015 – 2020", role: "Research Professor", loc: "National Institute for Nanomaterials Technology, POSTECH, Korea" },
                      { year: "2013 – 2015", role: "Senior Engineer", loc: "Samsung R&D Center, Korea (Microstructure and Defect Analysis Group)" },
                      { year: "2011 – 2013", role: "Postdoctoral Fellow", loc: "Max Planck Institute for Iron Research (MPIE), Düsseldorf, Germany (Material Alloy Design Group)" }
                    ].map((exp, i) => (
                      <div key={i} className="relative pl-6">
                         <div className="absolute -left-[21px] top-1.5 w-3 h-3 bg-slate-400 rounded-full border-2 border-white"></div>
                        <span className="text-sm font-bold text-slate-500 block mb-1">{exp.year}</span>
                        <h4 className="text-lg font-semibold text-slate-900">{exp.role}</h4>
                        <p className="text-slate-600">{exp.loc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Students Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-20">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center relative inline-block left-1/2 -translate-x-1/2">
            Graduate Students
            <span className="absolute -bottom-3 left-0 w-full h-1 bg-primary-500 rounded-full"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mastersStudents.map((student, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-soft-hover border border-slate-100 transition-all group"
              >
                <div className="flex items-center p-6 gap-5">
                  <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden shrink-0 border-2 border-white shadow-md">
                     <span className="text-2xl font-serif text-slate-300 group-hover:text-primary-500 transition-colors">
                        {student.name.charAt(0)}
                     </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{student.name}</h3>
                    <p className="text-xs font-bold text-primary-600 uppercase mb-1">M.S. Student</p>
                    <p className="text-xs text-slate-500 mb-2">{student.research}</p>
                    <a href={`mailto:${student.email}`} className="text-xs text-slate-400 hover:text-primary-600 flex items-center gap-1 transition-colors">
                      <Mail size={12} /> {student.email}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-20">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center relative inline-block left-1/2 -translate-x-1/2">
            Undergraduate Researchers
            <span className="absolute -bottom-3 left-0 w-full h-1 bg-slate-300 rounded-full"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {undergradStudents.map((student, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-soft-hover border border-slate-100 transition-all group"
              >
                 <div className="flex items-center p-6 gap-5">
                  <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center overflow-hidden shrink-0 border border-slate-100">
                     <span className="text-xl font-serif text-slate-300">
                        {student.name.charAt(0)}
                     </span>
                  </div>
                  <div>
                    <h3 className="text-md font-bold text-slate-900">{student.name}</h3>
                    <p className="text-xs font-bold text-slate-500 uppercase mb-1">Undergraduate</p>
                    <p className="text-xs text-slate-500 mb-2">{student.research}</p>
                    <a href={`mailto:${student.email}`} className="text-xs text-slate-400 hover:text-primary-600 flex items-center gap-1 transition-colors">
                      <Mail size={12} /> {student.email}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Alumni Section (Empty for now) */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center py-10 bg-slate-50 rounded-3xl border border-dashed border-slate-300">
           <h2 className="text-2xl font-serif font-bold text-slate-400 mb-2">Alumni</h2>
           <p className="text-slate-400 text-sm">No alumni records yet.</p>
        </motion.div>

      </div>
    </Layout>
  );
};