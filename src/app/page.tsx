import HomeHero from '@/components/sections/HomeHero';
import ServicesShowcase from '@/components/sections/ServicesShowcase';
import HowItWorks from '@/components/sections/HowItWorks';
import StatsSection from '@/components/sections/StatsSection';
import PartnersMarquee from '@/components/sections/PartnersMarquee';
import DocumentsNeeded from '@/components/sections/DocumentsNeeded';
import TargetAudience from '@/components/sections/TargetAudience';
import WhyFreeSection from '@/components/sections/WhyFreeSection';
import RealEstateSection from '@/components/sections/RealEstateSection';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <>
      <HomeHero />

      <ServicesShowcase />

      <HowItWorks />

      <PartnersMarquee />

      <StatsSection />

      <DocumentsNeeded />

      <TargetAudience />

      <WhyFreeSection />

      <RealEstateSection />

      <CTASection
        title="¿Listo para empezar a ahorrar?"
        subtitle="Solicita tu asesoramiento gratuito y descubre cuánto puedes ahorrar en tus facturas."
        ctaText="Solicitar asesoramiento"
        ctaHref="/contacto"
      />
    </>
  );
}
