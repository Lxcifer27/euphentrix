// About page loading skeleton
import { PageHeaderSkeleton, SectionTitleSkeleton, TeamMemberSkeleton, CardSkeleton } from '@/components/ui/Skeleton';

export default function AboutLoading() {
  return (
    <>
      <PageHeaderSkeleton />

      {/* Story section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="h-96 bg-gray-200 dark:bg-gray-800 rounded-3xl animate-pulse" />
            <div className="space-y-4">
              <div className="h-6 w-24 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse" />
              <div className="h-10 w-3/4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
              <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
              <div className="h-4 w-4/5 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="section-padding bg-[var(--muted)]">
        <div className="container-custom">
          <SectionTitleSkeleton />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <CardSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitleSkeleton />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <TeamMemberSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
