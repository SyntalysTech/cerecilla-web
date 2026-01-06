'use client';

import Image from 'next/image';

const partners = [
  { name: 'Endesa', logo: 'endesa.png', scale: 'scale-125' },
  { name: 'Gana Energía', logo: 'ganaenergia.png', scale: 'scale-125' },
  { name: 'Iberdrola', logo: 'iberdrola.png', scale: 'scale-125' },
  { name: 'Plenitude', logo: 'plenitude.png', scale: '' },
  { name: 'TotalEnergies', logo: 'totalenergies.png', scale: 'scale-125' },
  { name: 'Vodafone', logo: 'vodafone.png', scale: '' },
  { name: 'Orange', logo: 'orange.png', scale: '' },
  { name: 'Yoigo', logo: 'yoigo.png', scale: '' },
  { name: 'MásMóvil', logo: 'masmovil.png', scale: '' },
  { name: 'O2', logo: 'o2.png', scale: 'scale-75' },
];

export default function PartnersMarquee() {
  // Solo usamos el array base, la duplicación la hace el segundo contenedor
  const allPartners = partners;

  return (
    <section className="py-16 md:py-20 bg-white border-y border-slate-100 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#87CEEB] mb-3">
            Nuestros Partners
          </span>
          <h3 className="text-xl md:text-2xl font-display font-semibold text-slate-800">
            Trabajamos con las mejores compañías
          </h3>
        </div>
      </div>

      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Marquee container */}
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee-infinite">
            {allPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 mx-6 sm:mx-8 md:mx-12 flex items-center justify-center relative w-[100px] h-[40px] sm:w-[120px] sm:h-[50px] md:w-[140px] md:h-[60px]"
              >
                <Image
                  src={`/assets/img/logos/${partner.logo}`}
                  alt={partner.name}
                  fill
                  className={`object-contain ${partner.scale}`}
                />
              </div>
            ))}
          </div>
          {/* Duplicado para continuidad infinita */}
          <div className="flex animate-marquee-infinite" aria-hidden="true">
            {allPartners.map((partner, index) => (
              <div
                key={`${partner.name}-dup-${index}`}
                className="flex-shrink-0 mx-6 sm:mx-8 md:mx-12 flex items-center justify-center relative w-[100px] h-[40px] sm:w-[120px] sm:h-[50px] md:w-[140px] md:h-[60px]"
              >
                <Image
                  src={`/assets/img/logos/${partner.logo}`}
                  alt={partner.name}
                  fill
                  className={`object-contain ${partner.scale}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
