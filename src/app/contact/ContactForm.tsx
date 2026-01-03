// Contact form with validation
'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { FiSend, FiCheck } from 'react-icons/fi';
import { Input, Textarea, Select, Button } from '@/components/ui';
import { FadeInUp } from '@/components/animations/AnimatedComponents';

// Form validation schema using Zod
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  budget: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const serviceOptions = [
  { value: '', label: 'Select a service' },
  { value: 'web-development', label: 'Web Development' },
  { value: 'app-development', label: 'App Development' },
  { value: 'ui-ux-design', label: 'UI/UX Design' },
  { value: 'branding', label: 'Branding & Identity' },
  { value: 'ai-ml', label: 'AI/ML & Data Science' },
  { value: 'blockchain', label: 'Blockchain & Web3' },
  { value: 'cloud-devops', label: 'Cloud & DevOps' },
  { value: 'maintenance', label: 'Maintenance & Support' },
  { value: 'other', label: 'Other' },
];

const budgetOptions = [
  { value: '', label: 'Select budget range' },
  { value: 'under-10k', label: 'Under $10,000' },
  { value: '10k-25k', label: '$10,000 - $25,000' },
  { value: '25k-50k', label: '$25,000 - $50,000' },
  { value: '50k-100k', label: '$50,000 - $100,000' },
  { value: 'over-100k', label: 'Over $100,000' },
];

function ContactFormInner() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const searchParams = useSearchParams();
  const position = searchParams.get('position');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    defaultValues: {
      message: position ? `I'm interested in the ${position} position.` : '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log('Form submitted:', data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <FadeInUp>
      <div className="bg-[var(--card)] rounded-3xl p-8 md:p-10 border border-[var(--border)] shadow-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-2">
          Send Us a Message
        </h2>
        <p className="text-[var(--muted-foreground)] mb-8">
          Fill out the form below and we'll get back to you within 24 hours.
        </p>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <div className="w-16 h-16 rounded-full bg-[#10B981]/10 flex items-center justify-center mx-auto mb-4">
              <FiCheck className="w-8 h-8 text-[#10B981]" />
            </div>
            <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">
              Message Sent Successfully!
            </h3>
            <p className="text-[var(--muted-foreground)]">
              Thank you for reaching out. We'll be in touch soon.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <Input
                label="Full Name *"
                placeholder="John Doe"
                error={errors.name?.message}
                {...register('name', {
                  required: 'Name is required',
                  minLength: { value: 2, message: 'Name must be at least 2 characters' },
                })}
              />

              <Input
                label="Email Address *"
                type="email"
                placeholder="john@example.com"
                error={errors.email?.message}
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Please enter a valid email',
                  },
                })}
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <Input
                label="Phone Number"
                type="tel"
                placeholder="+1 (555) 123-4567"
                {...register('phone')}
              />

              <Input
                label="Company"
                placeholder="Your Company"
                {...register('company')}
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <Select
                label="Service Interested In *"
                options={serviceOptions}
                error={errors.service?.message}
                {...register('service', { required: 'Please select a service' })}
              />

              <Select
                label="Budget Range"
                options={budgetOptions}
                {...register('budget')}
              />
            </div>

            <Textarea
              label="Project Details *"
              placeholder="Tell us about your project, goals, and timeline..."
              rows={5}
              error={errors.message?.message}
              {...register('message', {
                required: 'Message is required',
                minLength: { value: 10, message: 'Message must be at least 10 characters' },
              })}
            />

            <Button type="submit" isLoading={isSubmitting} className="w-full sm:w-auto">
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <FiSend className="w-4 h-4" />
            </Button>
          </form>
        )}
      </div>
    </FadeInUp>
  );
}

export function ContactForm() {
  return (
    <Suspense fallback={
      <div className="bg-[var(--card)] rounded-3xl p-8 md:p-10 border border-[var(--border)] shadow-xl animate-pulse">
        <div className="h-8 bg-[var(--muted)] rounded w-1/2 mb-4"></div>
        <div className="h-4 bg-[var(--muted)] rounded w-3/4 mb-8"></div>
        <div className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="h-12 bg-[var(--muted)] rounded-xl"></div>
            <div className="h-12 bg-[var(--muted)] rounded-xl"></div>
          </div>
        </div>
      </div>
    }>
      <ContactFormInner />
    </Suspense>
  );
}
