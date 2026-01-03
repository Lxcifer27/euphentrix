'use client';

import { ErrorBoundary } from '@/components/ui/ErrorBoundary';

export default function Error({
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
      title="Oops! Something went wrong"
      description="We encountered an unexpected error. Please try refreshing the page or return to the homepage."
    />
  );
}
