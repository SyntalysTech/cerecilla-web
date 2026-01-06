'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    id: 'luz',
    icon: 'icon-luz.png',
    title: 'Luz',
    description: 'Compara y ahorra en tu factura de electricidad con las mejores tarifas del mercado.',
    color: '#FFD700',
  },
  {
    id: 'gas',
    icon: 'icon-gas.png',
    title: 'Gas',
    description: 'Encuentra la tarifa de gas natural que mejor se adapte a tu consumo.',
    color: '#FF6B6B',
  },
  {
    id: 'telefonia',
    icon: 'icon-telefonia.png',
    title: 'Telefonía',
    description: 'Las mejores ofertas en telefonía móvil con los operadores líderes.',
    color: '#4ECDC4',
  },
  {
    id: 'fibra',
    icon: 'icon-fibra.png',
    title: 'Fibra',
    description: 'Conexión de alta velocidad al mejor precio para tu hogar o negocio.',
    color: '#87CEEB',
  },
  {
    id: 'seguros',
    icon: 'icon-seguros.png',
    title: 'Seguros',
    description: 'Protege lo que más importa con las mejores coberturas del mercado.',
    color: '#9B59B6',
  },
];

export default function ServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
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
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#87CEEB] mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-800">
            Todo lo que necesitas,{' '}
            <span className="gradient-text">en un solo lugar</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className={`relative transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border border-slate-200/50" />
                <div className="absolute w-48 h-48 md:w-60 md:h-60 rounded-full border border-slate-200/30" />
                <div className="absolute w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-[#87CEEB]/20 to-transparent" />
              </div>

              {services.map((service, index) => {
                const angle = (index * 72 - 90) * (Math.PI / 180);
                const radius = 140;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                const isActive = index === activeIndex;

                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveIndex(index)}
                    className={`absolute left-1/2 top-1/2 transition-all duration-500 ${
                      isActive ? 'scale-125 z-10' : 'scale-100 z-0'
                    }`}
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                  >
                    <div className={`
                      w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white shadow-lg
                      flex items-center justify-center
                      transition-all duration-500
                      ${isActive ? 'shadow-xl shadow-[#87CEEB]/30' : 'shadow-slate-200/50'}
                    `}>
                      <Image
                        src={`/assets/img/${service.icon}`}
                        alt={service.title}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                  </button>
                );
              })}

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <Image
                  src="/assets/img/cherry-how-it-works.png"
                  alt="Cerecilla"
                  width={100}
                  height={100}
                  className="animate-float"
                />
              </div>
            </div>
          </div>

          <div className={`transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="space-y-6">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`
                    relative p-6 rounded-2xl cursor-pointer
                    transition-all duration-500
                    ${index === activeIndex
                      ? 'bg-gradient-to-r from-slate-50 to-white shadow-lg'
                      : 'hover:bg-slate-50/50'
                    }
                  `}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className={`
                    absolute left-0 top-0 bottom-0 w-1 rounded-full
                    transition-all duration-500
                    ${index === activeIndex ? 'bg-[#87CEEB]' : 'bg-transparent'}
                  `} />

                  <div className="flex items-start gap-4">
                    <div className={`
                      w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0
                      transition-all duration-500
                      ${index === activeIndex
                        ? 'bg-gradient-to-br from-[#87CEEB] to-[#5fb3d9]'
                        : 'bg-slate-100'
                      }
                    `}>
                      <Image
                        src={`/assets/img/${service.icon}`}
                        alt={service.title}
                        width={28}
                        height={28}
                        className={`object-contain transition-all duration-500 ${
                          index === activeIndex ? 'brightness-0 invert' : ''
                        }`}
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-800 mb-1">
                        {service.title}
                      </h3>
                      <p className={`
                        text-slate-500 text-sm leading-relaxed
                        transition-all duration-500
                        ${index === activeIndex ? 'opacity-100' : 'opacity-70'}
                      `}>
                        {service.description}
                      </p>
                    </div>

                    <Link
                      href="/servicios"
                      className={`
                        w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0
                        transition-all duration-500
                        ${index === activeIndex
                          ? 'bg-[#87CEEB] text-white'
                          : 'bg-slate-100 text-slate-400'
                        }
                      `}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
