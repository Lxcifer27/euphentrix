// About story section with company history
'use client';

import { motion } from 'framer-motion';
import { FadeInUp, FadeInLeft, FadeInRight } from '@/components/animations/AnimatedComponents';

export function AboutStory() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <FadeInLeft>
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-3xl overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
                  alt="Euphentrix Team"
                  className="w-full h-auto object-cover"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </motion.div>

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-[var(--card)] rounded-2xl p-6 shadow-xl border border-[var(--border)]"
              >
                <div className="text-4xl font-bold gradient-text mb-1">8+</div>
                <p className="text-[var(--muted-foreground)] text-sm">Years of Excellence</p>
              </motion.div>
            </div>
          </FadeInLeft>

          {/* Content */}
          <FadeInRight>
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#0066FF]/10 to-[#8B5CF6]/10 text-[#0066FF] dark:text-blue-400 text-sm font-semibold mb-4">
              Our Story
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-6">
              From Startup to Industry Leader
            </h2>

            <div className="space-y-4 text-[var(--muted-foreground)] leading-relaxed">
              <p>
                Founded in 2016, Euphentrix began with a simple mission: to help businesses
                leverage technology for sustainable growth. What started as a small team of
                passionate developers has grown into a full-service IT company serving clients
                worldwide.
              </p>

              <p>
                Over the years, we've evolved alongside the technology landscape, constantly
                expanding our expertise to include emerging technologies like artificial
                intelligence, blockchain, and cloud computing. Our commitment to excellence
                and innovation has earned us the trust of over 150 companies across various
                industries.
              </p>

              <p>
                Today, we're proud to be at the forefront of digital transformation, helping
                businesses of all sizes navigate the complexities of modern technology. Our
                team of 50+ experts brings together diverse skills and perspectives to deliver
                solutions that truly make a difference.
              </p>
            </div>

            {/* Key points */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {[
                { number: '500+', label: 'Projects Completed' },
                { number: '150+', label: 'Happy Clients' },
                { number: '50+', label: 'Team Members' },
                { number: '15+', label: 'Countries Served' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-4 rounded-xl bg-[var(--muted)]"
                >
                  <div className="text-2xl font-bold gradient-text">{item.number}</div>
                  <div className="text-sm text-[var(--muted-foreground)]">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </FadeInRight>
        </div>
      </div>
    </section>
  );
}
