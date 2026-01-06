
import React from 'react';
import { TIMELINE } from '../data';

const Timeline: React.FC = () => {
  return (
    <div className="relative py-10">
      {/* Center Line (Hidden on mobile) */}
      <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-1 lg:w-2 bg-[#cd853f]/30 lg:-translate-x-1/2 rounded-full"></div>

      <div className="space-y-12">
        {TIMELINE.map((event, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div key={idx} className="relative flex flex-col lg:flex-row items-center">
              {/* Timeline Marker */}
              <div className="absolute left-8 lg:left-1/2 w-8 h-8 bg-white border-4 border-[#cd853f] rounded-full z-10 -translate-x-1/2 flex items-center justify-center font-bold text-[#8b4513] text-[10px]">
                {idx + 1}
              </div>

              {/* Content Card */}
              <div className={`
                w-full lg:w-1/2 pl-16 lg:pl-0 
                ${isEven ? 'lg:pr-16 lg:text-right' : 'lg:pl-16 lg:ml-auto lg:text-left'}
              `}>
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all cursor-default group">
                  <span className="inline-block px-3 py-1 bg-orange-100 text-[#cd853f] text-xs font-bold rounded-full mb-2 uppercase tracking-wide">
                    {event.day}
                  </span>
                  <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#8b4513] transition-colors">{event.title}</h4>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">{event.description}</p>
                  {event.verse && (
                    <div className="p-3 bg-gray-50 rounded-lg italic text-xs text-gray-500 border-l-2 border-[#cd853f]">
                      {event.verse}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
