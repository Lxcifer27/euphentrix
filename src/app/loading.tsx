// Home page loading skeleton
import { HeroSkeleton, SectionTitleSkeleton, CardsGridSkeleton } from '@/components/ui/Skeleton';

export default function HomeLoading() {
  return (
    <>
      <HeroSkeleton />

      {/* Clients section skeleton */}
      <section className="py-16">
        <div className="container-custom text-center">
          <div className="h-4 w-48 bg-gray-200 dark:bg-gray-800 rounded mx-auto mb-8 animate-pulse" />
          <div className="flex justify-center gap-8 flex-wrap">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="w-32 h-12 bg-gray-200 dark:bg-gray-800 rounded-xl animate-pulse" />
            ))}
          </div>
        </div>
      </section>

      {/* Services section skeleton */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitleSkeleton />
          <CardsGridSkeleton count={8} />
        </div>
      </section>
    </>
  );
}
