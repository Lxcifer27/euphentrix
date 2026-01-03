// Reusable Button component with multiple variants and animations
'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import Link from 'next/link';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  href?: string;
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  href,
  className,
  isLoading,
  disabled,
  type = 'button',
  onClick,
}: ButtonProps) {
  const baseStyles = `
    relative inline-flex items-center justify-center font-semibold
    transition-all duration-300 ease-out
    focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    overflow-hidden
  `;

  const variants = {
    primary: `
      bg-gradient-to-r from-[#0066FF] to-[#0052CC]
      text-white shadow-lg shadow-blue-500/25
      hover:shadow-xl hover:shadow-blue-500/30
      focus-visible:ring-blue-500
    `,
    secondary: `
      bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED]
      text-white shadow-lg shadow-purple-500/25
      hover:shadow-xl hover:shadow-purple-500/30
      focus-visible:ring-purple-500
    `,
    outline: `
      border-2 border-[#0066FF] text-[#0066FF]
      dark:border-blue-400 dark:text-blue-400
      hover:bg-[#0066FF] hover:text-white
      dark:hover:bg-blue-500 dark:hover:text-white
      focus-visible:ring-blue-500
    `,
    ghost: `
      text-gray-700 dark:text-gray-300
      hover:bg-gray-100 dark:hover:bg-gray-800
      focus-visible:ring-gray-500
    `,
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg rounded-xl',
  };

  const combinedClassName = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <>
      {/* Shimmer effect on hover */}
      <span className="absolute inset-0 overflow-hidden rounded-inherit">
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700" />
      </span>

      {/* Loading spinner */}
      {isLoading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}

      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn(combinedClassName, 'group')}>
        <motion.span
          className="contents"
          whileHover={disabled ? {} : { scale: 1.02 }}
          whileTap={disabled ? {} : { scale: 0.98 }}
        >
          {content}
        </motion.span>
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      className={cn(combinedClassName, 'group')}
      disabled={disabled || isLoading}
      onClick={onClick}
      whileHover={disabled ? {} : { scale: 1.02, y: -2 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {content}
    </motion.button>
  );
}
