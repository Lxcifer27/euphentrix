// Animation utilities with reduced-motion support
'use client';

import { useEffect, useState, useMemo } from 'react';
import { Variants, TargetAndTransition, Transition } from 'framer-motion';

// Hook to detect reduced motion preference
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return prefersReducedMotion;
}

// Standard easing curves for consistent animations
export const easings = {
  easeOutExpo: [0.16, 1, 0.3, 1] as const,
  easeOutQuart: [0.25, 1, 0.5, 1] as const,
  easeInOutQuart: [0.76, 0, 0.24, 1] as const,
  spring: { type: 'spring', stiffness: 300, damping: 30 } as const,
};

// Optimized animation variants with reduced motion fallbacks
export const fadeInUp = (reducedMotion: boolean): Variants => ({
  hidden: {
    opacity: 0,
    y: reducedMotion ? 0 : 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: reducedMotion ? 0.1 : 0.5,
      ease: easings.easeOutExpo,
    },
  },
});

export const fadeIn = (reducedMotion: boolean): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: reducedMotion ? 0.1 : 0.4,
    },
  },
});

export const staggerContainer = (reducedMotion: boolean): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: reducedMotion ? 0 : 0.08,
      delayChildren: reducedMotion ? 0 : 0.1,
    },
  },
});

export const staggerItem = (reducedMotion: boolean): Variants => ({
  hidden: {
    opacity: 0,
    y: reducedMotion ? 0 : 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: reducedMotion ? 0.1 : 0.4,
      ease: easings.easeOutQuart,
    },
  },
});

export const scaleIn = (reducedMotion: boolean): Variants => ({
  hidden: {
    opacity: 0,
    scale: reducedMotion ? 1 : 0.95
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: reducedMotion ? 0.1 : 0.4,
      ease: easings.easeOutExpo,
    },
  },
});

// Hover animations with reduced motion support
export const hoverScale = (reducedMotion: boolean): TargetAndTransition =>
  reducedMotion ? {} : { scale: 1.02, y: -4 };

export const hoverGlow = (reducedMotion: boolean): TargetAndTransition =>
  reducedMotion ? {} : {
    boxShadow: '0 20px 40px -10px rgba(0, 102, 255, 0.2)'
  };

export const tapScale: TargetAndTransition = { scale: 0.98 };

// Transition presets
export const defaultTransition: Transition = {
  duration: 0.3,
  ease: easings.easeOutQuart,
};

export const springTransition: Transition = {
  type: 'spring',
  stiffness: 400,
  damping: 30,
};

// Viewport settings for scroll animations
export const viewportOnce = { once: true, margin: '-100px' };
export const viewportAlways = { once: false, margin: '-50px' };
