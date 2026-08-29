import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';

const groq = createOpenAI({
  baseURL: 'https://api.groq.com/openai/v1',
  apiKey: process.env.GROQ_API_KEY,
});

async function run() {
  try {
    const result = await streamText({
      model: groq('qwen/qwen3.6-27b'),
      system: `Test system`,
      messages: [{ role: 'user', content: 'Hello' }],
    });
    
    console.log("Is toDataStreamResponse a function?", typeof result.toDataStreamResponse);
    console.log("Is toAIStreamResponse a function?", typeof result.toAIStreamResponse);
    console.log("Is toTextStreamResponse a function?", typeof result.toTextStreamResponse);
    
    const proto = Object.getPrototypeOf(result);
    console.log("Prototype methods:", Object.getOwnPropertyNames(proto));
  } catch (error) {
    console.error("Error occurred:");
    console.error(error);
  }
}

run();
