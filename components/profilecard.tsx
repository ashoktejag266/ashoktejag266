"use client";

import { motion } from "framer-motion";
import { type Variants, type Easing } from "framer-motion";
import Image from "next/image";
import { MapPin, Code2, Sparkles } from "lucide-react";

const ease: Easing = "easeOut";

const cardVariants: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease,
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease },
  },
};

const stats = [
  { value: "4+", label: "Years building" },
  { value: "8+", label: "Projects shipped" },
  { value: "∞", label: "Tabs open" },
];

const tags = [
  "Full Stack",
  "Next.js",
  "React",
  "TypeScript",
  "Figuring out life",
];

export default function ProfileCard() {
  return (
    <motion.aside
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      className="sticky top-24 h-fit w-full"
    >
      <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm">
        {/* Banner strip */}
        <motion.div
          variants={itemVariants}
          className="relative h-20 w-full overflow-hidden"
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(ellipse 120% 200% at 30% 50%, rgba(234,88,12,0.25) 0%, transparent 60%),
                linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
              `,
              backgroundSize: "100% 100%, 24px 24px, 24px 24px",
              backgroundColor: "#111111",
            }}
          />
          {/* subtle noise texture via SVG filter */}
          <div className="absolute inset-0 opacity-20 mix-blend-overlay">
            <svg width="100%" height="100%">
              <filter id="noise">
                <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
                <feColorMatrix type="saturate" values="0" />
              </filter>
              <rect width="100%" height="100%" filter="url(#noise)" />
            </svg>
          </div>
        </motion.div>

        {/* Avatar — overlaps banner */}
        <motion.div
          variants={itemVariants}
          className="-mt-10 px-5"
        >
          <div className="relative inline-block">
            <div className="h-20 w-20 overflow-hidden rounded-xl border-2 border-[#0a0a0a] ring-2 ring-white/10">
              <Image
                src="/hero.jfif"
                alt="Profile photo"
                width={80}
                height={80}
                className="h-full w-full object-cover object-top"
                priority
              />
            </div>
            {/* available dot */}
            <span className="absolute bottom-1 right-1 flex h-3 w-3 items-center justify-center rounded-full border-2 border-[#0a0a0a] bg-emerald-500">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" />
            </span>
          </div>
        </motion.div>

        {/* Name + role */}
        <motion.div variants={itemVariants} className="px-5 pt-3 pb-4">
          <h2 className="text-base font-semibold leading-snug text-white">
Ashok Teja G          </h2>
          <p className="mt-0.5 text-sm text-white/50">
            Full Stack Developer
          </p>

          {/* Hook line */}
          <p className="mt-3 text-[13px] leading-relaxed text-white/60">
            Figuring out life one commit at a time —
            and exploring every corner of technology along the way.
          </p>
        </motion.div>

        {/* Divider */}
        <div className="mx-5 h-px bg-white/[0.06]" />

        {/* Meta rows */}
        <motion.div variants={itemVariants} className="space-y-2.5 px-5 py-4">
          <div className="flex items-center gap-2 text-[13px] text-white/45">
            <MapPin size={13} strokeWidth={1.6} className="shrink-0 text-white/30" />
            <span>Bengaluru, India</span>
          </div>
          <div className="flex items-center gap-2 text-[13px] text-white/45">
            <Code2 size={13} strokeWidth={1.6} className="shrink-0 text-white/30" />
            <span>Open to work &amp; collabs</span>
          </div>
          <div className="flex items-center gap-2 text-[13px] text-white/45">
            <Sparkles size={13} strokeWidth={1.6} className="shrink-0 text-white/30" />
            <span>Currently exploring AI &amp; systems</span>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="mx-5 h-px bg-white/[0.06]" />

        {/* Stats row */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 divide-x divide-white/[0.06] px-1 py-4"
        >
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-0.5 px-2">
              <span className="text-base font-semibold text-white">{value}</span>
              <span className="text-center text-[10px] leading-tight text-white/35">
                {label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="mx-5 h-px bg-white/[0.06]" />

        {/* Tags */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-1.5 px-5 py-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-white/50"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </motion.aside>
  );
}