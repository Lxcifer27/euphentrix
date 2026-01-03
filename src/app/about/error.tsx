'use client';

import { ErrorBoundary } from '@/components/ui/ErrorBoundary';

export default function AboutError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <ErrorBoundary
      error={error}
      reset={reset}
      title="Unable to load About page"
      description="We couldn't load the About page. Please try again or explore other sections of our site."
    />
  );
}
