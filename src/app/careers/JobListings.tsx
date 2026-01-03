// Job listings section
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMapPin, FiBriefcase, FiClock, FiChevronDown, FiCheck, FiArrowRight } from 'react-icons/fi';
import { jobListings } from '@/data/site-data';
import { SectionTitle, Button } from '@/components/ui';
import { FadeInUp } from '@/components/animations/AnimatedComponents';

export function JobListings() {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  const toggleJob = (id: string) => {
    setExpandedJob(expandedJob === id ? null : id);
  };

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionTitle
          badge="Open Positions"
          title="Current Opportunities"
          subtitle="Find your perfect role and start your journey with us."
        />

        <div className="max-w-4xl mx-auto space-y-4">
          {jobListings.map((job, index) => (
            <FadeInUp key={job.id} delay={index * 0.05}>
              <motion.div
                className="bg-[var(--card)] rounded-2xl border border-[var(--border)] shadow-lg overflow-hidden"
                initial={false}
              >
                {/* Job Header */}
                <button
                  onClick={() => toggleJob(job.id)}
                  className="w-full p-6 text-left flex items-start justify-between gap-4"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-[var(--foreground)]">
                        {job.title}
                      </h3>
                      <span className="px-3 py-1 rounded-full bg-[#10B981]/10 text-[#10B981] text-xs font-medium">
                        {job.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-[var(--muted-foreground)]">
                      <span className="flex items-center gap-1">
                        <FiBriefcase className="w-4 h-4" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiMapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiClock className="w-4 h-4" />
                        {job.experience}
                      </span>
                    </div>
                  </div>

                  <motion.div
                    animate={{ rotate: expandedJob === job.id ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--muted)] flex items-center justify-center"
                  >
                    <FiChevronDown className="w-5 h-5 text-[var(--muted-foreground)]" />
                  </motion.div>
                </button>

                {/* Job Details */}
                <AnimatePresence>
                  {expandedJob === job.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 border-t border-[var(--border)] pt-6">
                        <p className="text-[var(--muted-foreground)] mb-6">
                          {job.description}
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                          {/* Requirements */}
                          <div>
                            <h4 className="font-semibold text-[var(--foreground)] mb-4">
                              Requirements
                            </h4>
                            <ul className="space-y-2">
                              {job.requirements.map((req, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2 text-sm text-[var(--muted-foreground)]"
                                >
                                  <FiCheck className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                                  <span>{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Benefits */}
                          <div>
                            <h4 className="font-semibold text-[var(--foreground)] mb-4">
                              What We Offer
                            </h4>
                            <ul className="space-y-2">
                              {job.benefits.map((benefit, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2 text-sm text-[var(--muted-foreground)]"
                                >
                                  <FiCheck className="w-4 h-4 text-[#0066FF] flex-shrink-0 mt-0.5" />
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="mt-8">
                          <Button href={`/contact?position=${encodeURIComponent(job.title)}`}>
                            Apply Now
                            <FiArrowRight className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </FadeInUp>
          ))}
        </div>

        {/* Don't see a fit */}
        <FadeInUp className="mt-12 text-center">
          <div className="bg-gradient-to-br from-[#0066FF]/5 to-[#8B5CF6]/5 rounded-2xl p-8 border border-[var(--border)] max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-[var(--foreground)] mb-3">
              Don't See a Role That Fits?
            </h3>
            <p className="text-[var(--muted-foreground)] mb-6">
              We're always looking for talented individuals. Send us your resume and we'll
              keep you in mind for future opportunities.
            </p>
            <Button href="/contact" variant="outline">
              Send Open Application
            </Button>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
