// Benefits section for careers page
'use client';

import { motion } from 'framer-motion';
import {
  FiHome,
  FiCalendar,
  FiHeart,
  FiBook,
  FiDollarSign,
  FiGlobe,
  FiCpu,
  FiUsers,
} from 'react-icons/fi';
import { SectionTitle } from '@/components/ui';
import { StaggerContainer, StaggerItem } from '@/components/animations/AnimatedComponents';

const benefits = [
  {
    icon: FiHome,
    title: 'Remote-First',
    description: 'Work from anywhere in the world. We believe in flexibility.',
  },
  {
    icon: FiCalendar,
    title: 'Unlimited PTO',
    description: 'Take the time you need to recharge and stay productive.',
  },
  {
    icon: FiHeart,
    title: 'Health Benefits',
    description: 'Comprehensive health, dental, and vision insurance.',
  },
  {
    icon: FiBook,
    title: 'Learning Budget',
    description: 'Annual allowance for courses, books, and conferences.',
  },
  {
    icon: FiDollarSign,
    title: 'Competitive Salary',
    description: 'We offer top-of-market compensation packages.',
  },
  {
    icon: FiGlobe,
    title: 'Global Team',
    description: 'Work with talented people from around the world.',
  },
  {
    icon: FiCpu,
    title: 'Latest Tech',
    description: 'Top-tier equipment and tools to do your best work.',
  },
  {
    icon: FiUsers,
    title: 'Team Events',
    description: 'Regular virtual and in-person team gatherings.',
  },
];

export function Benefits() {
  return (
    <section className="section-padding bg-[var(--muted)]">
      <div className="container-custom">
        <SectionTitle
          badge="Why Join Us"
          title="Perks & Benefits"
          subtitle="We believe happy employees create amazing products. Here's what we offer."
        />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <StaggerItem key={benefit.title}>
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-[var(--card)] rounded-2xl p-6 border border-[var(--border)] shadow-lg h-full group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0066FF]/10 to-[#8B5CF6]/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#0066FF] group-hover:to-[#8B5CF6] transition-all duration-300">
                  <benefit.icon className="w-6 h-6 text-[#0066FF] dark:text-blue-400 group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">
                  {benefit.title}
                </h3>

                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
