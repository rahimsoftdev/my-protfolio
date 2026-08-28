"use client";

import { useState, useRef, useEffect } from "react";
import { useChat } from "@ai-sdk/react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCommentDots, FaTimes, FaPaperPlane } from "react-icons/fa";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();
  const messagesEndRef = useRef(null);

  // Auto scroll to bottom
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-80 sm:w-96 h-[500px] max-h-[80vh] z-50 bg-brand-card/90 backdrop-blur-xl border border-brand-card-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-brand-violet/10 border-b border-brand-card-border p-4 flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-lg text-text-primary">AI Assistant</h3>
                <p className="text-xs text-text-secondary">Ask me about Abdur Rahim!</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-text-secondary hover:text-text-primary transition-colors"
              >
                <FaTimes size={18} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 flex flex-col">
              {messages.length === 0 && (
                <div className="flex-1 flex flex-col items-center justify-center text-center opacity-70 space-y-3">
                  <div className="w-16 h-16 rounded-full bg-brand-violet/20 flex items-center justify-center">
                    <FaCommentDots size={28} className="text-brand-violet" />
                  </div>
                  <p className="text-sm text-text-secondary">
                    Hi! I'm here to answer questions about Abdur's skills and experience as a job-seeking developer.
                  </p>
                </div>
              )}
              
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                      m.role === "user"
                        ? "bg-brand-violet text-white rounded-br-sm shadow-md"
                        : "bg-white/5 border border-white/5 text-text-primary rounded-bl-sm"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[85%] rounded-2xl px-4 py-3 text-sm bg-white/5 border border-white/5 text-text-primary rounded-bl-sm flex space-x-1 items-center">
                    <span className="w-1.5 h-1.5 bg-brand-violet rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-1.5 h-1.5 bg-brand-violet rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-1.5 h-1.5 bg-brand-violet rounded-full animate-bounce"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="p-3 border-t border-brand-card-border bg-brand-dark/50">
              <div className="flex items-center space-x-2">
                <input
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Ask a question..."
                  className="flex-1 bg-white/5 border border-brand-card-border rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-violet/50 text-text-primary placeholder:text-text-secondary transition-all"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input?.trim()}
                  className="bg-brand-violet hover:bg-brand-violet-hover text-white p-3 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-brand-violet/20"
                >
                  <FaPaperPlane size={14} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-brand-violet hover:bg-brand-violet-hover text-white w-14 h-14 rounded-full shadow-xl shadow-brand-violet/20 transition-all hover:scale-110 active:scale-95 flex items-center justify-center overflow-hidden"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isOpen ? "close" : "open"}
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? <FaTimes size={24} /> : <FaCommentDots size={24} />}
          </motion.div>
        </AnimatePresence>
      </button>
    </>
  );
}
