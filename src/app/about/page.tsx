// About page with company info and team section
import { Metadata } from 'next';
import { AboutHero } from './AboutHero';
import { AboutStory } from './AboutStory';
import { TeamSection } from './TeamSection';
import { ValuesSection } from './ValuesSection';
import { CTASection } from '@/components/sections';
import { BreadcrumbSchema, LocalBusinessSchema } from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Euphentrix - our story, mission, values, and the talented team behind our innovative IT solutions.',
};

export default function AboutPage() {
  return (
    <>
      {/* SEO Structured Data */}
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'About', url: '/about' },
        ]}
      />
      <LocalBusinessSchema />

      {/* Page Content */}
      <AboutHero />
      <AboutStory />
      <ValuesSection />
      <TeamSection />
      <CTASection />
    </>
  );
}
