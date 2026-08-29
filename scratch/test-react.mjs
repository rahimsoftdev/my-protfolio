import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { useChat } from '@ai-sdk/react';

function Test() {
  const chat = useChat();
  console.log("useChat keys:", Object.keys(chat));
  console.log("Type of append:", typeof chat.append);
  console.log("Type of sendMessage:", typeof chat.sendMessage);
  console.log("Type of handleSubmit:", typeof chat.handleSubmit);
  return React.createElement('div', null, 'Test');
}

renderToStaticMarkup(React.createElement(Test));
