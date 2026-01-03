// Tech stack display section
'use client';

import { motion } from 'framer-motion';
import { allTechnologies, technologies } from '@/data/site-data';
import { SectionTitle } from '@/components/ui';
import { StaggerContainer, StaggerItem, FadeInUp } from '@/components/animations/AnimatedComponents';

export function TechStack() {
  const categories = Object.entries(technologies);

  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* All technologies floating display */}
        <FadeInUp className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Technologies We <span className="gradient-text">Master</span>
            </h2>
            <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto">
              Our team is proficient in a wide range of technologies, enabling us to choose
              the best tools for each unique project.
            </p>
          </div>

          {/* Floating tech icons */}
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {allTechnologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="group relative"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[var(--card)] border border-[var(--border)] shadow-lg flex items-center justify-center transition-all duration-300 group-hover:shadow-xl group-hover:border-[#0066FF]/30">
                    <IconComponent
                      className="w-8 h-8 md:w-10 md:h-10 transition-colors duration-300"
                      style={{ color: tech.color }}
                    />
                  </div>

                  {/* Tooltip */}
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg bg-[var(--foreground)] text-[var(--background)] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {tech.name}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </FadeInUp>

        {/* Categorized technologies */}
        <div className="space-y-16">
          {categories.map(([key, category]) => (
            <div key={key}>
              <FadeInUp>
                <h3 className="text-2xl font-bold text-[var(--foreground)] mb-8 text-center">
                  {category.title}
                </h3>
              </FadeInUp>

              <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.items.map((tech) => {
                  const IconComponent = tech.icon;
                  return (
                    <StaggerItem key={tech.name}>
                      <motion.div
                        whileHover={{ y: -8, scale: 1.05 }}
                        className="bg-[var(--card)] rounded-2xl p-6 border border-[var(--border)] shadow-lg text-center group"
                      >
                        <div className="mb-4 flex justify-center">
                          <IconComponent
                            className="w-12 h-12 transition-transform duration-300 group-hover:scale-110"
                            style={{ color: tech.color }}
                          />
                        </div>
                        <h4 className="font-semibold text-[var(--foreground)]">
                          {tech.name}
                        </h4>
                      </motion.div>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </div>
          ))}
        </div>

        {/* Why these technologies */}
        <FadeInUp className="mt-24">
          <div className="bg-gradient-to-br from-[#0066FF]/5 to-[#8B5CF6]/5 rounded-3xl p-8 md:p-12 border border-[var(--border)]">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-6">
                Why We Choose These Technologies
              </h3>
              <p className="text-[var(--muted-foreground)] leading-relaxed mb-8">
                We carefully select our technology stack based on performance, scalability,
                developer experience, and long-term maintainability. Our team continuously
                evaluates new technologies to ensure we're always using the best tools for
                the job.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Performance',
                    description: 'Optimized for speed and efficiency',
                  },
                  {
                    title: 'Scalability',
                    description: 'Built to grow with your business',
                  },
                  {
                    title: 'Reliability',
                    description: 'Battle-tested and production-ready',
                  },
                ].map((item) => (
                  <div key={item.title} className="text-center">
                    <h4 className="font-semibold text-[var(--foreground)] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-[var(--muted-foreground)]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
