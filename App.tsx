
import React, { useState, useEffect } from 'react';
import { MODULES, RESOURCES } from './constants';
import Sidebar from './components/Sidebar';
import Banner from './components/Banner';
import LessonContent from './components/LessonContent';
import { Lesson } from './types';

const App: React.FC = () => {
  const [currentLessonId, setCurrentLessonId] = useState<string>('lesson1');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'outline' | 'resources'>('outline');

  const currentLesson = MODULES[0].lessons.find(l => l.id === currentLessonId) || MODULES[0].lessons[0];

  const handleLessonChange = (id: string) => {
    setCurrentLessonId(id);
    setIsSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Mobile Header */}
      <header className="lg:hidden flex items-center justify-between px-4 py-3 bg-white border-b sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <i className="fas fa-bible text-amber-700 text-xl"></i>
          <span className="font-bold text-amber-900">Latin Theological Seminary</span>
        </div>
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 text-slate-600 hover:bg-slate-100 rounded-md"
        >
          <i className={`fas ${isSidebarOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
        </button>
      </header>

      {/* Sidebar Overlay for Mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 w-80 bg-white border-r z-50 transform transition-transform duration-300 lg:relative lg:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <Sidebar 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          currentLessonId={currentLessonId}
          onLessonClick={handleLessonChange}
          modules={MODULES}
          resources={RESOURCES}
        />
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen bg-slate-50">
        <Banner lesson={currentLesson} />
        <div className="flex-1 max-w-5xl mx-auto w-full px-4 lg:px-8 py-8">
          <LessonContent 
            lessonId={currentLessonId} 
            onNextLesson={(id) => handleLessonChange(id)} 
          />
        </div>
        
        {/* Footer Navigation (Mobile Quick Access) */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t px-4 py-2 flex justify-around items-center z-40 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
           <button onClick={() => { setActiveTab('outline'); setIsSidebarOpen(true); }} className="flex flex-col items-center gap-1 text-slate-500">
             <i className="fas fa-list-ol"></i>
             <span className="text-xs">Lecciones</span>
           </button>
           <button onClick={() => { setActiveTab('resources'); setIsSidebarOpen(true); }} className="flex flex-col items-center gap-1 text-slate-500">
             <i className="fas fa-file-alt"></i>
             <span className="text-xs">Recursos</span>
           </button>
        </div>
      </main>
    </div>
  );
};

export default App;
