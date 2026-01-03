// FAQ section for careers page
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { careersFAQ } from '@/data/site-data';
import { SectionTitle } from '@/components/ui';
import { FadeInUp } from '@/components/animations/AnimatedComponents';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-[var(--muted)]">
      <div className="container-custom">
        <SectionTitle
          badge="FAQ"
          title="Frequently Asked Questions"
          subtitle="Got questions about working at Euphentrix? We've got answers."
        />

        <div className="max-w-3xl mx-auto space-y-4">
          {careersFAQ.map((faq, index) => (
            <FadeInUp key={index} delay={index * 0.05}>
              <motion.div
                className="bg-[var(--card)] rounded-2xl border border-[var(--border)] shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4"
                >
                  <h3 className="text-lg font-semibold text-[var(--foreground)] pr-4">
                    {faq.question}
                  </h3>

                  <motion.div
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#0066FF]/10 to-[#8B5CF6]/10 flex items-center justify-center"
                  >
                    {openIndex === index ? (
                      <FiMinus className="w-5 h-5 text-[#0066FF]" />
                    ) : (
                      <FiPlus className="w-5 h-5 text-[#0066FF]" />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-[var(--muted-foreground)] leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
