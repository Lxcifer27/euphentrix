// Services page with detailed service information and structured data
import { Metadata } from 'next';
import { ServicesHero } from './ServicesHero';
import { ServicesList } from './ServicesList';
import { ProcessSection } from './ProcessSection';
import { CTASection } from '@/components/sections';
import { BreadcrumbSchema, ServiceSchema } from '@/components/seo/StructuredData';
import { services } from '@/data/site-data';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore our comprehensive IT services including web development, mobile apps, UI/UX design, AI/ML, blockchain, cloud computing, and more.',
};

export default function ServicesPage() {
  return (
    <>
      {/* SEO Structured Data */}
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
        ]}
      />
      {services.map((service) => (
        <ServiceSchema
          key={service.id}
          name={service.title}
          description={service.description}
          slug={service.id}
        />
      ))}

      {/* Page Content */}
      <ServicesHero />
      <ServicesList />
      <ProcessSection />
      <CTASection />
    </>
  );
}
