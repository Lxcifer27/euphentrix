// CTA (Call to Action) section
'use client';

import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { Button } from '@/components/ui';
import { FadeInUp } from '@/components/animations/AnimatedComponents';

export function CTASection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 gradient-bg" />

          {/* Decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-20 -right-20 w-80 h-80 border border-white/10 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              className="absolute -bottom-20 -left-20 w-60 h-60 border border-white/10 rounded-full"
            />
            <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-white/20 rounded-full" />
            <div className="absolute top-1/4 right-1/3 w-3 h-3 bg-white/20 rounded-full" />
          </div>

          {/* Content */}
          <div className="relative z-10 py-16 md:py-24 px-8 md:px-16 text-center">
            <FadeInUp>
              <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
                Let's Build Something Amazing
              </span>
            </FadeInUp>

            <FadeInUp delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto leading-tight">
                Ready to Transform Your Business with Technology?
              </h2>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
                Whether you're looking to build a new product, scale your existing systems,
                or explore emerging technologies, we're here to help you succeed.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  href="/contact"
                  size="lg"
                  className="bg-white text-[#0066FF] hover:bg-white/90"
                >
                  Start a Project
                  <FiArrowRight className="w-5 h-5" />
                </Button>

                <Button
                  href="/services"
                  variant="ghost"
                  size="lg"
                  className="text-white border-2 border-white/30 hover:bg-white/10"
                >
                  Explore Services
                </Button>
              </div>
            </FadeInUp>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
