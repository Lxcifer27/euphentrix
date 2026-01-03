'use client';

import { ErrorBoundary } from '@/components/ui/ErrorBoundary';

export default function CareersError({
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
      title="Unable to load Careers"
      description="We couldn't load our career opportunities. Please try again or email us at careers@euphentrix.com."
    />
  );
}
