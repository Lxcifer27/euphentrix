// Testimonials slider section
'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import { testimonials } from '@/data/site-data';
import { SectionTitle } from '@/components/ui';
import { FadeInUp } from '@/components/animations/AnimatedComponents';

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const goToPrev = () => {
    stopAutoPlay();
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    startAutoPlay();
  };

  const goToNext = () => {
    stopAutoPlay();
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    startAutoPlay();
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="section-padding relative overflow-hidden bg-[var(--muted)]">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0066FF]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        <SectionTitle
          badge="Testimonials"
          title="What Our Clients Say"
          subtitle="Don't just take our word for it. Here's what our clients have to say about working with us."
        />

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Quote mark */}
            <div className="absolute -top-8 left-0 text-[120px] font-serif text-[#0066FF]/10 leading-none">
              "
            </div>

            {/* Testimonial Card */}
            <FadeInUp className="relative bg-[var(--card)] rounded-3xl p-8 md:p-12 shadow-xl min-h-[300px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <FiStar
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-lg md:text-xl text-[var(--foreground)] leading-relaxed mb-8">
                    "{currentTestimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <img
                      src={currentTestimonial.image}
                      alt={currentTestimonial.author}
                      className="w-14 h-14 rounded-full object-cover border-2 border-[#0066FF]/20"
                    />
                    <div>
                      <div className="font-semibold text-[var(--foreground)]">
                        {currentTestimonial.author}
                      </div>
                      <div className="text-sm text-[var(--muted-foreground)]">
                        {currentTestimonial.role}, {currentTestimonial.company}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </FadeInUp>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={goToPrev}
                className="w-12 h-12 rounded-full bg-[var(--card)] border border-[var(--border)] flex items-center justify-center text-[var(--foreground)] hover:bg-[#0066FF] hover:text-white hover:border-[#0066FF] transition-colors"
                aria-label="Previous testimonial"
              >
                <FiChevronLeft className="w-5 h-5" />
              </motion.button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      stopAutoPlay();
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                      startAutoPlay();
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'w-8 bg-[#0066FF]'
                        : 'bg-[var(--border)] hover:bg-[var(--muted-foreground)]'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={goToNext}
                className="w-12 h-12 rounded-full bg-[var(--card)] border border-[var(--border)] flex items-center justify-center text-[var(--foreground)] hover:bg-[#0066FF] hover:text-white hover:border-[#0066FF] transition-colors"
                aria-label="Next testimonial"
              >
                <FiChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
