
import React, { useState } from 'react';

const SLIDES = [
  {
    title: "El Propósito Eterno de Dios",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    text: "Dios, antes de la creación, se hizo el propósito de llegar a tener un pueblo que pasara la eternidad con él y con el que pudiera compartir las bendiciones.",
    verse: "Efesios 1:4: \"Nos escogió en él antes de la fundación del mundo, para que fuésemos santos...\""
  },
  {
    title: "La Creación del Hombre",
    img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
    text: "Dios creó al hombre a su imagen y semejanza, con el propósito de tener comunión con él. El hombre fue creado para vivir ante Dios en una relación de amor.",
    verse: "Génesis 1:26-27: \"Hagamos al hombre a nuestra imagen...\""
  },
  {
    title: "El Jardín del Edén",
    img: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?auto=format&fit=crop&w=800&q=80",
    text: "Dios plantó un jardín en Edén y puso allí al hombre. Proveyó todo lo necesario, incluyendo dos árboles especiales: de la Vida y de la Ciencia.",
    verse: "Génesis 2:8: \"Y Jehová Dios plantó un huerto en Edén...\""
  }
];

const Slideshow: React.FC = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
      <div className="relative group">
        <img 
          src={SLIDES[index].img} 
          alt={SLIDES[index].title} 
          className="w-full aspect-video object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
          <h3 className="text-white text-xl font-bold">{SLIDES[index].title}</h3>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <p className="text-slate-600 leading-relaxed">{SLIDES[index].text}</p>
        <div className="bg-amber-50 p-4 rounded-xl border-l-4 border-amber-700 italic text-amber-900 text-sm">
          {SLIDES[index].verse}
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div className="flex gap-2">
            {SLIDES.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setIndex(i)}
                className={`h-2 transition-all rounded-full ${i === index ? 'w-8 bg-amber-700' : 'w-2 bg-slate-200'}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button 
              disabled={index === 0}
              onClick={() => setIndex(prev => prev - 1)}
              className="p-2 w-10 h-10 rounded-full border border-slate-200 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <i className="fas fa-chevron-left text-slate-600"></i>
            </button>
            <button 
              disabled={index === SLIDES.length - 1}
              onClick={() => setIndex(prev => prev + 1)}
              className="p-2 w-10 h-10 rounded-full bg-amber-700 hover:bg-amber-800 text-white disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
