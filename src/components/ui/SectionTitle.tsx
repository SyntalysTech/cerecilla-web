'use client';

import { useEffect, useRef, useState } from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  highlight?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  highlight,
  centered = true,
  light = false,
}: SectionTitleProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const titleParts = highlight
    ? title.split(highlight)
    : [title];

  return (
    <div
      ref={ref}
      className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''} ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
    >
      {subtitle && (
        <span className={`inline-block text-sm font-semibold tracking-widest uppercase mb-4 ${
          light ? 'text-[#87CEEB]' : 'text-[#87CEEB]'
        }`}>
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight ${
        light ? 'text-white' : 'text-slate-800'
      }`}>
        {titleParts.map((part, index) => (
          <span key={index}>
            {part}
            {index < titleParts.length - 1 && (
              <span className="gradient-text">{highlight}</span>
            )}
          </span>
        ))}
      </h2>
    </div>
  );
}
