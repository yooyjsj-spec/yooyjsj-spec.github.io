import React, { useRef } from 'react';

interface VideoHoverProps {
  src: string;
  className?: string;
}

export const VideoHover: React.FC<VideoHoverProps> = ({ src, className }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((e) => {
          console.log("Auto-play prevented", e);
        });
      }
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div 
      className={`relative overflow-hidden rounded-xl bg-gray-900 group ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
        muted
        loop
        playsInline
      />
      
      {/* Overlay hint */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-300 bg-black/20">
        <span className="text-white/80 text-xs tracking-wider uppercase border border-white/30 px-3 py-1 rounded-full backdrop-blur-sm">
          Hover to Play
        </span>
      </div>
    </div>
  );
};