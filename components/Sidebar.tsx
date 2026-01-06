
import React from 'react';
import { LESSONS, RESOURCES } from '../data';
import { Lesson, SidebarTab } from '../types';

interface SidebarProps {
  currentLesson: Lesson;
  onLessonSelect: (id: string) => void;
  activeTab: SidebarTab;
  setActiveTab: (tab: SidebarTab) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  currentLesson, 
  onLessonSelect, 
  activeTab, 
  setActiveTab,
  isOpen,
  onToggle
}) => {
  return (
    <aside className={`
      fixed lg:fixed top-0 left-0 bottom-0 z-50
      w-[320px] bg-white border-r border-gray-200 
      transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
    `}>
      <div className="h-full flex flex-col">
        {/* Course Logo/Title */}
        <div className="p-6 border-b hidden lg:block">
          <div className="flex items-center gap-2 mb-1">
            <i className="fas fa-book-bible text-[#8b4513] text-2xl"></i>
            <h2 className="text-xl font-bold text-[#8b4513] leading-tight">LatinTheologicalSeminary</h2>
          </div>
          <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Pentateuco Online</p>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b">
          <button 
            onClick={() => setActiveTab(SidebarTab.OUTLINE)}
            className={`flex-1 py-4 text-sm font-medium transition-all ${activeTab === SidebarTab.OUTLINE ? 'text-[#8b4513] border-b-2 border-[#8b4513]' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            <i className="fas fa-list-ol mr-2"></i> Contenido
          </button>
          <button 
            onClick={() => setActiveTab(SidebarTab.RESOURCES)}
            className={`flex-1 py-4 text-sm font-medium transition-all ${activeTab === SidebarTab.RESOURCES ? 'text-[#8b4513] border-b-2 border-[#8b4513]' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            <i className="fas fa-file-alt mr-2"></i> Recursos
          </button>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto">
          {activeTab === SidebarTab.OUTLINE ? (
            <div className="p-4 space-y-4">
              {/* Progress Tracker */}
              <div className="bg-gray-50 p-4 rounded-xl mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-gray-500">PROGRESO DEL CURSO</span>
                  <span className="text-xs font-bold text-[#cd853f]">25%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#cd853f] to-[#228b22] w-1/4"></div>
                </div>
              </div>

              {/* Module Header */}
              <div className="module-container">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg mb-2 cursor-pointer hover:bg-gray-100">
                  <h3 className="text-sm font-semibold flex items-center gap-2">
                    <i className="fas fa-folder-open text-[#8b4513]"></i> Capítulo 2: Los Orígenes
                  </h3>
                </div>

                <div className="space-y-1">
                  {LESSONS.map((lesson) => (
                    <button
                      key={lesson.id}
                      onClick={() => onLessonSelect(lesson.id)}
                      className={`w-full text-left p-3 rounded-lg flex items-start gap-3 transition-all ${currentLesson.id === lesson.id ? 'bg-[#8b4513]/10 border-l-4 border-[#8b4513] translate-x-1' : 'hover:bg-gray-50'}`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${currentLesson.id === lesson.id ? 'bg-[#8b4513] text-white' : 'bg-orange-50 text-[#cd853f]'}`}>
                        <i className={`fas ${lesson.icon} text-xs`}></i>
                      </div>
                      <div>
                        <h4 className={`text-sm leading-tight ${currentLesson.id === lesson.id ? 'font-bold text-[#8b4513]' : 'font-medium'}`}>
                          {lesson.title}
                        </h4>
                        <div className="flex items-center gap-1 mt-1 text-[10px] text-gray-500">
                          <i className="far fa-clock"></i> {lesson.duration}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="p-4 space-y-4">
              <h3 className="text-sm font-bold text-gray-700 mb-4 px-2 uppercase tracking-wide">Recursos de la Lección</h3>
              <div className="space-y-3">
                {RESOURCES.map((resource) => (
                  <div key={resource.id} className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-orange-100 text-[#cd853f] flex items-center justify-center">
                        <i className={`fas ${resource.icon} text-lg`}></i>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-800">{resource.title}</h4>
                        <p className="text-[10px] text-gray-500">{resource.category}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-[10px] bg-white px-2 py-1 rounded border border-gray-200 text-gray-600 font-semibold">{resource.type}</span>
                      <a 
                        href={resource.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-xs font-bold text-[#8b4513] hover:underline"
                      >
                        {resource.type.includes('PDF') ? 'Descargar' : 'Ver recurso'} <i className="fas fa-external-link-alt ml-1"></i>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Help Note */}
              <div className="p-4 bg-[#fff9e6] border-l-4 border-[#ffd700] rounded-r-lg mt-6">
                <div className="flex items-center gap-2 text-[#d4a017] font-bold text-xs mb-1">
                  <i className="fas fa-plus-circle"></i> Ayuda adicional
                </div>
                <p className="text-[11px] text-gray-700 leading-relaxed">
                  Utiliza estos materiales para profundizar en tu estudio. Si tienes dudas, consulta el foro del curso.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
