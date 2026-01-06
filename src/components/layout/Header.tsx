'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/conocenos', label: 'Conocenos' },
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

  return (
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
          <Link href="/" className="relative z-10 flex items-center gap-3 group">
            <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/assets/img/webapp-icon-logo.png"
                alt="Cerecilla"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className={`font-bold text-xl tracking-tight transition-colors duration-300 ${
              isScrolled ? 'text-slate-800' : 'text-white'
            }`}>
              Cerecilla
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  pathname === link.href
                    ? isScrolled
                      ? 'text-[#87CEEB] bg-[#87CEEB]/10'
                      : 'text-white bg-white/20'
                    : isScrolled
                    ? 'text-slate-600 hover:text-[#87CEEB] hover:bg-[#87CEEB]/5'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#87CEEB]" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#87CEEB] to-[#5fb3d9] text-white text-sm font-semibold shadow-lg shadow-[#87CEEB]/25 hover:shadow-xl hover:shadow-[#87CEEB]/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              <span>Empieza a Ahorrar</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden relative z-10 p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-slate-800' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 rounded-full transition-all duration-300 ${
                isMobileMenuOpen
                  ? 'rotate-45 translate-y-2 bg-slate-800'
                  : isScrolled ? 'bg-slate-800' : 'bg-white'
              }`} />
              <span className={`block h-0.5 rounded-full transition-all duration-300 ${
                isMobileMenuOpen
                  ? 'opacity-0'
                  : isScrolled ? 'bg-slate-800' : 'bg-white'
              }`} />
              <span className={`block h-0.5 rounded-full transition-all duration-300 ${
                isMobileMenuOpen
                  ? '-rotate-45 -translate-y-2 bg-slate-800'
                  : isScrolled ? 'bg-slate-800' : 'bg-white'
              }`} />
            </div>
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 w-full max-w-sm h-full bg-white shadow-2xl transition-transform duration-500 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full pt-24 pb-8 px-6">
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-xl text-lg font-medium transition-all duration-300 ${
                    pathname === link.href
                      ? 'text-[#87CEEB] bg-[#87CEEB]/10'
                      : 'text-slate-700 hover:text-[#87CEEB] hover:bg-slate-50'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mt-auto">
              <Link
                href="/contacto"
                className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-2xl bg-gradient-to-r from-[#87CEEB] to-[#5fb3d9] text-white font-semibold shadow-lg shadow-[#87CEEB]/25"
              >
                <span>Empieza a Ahorrar</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
