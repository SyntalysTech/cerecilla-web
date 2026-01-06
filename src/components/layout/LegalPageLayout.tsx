'use client';

import { ReactNode, useEffect, useState } from 'react';

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

export default function LegalPageLayout({ title, lastUpdated, children }: LegalPageLayoutProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-800 mb-4">
              {title}
            </h1>
            <p className="text-slate-500">
              Última actualización: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`max-w-4xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="prose prose-lg prose-slate max-w-none
              prose-headings:font-display prose-headings:text-slate-800
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-slate-600 prose-p:leading-relaxed
              prose-li:text-slate-600
              prose-a:text-[#87CEEB] prose-a:no-underline hover:prose-a:underline
              prose-strong:text-slate-800
            ">
              {children}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
