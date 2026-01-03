// Project detail client component
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiExternalLink, FiCheck, FiCalendar, FiClock, FiBriefcase } from 'react-icons/fi';
import { projects } from '@/data/site-data';
import { Button } from '@/components/ui';
import { FadeInUp, FadeInLeft, FadeInRight } from '@/components/animations/AnimatedComponents';
import { CTASection } from '@/components/sections';

interface ProjectDetailProps {
  project: (typeof projects)[0];
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  // Get related projects
  const relatedProjects = projects
    .filter((p) => p.id !== project.id && p.category === project.category)
    .slice(0, 2);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#0066FF]/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#8B5CF6]/10 rounded-full blur-[100px]" />
        </div>

        <div className="container-custom relative z-10">
          {/* Back button */}
          <FadeInUp>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-[var(--muted-foreground)] hover:text-[#0066FF] transition-colors mb-8"
            >
              <FiArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
          </FadeInUp>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <FadeInLeft>
              <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#0066FF]/10 to-[#8B5CF6]/10 text-[#0066FF] dark:text-blue-400 text-sm font-semibold mb-4">
                {project.category}
              </span>

              <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-6">
                {project.title}
              </h1>

              <p className="text-lg text-[var(--muted-foreground)] leading-relaxed mb-8">
                {project.longDescription}
              </p>

              {/* Meta info */}
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2 text-[var(--muted-foreground)]">
                  <FiBriefcase className="w-5 h-5 text-[#0066FF]" />
                  <span>{project.client}</span>
                </div>
                <div className="flex items-center gap-2 text-[var(--muted-foreground)]">
                  <FiClock className="w-5 h-5 text-[#0066FF]" />
                  <span>{project.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-[var(--muted-foreground)]">
                  <FiCalendar className="w-5 h-5 text-[#0066FF]" />
                  <span>{project.year}</span>
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full bg-[var(--muted)] text-[var(--muted-foreground)] text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Button href="/contact">
                Start Similar Project
                <FiExternalLink className="w-4 h-4" />
              </Button>
            </FadeInLeft>

            {/* Image */}
            <FadeInRight>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-padding bg-[var(--muted)]">
        <div className="container-custom">
          <FadeInUp className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Project Results
            </h2>
            <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto">
              The measurable outcomes and impact of this project.
            </p>
          </FadeInUp>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {project.results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--card)] rounded-2xl p-6 border border-[var(--border)] shadow-lg text-center"
              >
                <div className="w-12 h-12 rounded-full bg-[#10B981]/10 flex items-center justify-center mx-auto mb-4">
                  <FiCheck className="w-6 h-6 text-[#10B981]" />
                </div>
                <p className="text-[var(--foreground)] font-medium">{result}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="section-padding">
          <div className="container-custom">
            <FadeInUp className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
                Related Projects
              </h2>
              <p className="text-[var(--muted-foreground)]">
                Check out similar projects we've worked on.
              </p>
            </FadeInUp>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedProjects.map((relatedProject) => (
                <Link key={relatedProject.id} href={`/portfolio/${relatedProject.id}`}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="group bg-[var(--card)] rounded-2xl overflow-hidden border border-[var(--border)] shadow-lg"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <motion.img
                        src={relatedProject.image}
                        alt={relatedProject.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[var(--foreground)] mb-2 group-hover:text-[#0066FF] transition-colors">
                        {relatedProject.title}
                      </h3>
                      <p className="text-[var(--muted-foreground)] text-sm line-clamp-2">
                        {relatedProject.description}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
