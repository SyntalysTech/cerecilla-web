import HomeHero from '@/components/sections/HomeHero';
import ServicesShowcase from '@/components/sections/ServicesShowcase';
import HowItWorks from '@/components/sections/HowItWorks';
import StatsSection from '@/components/sections/StatsSection';
import PartnersMarquee from '@/components/sections/PartnersMarquee';
import WhyFreeSection from '@/components/sections/WhyFreeSection';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <>
      <HomeHero />

      <ServicesShowcase />

      <HowItWorks />

      <StatsSection />

      <PartnersMarquee />

      <WhyFreeSection />

      <CTASection
        title="¿Listo para empezar a ahorrar?"
        subtitle="Solicita tu asesoramiento gratuito y descubre cuánto puedes ahorrar en tus facturas."
        ctaText="Solicitar asesoramiento"
        ctaHref="/contacto"
      />
    </>
  );
}
