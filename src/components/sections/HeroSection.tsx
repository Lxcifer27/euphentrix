// Hero section with animated background and typewriter effect
'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiPlay } from 'react-icons/fi';
import { Button } from '@/components/ui';
import { siteConfig } from '@/data/site-data';

const heroWords = ['Innovate', 'Transform', 'Scale', 'Succeed'];

// Deterministic particle positions to avoid hydration mismatch
const particlePositions = [
  { left: 5, top: 10, duration: 3.2, delay: 0.1 },
  { left: 15, top: 25, duration: 4.1, delay: 0.5 },
  { left: 25, top: 8, duration: 3.5, delay: 1.2 },
  { left: 35, top: 45, duration: 4.8, delay: 0.3 },
  { left: 45, top: 15, duration: 3.9, delay: 1.8 },
  { left: 55, top: 55, duration: 4.2, delay: 0.7 },
  { left: 65, top: 30, duration: 3.1, delay: 1.5 },
  { left: 75, top: 70, duration: 4.5, delay: 0.9 },
  { left: 85, top: 20, duration: 3.8, delay: 1.1 },
  { left: 92, top: 50, duration: 4.0, delay: 0.4 },
  { left: 10, top: 65, duration: 3.6, delay: 1.7 },
  { left: 20, top: 80, duration: 4.3, delay: 0.2 },
  { left: 30, top: 60, duration: 3.4, delay: 1.4 },
  { left: 40, top: 75, duration: 4.7, delay: 0.6 },
  { left: 50, top: 85, duration: 3.3, delay: 1.9 },
  { left: 60, top: 40, duration: 4.4, delay: 0.8 },
  { left: 70, top: 90, duration: 3.7, delay: 1.3 },
  { left: 80, top: 35, duration: 4.6, delay: 1.0 },
  { left: 88, top: 78, duration: 3.0, delay: 1.6 },
  { left: 95, top: 5, duration: 4.9, delay: 0.0 },
];

export function HeroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % heroWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#0066FF]/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#8B5CF6]/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-[#EC4899]/10 rounded-full blur-[100px]"
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-50" />

        {/* Floating particles */}
        {particlePositions.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-[#0066FF]/30"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#0066FF]/10 to-[#8B5CF6]/10 border border-[#0066FF]/20 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0066FF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0066FF]"></span>
            </span>
            <span className="text-sm font-medium text-[#0066FF] dark:text-blue-400">
              Trusted by 150+ companies worldwide
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--foreground)] mb-6 leading-tight"
          >
            We Help Businesses
            <br />
            <span className="relative inline-block">
              <motion.span
                key={currentWordIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="gradient-text"
              >
                {heroWords[currentWordIndex]}
              </motion.span>
              <motion.span
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#0066FF] to-[#8B5CF6]"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                key={`line-${currentWordIndex}`}
                transition={{ duration: 2, ease: 'linear' }}
              />
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-[var(--muted-foreground)] mb-6 max-w-2xl mx-auto"
          >
            {siteConfig.tagline}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base md:text-lg text-[var(--muted-foreground)] mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            We are a full-service IT company delivering cutting-edge digital solutions
            that transform businesses and drive sustainable growth through innovative technology.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button href="/contact" size="lg">
              Start Your Project
              <FiArrowRight className="w-5 h-5" />
            </Button>

            <Button href="/portfolio" variant="outline" size="lg">
              <FiPlay className="w-5 h-5" />
              View Our Work
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 rounded-full border-2 border-[var(--muted-foreground)] flex items-start justify-center p-2"
            >
              <motion.div
                animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-2 bg-[var(--muted-foreground)] rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
