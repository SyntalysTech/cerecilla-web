'use client';

import { useEffect, useState } from 'react';
import VideoBackground from '@/components/ui/VideoBackground';
import Button from '@/components/ui/Button';

interface HeroSectionProps {
  videoSrc: string;
  title: string;
  titleHighlight?: string;
  subtitle: string;
  showCTA?: boolean;
  ctaText?: string;
  ctaHref?: string;
  overlay?: 'light' | 'dark' | 'gradient';
}

export default function HeroSection({
  videoSrc,
  title,
  titleHighlight,
  subtitle,
  showCTA = true,
  ctaText = 'Empezar ahora',
  ctaHref = '/contacto',
  overlay = 'gradient',
}: HeroSectionProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const overlayStyles = {
    light: 'bg-white/40',
    dark: 'bg-slate-900/60',
    gradient: 'bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/70',
  };

  const titleParts = titleHighlight
    ? title.split(titleHighlight)
    : [title];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <VideoBackground src={videoSrc} />

      <div className={`absolute inset-0 ${overlayStyles[overlay]}`} />

      <div className="absolute inset-0 bg-gradient-to-r from-[#87CEEB]/10 via-transparent to-[#87CEEB]/10" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6">
            {titleParts.map((part, index) => (
              <span key={index}>
                {part}
                {index < titleParts.length - 1 && (
                  <span className="text-[#87CEEB]">{titleHighlight}</span>
                )}
              </span>
            ))}
          </h1>

          <p className={`text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-10 transition-all duration-1000 delay-200 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {subtitle}
          </p>

          {showCTA && (
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-400 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <Button href={ctaHref} size="lg">
                <span>{ctaText}</span>
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <Button href="/servicios" variant="outline" size="lg">
                Ver servicios
              </Button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
