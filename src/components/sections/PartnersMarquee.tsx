'use client';

import Image from 'next/image';

const partners = [
  { name: 'Endesa', logo: 'endesa.svg' },
  { name: 'Gana Energía', logo: 'ganaenergia.png' },
  { name: 'Holaluz', logo: 'holaluz.svg' },
  { name: 'Iberdrola', logo: 'iberdrola.svg' },
  { name: 'Naturgy', logo: 'naturgy.svg' },
  { name: 'Octopus', logo: 'octopus.svg' },
  { name: 'Podo', logo: 'podo.svg' },
  { name: 'Repsol', logo: 'repsol.svg' },
  { name: 'TotalEnergies', logo: 'totalenergies.svg' },
];

export default function PartnersMarquee() {
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
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex animate-marquee">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center"
            >
              <Image
                src={`/assets/img/logos/${partner.logo}`}
                alt={partner.name}
                width={140}
                height={60}
                className="h-10 md:h-12 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
