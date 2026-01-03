'use client';

import { ErrorBoundary } from '@/components/ui/ErrorBoundary';

export default function PortfolioError({
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
      title="Unable to load Portfolio"
      description="We couldn't load our portfolio. Please try again to see our amazing work."
    />
  );
}
