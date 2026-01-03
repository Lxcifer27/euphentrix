// Contact page loading skeleton
import { PageHeaderSkeleton, FormSkeleton, Skeleton } from '@/components/ui/Skeleton';

export default function ContactLoading() {
  return (
    <>
      <PageHeaderSkeleton />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <FormSkeleton />

            <div className="space-y-8">
              {/* Contact info card */}
              <div className="bg-[var(--card)] rounded-3xl p-8 border border-[var(--border)]">
                <Skeleton className="h-8 w-1/2 mb-6" />
                <div className="space-y-6">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <Skeleton className="w-12 h-12 rounded-xl" />
                      <div className="flex-1">
                        <Skeleton className="h-3 w-16 mb-2" />
                        <Skeleton className="h-5 w-3/4" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social links card */}
              <div className="bg-[var(--card)] rounded-3xl p-8 border border-[var(--border)]">
                <Skeleton className="h-6 w-1/3 mb-4" />
                <Skeleton className="h-4 w-2/3 mb-6" />
                <div className="flex gap-3">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <Skeleton key={i} className="w-12 h-12 rounded-xl" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
