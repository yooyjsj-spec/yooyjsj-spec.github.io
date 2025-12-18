import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { CommunityItem } from '../types';
import { Calendar, Tag, ExternalLink, X, Newspaper, Bell, Image as ImageIcon, ChevronRight } from 'lucide-react';
import { ASSETS } from '../data/assets';

type Tab = 'news' | 'notice' | 'gallery';

export const Community: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('news');
  const [selectedItem, setSelectedItem] = useState<CommunityItem | null>(null);

  // Data for the News section
  const newsItems: CommunityItem[] = [
    {
      id: '1',
      title: "'2025 World's Top 2% Scientists' 선정",
      date: "2024-10-10",
      summary: "국민대학교 신소재공학부 설재복 교수가 미국 스탠퍼드 대학교와 엘스비어(Elsevier)가 공동으로 발표한 '2025 세계 최상위 2% 연구자' 명단에 이름을 올렸습니다.",
      category: "Award",
      link: "https://www.kookmin.ac.kr/comm/board/user/be8e117863cfd580d7ed5931a799207c/view.do?currentPageNo=1&searchTy=0000&searchValue=&dataSeq=1076476&parentSeq=1076476",
      content: `
        <p class="mb-4">국민대학교(총장 정승렬) 신소재공학부 설재복 교수가 미국 스탠퍼드 대학교와 엘스비어(Elsevier)가 공동으로 발표한 '2025 세계 최상위 2% 연구자(World's Top 2% Scientists)' 명단에 이름을 올렸다.</p>
        
        <p class="mb-4">'세계 최상위 2% 연구자'는 스탠퍼드 대학의 존 이오아니디스(John P.A. Ioannidis) 교수 연구팀이 색인/인용 데이터베이스인 스코퍼스(Scopus) 기반 데이터를 활용해 선정하는 것으로, 연구자의 학문적 영향력을 객관적으로 평가하는 주요 지표로 꼽힌다. 이번 평가는 1960년부터 2024년까지의 논문 인용도, h-인덱스, 저자 역할에 따른 인용 횟수 등 6가지 복합 지표를 종합적으로 분석해 전 세계 총 660만 명의 연구자 중 상위 2%인 약 23만 명을 추려냈다.</p>
        
        <p class="mb-4">설재복 교수는 재료공학 분야, 특히 항공우주 및 방위산업 소재와 첨단 분석 기술 분야에서의 탁월한 연구 성과를 인정받았다. 설 교수가 이끄는 ADAML(AI analysis and Defense/Aerospace Materials Lab.) 연구실은 인공지능(AI)을 활용한 금속 소재 분석 및 신소재 개발 연구를 선도하고 있다.</p>
        
        <p class="mb-4">올해 한국에서는 설 교수를 포함해 총 2,633명의 연구자가 선정되었으며, 이는 전년 대비 11.4% 증가한 수치다. 국민대학교에서는 총 197명의 연구자가 포함되어 국내 주요 연구 거점으로서의 위상을 다시 한번 입증했다.</p>
        
        <p>설재복 교수는 "이번 선정은 개인의 영광일 뿐만 아니라 우리 연구실 학생들과 함께 땀 흘려 이뤄낸 결실"이라며, "앞으로도 차세대 소재 기술 개발을 통해 국가 산업 발전에 기여하겠다"고 소감을 밝혔다.</p>
      `
    }
  ];

  // Placeholder Data for other tabs
  const notices: CommunityItem[] = [
    { id: 'n1', title: '2025학년도 1학기 연구실 신입생 모집', date: '2024-11-01', summary: 'ADAM 연구실에서 열정적인 석/박사 통합과정 신입생을 모집합니다.', category: 'Notice' },
    { id: 'n2', title: '연구실 하계 워크샵 안내', date: '2024-06-15', summary: '강원도 평창에서 진행되는 하계 워크샵 일정 및 세부 사항입니다.', category: 'Notice' },
  ];

  const galleryImages = [
    { id: 'g1', title: 'TMS 2024 Conference', url: ASSETS.GALLERY.TMS_CONF },
    { id: 'g2', title: 'Lab Group Photo', url: ASSETS.GALLERY.LAB_GROUP },
    { id: 'g3', title: 'SEM Analysis Session', url: ASSETS.GALLERY.SEM_SESSION },
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 py-12 min-h-[80vh]">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Community</h1>
          <p className="text-gray-500 text-lg">Lab news, announcements, and gallery.</p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Sidebar Navigation */}
          <div className="md:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-soft p-2 sticky top-28 border border-gray-100">
              {[
                { id: 'news', label: 'News', icon: Newspaper },
                { id: 'notice', label: 'Notice', icon: Bell },
                { id: 'gallery', label: 'Gallery', icon: ImageIcon }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as Tab)}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3.5 rounded-xl font-medium transition-all duration-200 mb-1 last:mb-0
                    ${activeTab === tab.id 
                      ? 'bg-primary-50 text-primary-700 shadow-sm' 
                      : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}
                  `}
                >
                  <tab.icon size={18} />
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div layoutId="active-indicator" className="ml-auto">
                      <ChevronRight size={16} />
                    </motion.div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right Content Area */}
          <div className="flex-grow">
            <AnimatePresence mode="wait">
              {activeTab === 'news' && (
                <motion.div
                  key="news"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-6"
                >
                  {newsItems.map((item) => (
                    <motion.div
                      layoutId={`card-${item.id}`}
                      key={item.id}
                      onClick={() => setSelectedItem(item)}
                      className="bg-white rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-soft-hover transition-all duration-300 border border-gray-100 cursor-pointer group relative overflow-hidden"
                    >
                      {/* Hover Effect Background */}
                      <div className="absolute inset-0 bg-primary-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide bg-amber-100 text-amber-700`}>
                            <Tag size={12} /> {item.category}
                          </span>
                          <span className="flex items-center gap-1 text-gray-400 text-sm font-medium">
                            <Calendar size={14} /> {item.date}
                          </span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-900 mb-3 group-hover:text-primary-800 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed line-clamp-2">
                          {item.summary}
                        </p>
                        <div className="mt-4 flex items-center text-primary-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                          Click to read more <ChevronRight size={14} className="ml-1" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {activeTab === 'notice' && (
                <motion.div
                  key="notice"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden"
                >
                  <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-gray-100 text-gray-500 uppercase text-xs font-semibold tracking-wider">
                      <tr>
                        <th className="px-6 py-4 w-24">No.</th>
                        <th className="px-6 py-4">Title</th>
                        <th className="px-6 py-4 w-32 text-right">Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {notices.map((notice, index) => (
                        <tr key={notice.id} className="hover:bg-gray-50/50 transition-colors">
                          <td className="px-6 py-4 text-gray-400 font-mono text-sm">{notices.length - index}</td>
                          <td className="px-6 py-4 font-medium text-gray-900">{notice.title}</td>
                          <td className="px-6 py-4 text-gray-400 text-sm text-right">{notice.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="p-8 text-center border-t border-gray-100">
                     <p className="text-sm text-gray-400">Showing {notices.length} notices</p>
                  </div>
                </motion.div>
              )}

              {activeTab === 'gallery' && (
                <motion.div
                  key="gallery"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {galleryImages.map((img) => (
                    <div key={img.id} className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-soft border border-gray-100">
                      <img 
                        src={img.url} 
                        alt={img.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span className="text-white font-bold">{img.title}</span>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Expanded Card Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            
            <motion.div
              layoutId={`card-${selectedItem.id}`}
              className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden relative z-10 flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className="p-8 md:p-10 border-b border-gray-100 relative">
                <button 
                  onClick={(e) => { e.stopPropagation(); setSelectedItem(null); }}
                  className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition-colors"
                >
                  <X size={20} />
                </button>

                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide bg-amber-100 text-amber-700">
                    <Tag size={12} /> {selectedItem.category}
                  </span>
                  <span className="flex items-center gap-1 text-gray-400 text-sm font-medium">
                    <Calendar size={14} /> {selectedItem.date}
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-tight">
                  {selectedItem.title}
                </h2>
              </div>

              {/* Scrollable Content */}
              <div className="p-8 md:p-10 overflow-y-auto custom-scrollbar">
                <div 
                  className="prose prose-xl text-gray-600 max-w-none"
                  dangerouslySetInnerHTML={{ __html: selectedItem.content || selectedItem.summary }} 
                />
              </div>

              {/* Footer / Link */}
              {selectedItem.link && (
                <div className="p-6 md:p-8 bg-gray-50 border-t border-gray-100 flex justify-end">
                  <a 
                    href={selectedItem.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-600 text-white font-bold shadow-lg hover:bg-primary-700 hover:shadow-xl transition-all"
                  >
                    Read Full Article on School Website
                    <ExternalLink size={18} />
                  </a>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Layout>
  );
};