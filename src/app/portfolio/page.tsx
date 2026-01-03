// Portfolio page with filterable project grid and structured data
import { Metadata } from 'next';
import { PortfolioHero } from './PortfolioHero';
import { PortfolioGrid } from './PortfolioGrid';
import { CTASection } from '@/components/sections';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Explore our portfolio of successful projects across web development, mobile apps, AI/ML, blockchain, and more.',
};

export default function PortfolioPage() {
  return (
    <>
      {/* SEO Structured Data */}
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Portfolio', url: '/portfolio' },
        ]}
      />

      {/* Page Content */}
      <PortfolioHero />
      <PortfolioGrid />
      <CTASection />
    </>
  );
}
