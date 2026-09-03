import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';

const groq = createOpenAI({
  baseURL: 'https://api.groq.com/openai/v1',
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req) {
  try {
    const { messages } = await req.json();

    const result = await streamText({
      model: groq('qwen/qwen3.6-27b'),
      system: `You are an AI assistant integrated into Md Rahim's professional web developer portfolio.
Md Rahim is a senior full-stack developer and is currently an active job seeker open to new opportunities.
He specializes in modern web technologies including React, Next.js, Node.js, MongoDB, JavaScript, and Tailwind CSS.
Answer questions accurately based on this context. Keep your responses concise, friendly, and professional.
If someone asks who you are, state that you are Md Rahim's personal portfolio AI assistant. Be enthusiastic about his impressive skills and strong availability for work!`,
      messages,
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("Chat API Error:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
