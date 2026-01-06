
import React, { useState } from 'react';

interface Question {
  id: number;
  text: string;
  answer: string;
}

const questions: Question[] = [
  { id: 1, text: '¿Qué nos enseña Génesis 1-2 sobre el carácter de Dios?', answer: 'Génesis revela a un Dios poderoso que crea por su palabra, ordenado en sus obras, bueno en sus propósitos, y relacional.' },
  { id: 2, text: '¿Cómo afecta la doctrina de la creación a nuestra visión del mundo?', answer: 'Establece que el universo tiene propósito y significado. La bondad original fundamenta una visión positiva del mundo material.' },
  { id: 3, text: '¿Qué implicaciones tiene ser creados a imagen de Dios?', answer: 'Implica dignidad inherente, capacidad relacional con Dios, responsabilidad y el llamado a reflejar Su carácter.' }
];

const LessonQuiz: React.FC = () => {
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});

  const toggle = (id: number) => {
    setRevealed(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {questions.map((q) => (
          <div key={q.id} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all">
            <button 
              onClick={() => toggle(q.id)}
              className="w-full text-left p-5 flex items-center justify-between bg-white hover:bg-gray-50"
            >
              <h4 className="font-bold text-gray-800 pr-4">{q.text}</h4>
              <i className={`fas fa-chevron-down text-gray-400 transition-transform duration-300 ${revealed[q.id] ? 'rotate-180' : ''}`}></i>
            </button>
            <div className={`transition-all duration-300 ease-in-out ${revealed[q.id] ? 'max-h-[500px] opacity-100 p-5 bg-orange-50/30' : 'max-h-0 opacity-0 overflow-hidden'}`}>
              <div className="flex gap-3">
                <div className="w-1 h-auto bg-[#cd853f] rounded-full"></div>
                <p className="text-sm lg:text-base text-gray-600 leading-relaxed">{q.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <i className="fas fa-check-circle text-4xl"></i>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">¡Felicidades!</h2>
        <p className="text-gray-600 max-w-lg mx-auto mb-8">
          Has completado el estudio del Capítulo 2: Los Orígenes del Pueblo de Dios. La creación nos muestra el poder, sabiduría y amor de Dios.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-white border-2 border-[#8b4513] text-[#8b4513] rounded-full font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
            <i className="fas fa-redo"></i> Repasar Material
          </button>
          <button className="px-8 py-3 bg-[#8b4513] text-white rounded-full font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2">
            Siguiente Capítulo <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LessonQuiz;
