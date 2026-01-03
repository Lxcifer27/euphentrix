// Portfolio grid with filtering
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { projects, projectCategories } from '@/data/site-data';
import { FadeInUp } from '@/components/animations/AnimatedComponents';

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Filter tabs */}
        <FadeInUp className="flex flex-wrap justify-center gap-3 mb-12">
          {projectCategories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-[#0066FF] to-[#8B5CF6] text-white shadow-lg shadow-blue-500/25'
                  : 'bg-[var(--muted)] text-[var(--muted-foreground)] hover:bg-[var(--border)]'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </FadeInUp>

        {/* Projects grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Link href={`/portfolio/${project.id}`}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="group bg-[var(--card)] rounded-2xl overflow-hidden border border-[var(--border)] shadow-lg"
                  >
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* View button */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                          className="w-14 h-14 rounded-full bg-white flex items-center justify-center"
                        >
                          <FiArrowRight className="w-6 h-6 text-[#0066FF]" />
                        </motion.div>
                      </div>

                      {/* Category badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-xs font-medium text-[var(--foreground)]">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[var(--foreground)] mb-2 group-hover:text-[#0066FF] dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-[var(--muted-foreground)] text-sm leading-relaxed mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 rounded-md bg-[var(--muted)] text-[var(--muted-foreground)] text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-[var(--muted-foreground)] text-lg">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
