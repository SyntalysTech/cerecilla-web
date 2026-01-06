'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import HeroSection from '@/components/sections/HeroSection';
import CTASection from '@/components/sections/CTASection';
import Button from '@/components/ui/Button';

const benefits = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Comisiones atractivas',
    description: 'Obtén comisiones competitivas por cada cliente que nos refieras. Sin límites de ganancias.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Soporte dedicado',
    description: 'Tendrás un gestor de cuenta personal que te ayudará en todo lo que necesites.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    title: 'Herramientas profesionales',
    description: 'Acceso a un panel de control donde podrás hacer seguimiento de tus clientes y comisiones.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Sin límites',
    description: 'No hay tope de clientes ni de ganancias. Cuanto más crezcas, más ganarás.',
  },
];

const profiles = [
  {
    title: 'Administradores de fincas',
    description: 'Ofrece un servicio de valor añadido a tus comunidades de vecinos y genera ingresos extra.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Agentes inmobiliarios',
    description: 'Complementa tus servicios de compraventa con asesoramiento en suministros del hogar.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'Gestorías y asesorías',
    description: 'Amplía tu cartera de servicios y ayuda a tus clientes a optimizar sus gastos fijos.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Profesionales independientes',
    description: 'Si tienes contacto con particulares y empresas, esta es tu oportunidad de generar ingresos.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
];

const steps = [
  { number: '01', title: 'Regístrate', description: 'Completa el formulario de contacto y nos pondremos en contacto contigo.' },
  { number: '02', title: 'Formación', description: 'Te explicamos todo lo que necesitas saber sobre nuestros servicios.' },
  { number: '03', title: 'Empieza a colaborar', description: 'Refiere clientes y empieza a generar comisiones desde el primer día.' },
];

export default function ColaboradoresPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [benefitsVisible, setBenefitsVisible] = useState(false);
  const [profilesVisible, setProfilesVisible] = useState(false);
  const [stepsVisible, setStepsVisible] = useState(false);

  const introRef = useRef<HTMLElement>(null);
  const benefitsRef = useRef<HTMLElement>(null);
  const profilesRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observers = [
      { ref: introRef, setter: setIsVisible },
      { ref: benefitsRef, setter: setBenefitsVisible },
      { ref: profilesRef, setter: setProfilesVisible },
      { ref: stepsRef, setter: setStepsVisible },
    ];

    observers.forEach(({ ref, setter }) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setter(true);
          }
        },
        { threshold: 0.2 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }
    });
  }, []);

  return (
    <>
      <HeroSection
        videoSrc="/assets/video/bg-hero-colaboradores.mp4"
        title="Crece con nosotros como colaborador"
        titleHighlight="colaborador"
        subtitle="Únete a nuestra red de colaboradores y genera ingresos extra ayudando a otros a ahorrar."
        ctaText="Quiero ser colaborador"
        ctaHref="/contacto"
      />

      <section ref={introRef} className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#87CEEB] mb-4">
                Programa de Colaboradores
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-800 mb-6">
                Gana dinero <span className="gradient-text">ayudando a ahorrar</span>
              </h2>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed mb-8">
                <p>
                  Si tienes contacto con particulares o empresas que puedan beneficiarse de nuestros servicios de comparación, tenemos una oportunidad para ti.
                </p>
                <p>
                  Como colaborador de Cerecilla, podrás ofrecer a tus contactos un servicio de valor añadido mientras generas ingresos adicionales sin ningún coste ni inversión inicial.
                </p>
              </div>
              <Button href="/contacto" size="lg">
                Solicitar información
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </div>

            <div className={`relative transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[#87CEEB]/10 to-transparent rounded-full" />

                <Image
                  src="/assets/img/cherry-real-estate.png"
                  alt="Colaboradores Cerecilla"
                  fill
                  className="object-contain p-12 animate-float"
                />

                <div className="absolute top-1/4 -right-4 bg-white rounded-2xl shadow-xl p-4 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">Comisiones</p>
                      <p className="text-sm text-green-500">Sin límites</p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-1/4 -left-4 bg-white rounded-2xl shadow-xl p-4 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#87CEEB]/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#87CEEB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">Red activa</p>
                      <p className="text-sm text-slate-500">+100 colaboradores</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={benefitsRef} className="py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#87CEEB] mb-4">
              Ventajas
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-800">
              ¿Por qué colaborar con <span className="gradient-text">Cerecilla</span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className={`
                  group relative p-8 rounded-3xl bg-white
                  shadow-lg hover:shadow-xl hover:-translate-y-1
                  transition-all duration-500
                  ${benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="
                  w-14 h-14 rounded-2xl mb-6
                  bg-gradient-to-br from-[#87CEEB] to-[#5fb3d9]
                  text-white flex items-center justify-center
                  shadow-lg shadow-[#87CEEB]/25
                  group-hover:scale-110 transition-transform duration-500
                ">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={profilesRef} className="py-24 md:py-32 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-10" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            profilesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#87CEEB] mb-4">
              Perfiles ideales
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white">
              ¿A quién buscamos?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {profiles.map((profile, index) => (
              <div
                key={profile.title}
                className={`
                  group relative p-8 rounded-3xl
                  bg-white/5 backdrop-blur-sm border border-white/10
                  hover:bg-white/10 hover:border-[#87CEEB]/30
                  transition-all duration-500
                  ${profilesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="
                  w-16 h-16 rounded-2xl mb-6
                  bg-gradient-to-br from-[#87CEEB]/20 to-[#5fb3d9]/20
                  text-[#87CEEB] flex items-center justify-center
                  group-hover:from-[#87CEEB] group-hover:to-[#5fb3d9]
                  group-hover:text-white
                  transition-all duration-500
                ">
                  {profile.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {profile.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {profile.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={stepsRef} className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#87CEEB] mb-4">
              Cómo empezar
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-800">
              Unirte es <span className="gradient-text">muy fácil</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`
                  relative text-center p-8
                  transition-all duration-700
                  ${stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="
                  w-20 h-20 mx-auto mb-6 rounded-full
                  bg-gradient-to-br from-[#87CEEB] to-[#5fb3d9]
                  text-white text-3xl font-display font-bold
                  flex items-center justify-center
                  shadow-lg shadow-[#87CEEB]/30
                ">
                  {step.number}
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-px bg-gradient-to-r from-[#87CEEB]/50 to-transparent" />
                )}

                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="¿Listo para empezar a colaborar?"
        subtitle="Contacta con nosotros y te explicamos todo sin compromiso."
        ctaText="Quiero ser colaborador"
        ctaHref="/contacto"
        variant="gradient"
      />
    </>
  );
}
