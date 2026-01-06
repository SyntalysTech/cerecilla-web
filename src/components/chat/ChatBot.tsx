'use client';

import { useState, useRef, useEffect, FormEvent } from 'react';
import Image from 'next/image';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

type View = 'home' | 'faq' | 'chat';

const faqCategories = [
  {
    title: 'Sobre el servicio',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    questions: [
      { q: '¿Cómo funciona Cerecilla?', a: 'Analizamos tus facturas actuales, comparamos con todas las ofertas del mercado y te recomendamos la mejor opción. Si decides cambiar, nosotros gestionamos todo el proceso.' },
      { q: '¿Es realmente gratis?', a: '¡Sí! Nuestro servicio es 100% gratuito para ti. Las compañías nos pagan una comisión cuando realizas un cambio, así que no tienes que pagar nada.' },
      { q: '¿Cuánto puedo ahorrar?', a: 'De media, nuestros clientes ahorran entre 200€ y 400€ al año en sus facturas de luz, gas y telefonía combinadas.' },
    ],
  },
  {
    title: 'Proceso de cambio',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    questions: [
      { q: '¿Cuánto tarda el cambio?', a: 'El proceso de cambio suele tardar entre 15 y 20 días. Durante ese tiempo, no te quedarás sin servicio en ningún momento.' },
      { q: '¿Hay permanencia?', a: 'Depende de la oferta que elijas. Te informamos siempre de todas las condiciones antes de hacer cualquier cambio.' },
      { q: '¿Qué documentos necesito?', a: 'Solo necesitamos una factura reciente del servicio que quieres cambiar y tus datos de contacto. ¡Nosotros nos encargamos del resto!' },
    ],
  },
  {
    title: 'Servicios disponibles',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    questions: [
      { q: '¿Qué servicios comparáis?', a: 'Comparamos luz, gas, telefonía móvil, fibra óptica y seguros (hogar, coche, vida, salud). ¡Todo lo que necesitas para tu hogar!' },
      { q: '¿Trabajáis con todas las compañías?', a: 'Trabajamos con las principales compañías del mercado: Endesa, Iberdrola, Naturgy, Vodafone, Orange, Movistar, y muchas más.' },
    ],
  },
];

const chatBadgeMessages = [
  '¿Necesitas ayuda?',
  '¡Hola! 👋',
  '¿Quieres ahorrar?',
  'Estoy aquí 🍒',
  '¡Pregúntame!',
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<View>('home');
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [badgeMessageIndex, setBadgeMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (view === 'chat' && inputRef.current) {
      inputRef.current.focus();
    }
  }, [view]);

  // Typing animation effect for badge
  useEffect(() => {
    if (isOpen) return;

    const currentMessage = chatBadgeMessages[badgeMessageIndex];
    let charIndex = 0;
    setIsTyping(true);
    setDisplayedText('');

    // Type out the message
    const typeInterval = setInterval(() => {
      if (charIndex < currentMessage.length) {
        setDisplayedText(currentMessage.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);

        // Wait and then change to next message
        setTimeout(() => {
          setBadgeMessageIndex((prev) => (prev + 1) % chatBadgeMessages.length);
        }, 3000);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [badgeMessageIndex, isOpen]);

  const startChat = () => {
    if (messages.length === 0) {
      setMessages([
        {
          role: 'assistant',
          content: '¡Hola! Soy CerecIA, tu asistente virtual. 🍒\n\n¿En qué puedo ayudarte hoy?',
        },
      ]);
    }
    setView('chat');
  };

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
          content: 'Lo siento, ha ocurrido un error. Por favor, intenta de nuevo o llámanos al +34 666 207 398.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => setView('home'), 300);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50
          w-14 h-14 sm:w-16 sm:h-16 rounded-full
          bg-gradient-to-br from-[#8B0000] to-[#a52a2a]
          shadow-lg shadow-[#8B0000]/30
          flex items-center justify-center
          transition-all duration-300
          hover:scale-110 hover:shadow-xl hover:shadow-[#8B0000]/40
          ${!isOpen && 'animate-pulse'}
        `}
        aria-label={isOpen ? 'Cerrar chat' : 'Abrir chat'}
      >
        {isOpen ? (
          <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <Image
            src="/assets/img/chatbot-aatar.png"
            alt="CerecIA"
            width={44}
            height={44}
            className="drop-shadow-lg w-10 h-10 sm:w-11 sm:h-11"
          />
        )}
      </button>

      {/* Badge */}
      {!isOpen && (
        <div className="fixed bottom-[5.5rem] sm:bottom-[6rem] right-4 sm:right-6 z-40 animate-fade-in">
          <div className="bg-white rounded-full px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg text-xs sm:text-sm font-medium text-slate-700 flex items-center gap-1.5 sm:gap-2 min-w-[120px] sm:min-w-[140px]">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
            <span className="inline-block">
              {displayedText}
              {isTyping && <span className="animate-pulse">|</span>}
            </span>
          </div>
        </div>
      )}

      {/* Chat Window */}
      <div
        className={`
          fixed bottom-24 right-6 z-50
          w-[calc(100vw-3rem)] sm:w-[400px]
          bg-white rounded-2xl
          shadow-2xl shadow-black/20
          overflow-hidden
          transition-all duration-300 origin-bottom-right
          ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}
        `}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#8B0000] to-[#a52a2a] p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full bg-white/20 overflow-hidden">
                <Image
                  src="/assets/img/chatbot-aatar.png"
                  alt="CerecIA"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">CerecIA</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-white/80">Siempre disponible</span>
                </div>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="h-[450px] flex flex-col">
          {view === 'home' && (
            <div className="flex-1 overflow-y-auto">
              {/* Welcome */}
              <div className="p-6 text-center border-b border-slate-100">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#8B0000]/10 to-[#a52a2a]/10 flex items-center justify-center">
                  <Image
                    src="/assets/img/chatbot-aatar.png"
                    alt="CerecIA"
                    width={48}
                    height={48}
                  />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">¡Hola! Soy CerecIA 🍒</h4>
                <p className="text-slate-500 text-sm">Tu asistente virtual de Cerecilla. Estoy aquí para ayudarte a ahorrar.</p>
              </div>

              {/* Options */}
              <div className="p-4 space-y-3">
                <button
                  onClick={startChat}
                  className="w-full p-4 rounded-xl bg-gradient-to-r from-[#8B0000] to-[#a52a2a] text-white font-semibold flex items-center justify-between group hover:shadow-lg hover:shadow-[#8B0000]/20 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <span className="block font-semibold">Chatear con CerecIA</span>
                      <span className="text-xs text-white/70">Respuesta instantánea con IA</span>
                    </div>
                  </div>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                <button
                  onClick={() => setView('faq')}
                  className="w-full p-4 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#87CEEB]/20 flex items-center justify-center text-[#5fb3d9]">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <span className="block font-semibold">Preguntas frecuentes</span>
                      <span className="text-xs text-slate-500">Encuentra respuestas rápidas</span>
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                <a
                  href="tel:+34666207398"
                  className="w-full p-4 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <span className="block font-semibold">Llamar ahora</span>
                      <span className="text-xs text-slate-500">+34 666 207 398</span>
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          )}

          {view === 'faq' && (
            <div className="flex-1 overflow-y-auto">
              {/* Back button */}
              <button
                onClick={() => setView('home')}
                className="w-full p-4 border-b border-slate-100 flex items-center gap-2 text-slate-600 hover:bg-slate-50 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="font-medium">Volver</span>
              </button>

              {/* FAQ Categories */}
              <div className="p-4 space-y-4">
                {faqCategories.map((category) => (
                  <div key={category.title} className="space-y-2">
                    <div className="flex items-center gap-2 text-slate-800 font-semibold">
                      <span className="text-[#8B0000]">{category.icon}</span>
                      {category.title}
                    </div>
                    <div className="space-y-2">
                      {category.questions.map((faq) => (
                        <div key={faq.q} className="rounded-xl bg-slate-50 overflow-hidden">
                          <button
                            onClick={() => setExpandedFaq(expandedFaq === faq.q ? null : faq.q)}
                            className="w-full p-3 flex items-center justify-between text-left hover:bg-slate-100 transition-colors"
                          >
                            <span className="text-sm font-medium text-slate-700">{faq.q}</span>
                            <svg
                              className={`w-4 h-4 text-slate-400 transition-transform ${expandedFaq === faq.q ? 'rotate-180' : ''}`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          {expandedFaq === faq.q && (
                            <div className="px-3 pb-3">
                              <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Still need help */}
              <div className="p-4 border-t border-slate-100">
                <button
                  onClick={startChat}
                  className="w-full p-3 rounded-xl bg-[#8B0000] text-white font-medium hover:bg-[#a52a2a] transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  ¿No encuentras tu respuesta? Chatea conmigo
                </button>
              </div>
            </div>
          )}

          {view === 'chat' && (
            <>
              {/* Back button */}
              <button
                onClick={() => setView('home')}
                className="p-3 border-b border-slate-100 flex items-center gap-2 text-slate-600 hover:bg-slate-50 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="font-medium text-sm">Volver al menú</span>
              </button>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {message.role === 'assistant' && (
                      <div className="w-8 h-8 rounded-full bg-[#8B0000]/10 flex-shrink-0 mr-2 overflow-hidden">
                        <Image
                          src="/assets/img/chatbot-aatar.png"
                          alt="CerecIA"
                          width={32}
                          height={32}
                        />
                      </div>
                    )}
                    <div
                      className={`
                        max-w-[75%] px-4 py-3 rounded-2xl
                        ${message.role === 'user'
                          ? 'bg-[#8B0000] text-white rounded-br-sm'
                          : 'bg-slate-100 text-slate-700 rounded-bl-sm'
                        }
                      `}
                    >
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">
                        {message.content.split(/(\*\*[^*]+\*\*)/).map((part, i) => {
                          if (part.startsWith('**') && part.endsWith('**')) {
                            const boldText = part.slice(2, -2);
                            return (
                              <strong key={i} className={message.role === 'user' ? 'font-bold' : 'font-bold text-[#8B0000]'}>
                                {boldText}
                              </strong>
                            );
                          }
                          return part;
                        })}
                      </p>
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex justify-start">
                    <div className="w-8 h-8 rounded-full bg-[#8B0000]/10 flex-shrink-0 mr-2 overflow-hidden">
                      <Image
                        src="/assets/img/chatbot-aatar.png"
                        alt="CerecIA"
                        width={32}
                        height={32}
                      />
                    </div>
                    <div className="bg-slate-100 rounded-2xl rounded-bl-sm px-4 py-3">
                      <div className="flex gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Quick Actions */}
              {messages.length === 1 && (
                <div className="px-4 pb-2 flex gap-2 flex-wrap">
                  {['¿Cómo funciona?', '¿Es gratis?', 'Quiero ahorrar'].map((q) => (
                    <button
                      key={q}
                      onClick={() => {
                        setInput(q);
                        inputRef.current?.focus();
                      }}
                      className="text-xs px-3 py-1.5 rounded-full bg-[#8B0000]/10 text-[#8B0000] hover:bg-[#8B0000]/20 transition-colors font-medium"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              {/* Input */}
              <form onSubmit={handleSubmit} className="p-3 border-t border-slate-100">
                <div className="flex gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Escribe tu mensaje..."
                    disabled={isLoading}
                    className="flex-1 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#8B0000]/30 focus:border-[#8B0000] disabled:opacity-50 transition-all"
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || isLoading}
                    className="w-12 h-12 rounded-xl bg-[#8B0000] text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#a52a2a] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </form>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2 bg-slate-50 border-t border-slate-100 text-center">
          <p className="text-xs text-slate-400">
            Powered by <span className="font-semibold text-[#8B0000]">CerecIA</span> 🍒
          </p>
        </div>
      </div>
    </>
  );
}
