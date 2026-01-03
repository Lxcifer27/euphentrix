// Team members section
'use client';

import { motion } from 'framer-motion';
import { FaLinkedinIn, FaTwitter, FaGithub, FaDribbble } from 'react-icons/fa';
import { teamMembers } from '@/data/site-data';
import { SectionTitle } from '@/components/ui';
import { StaggerContainer, StaggerItem } from '@/components/animations/AnimatedComponents';

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  linkedin: FaLinkedinIn,
  twitter: FaTwitter,
  github: FaGithub,
  dribbble: FaDribbble,
};

export function TeamSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionTitle
          badge="Our Team"
          title="Meet the People Behind Euphentrix"
          subtitle="Our talented team brings together diverse skills and backgrounds to deliver exceptional solutions."
        />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <StaggerItem key={member.name}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative bg-[var(--card)] rounded-2xl overflow-hidden border border-[var(--border)] shadow-lg"
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Social links on hover */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    {Object.entries(member.social).map(([platform, url]) => {
                      const Icon = socialIcons[platform];
                      if (!Icon) return null;

                      return (
                        <motion.a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#0066FF] transition-colors"
                        >
                          <Icon className="w-4 h-4" />
                        </motion.a>
                      );
                    })}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[var(--foreground)] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#0066FF] dark:text-blue-400 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">
                    {member.bio}
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
