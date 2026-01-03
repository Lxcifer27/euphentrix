// Dynamic imports for heavy components to improve initial bundle size
import dynamic from 'next/dynamic';
import { HeroSkeleton, CardSkeleton, TestimonialsSkeleton, StatsSkeleton, Skeleton } from '@/components/ui/Skeleton';

// Hero section is critical for LCP - no lazy loading
export { HeroSection } from './HeroSection';

// Below-the-fold sections with lazy loading
export const ServicesSection = dynamic(
  () => import('./ServicesSection').then((mod) => mod.ServicesSection),
  {
    loading: () => (
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Skeleton className="h-6 w-24 mx-auto mb-4" />
            <Skeleton className="h-10 w-1/2 mx-auto mb-4" />
            <Skeleton className="h-5 w-2/3 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <CardSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    ),
    ssr: true,
  }
);

export const StatsSection = dynamic(
  () => import('./StatsSection').then((mod) => mod.StatsSection),
  {
    loading: () => <StatsSkeleton />,
    ssr: true,
  }
);

export const TestimonialsSection = dynamic(
  () => import('./TestimonialsSection').then((mod) => mod.TestimonialsSection),
  {
    loading: () => <TestimonialsSkeleton />,
    ssr: true,
  }
);

export const ClientsSection = dynamic(
  () => import('./ClientsSection').then((mod) => mod.ClientsSection),
  {
    loading: () => (
      <section className="py-16 bg-[var(--muted)]">
        <div className="container-custom">
          <Skeleton className="h-6 w-48 mx-auto mb-8" />
          <div className="flex justify-center gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="w-24 h-12" />
            ))}
          </div>
        </div>
      </section>
    ),
    ssr: true,
  }
);

export const CTASection = dynamic(
  () => import('./CTASection').then((mod) => mod.CTASection),
  {
    loading: () => (
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-[var(--card)] rounded-3xl p-12 text-center">
            <Skeleton className="h-10 w-2/3 mx-auto mb-4" />
            <Skeleton className="h-5 w-1/2 mx-auto mb-8" />
            <Skeleton className="h-12 w-40 mx-auto rounded-xl" />
          </div>
        </div>
      </section>
    ),
    ssr: true,
  }
);
