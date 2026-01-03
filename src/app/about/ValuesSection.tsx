// Company values section
'use client';

import { motion } from 'framer-motion';
import { FiTarget, FiHeart, FiUsers, FiZap, FiShield, FiTrendingUp } from 'react-icons/fi';
import { SectionTitle, Card } from '@/components/ui';
import { StaggerContainer, StaggerItem } from '@/components/animations/AnimatedComponents';

const values = [
  {
    icon: FiTarget,
    title: 'Innovation First',
    description:
      'We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.',
  },
  {
    icon: FiHeart,
    title: 'Client-Centric',
    description:
      'Your success is our priority. We listen, understand, and deliver solutions that exceed expectations.',
  },
  {
    icon: FiUsers,
    title: 'Collaboration',
    description:
      'We believe in the power of teamwork, both within our team and with our clients.',
  },
  {
    icon: FiZap,
    title: 'Excellence',
    description:
      'We hold ourselves to the highest standards in everything we do, from code quality to customer service.',
  },
  {
    icon: FiShield,
    title: 'Integrity',
    description:
      'Transparency, honesty, and ethical practices are the foundation of all our relationships.',
  },
  {
    icon: FiTrendingUp,
    title: 'Growth Mindset',
    description:
      'We continuously learn and evolve, helping our team and clients grow together.',
  },
];

export function ValuesSection() {
  return (
    <section className="section-padding bg-[var(--muted)]">
      <div className="container-custom">
        <SectionTitle
          badge="Our Values"
          title="What Drives Us Forward"
          subtitle="These core values guide everything we do and define who we are as a company."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value) => (
            <StaggerItem key={value.title}>
              <Card className="h-full group">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0066FF]/10 to-[#8B5CF6]/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#0066FF] group-hover:to-[#8B5CF6] transition-all duration-300">
                  <value.icon className="w-7 h-7 text-[#0066FF] dark:text-blue-400 group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-[var(--foreground)] mb-3">
                  {value.title}
                </h3>

                <p className="text-[var(--muted-foreground)] leading-relaxed">
                  {value.description}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
