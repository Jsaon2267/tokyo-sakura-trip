
import React from 'react';
import { Sun, Moon, CloudSun, MapPin, Utensils, Coffee, Star, Lightbulb, CheckCircle2 } from 'lucide-react';
import { ItineraryDay, Activity, Meal } from '../types';

interface DayCardProps {
  day: ItineraryDay;
}

const ActivityItem: React.FC<{ activity: Activity }> = ({ activity }) => (
  <div className="flex flex-col md:flex-row gap-4 items-start py-4 border-l-2 border-slate-200 pl-4 hover:border-sakura-300 transition-all group">
    <div className="flex-1 min-w-0">
      <h5 className="font-bold text-slate-800 text-base mb-1 group-hover:text-sakura-600 transition-colors">
        {activity.name}
      </h5>
      <p className="text-sm text-slate-600 leading-relaxed mb-2">{activity.description}</p>
      
      {/* Expanded Details / Tips Section */}
      {activity.tips && activity.tips.length > 0 && (
        <div className="mt-2 bg-amber-50 rounded-lg p-3 border border-amber-100">
          <div className="flex items-center gap-1.5 text-amber-600 text-xs font-bold mb-2 uppercase tracking-wide">
            <Lightbulb size={12} />
            <span>達人筆記</span>
          </div>
          <ul className="space-y-1.5">
            {activity.tips.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                <CheckCircle2 size={12} className="text-amber-400 mt-0.5 shrink-0" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </div>
);

const MealItem: React.FC<{ meal: Meal }> = ({ meal }) => (
  <div className="flex flex-col bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-sakura-200 transition-all h-full">
    <div className="flex items-center gap-2 mb-2">
      <span className="text-[10px] font-bold text-white bg-sakura-400 px-2 py-0.5 rounded-full">{meal.type}</span>
    </div>
    <h4 className="font-bold text-slate-800 text-sm mb-1">{meal.name}</h4>
    <p className="text-xs text-slate-500 leading-relaxed">{meal.description}</p>
  </div>
);

const DayCard: React.FC<DayCardProps> = ({ day }) => {
  return (
    <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100 flex flex-col h-full animate-in fade-in zoom-in-95 duration-500">
      
      {/* Header Area */}
      <div className="relative p-8 bg-slate-900 text-white overflow-hidden">
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-sakura-400 to-sakura-600 rounded-full blur-3xl opacity-20 -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-indigo-500 to-blue-500 rounded-full blur-3xl opacity-20 -ml-10 -mb-10"></div>

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
              <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold tracking-wider border border-white/10">{day.date}</span>
              <div className="flex items-center gap-1 text-white/60 text-xs">
                  <MapPin size={12}/> 東京
              </div>
          </div>
          <h3 className="text-3xl md:text-4xl font-extrabold mb-2 tracking-tight">
             {day.title}
          </h3>
          <p className="text-sakura-200 text-sm font-medium tracking-wide uppercase mb-6">{day.theme}</p>
          
          {/* Highlights Pills */}
          <div className="flex flex-wrap gap-2">
              {day.highlights.map((h, i) => (
                  <span key={i} className="text-xs font-medium bg-white/10 hover:bg-white/20 transition-colors px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-1.5">
                      <Star size={10} className="text-yellow-400" fill="currentColor" /> {h}
                  </span>
              ))}
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8 flex-1 flex flex-col gap-8">
        
        {/* Morning Section */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-amber-500 font-bold text-sm uppercase tracking-wider border-b border-amber-100 pb-2">
            <Sun size={18} /> 上午行程
          </div>
          <div className="space-y-2">
             {day.schedule.morning.map((act, i) => <ActivityItem key={i} activity={act} />)}
          </div>
        </div>

        {/* Afternoon Section */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sky-500 font-bold text-sm uppercase tracking-wider border-b border-sky-100 pb-2">
            <CloudSun size={18} /> 下午行程
          </div>
          <div className="space-y-2">
             {day.schedule.afternoon.map((act, i) => <ActivityItem key={i} activity={act} />)}
          </div>
        </div>

        {/* Evening Section */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-indigo-500 font-bold text-sm uppercase tracking-wider border-b border-indigo-100 pb-2">
            <Moon size={18} /> 晚上行程
          </div>
          <div className="space-y-2">
             {day.schedule.evening.map((act, i) => <ActivityItem key={i} activity={act} />)}
          </div>
        </div>

        {/* Dining & Drinks Section - Enhanced Layout */}
        <div className="mt-6 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-2 mb-4 text-sakura-600 font-bold text-sm uppercase tracking-wider">
                <Utensils size={16} /> 舌尖上的東京
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                {day.dining.map((meal, i) => <MealItem key={i} meal={meal} />)}
            </div>

            {/* Special Drink Card */}
            <div className="relative overflow-hidden bg-gradient-to-r from-indigo-50 to-blue-50 p-4 rounded-xl border border-indigo-100 flex items-center gap-4">
                 <div className="p-3 bg-white rounded-full text-indigo-500 shadow-sm shrink-0">
                    <Coffee size={20} />
                 </div>
                 <div className="relative z-10 flex-1">
                     <div className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider mb-1">
                        每日一飲
                     </div>
                     <div className="font-bold text-slate-800 text-sm">{day.specialDrink.name}</div>
                     <div className="text-xs text-slate-500">{day.specialDrink.description}</div>
                 </div>
                 <div className="absolute right-0 top-0 w-32 h-32 bg-indigo-200/20 rounded-full blur-2xl -mr-10 -mt-10"></div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default DayCard;
