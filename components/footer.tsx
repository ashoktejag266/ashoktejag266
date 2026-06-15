
"use client";

import { motion, type Variants, type Easing } from "framer-motion";
import { Phone, Mail, Heart } from "lucide-react";

// LinkedIn SVG
function LinkedInIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

// WhatsApp SVG
function WhatsAppIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

const contactLinks = [
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "ashok-teja-g",
    href: "https://www.linkedin.com/in/ashok-teja-g-409874210/",
  },
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: "+91 95380 62032",
    href: "https://wa.me/919538062032",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 95380 62032",
    href: "tel:+919538062032",
  },
  {
    icon: Mail,
    label: "Work Email",
    value: "ashoktejag@mecherd.com",
    href: "mailto:ashoktejag@mecherd.com",
  },
  {
    icon: Mail,
    label: "Personal Email",
    value: "ashoktejag266@gmail.com",
    href: "mailto:ashoktejag266@gmail.com",
  },
];

const ease: Easing = "easeOut";

const footerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease,
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease,
    },
  },
};

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={footerVariants}
      className="relative mt-24 border-t border-white/[0.08]"
    >
      {/* Top glow line */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent"
      />

      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        {/* Contact Grid */}
        <motion.div
          variants={itemVariants}
          className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5"
        >
          {contactLinks.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={
                href.startsWith("mailto:") || href.startsWith("tel:")
                  ? undefined
                  : "_blank"
              }
              rel={
                href.startsWith("mailto:") || href.startsWith("tel:")
                  ? undefined
                  : "noopener noreferrer"
              }
              className="group flex flex-col gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 transition-all duration-200 hover:border-orange-500/40 hover:bg-white/[0.06]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500/[0.15] text-orange-400 transition-colors group-hover:bg-orange-500/25">
                <Icon size={15} />
              </span>

              <span className="text-[11px] font-medium uppercase tracking-widest text-white/30">
                {label}
              </span>

              <span className="truncate text-sm font-medium text-white/70 transition-colors group-hover:text-white">
                {value}
              </span>
            </a>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="mb-10 h-px bg-white/[0.06]"
        />

        {/* Funny lines */}
        <motion.div
          variants={itemVariants}
          className="mb-10 space-y-3 text-center"
        >
          <p className="text-base leading-relaxed text-white/90 md:text-lg">
            Created with 🎉 wild ideas, ☕️ coffee, 🎵 late nights,
            <br className="hidden md:block" />
            and way too many open tabs. Used a lot of AI 🤖 and took
            inspiration from many amazing portfolios.
          </p>

          <p className="text-sm leading-relaxed text-gray-400 md:text-base">
            Remember: Blink, Drink (Water ofc), Stretch your legs,
            <br className="hidden md:block" />
            and maybe touch some grass 🌱
          </p>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center justify-between gap-3 sm:flex-row"
        >
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} Ashok Teja G. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-xs text-white/25">
            Crafted with
            <Heart
              size={11}
              className="text-orange-500"
              fill="currentColor"
            />
            and questionable sleep habits
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
