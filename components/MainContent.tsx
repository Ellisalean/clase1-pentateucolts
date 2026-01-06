
import React, { useState } from 'react';
import { Lesson } from '../types';
import { LESSON_3_ADDITIONAL_RESOURCES } from '../data';
import Slideshow from './Slideshow';
import Timeline from './Timeline';
import InteractiveMap from './InteractiveMap';
import LessonQuiz from './LessonQuiz';

interface MainContentProps {
  lesson: Lesson;
  onNextLesson: () => void;
}

const MainContent: React.FC<MainContentProps> = ({ lesson, onNextLesson }) => {
  return (
    <main className="pb-20 lg:pb-12">
      {/* Banner Section */}
      <section 
        className="relative h-[300px] lg:h-[400px] flex items-center px-6 lg:px-12 transition-all duration-500 bg-cover bg-center"
        style={{ backgroundImage: `url('${lesson.image}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#8b4513]/90 to-transparent"></div>
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2 text-white/80 text-xs lg:text-sm mb-4">
            <span>Estudio del Pentateuco</span>
            <i className="fas fa-chevron-right text-[10px]"></i>
            <span className="truncate">{lesson.title}</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            {lesson.title}
          </h1>
          <p className="text-white/90 text-sm lg:text-lg max-w-xl font-light">
            {lesson.subtitle}
          </p>
        </div>
      </section>

      {/* Responsive Content Container */}
      <div className="max-w-5xl mx-auto px-4 lg:px-8 -mt-10 relative z-20">
        {renderLessonContent(lesson, onNextLesson)}
      </div>
    </main>
  );
};

function renderLessonContent(lesson: Lesson, onNext: () => void) {
  switch (lesson.id) {
    case 'lesson1':
      return (
        <div className="space-y-8">
          <ContentSlide title="Video de Introducción">
            <p className="mb-6 text-gray-600">Este video introductorio te dará una visión general del propósito de la creación según Génesis.</p>
            <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/rYti8yLpLlQ" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-8 grid md:grid-cols-2 gap-4">
              <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                <h3 className="font-bold text-[#8b4513] mb-3 flex items-center gap-2">
                   <i className="fas fa-list-ul"></i> Resumen del video
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2"><i className="fas fa-check text-[#cd853f] mt-1"></i> Propósito eterno de Dios</li>
                  <li className="flex items-start gap-2"><i className="fas fa-check text-[#cd853f] mt-1"></i> Comunión hombre-Dios</li>
                  <li className="flex items-start gap-2"><i className="fas fa-check text-[#cd853f] mt-1"></i> El Edén como santuario</li>
                </ul>
              </div>
            </div>
          </ContentSlide>

          <ContentSlide title="El Propósito Eterno" isGray>
            <Slideshow />
          </ContentSlide>

          <div className="flex justify-end pt-8">
            <button 
              onClick={onNext}
              className="px-8 py-4 bg-gradient-to-r from-[#cd853f] to-[#8b4513] text-white rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-3"
            >
              Siguiente Lección <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      );
    case 'lesson2':
      return (
        <div className="space-y-8">
          <ContentSlide title="Geografía Bíblica: El Edén">
            <p className="mb-6 text-gray-600">Explora las posibles ubicaciones y el significado geográfico del jardín donde comenzó todo.</p>
            <InteractiveMap />
          </ContentSlide>
          <ContentSlide title="La Estructura de Génesis 1" isGray>
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
               <h4 className="font-bold text-lg mb-4 text-[#8b4513]">Estructura Literaria</h4>
               <p className="text-gray-600 mb-4">El relato sigue un patrón ordenado que enfatiza la soberanía de Dios:</p>
               <div className="grid sm:grid-cols-2 gap-4">
                 <div className="p-4 bg-gray-50 rounded-xl border-l-4 border-[#cd853f]">
                   <span className="block font-bold text-gray-800">1. Anuncio</span>
                   <span className="text-sm text-gray-500 italic">"Y dijo Dios..."</span>
                 </div>
                 <div className="p-4 bg-gray-50 rounded-xl border-l-4 border-[#cd853f]">
                   <span className="block font-bold text-gray-800">2. Mandato</span>
                   <span className="text-sm text-gray-500 italic">"Haya..." o "Produzca..."</span>
                 </div>
                 <div className="p-4 bg-gray-50 rounded-xl border-l-4 border-[#cd853f]">
                   <span className="block font-bold text-gray-800">3. Resultado</span>
                   <span className="text-sm text-gray-500 italic">"Y fue así"</span>
                 </div>
                 <div className="p-4 bg-gray-50 rounded-xl border-l-4 border-[#cd853f]">
                   <span className="block font-bold text-gray-800">4. Evaluación</span>
                   <span className="text-sm text-gray-500 italic">"Y vio Dios que era bueno"</span>
                 </div>
               </div>
             </div>
          </ContentSlide>
          <div className="flex justify-end pt-8">
            <button onClick={onNext} className="px-8 py-4 bg-[#8b4513] text-white rounded-full font-bold flex items-center gap-3">
              Siguiente <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      );
    case 'lesson3':
      return (
        <div className="space-y-8">
          <ContentSlide title="Los 7 Días de la Creación">
            <Timeline />
          </ContentSlide>

          <ContentSlide title="Recursos Adicionales" isGray>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {LESSON_3_ADDITIONAL_RESOURCES.map((card, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center text-center group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2 leading-tight">
                    {card.title}
                  </h4>
                  <p className="text-xs text-gray-500 mb-6 flex-grow">
                    {card.description}
                  </p>
                  <a 
                    href={card.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-full py-2 px-4 bg-orange-50 text-[#cd853f] hover:bg-[#cd853f] hover:text-white rounded-xl text-xs font-bold transition-colors"
                  >
                    {card.btnText}
                  </a>
                </div>
              ))}
            </div>
          </ContentSlide>

          <div className="flex justify-end pt-8">
            <button onClick={onNext} className="px-8 py-4 bg-[#8b4513] text-white rounded-full font-bold flex items-center gap-3">
              Siguiente <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      );
    case 'lesson4':
      return (
        <div className="space-y-8">
          <ContentSlide title="Reflexión Teológica">
            <div className="bg-[#f8f9fa] border-l-4 border-[#cd853f] p-8 rounded-2xl relative overflow-hidden">
               <i className="fas fa-quote-left absolute -top-2 -left-2 text-9xl text-gray-200 opacity-20"></i>
               <p className="text-xl italic text-gray-700 relative z-10 leading-relaxed">
                 "El propósito inicial de Dios nunca quedará frustrado; él se mantiene firme en sus intenciones, y va llevando gradualmente sus propósitos iniciales a su perfecto cumplimiento."
               </p>
               <div className="mt-4 text-right font-bold text-[#8b4513]">— John B. Scott</div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
               <div className="space-y-4">
                 <h3 className="text-2xl font-bold text-gray-800">Dios como Creador</h3>
                 <p className="text-gray-600">Génesis revela verdades fundamentales sobre Dios:</p>
                 <ul className="space-y-3">
                   <li className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm"><i className="fas fa-star text-yellow-500"></i> Pre-existencia</li>
                   <li className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm"><i className="fas fa-crown text-[#cd853f]"></i> Soberanía</li>
                   <li className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm"><i className="fas fa-heart text-red-500"></i> Bondad</li>
                 </ul>
               </div>
               <div className="space-y-4">
                 <h3 className="text-2xl font-bold text-gray-800">Identidad Humana</h3>
                 <p className="text-gray-600">Enseñanzas clave sobre el hombre:</p>
                 <ul className="space-y-3">
                   <li className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm"><i className="fas fa-user-friends text-blue-500"></i> Imagen de Dios</li>
                   <li className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm"><i className="fas fa-leaf text-green-500"></i> Responsabilidad</li>
                   <li className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm"><i className="fas fa-balance-scale text-purple-500"></i> Capacidad Moral</li>
                 </ul>
               </div>
            </div>
          </ContentSlide>
          <div className="flex justify-end pt-8">
            <button onClick={onNext} className="px-8 py-4 bg-[#8b4513] text-white rounded-full font-bold flex items-center gap-3">
              Finalizar <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      );
    case 'lesson5':
      return (
        <div className="space-y-8">
          <ContentSlide title="Evaluación Final">
            <LessonQuiz />
          </ContentSlide>
        </div>
      );
    default:
      return null;
  }
}

const ContentSlide: React.FC<{ title: string; children: React.ReactNode; isGray?: boolean }> = ({ title, children, isGray }) => (
  <div className={`${isGray ? 'bg-gray-100' : 'bg-white'} p-6 lg:p-10 rounded-3xl shadow-xl transition-all`}>
    <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-gray-800 border-b pb-4 flex items-center gap-3">
      <div className="w-2 h-8 bg-[#8b4513] rounded-full"></div>
      {title}
    </h2>
    <div className="slide-content text-gray-700 leading-relaxed">
      {children}
    </div>
  </div>
);

export default MainContent;
