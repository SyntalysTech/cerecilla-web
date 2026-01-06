'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  variant?: 'default' | 'dark' | 'gradient';
}

export default function CTASection({
  title = '¿Listo para empezar a ahorrar?',
  subtitle = 'Solicita tu asesoramiento gratuito y descubre cuánto puedes ahorrar en tus facturas.',
  ctaText = 'Contactar ahora',
  ctaHref = '/contacto',
  variant = 'default',
}: CTASectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const variants = {
    default: 'bg-gradient-to-r from-[#87CEEB] to-[#5fb3d9]',
    dark: 'bg-gradient-to-r from-slate-900 to-slate-800',
    gradient: 'bg-gradient-to-br from-[#87CEEB] via-[#5fb3d9] to-[#4a9fc4]',
  };

  return (
    <section ref={sectionRef} className={`py-20 md:py-28 ${variants[variant]} relative overflow-hidden`}>
      <div className="absolute inset-0 bg-[url('/assets/img/grid-pattern.svg')] opacity-10" />

      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className={`text-center lg:text-left max-w-2xl transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight">
              {title}
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                href={ctaHref}
                variant="secondary"
                size="lg"
              >
                <span>{ctaText}</span>
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <Button
                href="tel:+34666207398"
                variant="ghost"
                size="lg"
                className="!text-white hover:!bg-white/10"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Llamar ahora</span>
              </Button>
            </div>
          </div>

          <div className={`relative transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <Image
              src="/assets/img/cherry-footer.png"
              alt="Cerecilla"
              width={200}
              height={200}
              className="animate-float drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
