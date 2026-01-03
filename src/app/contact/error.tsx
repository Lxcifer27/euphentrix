'use client';

import { ErrorBoundary } from '@/components/ui/ErrorBoundary';

export default function ContactError({
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
      title="Unable to load Contact page"
      description="We couldn't load the contact page. Please try again or reach us directly at hello@euphentrix.com."
    />
  );
}
