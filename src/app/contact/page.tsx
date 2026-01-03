// Contact page with structured data
import { Metadata } from 'next';
import { ContactHero } from './ContactHero';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';
import { BreadcrumbSchema, LocalBusinessSchema } from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Euphentrix. Let us discuss how we can help transform your business with technology.',
};

export default function ContactPage() {
  return (
    <>
      {/* SEO Structured Data */}
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Contact', url: '/contact' },
        ]}
      />
      <LocalBusinessSchema />

      {/* Page Content */}
      <ContactHero />
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
    </>
  );
}
