"use client";

import { motion } from "framer-motion";
import { type Variants, type Easing } from "framer-motion";
import Image from "next/image";
import { MapPin, Code2, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

const ease: Easing = "easeOut";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: -16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease, staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease } },
};

const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const lightboxVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.25, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2, ease: "easeIn" } },
};

const stats = [
  { value: "4+", label: "Years" },
  { value: "8+", label: "Projects" },
  { value: "∞", label: "Tabs open" },
];

const tags = ["Full Stack", "Next.js", "React", "TypeScript"];

export default function MobileProfileCard() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxOpen]);

  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxOpen]);

  return (
    <>
      {/* Only visible on mobile/tablet — hidden on md+ (where sidebar shows) */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        className="mb-6 block md:hidden"
      >
        <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03]">

          {/* Banner */}
          <motion.div variants={itemVariants} className="relative h-24 w-full overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  radial-gradient(ellipse 140% 200% at 20% 50%, rgba(234,88,12,0.30) 0%, transparent 60%),
                  linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
                `,
                backgroundSize: "100% 100%, 24px 24px, 24px 24px",
                backgroundColor: "#111111",
              }}
            />
            {/* Mecherd-style text watermark on banner */}
            <div className="absolute inset-0 flex items-center justify-end pr-6 select-none">
              <span
                className="text-3xl font-black tracking-widest text-white/[0.07]"
                style={{ letterSpacing: "0.25em" }}
              >
                Hello world..!
              </span>
            </div>
          </motion.div>

          {/* Avatar row — overlaps banner */}
          <motion.div variants={itemVariants} className="-mt-10 flex items-end justify-between px-4">
            {/* Avatar */}
            <button
              onClick={() => setLightboxOpen(true)}
              className="group relative block h-20 w-20 cursor-zoom-in overflow-hidden rounded-full border-[3px] border-[#0a0a0a] ring-2 ring-white/10 transition-all duration-200 hover:ring-orange-500/50 focus:outline-none"
              aria-label="View profile photo"
            >
              <Image
                src="/hero.png"
                alt="Ashok Teja G"
                width={80}
                height={80}
                className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                priority
              />
              {/* Available dot */}
              <span className="absolute bottom-0.5 right-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-[#0a0a0a] bg-emerald-500">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" />
              </span>
            </button>

            {/* Stats — top-right of the card, aligned to banner bottom */}
            <div className="mb-1 flex gap-4">
              {stats.map(({ value, label }) => (
                <div key={label} className="flex flex-col items-center">
                  <span className="text-sm font-semibold text-white">{value}</span>
                  <span className="text-[10px] text-white/35">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Name + role */}
          <motion.div variants={itemVariants} className="px-4 pt-3 pb-3">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-[15px] font-semibold text-white">Ashok Teja G</h2>
                <p className="text-[13px] text-white/50">Full Stack Developer</p>
              </div>
              {/* Open to work badge */}
              <span className="mt-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-medium text-emerald-400">
                Open to work
              </span>
            </div>

            <p className="mt-2 text-[12px] leading-relaxed text-white/55">
              Figuring out life one commit at a time — exploring every corner of tech along the way.
            </p>
          </motion.div>

          {/* Divider */}
          <div className="mx-4 h-px bg-white/[0.06]" />

          {/* Meta + Tags row */}
          <motion.div variants={itemVariants} className="px-4 py-3">
            {/* Meta */}
            <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[12px] text-white/40">
              <div className="flex items-center gap-1.5">
                <MapPin size={11} strokeWidth={1.6} className="text-white/25" />
                <span>Bengaluru, India</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Code2 size={11} strokeWidth={1.6} className="text-white/25" />
                <span>Open to work & collabs
</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles size={11} strokeWidth={1.6} className="text-white/25" />
                <span>Currently Exploring AI &amp; systems</span>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-3 flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-white/[0.08] bg-white/[0.04] px-2 py-0.5 text-[11px] font-medium text-white/45"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            key="backdrop"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md"
            onClick={() => setLightboxOpen(false)}
          >
            <motion.div
              key="lightbox"
              variants={lightboxVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="relative overflow-hidden rounded-2xl border border-white/[0.1] shadow-2xl"
              style={{ maxWidth: "min(320px, 88vw)" }}
            >
              <div
                className="absolute -inset-px rounded-2xl opacity-40"
                style={{
                  background: "radial-gradient(ellipse at 50% 100%, rgba(234,88,12,0.5) 0%, transparent 70%)",
                }}
              />
              <Image
                src="/hero.png"
                alt="Ashok Teja G"
                width={320}
                height={360}
                className="relative block h-auto w-full object-cover object-top"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-4 pt-10">
                <p className="text-sm font-semibold text-white">Ashok Teja G</p>
                <p className="text-[12px] text-white/60">Full Stack Developer · Bengaluru</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}