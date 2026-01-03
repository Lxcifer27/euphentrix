// Careers page loading skeleton
import { PageHeaderSkeleton, SectionTitleSkeleton, CardSkeleton, JobListingSkeleton } from '@/components/ui/Skeleton';

export default function CareersLoading() {
  return (
    <>
      <PageHeaderSkeleton />

      {/* Benefits section */}
      <section className="section-padding bg-[var(--muted)]">
        <div className="container-custom">
          <SectionTitleSkeleton />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <CardSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Job listings section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitleSkeleton />
          <div className="max-w-4xl mx-auto space-y-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <JobListingSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
