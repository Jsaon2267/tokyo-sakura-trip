
export interface Activity {
  name: string;
  description: string;
  duration?: string;
}

export interface Meal {
  type: '早餐' | '午餐' | '晚餐';
  name: string;
  description: string;
}

export interface Drink {
  name: string;
  description: string;
}

export interface DaySchedule {
  morning: Activity[];
  afternoon: Activity[];
  evening: Activity[];
}

export interface ItineraryDay {
  id: string;
  date: string;
  title: string;
  theme: string;
  schedule: DaySchedule;
  dining: Meal[];
  specialDrink: Drink;
  highlights: string[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isStreaming?: boolean;
}
