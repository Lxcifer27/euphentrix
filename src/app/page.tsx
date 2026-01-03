// Home page with optimized dynamic imports
import {
  HeroSection,
  ServicesSection,
  StatsSection,
  TestimonialsSection,
  ClientsSection,
  CTASection,
} from '@/components/sections/index.dynamic';
import { OrganizationSchema, WebsiteSchema } from '@/components/seo/StructuredData';

export default function HomePage() {
  return (
    <>
      {/* SEO Structured Data */}
      <OrganizationSchema />
      <WebsiteSchema />

      {/* Page Content */}
      <HeroSection />
      <ClientsSection />
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
