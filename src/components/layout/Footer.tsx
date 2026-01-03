// Footer component with newsletter signup and social links
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiArrowRight, FiCheck } from 'react-icons/fi';
import { FaTwitter, FaLinkedinIn, FaGithub, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { siteConfig, navLinks, services } from '@/data/site-data';
import { Button, Input } from '@/components/ui';
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/animations/AnimatedComponents';

export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      // In production, this would call an API
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const socialLinks = [
    { icon: FaTwitter, href: siteConfig.social.twitter, label: 'Twitter' },
    { icon: FaLinkedinIn, href: siteConfig.social.linkedin, label: 'LinkedIn' },
    { icon: FaGithub, href: siteConfig.social.github, label: 'GitHub' },
    { icon: FaInstagram, href: siteConfig.social.instagram, label: 'Instagram' },
    { icon: FaFacebookF, href: siteConfig.social.facebook, label: 'Facebook' },
  ];

  const quickLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/technologies', label: 'Technologies' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="relative bg-[var(--card)] border-t border-[var(--border)] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0066FF]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        {/* Newsletter Section */}
        <FadeInUp className="py-12 md:py-16 border-b border-[var(--border)]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left max-w-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-3">
                Stay Updated with Our Newsletter
              </h3>
              <p className="text-[var(--muted-foreground)]">
                Get the latest insights on technology, innovation, and digital transformation delivered to your inbox.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="flex w-full max-w-md gap-3">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12"
                  required
                />
              </div>
              <Button type="submit" className="h-12 px-6">
                {isSubscribed ? (
                  <FiCheck className="w-5 h-5" />
                ) : (
                  <FiArrowRight className="w-5 h-5" />
                )}
              </Button>
            </form>
          </div>
        </FadeInUp>

        {/* Main Footer Content */}
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <FadeInUp className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0066FF] to-[#8B5CF6] flex items-center justify-center">
                  <span className="text-white font-bold text-xl">E</span>
                </div>
                <span className="text-xl font-bold text-[var(--foreground)]">
                  {siteConfig.name}
                </span>
              </div>
            </Link>

            <p className="text-[var(--muted-foreground)] mb-6 leading-relaxed">
              {siteConfig.description}
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-[var(--muted)] flex items-center justify-center text-[var(--muted-foreground)] hover:bg-[#0066FF] hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </FadeInUp>

          {/* Quick Links */}
          <FadeInUp delay={0.1}>
            <h4 className="text-lg font-semibold text-[var(--foreground)] mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--muted-foreground)] hover:text-[#0066FF] dark:hover:text-blue-400 transition-colors inline-flex items-center gap-2 group"
                  >
                    <FiArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </FadeInUp>

          {/* Services */}
          <FadeInUp delay={0.2}>
            <h4 className="text-lg font-semibold text-[var(--foreground)] mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="text-[var(--muted-foreground)] hover:text-[#0066FF] dark:hover:text-blue-400 transition-colors inline-flex items-center gap-2 group"
                  >
                    <FiArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </FadeInUp>

          {/* Contact Info */}
          <FadeInUp delay={0.3}>
            <h4 className="text-lg font-semibold text-[var(--foreground)] mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--muted)] flex items-center justify-center flex-shrink-0">
                  <FiMapPin className="w-5 h-5 text-[#0066FF]" />
                </div>
                <span className="text-[var(--muted-foreground)]">
                  {siteConfig.address}
                </span>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-[var(--muted-foreground)] hover:text-[#0066FF] transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[var(--muted)] flex items-center justify-center flex-shrink-0">
                    <FiMail className="w-5 h-5 text-[#0066FF]" />
                  </div>
                  <span>{siteConfig.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-3 text-[var(--muted-foreground)] hover:text-[#0066FF] transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[var(--muted)] flex items-center justify-center flex-shrink-0">
                    <FiPhone className="w-5 h-5 text-[#0066FF]" />
                  </div>
                  <span>{siteConfig.phone}</span>
                </a>
              </li>
            </ul>
          </FadeInUp>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-[var(--border)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--muted-foreground)] text-center md:text-left">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-[var(--muted-foreground)]">
            <Link href="/privacy" className="hover:text-[#0066FF] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#0066FF] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
