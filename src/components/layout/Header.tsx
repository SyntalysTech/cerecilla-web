'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/conocenos', label: 'Conócenos' },
  { href: '/colaboradores', label: 'Colaboradores' },
  { href: '/contacto', label: 'Contacto' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Bloquear scroll del body cuando el menú está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3 bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-[60] flex items-center gap-3 group">
              <div className="relative h-12 w-12 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/assets/img/logo-icon-alone.png"
                  alt="Cerecilla"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-lg tracking-wide text-[#8B0000] transition-colors duration-300">
                  CERECILLA
                </span>
                <span className={`text-[10px] tracking-widest uppercase transition-colors duration-300 ${
                  isScrolled || isMobileMenuOpen ? 'text-slate-500' : 'text-white/80'
                }`}>
                  Energía y Telefonía
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium transition-all duration-300 ${
                    pathname === link.href
                      ? isScrolled
                        ? 'text-[#8B0000]'
                        : 'text-white'
                      : isScrolled
                      ? 'text-slate-600 hover:text-[#8B0000]'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#8B0000]" />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Button Desktop */}
            <div className="hidden lg:block">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#87CEEB] to-[#5fb3d9] text-white text-sm font-semibold shadow-lg shadow-[#87CEEB]/25 hover:shadow-xl hover:shadow-[#87CEEB]/30 hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
              >
                <span>Empieza a Ahorrar</span>
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative z-[60] w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`block h-0.5 rounded-full transition-all duration-300 origin-center ${
                  isMobileMenuOpen
                    ? 'rotate-45 translate-y-[9px] bg-slate-800'
                    : isScrolled ? 'bg-slate-800' : 'bg-white'
                }`} />
                <span className={`block h-0.5 rounded-full transition-all duration-300 ${
                  isMobileMenuOpen
                    ? 'opacity-0 scale-0'
                    : isScrolled ? 'bg-slate-800' : 'bg-white'
                }`} />
                <span className={`block h-0.5 rounded-full transition-all duration-300 origin-center ${
                  isMobileMenuOpen
                    ? '-rotate-45 -translate-y-[9px] bg-slate-800'
                    : isScrolled ? 'bg-slate-800' : 'bg-white'
                }`} />
              </div>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-[55] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden fixed top-0 right-0 z-[55] w-full max-w-sm h-full bg-white shadow-2xl transition-transform duration-300 ease-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Menu Header with Logo */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="relative h-10 w-10">
              <Image
                src="/assets/img/logo-icon-alone.png"
                alt="Cerecilla"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-base tracking-wide text-[#8B0000]">
                CERECILLA
              </span>
              <span className="text-[9px] tracking-widest uppercase text-slate-500">
                Energía y Telefonía
              </span>
            </div>
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors"
          >
            <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Menu Content */}
        <div className="flex flex-col h-[calc(100%-88px)] overflow-y-auto">
          {/* Navigation Links */}
          <nav className="flex-1 p-6">
            <ul className="space-y-1">
              {navLinks.map((link, index) => (
                <li
                  key={link.href}
                  className={`transform transition-all duration-300 ${
                    isMobileMenuOpen
                      ? 'translate-x-0 opacity-100'
                      : 'translate-x-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 50 + 100}ms` }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-4 rounded-xl text-lg font-medium transition-all duration-200 ${
                      pathname === link.href
                        ? 'text-[#8B0000] bg-[#8B0000]/5'
                        : 'text-slate-700 hover:text-[#8B0000] hover:bg-slate-50'
                    }`}
                  >
                    <span>{link.label}</span>
                    {pathname === link.href && (
                      <span className="w-2 h-2 rounded-full bg-[#8B0000]" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottom Section */}
          <div className="p-6 border-t border-slate-100 space-y-4">
            {/* Phone */}
            <a
              href="tel:+34666207398"
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <span className="block text-sm font-semibold text-slate-700">Llámanos</span>
                <span className="block text-xs text-slate-500">+34 666 207 398</span>
              </div>
            </a>

            {/* CTA Button */}
            <Link
              href="/contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl bg-gradient-to-r from-[#87CEEB] to-[#5fb3d9] text-white font-semibold shadow-lg shadow-[#87CEEB]/25 hover:shadow-xl transition-all"
            >
              <span>Empieza a Ahorrar</span>
              <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
