import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';

const groq = createOpenAI({
  baseURL: 'https://api.groq.com/openai/v1',
  apiKey: process.env.GROQ_API_KEY,
});

async function run() {
  const result = await streamText({
    model: groq('qwen/qwen3.6-27b'),
    system: `Test`,
    messages: [{ role: 'user', content: 'Hello' }],
  });
  
  const uiStream = result.toUIMessageStreamResponse ? result.toUIMessageStreamResponse() : null;
  const textStream = result.toTextStreamResponse ? result.toTextStreamResponse() : null;
  
  if (uiStream) {
    console.log("UI Stream Headers:", Object.fromEntries(uiStream.headers.entries()));
  }
  if (textStream) {
    console.log("Text Stream Headers:", Object.fromEntries(textStream.headers.entries()));
  }
}

run();
