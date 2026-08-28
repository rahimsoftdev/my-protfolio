import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';

const groq = createOpenAI({
  baseURL: 'https://api.groq.com/openai/v1',
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req) {
  try {
    const { messages } = await req.json();

    const result = streamText({
      model: groq('llama3-8b-8192'),
      system: `You are an AI assistant integrated into Abdur Rahim Bin Bakkar's professional web developer portfolio.
Abdur is a senior full-stack developer and is currently a job seeker.
Answer questions accurately based on this context. Keep your responses concise, friendly, and professional.
If someone asks who you are, state that you are Abdur Rahim's personal portfolio AI assistant. Be enthusiastic about his skills and availability for work!`,
      messages,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error("Chat API Error:", error);
    return new Response(JSON.stringify({ error: "Failed to generate response" }), { status: 500 });
  }
}
