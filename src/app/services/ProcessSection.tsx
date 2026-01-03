// Development process section
'use client';

import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/ui';
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/animations/AnimatedComponents';

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We start by understanding your business, goals, and requirements through in-depth discussions and research.',
  },
  {
    number: '02',
    title: 'Planning',
    description:
      'Our team creates a detailed project roadmap, including timelines, milestones, and technical specifications.',
  },
  {
    number: '03',
    title: 'Design',
    description:
      'We craft intuitive user experiences and stunning visual designs that align with your brand identity.',
  },
  {
    number: '04',
    title: 'Development',
    description:
      'Our engineers build your solution using best practices, clean code, and cutting-edge technologies.',
  },
  {
    number: '05',
    title: 'Testing',
    description:
      'Rigorous quality assurance ensures your product is bug-free, secure, and performs flawlessly.',
  },
  {
    number: '06',
    title: 'Launch & Support',
    description:
      'We deploy your solution and provide ongoing maintenance, updates, and technical support.',
  },
];

export function ProcessSection() {
  return (
    <section className="section-padding bg-[var(--muted)]">
      <div className="container-custom">
        <SectionTitle
          badge="Our Process"
          title="How We Work"
          subtitle="Our proven development process ensures successful project delivery every time."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <StaggerItem key={step.number}>
              <motion.div
                whileHover={{ y: -8 }}
                className="relative bg-[var(--card)] rounded-2xl p-8 border border-[var(--border)] shadow-lg group"
              >
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-[#0066FF] to-[#8B5CF6] flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {step.number}
                </div>

                {/* Connector line */}
                {index < processSteps.length - 1 && index !== 2 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#0066FF] to-[#8B5CF6]" />
                )}

                <div className="pt-4">
                  <h3 className="text-xl font-bold text-[var(--foreground)] mb-3 group-hover:text-[#0066FF] dark:group-hover:text-blue-400 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-[var(--muted-foreground)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
