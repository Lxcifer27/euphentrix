// Careers page with structured data
import { Metadata } from 'next';
import { CareersHero } from './CareersHero';
import { JobListings } from './JobListings';
import { Benefits } from './Benefits';
import { FAQ } from './FAQ';
import { CTASection } from '@/components/sections';
import { BreadcrumbSchema, FAQSchema } from '@/components/seo/StructuredData';
import { careersFAQ } from '@/data/site-data';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join the Euphentrix team. Explore open positions and help us build the future of technology.',
};

export default function CareersPage() {
  return (
    <>
      {/* SEO Structured Data */}
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Careers', url: '/careers' },
        ]}
      />
      <FAQSchema items={careersFAQ} />

      {/* Page Content */}
      <CareersHero />
      <Benefits />
      <JobListings />
      <FAQ />
      <CTASection />
    </>
  );
}
