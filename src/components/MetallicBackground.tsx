import React from 'react';

export const MetallicBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10 bg-slate-200">
      {/* Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-300 via-slate-100 to-slate-300 opacity-80" />
      
      {/* Moving Light Shimmer */}
      <div className="absolute inset-0">
        <div className="absolute inset-[-200%] w-[400%] h-[400%] animate-shine bg-gradient-to-r from-transparent via-white/40 to-transparent transform -rotate-45" />
      </div>

      {/* Noise Texture for Realism */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
      
      <style>{`
        @keyframes shine {
          0% { transform: translateX(-50%) translateY(-50%) rotate(-45deg); }
          100% { transform: translateX(50%) translateY(50%) rotate(-45deg); }
        }
        .animate-shine {
          animation: shine 8s infinite linear;
        }
      `}</style>
    </div>
  );
};