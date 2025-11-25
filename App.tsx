
import React from 'react';
import { ITINERARY_DATA, APP_NAME } from './constants';
import DayCard from './components/DayCard';
import ChatWidget from './components/ChatWidget';
import { Plane, Map, Flower2, Info, Github } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-sakura-200 selection:text-sakura-900">
      
      {/* Hero Section */}
      <header className="relative bg-white border-b border-slate-200 overflow-hidden">
        {/* Clean gradient background instead of image */}
        <div className="absolute inset-0 bg-gradient-to-br from-sakura-50 to-white"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <div className="flex items-center gap-2 text-sakura-600 font-bold tracking-widest uppercase mb-2">
                 <Flower2 size={18} className="animate-spin-slow" />
                 <span>4月15日 - 4月21日</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4">
                {APP_NAME}
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
                精心策劃的東京 7 日之旅。從新宿的霓虹燈光到迪士尼的魔法世界，體驗傳統與未來的完美融合。
              </p>
            </div>
            
            <div className="flex gap-3">
               <div className="flex flex-col items-center p-3 bg-white/80 backdrop-blur rounded-xl border border-slate-200 shadow-sm">
                  <span className="text-xs font-bold text-slate-400 uppercase">天數</span>
                  <span className="text-xl font-bold text-indigo-600">7 天</span>
               </div>
               <div className="flex flex-col items-center p-3 bg-white/80 backdrop-blur rounded-xl border border-slate-200 shadow-sm">
                  <span className="text-xs font-bold text-slate-400 uppercase">主題</span>
                  <span className="text-xl font-bold text-sakura-600">文化深度</span>
               </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Intro Stats/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
           <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-2xl p-6 text-white shadow-lg flex items-start gap-4">
              <div className="p-3 bg-white/10 rounded-lg">
                <Plane size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">抵達資訊</h3>
                <p className="text-indigo-100 text-sm mt-1">成田 (NRT) 或羽田 (HND) 機場，搭乘 N'EX 或單軌電車。</p>
              </div>
           </div>
           
           <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="p-3 bg-sakura-100 text-sakura-600 rounded-lg">
                <Map size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-lg">重點區域</h3>
                <p className="text-slate-500 text-sm mt-1">新宿、澀谷、淺草、銀座、東京灣。</p>
              </div>
           </div>

           <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="p-3 bg-amber-100 text-amber-600 rounded-lg">
                <Info size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-lg">旅遊貼士</h3>
                <p className="text-slate-500 text-sm mt-1">建議購買 Suica/Pasmo 交通卡以便搭車。</p>
              </div>
           </div>
        </div>

        {/* Itinerary Timeline */}
        <div className="relative">
          {/* Central Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {ITINERARY_DATA.map((day, index) => {
               // Staggered layout logic
               return (
                  <div key={day.id} className={`${isEven(index) ? 'md:pr-12 md:text-right' : 'md:pl-12 md:mt-24'} relative`}>
                     {/* Dot on timeline */}
                     <div className={`hidden md:block absolute top-8 w-4 h-4 rounded-full bg-white border-4 border-sakura-400 z-10 shadow-sm ${isEven(index) ? '-right-[40px] translate-x-1/2' : '-left-[40px] -translate-x-1/2'}`} />
                     
                     <DayCard day={day} index={index} />
                  </div>
               );
            })}
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="mb-4 text-lg font-light text-slate-300">"一期一會" (Ichi-go ichi-e)</p>
          <div className="w-12 h-0.5 bg-slate-700 mx-auto mb-6"></div>
          <p className="text-sm mb-6">由 React, Tailwind 和 Gemini AI 打造</p>
          
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all text-sm font-medium"
          >
            <Github size={18} />
            <span>View on GitHub</span>
          </a>
        </div>
      </footer>

      {/* AI Assistant */}
      <ChatWidget />
    </div>
  );
};

// Helper for staggered layout readability
function isEven(n: number) {
   return n % 2 === 0;
}

export default App;
