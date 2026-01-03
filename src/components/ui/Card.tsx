// Reusable Card component with hover effects
'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export function Card({
  children,
  className,
  hover = true,
  glass = false,
  padding = 'md',
}: CardProps) {
  const paddingStyles = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <motion.div
      whileHover={hover ? { y: -8, scale: 1.01 } : {}}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'rounded-2xl transition-all duration-300',
        paddingStyles[padding],
        glass
          ? 'glass'
          : 'bg-[var(--card)] border border-[var(--border)] shadow-lg',
        hover && 'hover:shadow-xl hover:shadow-blue-500/10',
        className
      )}
    >
      {children}
    </motion.div>
  );
}

// Card with image
interface ImageCardProps {
  image: string;
  alt: string;
  children: ReactNode;
  className?: string;
  imageClassName?: string;
}

export function ImageCard({
  image,
  alt,
  children,
  className,
  imageClassName,
}: ImageCardProps) {
  return (
    <Card className={cn('overflow-hidden p-0', className)} padding="none">
      <div className={cn('relative overflow-hidden', imageClassName)}>
        <motion.img
          src={image}
          alt={alt}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      <div className="p-6">{children}</div>
    </Card>
  );
}

// Feature card with icon
interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <Card className={cn('group', className)}>
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0066FF] to-[#8B5CF6] flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-[var(--card-foreground)]">
        {title}
      </h3>
      <p className="text-[var(--muted-foreground)] leading-relaxed">
        {description}
      </p>
    </Card>
  );
}

// Stats card with animated counter
interface StatsCardProps {
  value: string | number;
  label: string;
  suffix?: string;
  className?: string;
}

export function StatsCard({ value, label, suffix, className }: StatsCardProps) {
  return (
    <div
      className={cn(
        'text-center p-6 rounded-2xl bg-gradient-to-br from-[#0066FF]/10 to-[#8B5CF6]/10 border border-[var(--border)]',
        className
      )}
    >
      <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
        {value}
        {suffix}
      </div>
      <p className="text-[var(--muted-foreground)] font-medium">{label}</p>
    </div>
  );
}
