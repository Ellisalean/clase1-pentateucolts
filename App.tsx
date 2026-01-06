
import React, { useState, useEffect, useCallback } from 'react';
import { LESSONS, RESOURCES } from './data';
import { SidebarTab, Lesson } from './types';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

const App: React.FC = () => {
  const [currentLesson, setCurrentLesson] = useState<Lesson>(LESSONS[0]);
  const [activeTab, setActiveTab] = useState<SidebarTab>(SidebarTab.OUTLINE);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLessonSelect = useCallback((lessonId: string) => {
    const lesson = LESSONS.find(l => l.id === lessonId);
    if (lesson) {
      setCurrentLesson(lesson);
      // On mobile, close sidebar after selection
      if (window.innerWidth < 1024) {
        setIsSidebarOpen(false);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const handleNextLesson = useCallback(() => {
    const currentIndex = LESSONS.findIndex(l => l.id === currentLesson.id);
    if (currentIndex < LESSONS.length - 1) {
      handleLessonSelect(LESSONS[currentIndex + 1].id);
    }
  }, [currentLesson.id, handleLessonSelect]);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex min-h-screen bg-gray-50 text-slate-900 overflow-x-hidden">
      {/* Mobile Backdrop */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar Component */}
      <Sidebar 
        currentLesson={currentLesson}
        onLessonSelect={handleLessonSelect}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isOpen={isSidebarOpen}
        onToggle={toggleSidebar}
      />

      {/* Main Content Area */}
      <div className="flex-1 w-full lg:ml-[320px] transition-all duration-300">
        {/* Mobile Header */}
        <header className="lg:hidden sticky top-0 bg-white border-b px-4 py-3 flex items-center justify-between z-30 shadow-sm">
          <div className="flex items-center gap-2">
            <i className="fas fa-book-bible text-[#8b4513] text-xl"></i>
            <span className="text-[#8b4513] font-bold text-lg">LatinTheologicalSeminary</span>
          </div>
          <button 
            onClick={toggleSidebar}
            className="p-2 hover:bg-gray-100 rounded-md transition-colors"
          >
            <i className={`fas ${isSidebarOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </header>

        <MainContent 
          lesson={currentLesson} 
          onNextLesson={handleNextLesson}
        />
      </div>
    </div>
  );
};

export default App;
