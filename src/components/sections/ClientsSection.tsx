// Client logos carousel section
'use client';

import { motion } from 'framer-motion';
import { FadeInUp } from '@/components/animations/AnimatedComponents';

// Placeholder client logos
const clientLogos = [
  { name: 'TechCorp', color: '#0066FF' },
  { name: 'InnovateLab', color: '#8B5CF6' },
  { name: 'DataFlow', color: '#10B981' },
  { name: 'CloudNine', color: '#F59E0B' },
  { name: 'SmartSystems', color: '#EC4899' },
  { name: 'NextGen', color: '#6366F1' },
  { name: 'FutureScale', color: '#14B8A6' },
  { name: 'DigiPro', color: '#F43F5E' },
];

export function ClientsSection() {
  // Double the logos for infinite scroll effect
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="py-16 overflow-hidden">
      <div className="container-custom">
        <FadeInUp className="text-center mb-12">
          <p className="text-sm font-semibold text-[var(--muted-foreground)] uppercase tracking-wider mb-2">
            Trusted By Industry Leaders
          </p>
          <h3 className="text-xl md:text-2xl font-bold text-[var(--foreground)]">
            Companies We've Worked With
          </h3>
        </FadeInUp>
      </div>

      {/* Infinite scroll carousel */}
      <div className="relative">
        {/* Gradient overlays for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--background)] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--background)] to-transparent z-10" />

        <motion.div
          animate={{
            x: [0, -50 * clientLogos.length],
          }}
          transition={{
            x: {
              duration: 20,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear',
            },
          }}
          className="flex gap-12 items-center"
        >
          {duplicatedLogos.map((client, index) => (
            <motion.div
              key={`${client.name}-${index}`}
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 px-8 py-4 rounded-xl bg-[var(--card)] border border-[var(--border)] min-w-[180px]"
            >
              <div className="flex items-center justify-center gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg"
                  style={{ backgroundColor: client.color }}
                >
                  {client.name[0]}
                </div>
                <span className="font-semibold text-[var(--foreground)]">
                  {client.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
