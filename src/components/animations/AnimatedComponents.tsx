// Animated wrapper components with reduced-motion support
'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode, useMemo } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useReducedMotion } from '@/lib/animations';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  threshold?: number;
}

// Factory for creating reduced-motion aware variants
function createFadeUpVariants(reducedMotion: boolean, delay: number): Variants {
  return {
    hidden: { opacity: 0, y: reducedMotion ? 0 : 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reducedMotion ? 0.1 : 0.7,
        delay: reducedMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
}

function createFadeLeftVariants(reducedMotion: boolean, delay: number): Variants {
  return {
    hidden: { opacity: 0, x: reducedMotion ? 0 : -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: reducedMotion ? 0.1 : 0.7,
        delay: reducedMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
}

function createFadeRightVariants(reducedMotion: boolean, delay: number): Variants {
  return {
    hidden: { opacity: 0, x: reducedMotion ? 0 : 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: reducedMotion ? 0.1 : 0.7,
        delay: reducedMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
}

function createScaleVariants(reducedMotion: boolean, delay: number): Variants {
  return {
    hidden: { opacity: 0, scale: reducedMotion ? 1 : 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: reducedMotion ? 0.1 : 0.6,
        delay: reducedMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
}

// Fade in from bottom animation
export function FadeInUp({
  children,
  className,
  delay = 0,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const { ref, controls } = useScrollAnimation({ threshold });
  const reducedMotion = useReducedMotion();
  const variants = useMemo(
    () => createFadeUpVariants(reducedMotion, delay),
    [reducedMotion, delay]
  );

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Fade in from left animation
export function FadeInLeft({
  children,
  className,
  delay = 0,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const { ref, controls } = useScrollAnimation({ threshold });
  const reducedMotion = useReducedMotion();
  const variants = useMemo(
    () => createFadeLeftVariants(reducedMotion, delay),
    [reducedMotion, delay]
  );

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Fade in from right animation
export function FadeInRight({
  children,
  className,
  delay = 0,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const { ref, controls } = useScrollAnimation({ threshold });
  const reducedMotion = useReducedMotion();
  const variants = useMemo(
    () => createFadeRightVariants(reducedMotion, delay),
    [reducedMotion, delay]
  );

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Scale in animation
export function ScaleIn({
  children,
  className,
  delay = 0,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const { ref, controls } = useScrollAnimation({ threshold });
  const reducedMotion = useReducedMotion();
  const variants = useMemo(
    () => createScaleVariants(reducedMotion, delay),
    [reducedMotion, delay]
  );

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger container for animating children in sequence
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  threshold?: number;
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
  threshold = 0.1,
}: StaggerContainerProps) {
  const { ref, controls } = useScrollAnimation({ threshold });
  const reducedMotion = useReducedMotion();

  const variants = useMemo<Variants>(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: reducedMotion ? 0 : staggerDelay,
          delayChildren: reducedMotion ? 0 : 0.1,
        },
      },
    }),
    [reducedMotion, staggerDelay]
  );

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger item for use inside StaggerContainer
interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  const reducedMotion = useReducedMotion();

  const variants = useMemo<Variants>(
    () => ({
      hidden: { opacity: 0, y: reducedMotion ? 0 : 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: reducedMotion ? 0.1 : 0.5,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    }),
    [reducedMotion]
  );

  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
}

// Parallax effect component (disabled for reduced motion)
interface ParallaxProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

export function Parallax({ children, className, speed = 0.5 }: ParallaxProps) {
  const reducedMotion = useReducedMotion();

  // Skip parallax effect for reduced motion
  if (reducedMotion) {
    return <div className={cn('relative', className)}>{children}</div>;
  }

  return (
    <motion.div
      className={cn('relative', className)}
      initial={{ y: 0 }}
      whileInView={{ y: -100 * speed }}
      viewport={{ once: false, amount: 0 }}
      transition={{ duration: 0 }}
      style={{ willChange: 'transform' }}
    >
      {children}
    </motion.div>
  );
}

// Text reveal animation
interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export function TextReveal({ text, className, delay = 0 }: TextRevealProps) {
  const { ref, controls } = useScrollAnimation();
  const reducedMotion = useReducedMotion();

  const words = text.split(' ');

  // Simple render for reduced motion
  if (reducedMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <motion.span
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.05,
            delayChildren: delay,
          },
        },
        hidden: {},
      }}
      className={className}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            variants={{
              hidden: { y: '100%', opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
            className="inline-block"
          >
            {word}
            {i < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

// Animated section with custom variants
export function AnimatedSection({
  children,
  className,
  variants,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const { ref, controls } = useScrollAnimation({ threshold });
  const reducedMotion = useReducedMotion();

  const defaultVariants = useMemo<Variants>(
    () => ({
      hidden: { opacity: 0, y: reducedMotion ? 0 : 60 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: reducedMotion ? 0.1 : 0.7,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    }),
    [reducedMotion]
  );

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants || defaultVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
