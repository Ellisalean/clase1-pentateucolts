
import React from 'react';
import { Module, Resource } from '../types';

interface SidebarProps {
  activeTab: 'outline' | 'resources';
  setActiveTab: (tab: 'outline' | 'resources') => void;
  currentLessonId: string;
  onLessonClick: (id: string) => void;
  modules: Module[];
  resources: Resource[];
}

const Sidebar: React.FC<SidebarProps> = ({ 
  activeTab, 
  setActiveTab, 
  currentLessonId, 
  onLessonClick, 
  modules, 
  resources 
}) => {
  const getResourceIcon = (type: Resource['type']) => {
    switch (type) {
      case 'pdf': return 'fa-file-pdf';
      case 'map': return 'fa-map';
      case 'clock': return 'fa-clock';
      case 'video': return 'fa-play-circle';
      case 'quiz': return 'fa-question-circle';
      case 'activity': return 'fa-pen-nib';
      case 'gallery': return 'fa-images';
      default: return 'fa-file';
    }
  };

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Sidebar Tabs */}
      <div className="flex border-b">
        <button 
          onClick={() => setActiveTab('outline')}
          className={`flex-1 py-4 text-center font-medium transition-colors border-b-2 ${
            activeTab === 'outline' 
              ? 'text-amber-700 border-amber-700' 
              : 'text-slate-500 border-transparent hover:text-slate-700'
          }`}
        >
          <i className="fas fa-list-ol mr-2"></i> Contenido
        </button>
        <button 
          onClick={() => setActiveTab('resources')}
          className={`flex-1 py-4 text-center font-medium transition-colors border-b-2 ${
            activeTab === 'resources' 
              ? 'text-amber-700 border-amber-700' 
              : 'text-slate-500 border-transparent hover:text-slate-700'
          }`}
        >
          <i className="fas fa-file-alt mr-2"></i> Recursos
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
        {activeTab === 'outline' ? (
          <div className="space-y-6">
            {/* Progress */}
            <div className="space-y-2">
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-amber-500 to-green-500 w-[25%]" />
              </div>
              <p className="text-xs text-slate-500 font-medium text-right">25% completado</p>
            </div>

            {/* Modules */}
            {modules.map(module => (
              <div key={module.id} className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg cursor-pointer hover:bg-slate-100 transition-colors">
                  <h3 className="text-sm font-semibold flex items-center gap-2 text-slate-700">
                    <i className="fas fa-folder-open text-amber-600"></i>
                    {module.title}
                  </h3>
                  <i className="fas fa-chevron-down text-slate-400 text-xs"></i>
                </div>
                <div className="space-y-1 pl-2">
                  {module.lessons.map(lesson => (
                    <button
                      key={lesson.id}
                      onClick={() => onLessonClick(lesson.id)}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all ${
                        currentLessonId === lesson.id 
                          ? 'bg-amber-50 border-l-4 border-amber-700' 
                          : 'hover:bg-slate-50 border-l-4 border-transparent'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        currentLessonId === lesson.id ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-400'
                      }`}>
                        <i className={`fas fa-${lesson.type === 'video' ? 'video' : lesson.type === 'book' ? 'book' : lesson.type === 'scroll' ? 'scroll' : lesson.type === 'landmark' ? 'landmark' : 'question-circle'}`}></i>
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <h4 className={`text-sm truncate ${currentLessonId === lesson.id ? 'font-semibold text-amber-900' : 'text-slate-600'}`}>
                          {lesson.title}
                        </h4>
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          <i className="far fa-clock"></i> {lesson.duration}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            <h3 className="font-semibold text-slate-800 mb-4">Recursos disponibles</h3>
            {resources.map(res => (
              <div key={res.id} className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-all group">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600">
                    <i className={`fas ${getResourceIcon(res.type)}`}></i>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-slate-800 leading-tight group-hover:text-amber-700 transition-colors">
                      {res.title}
                    </h4>
                    <div className="mt-1 flex gap-2 text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                      <span>{res.meta}</span>
                      <span>•</span>
                      <span>{res.category}</span>
                    </div>
                  </div>
                  <a 
                    href={res.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-amber-700 text-xs font-bold hover:underline"
                  >
                    {res.type === 'pdf' ? 'Descargar' : 'Ver'}
                  </a>
                </div>
              </div>
            ))}
            <div className="mt-8 p-4 bg-amber-50 border-l-4 border-amber-400 rounded-r-xl">
              <h5 className="text-amber-800 font-semibold text-sm mb-1">
                <i className="fas fa-info-circle mr-1"></i> Recursos adicionales
              </h5>
              <p className="text-xs text-amber-700 leading-relaxed">
                Aquí puedes encontrar comentarios bíblicos, concordancias y otros materiales de estudio para profundizar en Génesis 1-2.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
