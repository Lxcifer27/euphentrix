// Services preview section for homepage
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { services } from '@/data/site-data';
import { SectionTitle, Card, Button } from '@/components/ui';
import { StaggerContainer, StaggerItem, FadeInUp } from '@/components/animations/AnimatedComponents';

export function ServicesSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#0066FF]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        <SectionTitle
          badge="What We Do"
          title="Our Services & Solutions"
          subtitle="We provide comprehensive IT solutions tailored to your business needs, from ideation to deployment and beyond."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <StaggerItem key={service.id}>
                <Link href={`/services#${service.id}`}>
                  <Card className="h-full group cursor-pointer">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0066FF]/10 to-[#8B5CF6]/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#0066FF] group-hover:to-[#8B5CF6] transition-all duration-300">
                      <IconComponent className="w-7 h-7 text-[#0066FF] dark:text-blue-400 group-hover:text-white transition-colors" />
                    </div>

                    <h3 className="text-lg font-bold text-[var(--foreground)] mb-3 group-hover:text-[#0066FF] dark:group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-[var(--muted-foreground)] text-sm leading-relaxed mb-4">
                      {service.shortDescription}
                    </p>

                    <div className="flex items-center gap-2 text-[#0066FF] dark:text-blue-400 text-sm font-medium">
                      <span>Learn More</span>
                      <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Card>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <FadeInUp className="text-center mt-12">
          <Button href="/services" variant="outline" size="lg">
            View All Services
            <FiArrowRight className="w-5 h-5" />
          </Button>
        </FadeInUp>
      </div>
    </section>
  );
}
