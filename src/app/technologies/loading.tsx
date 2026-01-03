// Technologies page loading skeleton
import { PageHeaderSkeleton, Skeleton } from '@/components/ui/Skeleton';

export default function TechnologiesLoading() {
  return (
    <>
      <PageHeaderSkeleton />

      <section className="section-padding">
        <div className="container-custom">
          {/* Tech icons grid */}
          <div className="text-center mb-12">
            <Skeleton className="h-10 w-1/2 mx-auto mb-4" />
            <Skeleton className="h-5 w-2/3 mx-auto" />
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto mb-24">
            {Array.from({ length: 25 }).map((_, i) => (
              <Skeleton key={i} className="w-16 h-16 md:w-20 md:h-20 rounded-2xl" />
            ))}
          </div>

          {/* Categories */}
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="mb-16">
              <Skeleton className="h-8 w-32 mx-auto mb-8" />
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {Array.from({ length: 6 }).map((_, j) => (
                  <Skeleton key={j} className="h-32 w-full rounded-2xl" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
