
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { ITINERARY_DATA } from '../constants';

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

// Construct a system prompt that includes the specific itinerary context
const SYSTEM_INSTRUCTION = `
You are an expert Tokyo Travel Concierge named "Sakura-san" (櫻花小姐).
You are assisting a user who has a confirmed 7-day detailed itinerary for mid-April.

Here is the user's detailed itinerary structure (including specific activities, meals, and drinks):
${JSON.stringify(ITINERARY_DATA, null, 2)}

Your Goal:
- **ALWAYS Reply in Traditional Chinese (繁體中文).**
- Answer questions specifically related to this schedule.
- The user now has specific restaurant recommendations in the data. If they ask about food, refer to those first, but feel free to suggest alternatives nearby.
- Note that Tokyo Skytree is now included on Day 2.
- Provide logistical advice (train lines, best exits, travel times between the specific sub-activities listed).
- Suggest cultural etiquette tips.
- Be concise, polite, and enthusiastic.
- If asked about "Grounding" or "Real-time" info, explain that you are using your internal knowledge base.

Tone: Professional, warm, and helpful. Use emoji occasionally 🌸.
`;

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<AsyncIterable<string>> => {
  const chat = getChatSession();
  
  try {
    const responseStream = await chat.sendMessageStream({ message });
    
    // Create an async generator to yield text chunks
    async function* streamGenerator() {
      for await (const chunk of responseStream) {
        const c = chunk as GenerateContentResponse;
        if (c.text) {
          yield c.text;
        }
      }
    }

    return streamGenerator();
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
