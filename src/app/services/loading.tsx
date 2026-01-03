// Services page loading skeleton
import { PageHeaderSkeleton, Skeleton } from '@/components/ui/Skeleton';

export default function ServicesLoading() {
  return (
    <>
      <PageHeaderSkeleton />

      <section className="section-padding">
        <div className="container-custom space-y-24">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={i % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                <Skeleton className="w-16 h-16 rounded-2xl mb-6" />
                <Skeleton className="h-10 w-3/4 mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-5/6 mb-6" />
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {Array.from({ length: 6 }).map((_, j) => (
                    <Skeleton key={j} className="h-5 w-full" />
                  ))}
                </div>
                <Skeleton className="h-12 w-32 rounded-xl" />
              </div>
              <div className={i % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
                <Skeleton className="h-80 w-full rounded-3xl" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
