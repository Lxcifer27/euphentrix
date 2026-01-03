'use client';

import { ErrorBoundary } from '@/components/ui/ErrorBoundary';

export default function ServicesError({
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
      title="Unable to load Services"
      description="We couldn't load our services information. Please try again or contact us directly for assistance."
    />
  );
}
