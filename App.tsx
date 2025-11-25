
import React, { useState } from 'react';
import { ITINERARY_DATA, APP_NAME } from './constants';
import DayCard from './components/DayCard';
import ChatWidget from './components/ChatWidget';
import { Plane, Map, Flower2, Info, Github, ChevronLeft, ChevronRight, CalendarDays } from 'lucide-react';

const App: React.FC = () => {
  const [currentDayIndex, setCurrentDayIndex] = useState(0);

  const handlePrevDay = () => {
    setCurrentDayIndex((prev) => (prev > 0 ? prev - 1 : prev));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextDay = () => {
    setCurrentDayIndex((prev) => (prev < ITINERARY_DATA.length - 1 ? prev + 1 : prev));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTabClick = (index: number) => {
    setCurrentDayIndex(index);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-sakura-200 selection:text-sakura-900 font-sans pb-20">
      
      {/* Hero Section */}
      <header className="relative bg-white border-b border-slate-200">
        <div className="absolute inset-0 bg-gradient-to-br from-sakura-50/50 to-white pointer-events-none"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 text-center">
            <div className="inline-flex items-center gap-2 text-sakura-600 font-bold tracking-widest uppercase mb-3 bg-sakura-50 px-4 py-1.5 rounded-full text-xs md:text-sm">
               <Flower2 size={16} className="animate-spin-slow" />
               <span>4月15日 - 4月21日</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              {APP_NAME}
            </h1>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              您的專屬東京旅程指南。點擊下方日期，探索每一天的精彩細節與達人貼士。
            </p>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        
        {/* Navigation Tabs (Scrollable on mobile) */}
        <div className="mb-8 sticky top-4 z-30">
          <div className="bg-white/80 backdrop-blur-lg p-2 rounded-2xl shadow-lg border border-slate-200/50 flex overflow-x-auto gap-2 no-scrollbar snap-x">
            {ITINERARY_DATA.map((day, index) => {
              const isActive = index === currentDayIndex;
              return (
                <button
                  key={day.id}
                  onClick={() => handleTabClick(index)}
                  className={`flex-none snap-start min-w-[80px] px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 flex flex-col items-center gap-1
                    ${isActive 
                      ? 'bg-slate-900 text-white shadow-md scale-105' 
                      : 'bg-transparent text-slate-500 hover:bg-slate-100 hover:text-slate-800'
                    }`}
                >
                  <span className={`text-[10px] uppercase tracking-wider ${isActive ? 'text-sakura-300' : 'text-slate-400'}`}>
                    Day {index + 1}
                  </span>
                  <span>{day.date}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Current Day Card */}
        <div className="mb-8 min-h-[600px]">
           <DayCard day={ITINERARY_DATA[currentDayIndex]} />
        </div>

        {/* Pagination Buttons */}
        <div className="flex justify-between items-center gap-4">
          <button 
            onClick={handlePrevDay}
            disabled={currentDayIndex === 0}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-white rounded-xl shadow-sm border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 hover:border-sakura-200 hover:text-sakura-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all group"
          >
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="hidden md:inline">上一天</span>
            <span className="md:hidden">Prev</span>
          </button>
          
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            {currentDayIndex + 1} / {ITINERARY_DATA.length}
          </div>

          <button 
            onClick={handleNextDay}
            disabled={currentDayIndex === ITINERARY_DATA.length - 1}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-slate-900 rounded-xl shadow-lg shadow-slate-900/20 text-white font-bold hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all group"
          >
            <span className="hidden md:inline">下一天</span>
            <span className="md:hidden">Next</span>
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-10 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-4 text-sakura-500">
             <Flower2 size={20} />
          </div>
          <p className="mb-6 text-slate-500 font-medium text-sm">祝您有一趟美好的東京之旅 🌸</p>
          
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-all text-sm font-bold"
          >
            <Github size={18} />
            <span>GitHub Repository</span>
          </a>
        </div>
      </footer>

      {/* AI Assistant */}
      <ChatWidget />
    </div>
  );
};

export default App;
