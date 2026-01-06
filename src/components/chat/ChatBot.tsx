'use client';

import { useState, useRef, useEffect, FormEvent } from 'react';
import Image from 'next/image';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: '¡Hola! Soy Cherry, tu asistente virtual de Cerecilla. ¿En qué puedo ayudarte hoy? Puedo resolver tus dudas sobre nuestros servicios de comparación de luz, gas, telefonía, fibra y seguros.',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, { role: 'user', content: userMessage }].slice(-10),
        }),
      });

      if (!response.ok) throw new Error('Failed to fetch');

      const data = await response.json();
      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Lo siento, ha ocurrido un error. Por favor, intenta de nuevo o contacta con nosotros al +34 666 207 398.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickQuestions = [
    '¿Cómo funciona el servicio?',
    '¿Es realmente gratis?',
    '¿Qué servicios comparáis?',
    'Quiero ahorrar en luz',
  ];

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          fixed bottom-6 right-6 z-50
          w-16 h-16 rounded-full
          bg-gradient-to-br from-[#87CEEB] to-[#5fb3d9]
          shadow-lg shadow-[#87CEEB]/30
          flex items-center justify-center
          transition-all duration-500
          hover:scale-110 hover:shadow-xl hover:shadow-[#87CEEB]/40
          ${isOpen ? 'rotate-0' : 'animate-bounce'}
        `}
        style={{ animationDuration: '2s' }}
        aria-label={isOpen ? 'Cerrar chat' : 'Abrir chat'}
      >
        {isOpen ? (
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <Image
            src="/assets/img/cherry-footer.png"
            alt="Chat"
            width={40}
            height={40}
            className="drop-shadow-lg"
          />
        )}
      </button>

      {/* Chat Window */}
      <div
        className={`
          fixed bottom-24 right-6 z-50
          w-[calc(100vw-3rem)] sm:w-96
          max-h-[70vh]
          bg-white rounded-3xl
          shadow-2xl shadow-black/20
          flex flex-col
          transition-all duration-500 origin-bottom-right
          ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}
        `}
      >
        {/* Header */}
        <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-[#87CEEB] to-[#5fb3d9] rounded-t-3xl">
          <div className="relative w-12 h-12 rounded-full bg-white/20 p-1">
            <Image
              src="/assets/img/cherry-footer.png"
              alt="Cherry"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-white">Cherry</h3>
            <p className="text-xs text-white/80">Asistente de Cerecilla</p>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-white/80">Online</span>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px] max-h-[400px]">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`
                  max-w-[80%] px-4 py-3 rounded-2xl
                  ${message.role === 'user'
                    ? 'bg-gradient-to-br from-[#87CEEB] to-[#5fb3d9] text-white rounded-br-md'
                    : 'bg-slate-100 text-slate-700 rounded-bl-md'
                  }
                `}
              >
                <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-slate-100 rounded-2xl rounded-bl-md px-4 py-3">
                <div className="flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Questions */}
        {messages.length === 1 && (
          <div className="px-4 pb-2">
            <p className="text-xs text-slate-400 mb-2">Preguntas frecuentes:</p>
            <div className="flex flex-wrap gap-2">
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setInput(question);
                    inputRef.current?.focus();
                  }}
                  className="text-xs px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 hover:bg-[#87CEEB]/20 hover:text-[#5fb3d9] transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-4 border-t border-slate-100">
          <div className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu mensaje..."
              disabled={isLoading}
              className="
                flex-1 px-4 py-3 rounded-xl
                bg-slate-50 border border-slate-200
                text-slate-800 text-sm
                placeholder-slate-400
                focus:outline-none focus:ring-2 focus:ring-[#87CEEB]/50 focus:border-[#87CEEB]
                disabled:opacity-50
                transition-all
              "
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="
                w-12 h-12 rounded-xl
                bg-gradient-to-br from-[#87CEEB] to-[#5fb3d9]
                text-white
                flex items-center justify-center
                disabled:opacity-50 disabled:cursor-not-allowed
                hover:shadow-lg hover:shadow-[#87CEEB]/30
                transition-all
              "
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
