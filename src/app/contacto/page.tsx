'use client';

import { useState, useEffect, useRef, FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroSection from '@/components/sections/HeroSection';

const services = [
  { id: 'luz', label: 'Luz' },
  { id: 'gas', label: 'Gas' },
  { id: 'telefonia', label: 'Telefonía' },
  { id: 'fibra', label: 'Fibra' },
  { id: 'seguros', label: 'Seguros' },
  { id: 'otros', label: 'Otros' },
];

const contactMethods = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: 'Teléfono',
    value: '+34 666 207 398',
    href: 'tel:+34666207398',
    description: 'Lunes a Viernes, 9:00 - 18:00',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Email',
    value: 'laia.castella@cerecilla.com',
    href: 'mailto:laia.castella@cerecilla.com',
    description: 'Te respondemos en menos de 24h',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Dirección',
    value: 'Barcelona',
    href: 'https://maps.google.com/?q=C/+Lope+de+Vega,+10,+08005+Barcelona',
    description: 'C/ Lope de Vega, 10, 08005',
  },
];

export default function ContactoPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: '',
    privacidad: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const formRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envío
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitStatus('success');
    setIsSubmitting(false);
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      servicio: '',
      mensaje: '',
      privacidad: false,
    });

    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  return (
    <>
      <HeroSection
        videoSrc="/assets/video/bg-hero-contacto.mov"
        title="¿Hablamos?"
        subtitle="Estamos aquí para ayudarte a ahorrar. Cuéntanos qué necesitas y te asesoramos sin compromiso."
        showCTA={false}
      />

      <section ref={formRef} className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-5 gap-16">
            <div className={`lg:col-span-3 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#87CEEB] mb-4">
                Formulario de contacto
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-800 mb-6">
                Cuéntanos qué <span className="gradient-text">necesitas</span>
              </h2>
              <p className="text-lg text-slate-500 mb-10">
                Rellena el formulario y nos pondremos en contacto contigo lo antes posible para ofrecerte un asesoramiento personalizado.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-slate-700 mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      required
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className="
                        w-full px-5 py-4 rounded-xl
                        bg-slate-50 border border-slate-200
                        text-slate-800 placeholder-slate-400
                        focus:outline-none focus:ring-2 focus:ring-[#87CEEB]/50 focus:border-[#87CEEB]
                        transition-all duration-300
                      "
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="
                        w-full px-5 py-4 rounded-xl
                        bg-slate-50 border border-slate-200
                        text-slate-800 placeholder-slate-400
                        focus:outline-none focus:ring-2 focus:ring-[#87CEEB]/50 focus:border-[#87CEEB]
                        transition-all duration-300
                      "
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-slate-700 mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      required
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      className="
                        w-full px-5 py-4 rounded-xl
                        bg-slate-50 border border-slate-200
                        text-slate-800 placeholder-slate-400
                        focus:outline-none focus:ring-2 focus:ring-[#87CEEB]/50 focus:border-[#87CEEB]
                        transition-all duration-300
                      "
                      placeholder="+34 600 000 000"
                    />
                  </div>

                  <div>
                    <label htmlFor="servicio" className="block text-sm font-medium text-slate-700 mb-2">
                      Servicio de interés
                    </label>
                    <select
                      id="servicio"
                      value={formData.servicio}
                      onChange={(e) => setFormData({ ...formData, servicio: e.target.value })}
                      className="
                        w-full px-5 py-4 rounded-xl
                        bg-slate-50 border border-slate-200
                        text-slate-800
                        focus:outline-none focus:ring-2 focus:ring-[#87CEEB]/50 focus:border-[#87CEEB]
                        transition-all duration-300
                        appearance-none cursor-pointer
                      "
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 1rem center',
                        backgroundSize: '1.5rem',
                      }}
                    >
                      <option value="">Selecciona un servicio</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-slate-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    rows={5}
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    className="
                      w-full px-5 py-4 rounded-xl
                      bg-slate-50 border border-slate-200
                      text-slate-800 placeholder-slate-400
                      focus:outline-none focus:ring-2 focus:ring-[#87CEEB]/50 focus:border-[#87CEEB]
                      transition-all duration-300
                      resize-none
                    "
                    placeholder="Cuéntanos en qué podemos ayudarte..."
                  />
                </div>

                <div className="flex items-start gap-4">
                  <div className="relative flex-shrink-0">
                    <input
                      type="checkbox"
                      id="privacidad"
                      required
                      checked={formData.privacidad}
                      onChange={(e) => setFormData({ ...formData, privacidad: e.target.checked })}
                      className="
                        w-6 h-6 rounded-lg
                        border-2 border-slate-300
                        text-[#87CEEB]
                        focus:ring-2 focus:ring-[#87CEEB]/50 focus:ring-offset-0
                        cursor-pointer
                        transition-all duration-300
                        appearance-none
                        checked:bg-[#87CEEB] checked:border-[#87CEEB]
                      "
                    />
                    <svg
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-white pointer-events-none opacity-0 transition-opacity duration-200"
                      style={{ opacity: formData.privacidad ? 1 : 0 }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <label htmlFor="privacidad" className="text-sm text-slate-600 cursor-pointer">
                    He leído y acepto la{' '}
                    <Link href="/politica-privacidad" className="text-[#87CEEB] hover:underline">
                      Política de Privacidad
                    </Link>{' '}
                    y los{' '}
                    <Link href="/terminos-condiciones" className="text-[#87CEEB] hover:underline">
                      Términos y Condiciones
                    </Link>
                    .
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                    w-full md:w-auto px-10 py-4 rounded-full
                    bg-gradient-to-r from-[#87CEEB] to-[#5fb3d9]
                    text-white font-semibold text-lg
                    shadow-lg shadow-[#87CEEB]/25
                    hover:shadow-xl hover:shadow-[#87CEEB]/30 hover:-translate-y-0.5
                    active:translate-y-0
                    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0
                    transition-all duration-300
                    flex items-center justify-center gap-3
                  "
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar mensaje
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 flex items-center gap-3">
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p>¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.</p>
                  </div>
                )}
              </form>
            </div>

            <div className={`lg:col-span-2 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <div className="sticky top-32">
                <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#87CEEB] mb-4">
                  Información de contacto
                </span>
                <h3 className="text-2xl font-display font-bold text-slate-800 mb-8">
                  Otras formas de contactarnos
                </h3>

                <div className="space-y-6 mb-10">
                  {contactMethods.map((method) => (
                    <a
                      key={method.title}
                      href={method.href}
                      target={method.title === 'Dirección' ? '_blank' : undefined}
                      rel={method.title === 'Dirección' ? 'noopener noreferrer' : undefined}
                      className="
                        group flex items-start gap-5 p-5 rounded-2xl
                        bg-slate-50 hover:bg-gradient-to-r hover:from-[#87CEEB]/10 hover:to-transparent
                        border border-slate-100 hover:border-[#87CEEB]/30
                        transition-all duration-300
                      "
                    >
                      <div className="
                        w-12 h-12 rounded-xl flex-shrink-0
                        bg-gradient-to-br from-[#87CEEB] to-[#5fb3d9]
                        text-white flex items-center justify-center
                        group-hover:scale-110 transition-transform duration-300
                      ">
                        {method.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-1">
                          {method.title}
                        </h4>
                        <p className="text-[#87CEEB] font-medium mb-1">
                          {method.value}
                        </p>
                        <p className="text-sm text-slate-500">
                          {method.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[#87CEEB]/10 to-transparent">
                  <Image
                    src="/assets/img/cherry-footer.png"
                    alt="Cerecilla"
                    fill
                    className="object-contain p-8 animate-float"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
