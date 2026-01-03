// Contact information section
'use client';

import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';
import { FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import { siteConfig } from '@/data/site-data';
import { FadeInUp } from '@/components/animations/AnimatedComponents';

const socialLinks = [
  { icon: FaTwitter, href: siteConfig.social.twitter, label: 'Twitter' },
  { icon: FaLinkedinIn, href: siteConfig.social.linkedin, label: 'LinkedIn' },
  { icon: FaGithub, href: siteConfig.social.github, label: 'GitHub' },
  { icon: FaInstagram, href: siteConfig.social.instagram, label: 'Instagram' },
];

export function ContactInfo() {
  return (
    <FadeInUp delay={0.1}>
      <div className="space-y-8">
        {/* Contact details */}
        <div className="bg-[var(--card)] rounded-3xl p-8 border border-[var(--border)] shadow-xl">
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6">
            Contact Information
          </h2>

          <div className="space-y-6">
            <motion.a
              href={`mailto:${siteConfig.email}`}
              whileHover={{ x: 5 }}
              className="flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0066FF]/10 to-[#8B5CF6]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-[#0066FF] group-hover:to-[#8B5CF6] transition-all">
                <FiMail className="w-5 h-5 text-[#0066FF] group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-sm text-[var(--muted-foreground)] mb-1">Email</p>
                <p className="font-medium text-[var(--foreground)] group-hover:text-[#0066FF] transition-colors">
                  {siteConfig.email}
                </p>
              </div>
            </motion.a>

            <motion.a
              href={`tel:${siteConfig.phone}`}
              whileHover={{ x: 5 }}
              className="flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0066FF]/10 to-[#8B5CF6]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-[#0066FF] group-hover:to-[#8B5CF6] transition-all">
                <FiPhone className="w-5 h-5 text-[#0066FF] group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-sm text-[var(--muted-foreground)] mb-1">Phone</p>
                <p className="font-medium text-[var(--foreground)] group-hover:text-[#0066FF] transition-colors">
                  {siteConfig.phone}
                </p>
              </div>
            </motion.a>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0066FF]/10 to-[#8B5CF6]/10 flex items-center justify-center flex-shrink-0">
                <FiMapPin className="w-5 h-5 text-[#0066FF]" />
              </div>
              <div>
                <p className="text-sm text-[var(--muted-foreground)] mb-1">Address</p>
                <p className="font-medium text-[var(--foreground)]">
                  {siteConfig.address}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0066FF]/10 to-[#8B5CF6]/10 flex items-center justify-center flex-shrink-0">
                <FiClock className="w-5 h-5 text-[#0066FF]" />
              </div>
              <div>
                <p className="text-sm text-[var(--muted-foreground)] mb-1">Business Hours</p>
                <p className="font-medium text-[var(--foreground)]">
                  Mon - Fri: 9:00 AM - 6:00 PM (PST)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social links */}
        <div className="bg-[var(--card)] rounded-3xl p-8 border border-[var(--border)] shadow-xl">
          <h3 className="text-xl font-bold text-[var(--foreground)] mb-4">
            Follow Us
          </h3>
          <p className="text-[var(--muted-foreground)] mb-6">
            Stay connected and follow our journey on social media.
          </p>

          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-xl bg-[var(--muted)] flex items-center justify-center text-[var(--muted-foreground)] hover:bg-[#0066FF] hover:text-white transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick response promise */}
        <div className="bg-gradient-to-br from-[#0066FF]/10 to-[#8B5CF6]/10 rounded-3xl p-8 border border-[var(--border)]">
          <h3 className="text-xl font-bold text-[var(--foreground)] mb-3">
            Quick Response Guaranteed
          </h3>
          <p className="text-[var(--muted-foreground)]">
            We typically respond to all inquiries within 24 hours during business days.
            For urgent matters, please call us directly.
          </p>
        </div>
      </div>
    </FadeInUp>
  );
}
