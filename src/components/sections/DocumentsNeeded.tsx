'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const documents = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Factura de luz',
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      </svg>
    ),
    title: 'Factura de gas',
    color: 'bg-orange-100 text-orange-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: 'Factura de teléfono',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Móvil de contacto',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Email de contacto',
    color: 'bg-purple-100 text-purple-600',
  },
];

const guarantees = [
  '¡Nunca bajamos la potencia, megas, etc.; sin tu autorización!',
  '¡Siempre mejoramos el precio y/o el servicio!',
  '¡Nunca te quedarás sin suministro / cobertura!',
  'La comercializadora se pondrá en contacto contigo para la autorización final',
];

export default function DocumentsNeeded() {
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
    <section ref={sectionRef} className="py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#87CEEB] mb-4">
            ¿Qué necesitamos?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-800 mb-6">
            Solo necesitamos <span className="gradient-text">esto</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Del actual titular solo necesitamos estos documentos para empezar a ahorrarte dinero
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Documents list */}
          <div className={`transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {documents.map((doc, index) => (
                <div
                  key={doc.title}
                  className={`bg-white rounded-xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className={`w-12 h-12 rounded-xl ${doc.color} flex items-center justify-center mb-3`}>
                    {doc.icon}
                  </div>
                  <p className="text-sm font-medium text-slate-700">{doc.title}</p>
                </div>
              ))}
            </div>

            {/* Guarantees */}
            <div className="mt-10 bg-gradient-to-br from-[#87CEEB]/10 to-[#5fb3d9]/10 rounded-2xl p-6 border border-[#87CEEB]/20">
              <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-[#87CEEB] text-white flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </span>
                Nosotros nos encargamos de todo
              </h3>
              <ul className="space-y-3">
                {guarantees.map((guarantee, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm text-slate-600"
                  >
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {guarantee}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image */}
          <div className={`relative transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#87CEEB]/20 to-transparent rounded-full" />

              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/assets/img/cherry-documents.png"
                  alt="Cerecilla gestiona todo por ti"
                  width={320}
                  height={320}
                  className="animate-float drop-shadow-2xl"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute bottom-10 left-0 bg-white rounded-xl shadow-xl p-4 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">Gestión completa</p>
                    <p className="text-xs text-slate-500">Sin papeleos</p>
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
