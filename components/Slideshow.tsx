
import React, { useState } from 'react';
import { INTRO_SLIDES } from '../data';

const Slideshow: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % INTRO_SLIDES.length);
  const prev = () => setCurrent((prev) => (prev - 1 + INTRO_SLIDES.length) % INTRO_SLIDES.length);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
        <div 
          className="flex transition-transform duration-500 ease-in-out" 
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {INTRO_SLIDES.map((slide, idx) => (
            <div key={idx} className="min-w-full p-6 lg:p-10 flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2">
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  className="w-full h-[250px] object-cover rounded-2xl shadow-md"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-2xl font-bold text-[#8b4513]">{slide.title}</h3>
                <div className="space-y-2 text-gray-600">
                  {slide.content.map((p, i) => (
                    <p key={i} className="text-sm lg:text-base">{p}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-center items-center gap-6 mt-6">
        <button 
          onClick={prev}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md text-[#8b4513] hover:bg-[#8b4513] hover:text-white transition-all"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <div className="flex gap-2">
          {INTRO_SLIDES.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-all ${current === idx ? 'bg-[#8b4513] w-8' : 'bg-gray-300'}`}
            />
          ))}
        </div>
        <button 
          onClick={next}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md text-[#8b4513] hover:bg-[#8b4513] hover:text-white transition-all"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Slideshow;
