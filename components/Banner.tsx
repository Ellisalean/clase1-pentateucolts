
import React from 'react';
import { Lesson } from '../types';

interface BannerProps {
  lesson: Lesson;
}

const Banner: React.FC<BannerProps> = ({ lesson }) => {
  return (
    <section 
      className="relative min-h-[300px] flex items-end p-6 lg:p-12 overflow-hidden bg-slate-900"
      style={{
        backgroundImage: `url(${lesson.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <div className="flex items-center gap-2 text-white/70 text-sm mb-4">
          <span className="hover:text-white transition-colors cursor-pointer">Estudio del Pentateuco</span>
          <i className="fas fa-chevron-right text-[10px]"></i>
          <span className="text-white font-medium">{lesson.title}</span>
        </div>
        
        <h1 className="text-3xl lg:text-5xl font-bold text-white mb-2 leading-tight">
          {lesson.title}
        </h1>
        <p className="text-lg text-white/80 max-w-2xl">
          {lesson.subtitle}
        </p>
      </div>
    </section>
  );
};

export default Banner;
