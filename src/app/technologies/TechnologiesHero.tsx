// Technologies page hero
'use client';

import { motion } from 'framer-motion';

export function TechnologiesHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#0066FF]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#8B5CF6]/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#0066FF]/10 to-[#8B5CF6]/10 text-[#0066FF] dark:text-blue-400 text-sm font-semibold mb-6"
          >
            Tech Stack
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--foreground)] mb-6"
          >
            Cutting-Edge <span className="gradient-text">Technologies</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto"
          >
            We leverage the latest technologies and frameworks to build scalable,
            performant, and future-proof solutions for our clients.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
