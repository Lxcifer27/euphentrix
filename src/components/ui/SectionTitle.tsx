// Section title component with animated underline
'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { FadeInUp } from '@/components/animations/AnimatedComponents';

interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionTitle({
  badge,
  title,
  subtitle,
  centered = true,
  className,
}: SectionTitleProps) {
  return (
    <FadeInUp className={cn(centered && 'text-center', 'mb-12 md:mb-16', className)}>
      {badge && (
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-[#0066FF]/10 to-[#8B5CF6]/10 text-[#0066FF] dark:text-blue-400 mb-4"
        >
          {badge}
        </motion.span>
      )}

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-4">
        {title.split(' ').map((word, i) => (
          <span key={i}>
            {i === title.split(' ').length - 1 || i === title.split(' ').length - 2 ? (
              <span className="gradient-text">{word} </span>
            ) : (
              <span>{word} </span>
            )}
          </span>
        ))}
      </h2>

      {/* Animated underline */}
      <motion.div
        className={cn(
          'h-1 rounded-full bg-gradient-to-r from-[#0066FF] via-[#8B5CF6] to-[#EC4899]',
          centered ? 'mx-auto' : ''
        )}
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />

      {subtitle && (
        <p className={cn(
          'mt-6 text-lg text-[var(--muted-foreground)] max-w-2xl leading-relaxed',
          centered && 'mx-auto'
        )}>
          {subtitle}
        </p>
      )}
    </FadeInUp>
  );
}
