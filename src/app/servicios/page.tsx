'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import HeroSection from '@/components/sections/HeroSection';
import CTASection from '@/components/sections/CTASection';
import PartnersMarquee from '@/components/sections/PartnersMarquee';

const services = [
  {
    id: 'luz',
    icon: 'icon-luz.png',
    title: 'Luz',
    tagline: 'Ilumina tu hogar al mejor precio',
    description: 'Comparamos todas las tarifas de electricidad del mercado para encontrar la que mejor se adapta a tu consumo. Ya sea tarifa fija, indexada o con discriminación horaria, te ayudamos a elegir.',
    features: [
      'Análisis personalizado de tu consumo',
      'Comparación de más de 50 comercializadoras',
      'Gestión completa del cambio',
      'Sin cortes de suministro',
    ],
    color: 'from-amber-400 to-orange-500',
    bgColor: 'bg-amber-50',
  },
  {
    id: 'gas',
    icon: 'icon-gas.png',
    title: 'Gas Natural',
    tagline: 'Calienta tu hogar sin quemar tu bolsillo',
    description: 'El gas natural es fundamental para la calefacción y agua caliente. Te ayudamos a encontrar la tarifa más competitiva según tu consumo anual.',
    features: [
      'Tarifas combinadas luz + gas',
      'Asesoramiento según tu zona climática',
      'Gestión de alta si es necesario',
      'Comparación objetiva',
    ],
    color: 'from-red-400 to-rose-500',
    bgColor: 'bg-rose-50',
  },
  {
    id: 'telefonia',
    icon: 'icon-telefonia.png',
    title: 'Telefonía Móvil',
    tagline: 'Conectado siempre, pagando menos',
    description: 'El mercado de telefonía móvil cambia constantemente. Analizamos tu consumo de datos, llamadas y necesidades para encontrar el plan perfecto.',
    features: [
      'Planes con datos ilimitados',
      'Opciones con y sin permanencia',
      'Portabilidad gestionada',
      'Ofertas exclusivas',
    ],
    color: 'from-cyan-400 to-teal-500',
    bgColor: 'bg-cyan-50',
  },
  {
    id: 'fibra',
    icon: 'icon-fibra.png',
    title: 'Fibra Óptica',
    tagline: 'Velocidad sin límites para tu hogar',
    description: 'Internet de alta velocidad es esencial hoy en día. Comparamos las mejores ofertas de fibra óptica con diferentes velocidades según tus necesidades.',
    features: [
      'Velocidades de hasta 1Gbps',
      'Instalación incluida',
      'Router de última generación',
      'Packs con TV y móvil',
    ],
    color: 'from-sky-400 to-blue-500',
    bgColor: 'bg-sky-50',
  },
  {
    id: 'seguros',
    icon: 'icon-seguros.png',
    title: 'Seguros',
    tagline: 'Protege lo que más importa',
    description: 'La tranquilidad no tiene precio, pero sí la puedes conseguir al mejor precio. Comparamos seguros de hogar, vida, auto y más.',
    features: [
      'Seguros de hogar completos',
      'Seguros de vida y salud',
      'Seguros de auto y moto',
      'Coberturas personalizadas',
    ],
    color: 'from-violet-400 to-purple-500',
    bgColor: 'bg-violet-50',
  },
];

function ServiceCard({ service, index, isVisible }: { service: typeof services[0]; index: number; isVisible: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`
        relative overflow-hidden rounded-3xl p-8 md:p-10
        transition-all duration-500
        ${service.bgColor}
        ${isHovered ? 'shadow-2xl -translate-y-2' : 'shadow-lg'}
      `}>
        <div className={`
          absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20
          transition-all duration-500
          bg-gradient-to-br ${service.color}
          ${isHovered ? 'scale-150 opacity-30' : 'scale-100'}
        `} />

        <div className="relative z-10">
          <div className="flex items-start justify-between mb-6">
            <div className={`
              w-16 h-16 md:w-20 md:h-20 rounded-2xl
              bg-gradient-to-br ${service.color}
              flex items-center justify-center
              shadow-lg transition-transform duration-500
              ${isHovered ? 'scale-110 rotate-3' : ''}
            `}>
              <Image
                src={`/assets/img/${service.icon}`}
                alt={service.title}
                width={40}
                height={40}
                className="brightness-0 invert"
              />
            </div>
            <span className={`
              text-6xl md:text-7xl font-display font-bold
              bg-gradient-to-br ${service.color} bg-clip-text text-transparent
              opacity-20
            `}>
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-800 mb-2">
            {service.title}
          </h3>
          <p className={`
            text-lg font-medium mb-4
            bg-gradient-to-r ${service.color} bg-clip-text text-transparent
          `}>
            {service.tagline}
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            {service.description}
          </p>

          <ul className="space-y-3">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-700">
                <div className={`
                  w-5 h-5 rounded-full bg-gradient-to-br ${service.color}
                  flex items-center justify-center flex-shrink-0
                `}>
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function ServiciosPage() {
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
    <>
      <HeroSection
        videoSrc="/assets/video/bg-hero-servicios.mp4"
        title="Servicios diseñados para ti"
        titleHighlight="para ti"
        subtitle="Comparamos y gestionamos los mejores servicios del mercado para que tú solo tengas que disfrutar del ahorro."
        showCTA={false}
      />

      <section ref={sectionRef} className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className={`text-center max-w-3xl mx-auto mb-16 md:mb-20 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#87CEEB] mb-4">
              Nuestros Servicios
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-800 mb-6">
              Todo lo que necesitas,{' '}
              <span className="gradient-text">simplificado</span>
            </h2>
            <p className="text-lg text-slate-500">
              Nos encargamos de comparar, negociar y gestionar para que tú solo tengas que elegir la mejor opción.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#87CEEB] mb-4">
              Nuestro Proceso
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-800">
              Cómo trabajamos <span className="gradient-text">contigo</span>
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#87CEEB] via-[#87CEEB]/50 to-transparent hidden md:block" />

            {[
              {
                step: '01',
                title: 'Análisis inicial',
                description: 'Estudiamos tus facturas actuales y tu perfil de consumo para entender exactamente qué necesitas.',
              },
              {
                step: '02',
                title: 'Búsqueda exhaustiva',
                description: 'Comparamos todas las ofertas disponibles en el mercado para encontrar las más ventajosas para ti.',
              },
              {
                step: '03',
                title: 'Propuesta personalizada',
                description: 'Te presentamos las mejores opciones de forma clara, con todos los detalles y sin letra pequeña.',
              },
              {
                step: '04',
                title: 'Gestión completa',
                description: 'Si decides cambiar, nos encargamos de todo el proceso. Tú no tienes que hacer nada.',
              },
            ].map((item, index) => (
              <div
                key={item.step}
                className={`
                  relative flex items-center gap-8 mb-12 last:mb-0
                  ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
                `}
              >
                <div className={`
                  flex-1 p-8 rounded-2xl bg-white shadow-lg
                  ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}
                `}>
                  <span className="text-4xl font-display font-bold text-[#87CEEB]/30">
                    {item.step}
                  </span>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-500">
                    {item.description}
                  </p>
                </div>

                <div className="hidden md:flex w-16 h-16 rounded-full bg-gradient-to-br from-[#87CEEB] to-[#5fb3d9] items-center justify-center text-white font-bold text-lg shadow-lg shadow-[#87CEEB]/30 z-10">
                  {item.step}
                </div>

                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <PartnersMarquee />

      <CTASection
        title="¿Quieres empezar a ahorrar?"
        subtitle="Contacta con nosotros y te haremos un estudio personalizado sin ningún compromiso."
        ctaText="Solicitar estudio gratuito"
        ctaHref="/contacto"
      />
    </>
  );
}
