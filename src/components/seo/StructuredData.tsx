// Structured data components for SEO (JSON-LD)
import { siteConfig } from '@/data/site-data';

const baseUrl = 'https://euphentrix.com';

// Organization Schema
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    description: siteConfig.description,
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    sameAs: [
      'https://twitter.com/euphentrix',
      'https://linkedin.com/company/euphentrix',
      'https://github.com/euphentrix',
      'https://instagram.com/euphentrix',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Innovation Drive, Tech Park',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      postalCode: '94102',
      addressCountry: 'US',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+1 (555) 123-4567',
        contactType: 'customer service',
        email: 'hello@euphentrix.com',
        availableLanguage: ['English'],
      },
    ],
    foundingDate: '2018',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 50,
      maxValue: 100,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Website Schema
export function WebsiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    description: siteConfig.description,
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Service Schema
interface ServiceSchemaProps {
  name: string;
  description: string;
  slug: string;
}

export function ServiceSchema({ name, description, slug }: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
    url: `${baseUrl}/services#${slug}`,
    areaServed: {
      '@type': 'Country',
      name: 'Worldwide',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Project/Portfolio Schema
interface ProjectSchemaProps {
  name: string;
  description: string;
  image: string;
  slug: string;
  category: string;
}

export function ProjectSchema({ name, description, image, slug, category }: ProjectSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name,
    description,
    image: image.startsWith('http') ? image : `${baseUrl}${image}`,
    url: `${baseUrl}/portfolio/${slug}`,
    creator: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
    genre: category,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Job Posting Schema
interface JobPostingSchemaProps {
  title: string;
  description: string;
  location: string;
  type: string;
  department: string;
}

export function JobPostingSchema({ title, description, location, type, department }: JobPostingSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title,
    description,
    datePosted: new Date().toISOString().split('T')[0],
    validThrough: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    employmentType: type === 'Full-time' ? 'FULL_TIME' : type === 'Part-time' ? 'PART_TIME' : 'CONTRACTOR',
    hiringOrganization: {
      '@type': 'Organization',
      name: siteConfig.name,
      sameAs: baseUrl,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: location.includes('Remote') ? 'Remote' : 'San Francisco',
        addressRegion: 'CA',
        addressCountry: 'US',
      },
    },
    industry: 'Technology',
    occupationalCategory: department,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Breadcrumb Schema
interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// FAQ Schema
interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSchema({ items }: { items: FAQItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Local Business Schema
export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteConfig.name,
    description: siteConfig.description,
    image: `${baseUrl}/logo.png`,
    '@id': baseUrl,
    url: baseUrl,
    telephone: '+1 (555) 123-4567',
    email: 'hello@euphentrix.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Innovation Drive, Tech Park',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      postalCode: '94102',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 37.7749,
      longitude: -122.4194,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    priceRange: '$$$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
