'use client';

import { useEffect, useState, FormEvent } from 'react';
import VideoBackground from '@/components/ui/VideoBackground';
import Link from 'next/link';

export default function HomeHero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [phone, setPhone] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!phone.trim() || !acceptedTerms || isSubmitting) return;

    setIsSubmitting(true);

    // Simular envío - aquí conectarías con tu API
    await new Promise(resolve => setTimeout(resolve, 1000));

    setSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <VideoBackground src="/assets/video/bg-hero-index.mp4" />

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/70" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#87CEEB]/10 via-transparent to-[#87CEEB]/10" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-16 pt-16 lg:pt-0">
          {/* Texto */}
          <div className={`flex-1 text-center lg:text-left transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white leading-tight mb-4 lg:mb-6">
              Ahorra en tus facturas{' '}
              <span className="text-[#87CEEB]">sin complicaciones</span>
            </h1>

            <p className={`text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl mb-4 lg:mb-8 transition-all duration-1000 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Comparamos las mejores tarifas de luz, gas, telefonía, fibra y seguros para que tú solo tengas que elegir.
            </p>
          </div>

          {/* Formulario */}
          <div className={`w-full max-w-sm lg:max-w-md transition-all duration-1000 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl lg:rounded-3xl p-5 sm:p-6 lg:p-8 shadow-2xl">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">¡Solicitud enviada!</h3>
                  <p className="text-slate-600">Te llamaremos lo antes posible.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-4 lg:mb-6 text-center">
                    ¡Solicita una llamada ya!
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Tu número de teléfono"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#87CEEB]/50 focus:border-[#87CEEB] transition-all"
                        required
                      />
                    </div>

                    <label htmlFor="terms" className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        id="terms"
                        checked={acceptedTerms}
                        onChange={(e) => setAcceptedTerms(e.target.checked)}
                        className="w-5 h-5 rounded border-slate-300 text-[#87CEEB] focus:ring-[#87CEEB] cursor-pointer"
                        required
                      />
                      <span className="text-sm text-slate-600">
                        Acepto los términos de la{' '}
                        <Link href="/privacidad" className="text-[#87CEEB] hover:underline">
                          Política de Privacidad
                        </Link>
                      </span>
                    </label>

                    <button
                      type="submit"
                      disabled={!phone.trim() || !acceptedTerms || isSubmitting}
                      className="w-full py-3 lg:py-4 px-6 rounded-xl bg-gradient-to-r from-[#87CEEB] to-[#5fb3d9] text-white font-semibold text-base lg:text-lg shadow-lg shadow-[#87CEEB]/25 hover:shadow-xl hover:shadow-[#87CEEB]/30 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Enviando...</span>
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <span>Solicitar llamada</span>
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
