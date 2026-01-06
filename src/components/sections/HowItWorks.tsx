'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const steps = [
  {
    number: '01',
    title: 'Cuéntanos tu situación',
    description: 'Analizamos tu consumo actual y tus necesidades específicas para ofrecerte las mejores opciones.',
  },
  {
    number: '02',
    title: 'Comparamos por ti',
    description: 'Buscamos entre todas las ofertas del mercado para encontrar la que mejor se adapta a ti.',
  },
  {
    number: '03',
    title: 'Te presentamos opciones',
    description: 'Te mostramos las mejores alternativas de forma clara y transparente, sin letra pequeña.',
  },
  {
    number: '04',
    title: 'Gestionamos el cambio',
    description: 'Nos encargamos de todo el proceso de cambio para que tú no tengas que hacer nada.',
  },
];

export default function HowItWorks() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#87CEEB]/30 to-transparent" />

      <div className="absolute inset-0 dot-pattern opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`text-center mb-16 md:mb-20 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#87CEEB] mb-4">
            Cómo funciona
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-800 mb-6">
            Ahorrar es <span className="gradient-text">más fácil</span> de lo que piensas
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            En solo 4 pasos te ayudamos a optimizar tus facturas sin complicaciones
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`relative order-2 lg:order-1 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="relative">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`
                    relative pl-20 pb-12 last:pb-0
                    transition-all duration-500
                    ${index <= activeStep ? 'opacity-100' : 'opacity-40'}
                  `}
                >
                  <div className="absolute left-0 top-0 flex items-center justify-center">
                    <div className={`
                      w-14 h-14 rounded-2xl flex items-center justify-center
                      font-display font-bold text-lg
                      transition-all duration-500
                      ${index === activeStep
                        ? 'bg-gradient-to-br from-[#87CEEB] to-[#5fb3d9] text-white shadow-lg shadow-[#87CEEB]/30'
                        : index < activeStep
                          ? 'bg-[#87CEEB]/20 text-[#87CEEB]'
                          : 'bg-slate-100 text-slate-400'
                      }
                    `}>
                      {step.number}
                    </div>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="absolute left-7 top-14 w-px h-12 bg-gradient-to-b from-[#87CEEB]/30 to-transparent" />
                  )}

                  <div>
                    <h3 className={`
                      text-xl font-semibold mb-2 transition-all duration-500
                      ${index === activeStep ? 'text-slate-800' : 'text-slate-600'}
                    `}>
                      {step.title}
                    </h3>
                    <p className={`
                      text-slate-500 leading-relaxed transition-all duration-500
                      ${index === activeStep ? 'opacity-100' : 'opacity-70'}
                    `}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`relative order-1 lg:order-2 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#87CEEB]/10 via-transparent to-[#5fb3d9]/10 rounded-full" />

              <div className="absolute inset-8 border border-dashed border-[#87CEEB]/20 rounded-full animate-spin" style={{ animationDuration: '30s' }} />

              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/assets/img/cherry-how-it-works.png"
                  alt="Cerecilla te ayuda"
                  width={280}
                  height={280}
                  className="animate-float drop-shadow-2xl"
                />
              </div>

              <div className="absolute top-1/4 left-0 sm:-left-4 bg-white rounded-lg sm:rounded-xl shadow-lg p-2.5 sm:p-4 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-md sm:rounded-lg bg-green-100 flex items-center justify-center">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-700">100% Gratis</span>
                </div>
              </div>

              <div className="absolute bottom-1/4 right-0 sm:-right-4 bg-white rounded-lg sm:rounded-xl shadow-lg p-2.5 sm:p-4 animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-md sm:rounded-lg bg-[#87CEEB]/20 flex items-center justify-center">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#87CEEB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-700">Sin compromiso</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
