'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import HeroSection from '@/components/sections/HeroSection';
import CTASection from '@/components/sections/CTASection';

const values = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Transparencia',
    description: 'Sin letra pequeña ni sorpresas. Te explicamos todo de forma clara y honesta.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Cercanía',
    description: 'Tratamos a cada cliente como único, con atención personalizada y cercana.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Eficiencia',
    description: 'Optimizamos tu tiempo. Nos encargamos de todo para que tú no te preocupes.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Compromiso',
    description: 'Tu ahorro es nuestro objetivo. Trabajamos siempre en tu beneficio.',
  },
];

const team = [
  {
    name: 'Laia Castellà',
    role: 'CEO & Fundadora',
    image: 'laia.jpg',
    bio: 'Con más de 10 años de experiencia en el sector energético, Laia fundó Cerecilla con la misión de democratizar el acceso a las mejores tarifas.',
  },
  {
    name: 'Sergio García',
    role: 'Director de Operaciones',
    image: 'sergio.jpg',
    bio: 'Experto en optimización de procesos y atención al cliente. Sergio asegura que cada cliente reciba el mejor servicio posible.',
  },
];

const timeline = [
  { year: '2019', title: 'El inicio', description: 'Nace Cerecilla con la misión de ayudar a las familias a ahorrar en sus facturas.' },
  { year: '2020', title: 'Crecimiento', description: 'Ampliamos servicios a gas, telefonía y fibra. Superamos los 1.000 clientes.' },
  { year: '2022', title: 'Expansión', description: 'Añadimos seguros a nuestra cartera. Alcanzamos presencia en toda España.' },
  { year: '2024', title: 'Consolidación', description: 'Más de 15.000 clientes confían en nosotros. Seguimos creciendo.' },
];

export default function ConocenosPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [valuesVisible, setValuesVisible] = useState(false);
  const [teamVisible, setTeamVisible] = useState(false);
  const [timelineVisible, setTimelineVisible] = useState(false);

  const storyRef = useRef<HTMLElement>(null);
  const valuesRef = useRef<HTMLElement>(null);
  const teamRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observers = [
      { ref: storyRef, setter: setIsVisible },
      { ref: valuesRef, setter: setValuesVisible },
      { ref: teamRef, setter: setTeamVisible },
      { ref: timelineRef, setter: setTimelineVisible },
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
        videoSrc="/assets/video/bg-hero-conocenos.mp4"
        title="Conoce al equipo que te ayuda a ahorrar"
        titleHighlight="ahorrar"
        subtitle="Somos un equipo apasionado por ayudar a las familias españolas a optimizar sus facturas."
        showCTA={false}
      />

      <section ref={storyRef} className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#87CEEB] mb-4">
                Nuestra Historia
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-800 mb-6">
                Nacimos para <span className="gradient-text">simplificar</span> tu vida
              </h2>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  Cerecilla nació de una frustración compartida: ¿por qué es tan complicado encontrar las mejores tarifas de luz, gas o telefonía?
                </p>
                <p>
                  Fundada en Barcelona en 2019, nuestra misión ha sido desde el primer día hacer que ahorrar sea sencillo. Sin complicaciones, sin letra pequeña, sin sorpresas.
                </p>
                <p>
                  Hoy, más de 15.000 familias españolas confían en nosotros para gestionar sus servicios del hogar. Y esto es solo el principio.
                </p>
              </div>
            </div>

            <div className={`relative transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[#87CEEB]/20 to-transparent rounded-3xl" />

                <Image
                  src="/assets/img/mapa-espana.png"
                  alt="Presencia en toda España"
                  fill
                  className="object-contain p-8"
                />

                <div className="absolute top-1/4 right-0 bg-white rounded-2xl shadow-xl p-4 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#87CEEB]/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#87CEEB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">Barcelona</p>
                      <p className="text-xs text-slate-500">Sede central</p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-1/4 left-0 bg-white rounded-2xl shadow-xl p-4 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">Toda España</p>
                      <p className="text-xs text-slate-500">Cobertura nacional</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={valuesRef} className="py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#87CEEB] mb-4">
              Nuestros Valores
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-800">
              Lo que nos <span className="gradient-text">define</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`
                  group relative p-8 rounded-3xl bg-white
                  shadow-lg hover:shadow-xl
                  transition-all duration-500
                  ${valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="
                  w-16 h-16 rounded-2xl mb-6
                  bg-gradient-to-br from-[#87CEEB] to-[#5fb3d9]
                  text-white flex items-center justify-center
                  shadow-lg shadow-[#87CEEB]/25
                  group-hover:scale-110 transition-transform duration-500
                ">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={teamRef} className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#87CEEB]/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#87CEEB] mb-4">
              Nuestro Equipo
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-800">
              Las personas detrás de <span className="gradient-text">Cerecilla</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div
                key={member.name}
                className={`
                  group relative
                  transition-all duration-700
                  ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-100 to-white p-8">
                  <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                    <Image
                      src={`/assets/img/${member.image}`}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#87CEEB]/20 to-transparent" />
                  </div>

                  <div className="text-center">
                    <h3 className="text-2xl font-display font-bold text-slate-800 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-[#87CEEB] font-medium mb-4">
                      {member.role}
                    </p>
                    <p className="text-slate-500 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={timelineRef} className="py-24 md:py-32 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-10" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#87CEEB] mb-4">
              Nuestra Trayectoria
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white">
              Años de <span className="text-[#87CEEB]">crecimiento</span>
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#87CEEB] via-[#87CEEB]/50 to-transparent" />

            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`
                  relative flex items-center gap-8 mb-12 last:mb-0
                  ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
                  transition-all duration-700
                  ${timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`
                  flex-1 ml-12 md:ml-0 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10
                  ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}
                `}>
                  <span className="text-4xl font-display font-bold text-[#87CEEB]">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-semibold text-white mt-2 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-400">
                    {item.description}
                  </p>
                </div>

                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-[#87CEEB] flex items-center justify-center z-10">
                  <div className="w-3 h-3 rounded-full bg-white" />
                </div>

                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="¿Quieres formar parte de nuestra historia?"
        subtitle="Únete a los miles de clientes que ya ahorran con Cerecilla."
        ctaText="Empezar ahora"
        ctaHref="/contacto"
      />
    </>
  );
}
