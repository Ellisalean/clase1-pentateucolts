
import React, { useState } from 'react';
import Slideshow from './Slideshow';
import Timeline from './Timeline';

interface LessonContentProps {
  lessonId: string;
  onNextLesson: (id: string) => void;
}

const LessonContent: React.FC<LessonContentProps> = ({ lessonId, onNextLesson }) => {
  const [accordionOpen, setAccordionOpen] = useState<string | null>(null);

  const AccordionItem: React.FC<{ id: string; title: string; children: React.ReactNode }> = ({ id, title, children }) => (
    <div className="border border-slate-200 rounded-xl overflow-hidden mb-3 bg-white">
      <button 
        onClick={() => setAccordionOpen(accordionOpen === id ? null : id)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 transition-colors"
      >
        <span className="font-semibold text-slate-800">{title}</span>
        <i className={`fas fa-chevron-down transition-transform duration-300 ${accordionOpen === id ? 'rotate-180' : ''}`}></i>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${accordionOpen === id ? 'max-h-[500px]' : 'max-h-0'}`}>
        <div className="p-4 bg-slate-50 border-t border-slate-200 text-slate-600 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );

  const InteractiveCard: React.FC<{ icon: string; title: string; desc: string; link?: string }> = ({ icon, title, desc, link }) => (
    <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all text-center flex flex-col h-full">
      <div className="text-4xl mb-4">{icon}</div>
      <h4 className="font-bold text-slate-800 mb-2">{title}</h4>
      <p className="text-sm text-slate-500 mb-4 flex-grow">{desc}</p>
      {link && (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-auto px-4 py-2 bg-amber-50 text-amber-700 rounded-lg text-xs font-bold hover:bg-amber-100 transition-colors"
        >
          Acceder ahora
        </a>
      )}
    </div>
  );

  const renderLesson = () => {
    switch(lessonId) {
      case 'lesson1':
        return (
          <div className="space-y-10">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <i className="fas fa-video text-amber-700"></i> Video de introducción
              </h3>
              <div className="aspect-video rounded-xl overflow-hidden bg-black mb-6 shadow-inner">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/rYti8yLpLlQ" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex gap-2 text-sm text-slate-600"><i className="fas fa-check-circle text-green-500 mt-1"></i> Propósito eterno antes de la creación</li>
                  <li className="flex gap-2 text-sm text-slate-600"><i className="fas fa-check-circle text-green-500 mt-1"></i> Hombre creado para comunión</li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex gap-2 text-sm text-slate-600"><i className="fas fa-check-circle text-green-500 mt-1"></i> El Edén: lugar de encuentro</li>
                  <li className="flex gap-2 text-sm text-slate-600"><i className="fas fa-check-circle text-green-500 mt-1"></i> Símbolos fundamentales</li>
                </ul>
              </div>
            </div>

            <Slideshow />

            <div className="relative py-12 px-8 bg-amber-50 rounded-3xl border border-amber-100 italic overflow-hidden">
               <i className="fas fa-quote-left absolute top-4 left-4 text-6xl text-amber-200/50"></i>
               <p className="relative z-10 text-xl text-amber-900 leading-relaxed font-serif">
                "El propósito inicial de Dios nunca quedará frustrado; él se mantiene firme en sus intenciones, y va llevando gradualmente sus propósitos iniciales a su perfecto cumplimiento."
               </p>
               <p className="text-right font-bold text-amber-700 mt-4">— John B. Scott</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <InteractiveCard icon="🌎" title="La Creación" desc="Dios creó ordenadamente todas las cosas." />
              <InteractiveCard icon="👨‍👩‍" title="El Hombre" desc="Creado a imagen para comunión." />
              <InteractiveCard icon="🌳" title="El Edén" desc="Lugar perfecto de mayordomía." />
              <InteractiveCard icon="💞" title="Propósito" desc="Un pueblo santo viviendo en amor." />
            </div>

            <div className="flex justify-end pt-8">
              <button onClick={() => onNextLesson('lesson2')} className="px-8 py-3 bg-gradient-to-r from-amber-600 to-amber-800 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2">
                Siguiente: Génesis 1-2 <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        );

      case 'lesson2':
        return (
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
               <h3 className="text-xl font-bold mb-6">Mapa Geográfico del Edén</h3>
               <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-lg group">
                  <img src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Mapa" />
                  <div className="absolute top-[30%] left-[45%] w-6 h-6 bg-amber-600 rounded-full border-2 border-white animate-pulse"></div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur p-3 rounded-lg text-sm text-slate-800">
                    <p className="font-bold text-amber-800">Génesis 2:8:</p> "Y Jehová Dios plantó un huerto en Edén, al oriente; y puso allí al hombre que había formado."
                  </div>
               </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-800">Estructura Literaria</h3>
              <AccordionItem id="lit" title="La Estructura de Génesis 1">
                <ul className="space-y-2">
                  <li><strong>Anuncio:</strong> "Y dijo Dios..."</li>
                  <li><strong>Mandato:</strong> "Haya..." o "Produzca..."</li>
                  <li><strong>Resultado:</strong> "Y fue así"</li>
                  <li><strong>Evaluación:</strong> "Y vio Dios que era bueno"</li>
                </ul>
              </AccordionItem>
            </div>

            <div className="flex justify-end pt-8">
              <button onClick={() => onNextLesson('lesson3')} className="px-8 py-3 bg-amber-700 text-white font-bold rounded-full shadow-lg flex items-center gap-2">
                Siguiente: Línea de Tiempo <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        );

      case 'lesson3':
        return (
          <div className="space-y-12">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h3 className="text-3xl font-bold text-slate-800 mb-4">Cronología de la Creación</h3>
              <p className="text-slate-600">Explora paso a paso cómo Dios trajo orden y belleza al universo en siete días.</p>
            </div>
            
            <Timeline />

            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-slate-800 text-center">Recursos Adicionales de la Lección</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <InteractiveCard 
                  icon="🖼️" 
                  title="Galería" 
                  desc="Explora imágenes artísticas de los días de la creación." 
                  link="https://sites.google.com/view/pentateucolts/lecci%C3%B3n-1/galer%C3%ADa"
                />
                <InteractiveCard 
                  icon="📹" 
                  title="Recorrido Virtual" 
                  desc="Video explicativo detallado del relato de la creación." 
                  link="https://youtu.be/5-9XAQHxERE?si=mf1VmemyDSh0MNZR"
                />
                <InteractiveCard 
                  icon="❓" 
                  title="Test de Conocimiento" 
                  desc="Pon a prueba lo aprendido sobre Génesis 1-2." 
                  link="https://sites.google.com/view/pentateucolts/lecci%C3%B3n-1/test-de-conocimiento"
                />
                <InteractiveCard 
                  icon="✍️" 
                  title="Actividad Reflexiva" 
                  desc="Ejercicio para aplicar las lecciones a tu vida actual." 
                  link="https://sites.google.com/view/pentateucolts/lecci%C3%B3n-1/actividad-reflexiva"
                />
              </div>
            </div>

            <div className="flex justify-end pt-8">
              <button onClick={() => onNextLesson('lesson4')} className="px-8 py-3 bg-amber-700 text-white font-bold rounded-full shadow-lg flex items-center gap-2">
                Siguiente: Significado Teológico <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        );

      case 'lesson4':
        return (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-800 border-b-2 border-amber-600 pb-2 inline-block">Dios como Creador</h3>
                <p className="text-slate-600">El relato revela importantes atributos divinos:</p>
                <div className="space-y-3">
                  {['Pre-existencia', 'Soberanía', 'Orden', 'Bondad', 'Propósito'].map(tag => (
                    <div key={tag} className="flex items-center gap-3 bg-white p-3 rounded-lg border border-slate-100">
                      <i className="fas fa-star text-amber-500"></i>
                      <span className="font-semibold text-slate-700">{tag}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-800 border-b-2 border-amber-600 pb-2 inline-block">La Naturaleza del Hombre</h3>
                <p className="text-slate-600">Génesis enseña nuestra identidad fundamental:</p>
                <div className="space-y-2">
                   <AccordionItem id="hum" title="Identidad Humana">
                     <ul className="list-disc pl-5 space-y-1">
                       <li><strong>Criatura:</strong> Formado del polvo.</li>
                       <li><strong>Imagen:</strong> Portador del reflejo divino.</li>
                       <li><strong>Relacional:</strong> Creado para otros.</li>
                       <li><strong>Mayordomo:</strong> Encargado del cuidado.</li>
                     </ul>
                   </AccordionItem>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-8">
              <button onClick={() => onNextLesson('lesson5')} className="px-8 py-3 bg-amber-700 text-white font-bold rounded-full shadow-lg flex items-center gap-2">
                Siguiente: Evaluación <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        );

      case 'lesson5':
        return (
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 text-center">
               <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                 <i className="fas fa-award"></i>
               </div>
               <h2 className="text-3xl font-bold text-slate-800 mb-2">¡Lección Completada!</h2>
               <p className="text-slate-600 mb-8">Has finalizado el estudio del Capítulo 2: Los Orígenes del Pueblo de Dios.</p>
               
               <div className="space-y-4 mb-8 text-left">
                  <h4 className="font-bold text-slate-800">Preguntas de Reflexión:</h4>
                  <AccordionItem id="q1" title="1. ¿Qué nos enseña Génesis sobre Dios?">
                    Revela un Dios poderoso, ordenado, bueno y relacional que crea por su palabra.
                  </AccordionItem>
                  <AccordionItem id="q2" title="2. ¿Cómo afecta esto nuestra visión?">
                    Establece que el universo tiene propósito y significado real.
                  </AccordionItem>
               </div>

               <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button onClick={() => onNextLesson('lesson1')} className="px-6 py-3 border-2 border-amber-700 text-amber-700 font-bold rounded-full hover:bg-amber-50 transition-colors">
                    <i className="fas fa-redo mr-2"></i> Repasar Material
                  </button>
                  <button className="px-8 py-3 bg-amber-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all">
                    Siguiente Capítulo <i className="fas fa-arrow-right ml-2"></i>
                  </button>
               </div>
            </div>
          </div>
        );

      default:
        return <div>Lección no encontrada</div>;
    }
  };

  return <div className="animate-in fade-in duration-500">{renderLesson()}</div>;
};

export default LessonContent;
