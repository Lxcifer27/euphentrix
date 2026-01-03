// Optimized Image component with blur placeholder and loading states
'use client';

import Image, { ImageProps } from 'next/image';
import { useState, memo } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad'> {
  containerClassName?: string;
  showSkeleton?: boolean;
}

// Blur data URL for placeholder (tiny 1x1 pixel)
const shimmerBlur = `data:image/svg+xml;base64,${Buffer.from(
  `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#f1f5f9"/>
        <stop offset="50%" style="stop-color:#e2e8f0"/>
        <stop offset="100%" style="stop-color:#f1f5f9"/>
      </linearGradient>
    </defs>
    <rect width="100" height="100" fill="url(#g)"/>
  </svg>`
).toString('base64')}`;

function OptimizedImageComponent({
  src,
  alt,
  className,
  containerClassName,
  showSkeleton = true,
  priority = false,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={cn('relative overflow-hidden', containerClassName)}>
      {/* Skeleton loader */}
      {showSkeleton && isLoading && !hasError && (
        <div
          className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 animate-pulse"
          aria-hidden="true"
        />
      )}

      {/* Error fallback */}
      {hasError ? (
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <span className="text-gray-400 text-sm">Image unavailable</span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          className={cn(
            'transition-opacity duration-500',
            isLoading ? 'opacity-0' : 'opacity-100',
            className
          )}
          placeholder="blur"
          blurDataURL={shimmerBlur}
          priority={priority}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          {...props}
        />
      )}
    </div>
  );
}

// Memoize to prevent unnecessary re-renders
export const OptimizedImage = memo(OptimizedImageComponent);

// Avatar component for team members and testimonials
interface AvatarProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const avatarSizes = {
  sm: 'w-10 h-10',
  md: 'w-14 h-14',
  lg: 'w-20 h-20',
  xl: 'w-24 h-24',
};

const avatarPixels = {
  sm: 40,
  md: 56,
  lg: 80,
  xl: 96,
};

function AvatarComponent({ src, alt, size = 'md', className }: AvatarProps) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={avatarPixels[size]}
      height={avatarPixels[size]}
      className={cn('rounded-full object-cover', avatarSizes[size], className)}
      containerClassName={cn('rounded-full', avatarSizes[size])}
    />
  );
}

export const Avatar = memo(AvatarComponent);
