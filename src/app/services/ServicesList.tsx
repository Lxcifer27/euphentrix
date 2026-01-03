// Detailed services list section
'use client';

import { motion } from 'framer-motion';
import { FiCheck, FiArrowRight } from 'react-icons/fi';
import { services } from '@/data/site-data';
import { Button } from '@/components/ui';
import { FadeInUp, FadeInLeft, FadeInRight } from '@/components/animations/AnimatedComponents';

export function ServicesList() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="space-y-24">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24"
              >
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  !isEven ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Content */}
                  <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                    {isEven ? (
                      <FadeInLeft>
                        <ServiceContent service={service} IconComponent={IconComponent} />
                      </FadeInLeft>
                    ) : (
                      <FadeInRight>
                        <ServiceContent service={service} IconComponent={IconComponent} />
                      </FadeInRight>
                    )}
                  </div>

                  {/* Image */}
                  <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                    {isEven ? (
                      <FadeInRight>
                        <ServiceImage service={service} />
                      </FadeInRight>
                    ) : (
                      <FadeInLeft>
                        <ServiceImage service={service} />
                      </FadeInLeft>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Service content component
function ServiceContent({
  service,
  IconComponent,
}: {
  service: (typeof services)[0];
  IconComponent: (typeof services)[0]['icon'];
}) {
  return (
    <>
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0066FF] to-[#8B5CF6] flex items-center justify-center mb-6">
        <IconComponent className="w-8 h-8 text-white" />
      </div>

      <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
        {service.title}
      </h2>

      <p className="text-[var(--muted-foreground)] text-lg leading-relaxed mb-6">
        {service.description}
      </p>

      {/* Features list */}
      <div className="grid sm:grid-cols-2 gap-3 mb-8">
        {service.features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="flex items-start gap-3"
          >
            <div className="w-5 h-5 rounded-full bg-[#10B981]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <FiCheck className="w-3 h-3 text-[#10B981]" />
            </div>
            <span className="text-[var(--muted-foreground)] text-sm">
              {feature}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-8">
        {service.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 rounded-full bg-[var(--muted)] text-[var(--muted-foreground)] text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      <Button href="/contact">
        Get Started
        <FiArrowRight className="w-4 h-4" />
      </Button>
    </>
  );
}

// Service image component
function ServiceImage({ service }: { service: (typeof services)[0] }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative rounded-3xl overflow-hidden shadow-2xl"
    >
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-auto object-cover aspect-[4/3]"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="absolute bottom-6 left-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg"
      >
        <p className="text-sm font-semibold text-[var(--foreground)]">
          {service.shortDescription}
        </p>
      </motion.div>
    </motion.div>
  );
}
