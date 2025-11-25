
import React from 'react';
import { Sun, Moon, CloudSun, MapPin, Utensils, Coffee, Star } from 'lucide-react';
import { ItineraryDay, Activity, Meal } from '../types';

interface DayCardProps {
  day: ItineraryDay;
  index: number;
}

const ActivityItem: React.FC<{ activity: Activity }> = ({ activity }) => (
  <div className="flex gap-4 items-start py-2 border-l-2 border-slate-100 pl-4 hover:border-sakura-300 transition-colors">
    <div className="flex-1 min-w-0">
      <h5 className="font-bold text-slate-800 text-sm mb-1">{activity.name}</h5>
      <p className="text-sm text-slate-500 leading-relaxed">{activity.description}</p>
    </div>
  </div>
);

const MealItem: React.FC<{ meal: Meal }> = ({ meal }) => (
  <div className="flex flex-col bg-white p-3 rounded-lg border border-slate-100 shadow-sm hover:border-sakura-200 transition-colors h-full">
    <div className="flex items-center gap-2 mb-1">
      <span className="text-[10px] font-bold text-sakura-600 bg-sakura-50 px-1.5 py-0.5 rounded">{meal.type}</span>
      <span className="font-bold text-slate-800 text-xs line-clamp-1">{meal.name}</span>
    </div>
    <span className="text-[11px] text-slate-500 leading-tight line-clamp-2">{meal.description}</span>
  </div>
);

const DayCard: React.FC<DayCardProps> = ({ day, index }) => {
  // Generate a distinct gradient based on the index to give some visual variety
  const gradients = [
    'from-pink-500 to-rose-500',
    'from-sky-500 to-blue-500',
    'from-violet-500 to-purple-500',
    'from-amber-500 to-orange-500',
    'from-emerald-500 to-teal-500',
    'from-indigo-500 to-blue-600',
    'from-slate-600 to-slate-800',
  ];
  const bgGradient = gradients[index % gradients.length];

  return (
    <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col h-full">
      {/* Header (No Image) */}
      <div className={`relative p-6 bg-gradient-to-r ${bgGradient} text-white`}>
        <div className="flex items-center justify-between mb-4">
            <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold tracking-wider">{day.date}</span>
            <div className="flex items-center gap-1 text-white/80 text-xs">
                <MapPin size={12}/> 東京
            </div>
        </div>
        <h3 className="text-2xl font-bold mb-1 flex items-center gap-2">
           {day.title}
        </h3>
        <p className="text-white/80 text-sm font-medium">{day.theme}</p>
        
        {/* Decorative Highlights */}
        <div className="flex flex-wrap gap-2 mt-4">
            {day.highlights.map((h, i) => (
                <span key={i} className="text-[10px] bg-white/10 px-2 py-0.5 rounded border border-white/20 flex items-center gap-1">
                    <Star size={8} fill="currentColor" /> {h}
                </span>
            ))}
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col gap-6">
        
        {/* Morning */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-amber-500 font-bold text-xs uppercase tracking-wider border-b border-amber-100 pb-1">
            <Sun size={14} /> 上午
          </div>
          <div className="space-y-1">
             {day.schedule.morning.map((act, i) => <ActivityItem key={i} activity={act} />)}
          </div>
        </div>

        {/* Afternoon */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sky-500 font-bold text-xs uppercase tracking-wider border-b border-sky-100 pb-1">
            <CloudSun size={14} /> 下午
          </div>
          <div className="space-y-1">
             {day.schedule.afternoon.map((act, i) => <ActivityItem key={i} activity={act} />)}
          </div>
        </div>

        {/* Evening */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-indigo-500 font-bold text-xs uppercase tracking-wider border-b border-indigo-100 pb-1">
            <Moon size={14} /> 晚上
          </div>
          <div className="space-y-1">
             {day.schedule.evening.map((act, i) => <ActivityItem key={i} activity={act} />)}
          </div>
        </div>

        {/* Dining & Drinks Section */}
        <div className="mt-4 pt-4 border-t border-slate-100 bg-slate-50/50 -mx-6 px-6 pb-4">
            <div className="flex items-center gap-2 mb-3 mt-2 text-sakura-600 font-bold text-sm">
                <Utensils size={14} /> 舌尖上的東京
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
                {day.dining.map((meal, i) => <MealItem key={i} meal={meal} />)}
            </div>

            <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-indigo-100 shadow-sm">
                 <div className="p-2 bg-indigo-50 rounded-full text-indigo-500">
                    <Coffee size={16} />
                 </div>
                 <div className="flex-1 min-w-0">
                     <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        推薦飲品
                     </div>
                     <div className="text-sm font-bold text-slate-800">{day.specialDrink.name}</div>
                     <div className="text-xs text-slate-500">{day.specialDrink.description}</div>
                 </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default DayCard;
