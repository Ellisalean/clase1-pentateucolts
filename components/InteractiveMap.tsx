
import React, { useState } from 'react';

interface Marker {
  id: number;
  top: string;
  left: string;
  title: string;
  desc: string;
  verse?: string;
}

const markers: Marker[] = [
  { id: 1, top: '45%', left: '55%', title: 'Edén', desc: 'Ubicación aproximada del Jardín del Edén donde Dios puso al primer hombre.', verse: 'Génesis 2:8: "Y Jehová Dios plantó un huerto en Edén, al oriente"' },
  { id: 2, top: '40%', left: '50%', title: 'Ríos del Edén', desc: 'Cuatro ríos salían del Edén: Pisón, Gihón, Hidekel (Tigris) y Éufrates.' },
  { id: 3, top: '55%', left: '60%', title: 'Árbol de la Vida', desc: 'Símbolo de la vida eterna en comunión con Dios.' }
];

const InteractiveMap: React.FC = () => {
  const [activeMarker, setActiveMarker] = useState<Marker | null>(null);

  return (
    <div className="relative w-full rounded-2xl overflow-hidden shadow-xl group border-4 border-white">
      <img 
        src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1200&q=80" 
        alt="Mapa bíblico" 
        className="w-full h-auto"
      />
      
      {/* Markers */}
      {markers.map((m) => (
        <button
          key={m.id}
          onMouseEnter={() => setActiveMarker(m)}
          onMouseLeave={() => setActiveMarker(null)}
          onClick={() => setActiveMarker(m === activeMarker ? null : m)}
          className="absolute w-8 h-8 bg-[#cd853f] hover:bg-[#8b4513] text-white rounded-full flex items-center justify-center shadow-lg transform -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-125 z-10"
          style={{ top: m.top, left: m.left }}
        >
          <span className="text-xs font-bold">{m.id}</span>
        </button>
      ))}

      {/* Responsive Tooltip / Info Box */}
      {activeMarker && (
        <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 lg:p-6 rounded-xl shadow-2xl border border-[#cd853f] animate-in fade-in slide-in-from-bottom-2 duration-300">
          <h4 className="text-[#8b4513] font-bold text-lg mb-1 flex items-center gap-2">
            <i className="fas fa-map-marker-alt"></i> {activeMarker.title}
          </h4>
          <p className="text-sm text-gray-700 leading-relaxed mb-2">{activeMarker.desc}</p>
          {activeMarker.verse && (
            <p className="text-[10px] lg:text-xs font-medium italic text-gray-500 bg-gray-50 p-2 rounded">{activeMarker.verse}</p>
          )}
        </div>
      )}

      {/* Map Hint */}
      <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm text-white px-3 py-1 rounded-full text-[10px] font-medium pointer-events-none">
        Pasa el mouse o toca los puntos
      </div>
    </div>
  );
};

export default InteractiveMap;
