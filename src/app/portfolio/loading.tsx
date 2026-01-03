// Portfolio page loading skeleton
import { PageHeaderSkeleton, ProjectsGridSkeleton, Skeleton } from '@/components/ui/Skeleton';

export default function PortfolioLoading() {
  return (
    <>
      <PageHeaderSkeleton />

      <section className="section-padding">
        <div className="container-custom">
          {/* Filter tabs skeleton */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-10 w-28 rounded-full" />
            ))}
          </div>

          <ProjectsGridSkeleton count={6} />
        </div>
      </section>
    </>
  );
}
