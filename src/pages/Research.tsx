import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout } from '../components/Layout';
import { BrainCircuit, Plane, Microscope, Printer, ArrowRight, ArrowLeft } from 'lucide-react';
import { ASSETS } from '../data/assets';

interface ResearchArea {
  id: string;
  title: string;
  summary: string;
  fullContent: React.ReactNode;
  icon: React.ElementType;
  image: string;
}

export const Research: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const areas: ResearchArea[] = [
    {
      id: "microstructure",
      title: "Microstructure Analysis",
      icon: Microscope,
      image: ASSETS.IMAGES.RESEARCH_MICRO,
      summary: "We investigate the relationships between processing, microstructure, and properties using advanced characterization techniques and AI-based image analysis.",
      fullContent: (
        <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
          <h3 className="text-xl font-bold text-gray-900">Advanced characterization and analysis of material microstructures</h3>
          <p>
            We conduct comprehensive microstructure analysis using state-of-the-art characterization techniques to understand the fundamental relationships between material structure and properties. Our research employs scanning electron microscopy (SEM), transmission electron microscopy (TEM), electron backscatter diffraction (EBSD), X-ray diffraction (XRD), atom probe tomography (APT), and advanced spectroscopy methods to investigate phase distributions, grain structures, crystallographic orientations, precipitation behavior, and defect characteristics.
          </p>
          <p>
            Through detailed quantitative analysis of microstructural features including grain size distribution, texture evolution, phase fractions, and interface characteristics, we establish correlations between processing conditions, microstructural evolution, and resulting material properties. Our work encompasses in-situ and ex-situ characterization under various thermal and mechanical loading conditions to understand dynamic microstructural changes.
          </p>
          <p>
            We develop advanced image analysis algorithms and machine learning approaches for automated microstructure quantification and pattern recognition. Our research provides critical insights for optimizing material processing routes, heat treatment schedules, and alloy compositions to achieve desired microstructural features that enhance mechanical properties, corrosion resistance, and high-temperature performance.
          </p>
        </div>
      )
    },
    {
      id: "aerospace",
      title: "Aerospace and Defense Materials",
      icon: Plane,
      image: ASSETS.IMAGES.RESEARCH_AERO,
      summary: "We design and optimize advanced alloys for aerospace and defense applications, focusing on performance under extreme conditions.",
      fullContent: (
        <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
          <h3 className="text-xl font-bold text-gray-900">Advanced materials for extreme aerospace and defense environments</h3>
          <p>
            Our research focuses on the development of advanced materials capable of operating under extreme high-temperature and harsh environmental conditions for next-generation aircraft, spacecraft, and defense systems. We specialize in the design and development of high-performance alloy systems, including superalloys and high-entropy alloys (HEAs), as well as high-temperature composite materials and advanced armor systems that maintain exceptional mechanical properties and structural integrity under severe operating conditions.
          </p>
          
          <h4 className="text-lg font-bold text-primary-700 mt-6">High-Entropy Alloys (HEAs)</h4>
          <p>
            High-entropy alloys, composed of multiple principal elements in near-equimolar ratios, represent a key materials strategy in our research due to their outstanding mechanical strength, high-temperature stability, and superior corrosion and oxidation resistance. We investigate the fundamental relationships between composition, microstructure, and properties to tailor HEAs and conventional alloys for aerospace and defense applications requiring high reliability and durability.
          </p>
          <p>
            Through comprehensive microstructure analysis using advanced characterization techniques such as scanning electron microscopy (SEM), transmission electron microscopy (TEM), electron backscatter diffraction (EBSD), and X-ray diffraction (XRD), we examine the effects of processing parameters on microstructural evolution and material performance. Our research encompasses detailed analyses of phase transformations, grain boundary characteristics, precipitation behavior, and defect structures that govern creep resistance, fatigue life, fracture toughness, and oxidation resistance under extreme conditions.
          </p>
          <p>
            By integrating microstructure-driven insights with predictive modeling, we establish clear links between alloy design, heat treatment processes, and resulting mechanical properties. This approach enables the optimization of alloy compositions, thermal processing routes, and manufacturing strategies to develop materials suitable for aerospace propulsion systems, thermal protection systems, and defense applications exposed to extreme thermal, mechanical, and environmental loading.
          </p>
        </div>
      )
    },
    {
      id: "additive",
      title: "Additive Manufacturing",
      icon: Printer,
      image: ASSETS.IMAGES.RESEARCH_PRINT,
      summary: "We develop and optimize metal additive manufacturing processes to control microstructure and enhance mechanical performance.",
      fullContent: (
        <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
          <h3 className="text-xl font-bold text-gray-900">3D printing and advanced manufacturing technologies</h3>
          <p>
            Development of additive manufacturing processes for complex metallic components, including selective laser melting (SLM), electron beam melting (EBM), and directed energy deposition (DED). We optimize process parameters, investigate microstructure evolution, and enhance mechanical properties of additively manufactured materials for aerospace and defense applications.
          </p>
          <p>
             Our approach addresses key challenges in AM such as residual stress management, porosity reduction, and anisotropy control. By understanding the rapid solidification physics inherent to these processes, we tailor thermal histories to achieve specific microstructural gradients and site-specific properties impossible to achieve with conventional manufacturing.
          </p>
        </div>
      )
    },
    {
      id: "ai",
      title: "AI Material Analysis",
      icon: BrainCircuit,
      image: ASSETS.IMAGES.RESEARCH_AI,
      summary: "We apply machine learning and deep learning to automate microstructure analysis, predict material properties, and accelerate data-driven materials design.",
      fullContent: (
        <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
          <h3 className="text-xl font-bold text-gray-900">Intelligent analysis and prediction of material properties</h3>
          <p>
            We utilize artificial intelligence and machine learning to analyze complex microstructures, predict material properties, and optimize material design. By integrating deep learning with advanced microscopy data, computational modeling, and experimental results, we achieve rapid and accurate material characterization that accelerates the development of new materials.
          </p>
          <p>
            Our models include Convolutional Neural Networks (CNNs) for segmentation of phases and defects in microscopy images, Generative Adversarial Networks (GANs) for super-resolution imaging and structure generation, and physics-informed neural networks to predict material behavior under load. This data-driven approach significantly reduces the time and cost associated with traditional trial-and-error experimental methods.
          </p>
        </div>
      )
    }
  ];

  const selectedArea = areas.find(a => a.id === selectedId);

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="text-primary-600 font-bold uppercase tracking-widest text-sm block mb-3">Core Competencies</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
              Research Areas
            </h1>
          </motion.div>

          <AnimatePresence mode="wait">
            {!selectedId ? (
              // Grid View
              <motion.div 
                key="grid"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {areas.map((area, index) => (
                  <motion.div 
                    key={area.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative rounded-2xl p-8 hover:shadow-2xl transition-all group cursor-pointer flex flex-col h-[400px] overflow-hidden"
                    onClick={() => setSelectedId(area.id)}
                  >
                    {/* Background Image & Overlay */}
                    <div className="absolute inset-0 z-0">
                      <img 
                        src={area.image} 
                        alt={area.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 opacity-90 transition-opacity duration-300 group-hover:opacity-80" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex items-start justify-between mb-6">
                        <div className="p-3 bg-white/20 backdrop-blur-md rounded-xl text-white border border-white/20">
                          <area.icon size={32} />
                        </div>
                        <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm text-white/70 group-hover:bg-white group-hover:text-primary-900 transition-colors">
                          <ArrowRight size={20} />
                        </div>
                      </div>
                      
                      <div className="mt-auto">
                        <h3 className="text-3xl font-serif font-bold text-white mb-3 drop-shadow-md">{area.title}</h3>
                        <p className="text-gray-200 leading-relaxed mb-6 line-clamp-3 text-sm font-medium drop-shadow-sm">
                          {area.summary}
                        </p>
                        
                        <div className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-widest group-hover:text-primary-200 transition-colors">
                          Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              // Detail View
              <motion.div 
                key="detail"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="bg-white"
              >
                <button 
                  onClick={() => setSelectedId(null)}
                  className="flex items-center gap-2 text-gray-500 hover:text-primary-600 transition-colors mb-8 group font-medium"
                >
                  <div className="p-2 rounded-full bg-gray-100 group-hover:bg-primary-50 transition-colors">
                    <ArrowLeft size={20} />
                  </div>
                  Back to Research Areas
                </button>

                {selectedArea && (
                  <div className="flex flex-col lg:flex-row gap-12">
                    <div className="w-full lg:w-1/3">
                      <div className="sticky top-28">
                        <div className="rounded-2xl overflow-hidden shadow-xl mb-6 aspect-[4/3] bg-gray-100">
                          <img 
                            src={selectedArea.image} 
                            alt={selectedArea.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="bg-primary-50 p-6 rounded-xl border border-primary-100">
                          <div className="flex items-center gap-3 mb-2 text-primary-700">
                            <selectedArea.icon size={24} />
                            <span className="font-bold uppercase tracking-wider text-sm">Focus Area</span>
                          </div>
                          <h2 className="text-2xl font-bold text-gray-900">{selectedArea.title}</h2>
                        </div>
                      </div>
                    </div>

                    <div className="w-full lg:w-2/3">
                      <div className="prose prose-lg max-w-none text-gray-600">
                        {selectedArea.fullContent}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Layout>
  );
};