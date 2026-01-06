'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';

const benefits = [
  {
    title: '¡Porque el cliente es tuyo!',
    description: 'Respetamos tu relación comercial existente',
  },
  {
    title: '¡Por la confianza!',
    description: 'Valoramos la confianza que depositas en nosotros',
  },
  {
    title: '¡Relación WIN – WIN – WIN!',
    description: 'Todos ganamos en esta colaboración',
  },
  {
    title: '¡Ganamos todos!',
    description: 'El cliente ahorra, tú ganas comisión, nosotros crecemos',
  },
];

export default function RealEstateSection() {
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
    <section ref={sectionRef} className="py-24 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-[#87CEEB]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-[#87CEEB]/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#87CEEB] mb-4">
              Para inmobiliarias
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              ¿Por qué si eres inmobiliaria{' '}
              <span className="text-[#87CEEB]">te pagamos</span>?
            </h2>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className={`flex items-start gap-4 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className="w-6 h-6 rounded-full bg-[#87CEEB] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
                    <p className="text-slate-400 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-slate-300 mb-8 leading-relaxed">
              Ya que el cliente empieza a ahorrar desde ya, y tanto él como vosotros os despreocupáis de todo.
              <span className="block mt-2 text-[#87CEEB] font-semibold">
                ¡Y a empezar a ahorrar cada vez más en tu factura de luz, gas, teléfono, seguros y alarma!
              </span>
            </p>

            <Button href="/colaboradores" variant="primary" size="lg">
              Quiero ser colaborador
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </div>

          {/* Image */}
          <div className={`relative transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#87CEEB]/20 to-transparent rounded-full" />

              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/assets/img/cherry-business.png"
                  alt="Cerecilla para inmobiliarias"
                  width={350}
                  height={350}
                  className="animate-float drop-shadow-2xl"
                />
              </div>

              {/* Floating cards */}
              <div className="absolute top-10 right-0 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Comisiones</p>
                    <p className="text-xs text-slate-300">Por cada cliente</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-10 left-0 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#87CEEB]/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#87CEEB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">+100</p>
                    <p className="text-xs text-slate-300">Colaboradores</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
