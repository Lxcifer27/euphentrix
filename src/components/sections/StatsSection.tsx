// Stats section with animated counters
'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';
import { stats } from '@/data/site-data';
import { FadeInUp } from '@/components/animations/AnimatedComponents';

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg opacity-90" />

      {/* Noise overlay for texture */}
      <div className="absolute inset-0 noise-overlay opacity-10" />

      <div className="container-custom relative z-10" ref={ref}>
        <FadeInUp className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Numbers That Speak For Themselves
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Years of excellence in delivering exceptional digital solutions
          </p>
        </FadeInUp>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                {isInView && (
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    suffix={stat.suffix}
                  />
                )}
              </div>
              <p className="text-white/80 text-sm md:text-base font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
