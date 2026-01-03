'use client';

import { ErrorBoundary } from '@/components/ui/ErrorBoundary';

export default function TechnologiesError({
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
      title="Unable to load Technologies"
      description="We couldn't load our technology stack. Please try again to explore our expertise."
    />
  );
}
