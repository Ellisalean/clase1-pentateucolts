
import React from 'react';

const EVENTS = [
  { day: 'Día 1', title: 'Luz y Tinieblas', desc: 'Dios separa la luz de las tinieblas. Establece el ciclo día-noche.' },
  { day: 'Día 2', title: 'Cielo y Aguas', desc: 'Creación de la expansión (cielo) separando las aguas.' },
  { day: 'Día 3', title: 'Tierra y Vegetación', desc: 'Aparece la tierra seca y se crean las plantas y árboles.' },
  { day: 'Día 4', title: 'Lumbreras', desc: 'Sol, luna y estrellas para marcar tiempos y estaciones.' },
  { day: 'Día 5', title: 'Aves y Peces', desc: 'Dios llena las aguas de vida y el cielo de aves.' },
  { day: 'Día 6', title: 'Animales y el Hombre', desc: 'Animales terrestres y el hombre a imagen de Dios.' },
  { day: 'Día 7', title: 'Reposo', desc: 'Dios descansa y santifica el séptimo día.' }
];

const Timeline: React.FC = () => {
  return (
    <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-amber-200 before:via-amber-500 before:to-amber-200">
      {EVENTS.map((event, i) => (
        <div key={i} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
          {/* Dot */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-amber-700 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
             <span className="text-xs font-bold">{i + 1}</span>
          </div>
          {/* Card */}
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-1">
              <time className="font-bold text-amber-700 text-sm uppercase">{event.day}</time>
            </div>
            <h4 className="font-bold text-slate-800 mb-2">{event.title}</h4>
            <p className="text-sm text-slate-600 leading-relaxed">{event.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
