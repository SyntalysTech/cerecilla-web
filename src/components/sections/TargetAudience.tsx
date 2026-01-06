'use client';

import { useEffect, useRef, useState } from 'react';

const audiences = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Particulares',
    description: 'Familias y personas que buscan reducir sus gastos en servicios básicos del hogar.',
    features: ['Ahorro inmediato', 'Gestión sencilla', 'Sin complicaciones'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Empresas',
    description: 'Pequeñas, medianas y grandes empresas que desean optimizar sus costes operativos.',
    features: ['Reducción de costes', 'Análisis detallado', 'Soporte empresarial'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Autónomos',
    description: 'Profesionales independientes que necesitan optimizar sus gastos profesionales.',
    features: ['Tarifas especiales', 'Flexibilidad total', 'Asesoramiento fiscal'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Comunidades',
    description: 'Comunidades de propietarios que buscan ahorrar en servicios comunitarios.',
    features: ['Gestión centralizada', 'Ahorro conjunto', 'Administración fácil'],
  },
];

export default function TargetAudience() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#87CEEB] mb-4">
            A quién nos dirigimos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-800 mb-6">
            Soluciones para <span className="gradient-text">todos</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Ofrecemos nuestros servicios tanto a particulares como a empresas, autónomos y comunidades
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {audiences.map((audience, index) => (
            <div
              key={audience.title}
              className={`group bg-slate-50 hover:bg-white rounded-2xl p-6 lg:p-8 border border-slate-100 hover:border-[#87CEEB]/30 hover:shadow-xl hover:shadow-[#87CEEB]/10 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#87CEEB] to-[#5fb3d9] text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {audience.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {audience.title}
              </h3>

              <p className="text-slate-500 text-sm leading-relaxed mb-5">
                {audience.description}
              </p>

              <ul className="space-y-2">
                {audience.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
