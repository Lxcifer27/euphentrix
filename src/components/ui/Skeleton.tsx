// Skeleton loader components for loading states
import { cn } from '@/lib/utils';

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800',
        className
      )}
      aria-hidden="true"
    />
  );
}

// Hero section skeleton
export function HeroSkeleton() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="container-custom text-center">
        <Skeleton className="h-8 w-48 mx-auto mb-8 rounded-full" />
        <Skeleton className="h-16 w-3/4 mx-auto mb-4" />
        <Skeleton className="h-16 w-1/2 mx-auto mb-8" />
        <Skeleton className="h-6 w-2/3 mx-auto mb-4" />
        <Skeleton className="h-6 w-1/2 mx-auto mb-10" />
        <div className="flex justify-center gap-4">
          <Skeleton className="h-14 w-40 rounded-xl" />
          <Skeleton className="h-14 w-40 rounded-xl" />
        </div>
      </div>
    </section>
  );
}

// Card skeleton
export function CardSkeleton() {
  return (
    <div className="bg-[var(--card)] rounded-2xl p-6 border border-[var(--border)]">
      <Skeleton className="w-14 h-14 rounded-xl mb-5" />
      <Skeleton className="h-6 w-3/4 mb-3" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-5/6" />
    </div>
  );
}

// Grid of card skeletons
export function CardsGridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}

// Project card skeleton
export function ProjectCardSkeleton() {
  return (
    <div className="bg-[var(--card)] rounded-2xl overflow-hidden border border-[var(--border)]">
      <Skeleton className="h-56 w-full rounded-none" />
      <div className="p-6">
        <Skeleton className="h-6 w-3/4 mb-3" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-2/3 mb-4" />
        <div className="flex gap-2">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-14 rounded-full" />
        </div>
      </div>
    </div>
  );
}

// Projects grid skeleton
export function ProjectsGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: count }).map((_, i) => (
        <ProjectCardSkeleton key={i} />
      ))}
    </div>
  );
}

// Team member skeleton
export function TeamMemberSkeleton() {
  return (
    <div className="bg-[var(--card)] rounded-2xl overflow-hidden border border-[var(--border)]">
      <Skeleton className="h-72 w-full rounded-none" />
      <div className="p-6">
        <Skeleton className="h-6 w-2/3 mb-2" />
        <Skeleton className="h-4 w-1/2 mb-3" />
        <Skeleton className="h-4 w-full" />
      </div>
    </div>
  );
}

// Job listing skeleton
export function JobListingSkeleton() {
  return (
    <div className="bg-[var(--card)] rounded-2xl p-6 border border-[var(--border)]">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <Skeleton className="h-6 w-1/2 mb-3" />
          <div className="flex gap-4">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-20" />
          </div>
        </div>
        <Skeleton className="w-10 h-10 rounded-full" />
      </div>
    </div>
  );
}

// Form skeleton
export function FormSkeleton() {
  return (
    <div className="bg-[var(--card)] rounded-3xl p-8 border border-[var(--border)]">
      <Skeleton className="h-8 w-1/2 mb-2" />
      <Skeleton className="h-4 w-3/4 mb-8" />
      <div className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <Skeleton className="h-12 w-full rounded-xl" />
          <Skeleton className="h-12 w-full rounded-xl" />
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          <Skeleton className="h-12 w-full rounded-xl" />
          <Skeleton className="h-12 w-full rounded-xl" />
        </div>
        <Skeleton className="h-32 w-full rounded-xl" />
        <Skeleton className="h-12 w-40 rounded-xl" />
      </div>
    </div>
  );
}

// Page header skeleton
export function PageHeaderSkeleton() {
  return (
    <div className="pt-32 pb-20 text-center">
      <Skeleton className="h-8 w-32 mx-auto mb-6 rounded-full" />
      <Skeleton className="h-14 w-2/3 mx-auto mb-6" />
      <Skeleton className="h-6 w-1/2 mx-auto" />
    </div>
  );
}

// Section title skeleton
export function SectionTitleSkeleton() {
  return (
    <div className="text-center mb-12">
      <Skeleton className="h-6 w-24 mx-auto mb-4 rounded-full" />
      <Skeleton className="h-10 w-1/2 mx-auto mb-4" />
      <Skeleton className="h-1 w-20 mx-auto mb-6" />
      <Skeleton className="h-5 w-2/3 mx-auto" />
    </div>
  );
}

// Stats section skeleton
export function StatsSkeleton() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0066FF] to-[#8B5CF6]">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="text-center">
              <Skeleton className="h-16 w-24 mx-auto mb-2 bg-white/20" />
              <Skeleton className="h-4 w-20 mx-auto bg-white/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials section skeleton
export function TestimonialsSkeleton() {
  return (
    <section className="section-padding bg-[var(--muted)]">
      <div className="container-custom">
        <SectionTitleSkeleton />
        <div className="max-w-4xl mx-auto">
          <div className="bg-[var(--card)] rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="flex gap-1 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="w-5 h-5" />
              ))}
            </div>
            <Skeleton className="h-6 w-full mb-2" />
            <Skeleton className="h-6 w-5/6 mb-2" />
            <Skeleton className="h-6 w-4/6 mb-8" />
            <div className="flex items-center gap-4">
              <Skeleton className="w-14 h-14 rounded-full" />
              <div>
                <Skeleton className="h-5 w-32 mb-2" />
                <Skeleton className="h-4 w-40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
