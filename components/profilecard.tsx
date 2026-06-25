// "use client";

// import { motion } from "framer-motion";
// import { type Variants, type Easing } from "framer-motion";
// import Image from "next/image";
// import { MapPin, Code2, Sparkles } from "lucide-react";

// const ease: Easing = "easeOut";

// const cardVariants: Variants = {
//   hidden: { opacity: 0, x: -24 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       duration: 0.6,
//       ease,
//       staggerChildren: 0.1,
//       delayChildren: 0.2,
//     },
//   },
// };

// const itemVariants: Variants = {
//   hidden: { opacity: 0, y: 10 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.4, ease },
//   },
// };

// const stats = [
//   { value: "4+", label: "Years building" },
//   { value: "8+", label: "Projects shipped" },
//   { value: "∞", label: "Tabs open" },
// ];

// const tags = [
//   "Full Stack",
//   "Next.js",
//   "React",
//   "TypeScript",
//   "Figuring out life",
// ];

// export default function ProfileCard() {
//   return (
//     <motion.aside
//       initial="hidden"
//       animate="visible"
//       variants={cardVariants}
//       className="sticky top-24 h-fit w-full"
//     >
//       <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm">
//         {/* Banner strip */}
//         <motion.div
//           variants={itemVariants}
//           className="relative h-20 w-full overflow-hidden"
//         >
//           <div
//             className="absolute inset-0"
//             style={{
//               backgroundImage: `
//                 radial-gradient(ellipse 120% 200% at 30% 50%, rgba(234,88,12,0.25) 0%, transparent 60%),
//                 linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
//                 linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
//               `,
//               backgroundSize: "100% 100%, 24px 24px, 24px 24px",
//               backgroundColor: "#111111",
//             }}
//           />
//           {/* subtle noise texture via SVG filter */}
//           <div className="absolute inset-0 opacity-20 mix-blend-overlay">
//             <svg width="100%" height="100%">
//               <filter id="noise">
//                 <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
//                 <feColorMatrix type="saturate" values="0" />
//               </filter>
//               <rect width="100%" height="100%" filter="url(#noise)" />
//             </svg>
//           </div>
//         </motion.div>

//         {/* Avatar — overlaps banner */}
//         <motion.div
//           variants={itemVariants}
//           className="-mt-10 px-5"
//         >
//           <div className="relative inline-block">
//             <div className="h-20 w-20 overflow-hidden rounded-xl border-2 border-[#0a0a0a] ring-2 ring-white/10">
//               <Image
//                 src="/hero.png"
//                 alt="Profile photo"
//                 width={80}
//                 height={80}
//                 className="h-full w-full object-cover object-top"
//                 priority
//               />
//             </div>
//             {/* available dot */}
//             <span className="absolute bottom-1 right-1 flex h-3 w-3 items-center justify-center rounded-full border-2 border-[#0a0a0a] bg-emerald-500">
//               <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" />
//             </span>
//           </div>
//         </motion.div>

//         {/* Name + role */}
//         <motion.div variants={itemVariants} className="px-5 pt-3 pb-4">
//           <h2 className="text-base font-semibold leading-snug text-white">
// Ashok Teja G          </h2>
//           <p className="mt-0.5 text-sm text-white/50">
//             Full Stack Developer
//           </p>

//           {/* Hook line */}
//           <p className="mt-3 text-[13px] leading-relaxed text-white/60">
//             Figuring out life one commit at a time —
//             and exploring every corner of technology along the way.
//           </p>
//         </motion.div>

//         {/* Divider */}
//         <div className="mx-5 h-px bg-white/[0.06]" />

//         {/* Meta rows */}
//         <motion.div variants={itemVariants} className="space-y-2.5 px-5 py-4">
//           <div className="flex items-center gap-2 text-[13px] text-white/45">
//             <MapPin size={13} strokeWidth={1.6} className="shrink-0 text-white/30" />
//             <span>Bengaluru, India</span>
//           </div>
//           <div className="flex items-center gap-2 text-[13px] text-white/45">
//             <Code2 size={13} strokeWidth={1.6} className="shrink-0 text-white/30" />
//             <span>Open to work &amp; collabs</span>
//           </div>
//           <div className="flex items-center gap-2 text-[13px] text-white/45">
//             <Sparkles size={13} strokeWidth={1.6} className="shrink-0 text-white/30" />
//             <span>Currently exploring AI &amp; systems</span>
//           </div>
//         </motion.div>

//         {/* Divider */}
//         <div className="mx-5 h-px bg-white/[0.06]" />

//         {/* Stats row */}
//         <motion.div
//           variants={itemVariants}
//           className="grid grid-cols-3 divide-x divide-white/[0.06] px-1 py-4"
//         >
//           {stats.map(({ value, label }) => (
//             <div key={label} className="flex flex-col items-center gap-0.5 px-2">
//               <span className="text-base font-semibold text-white">{value}</span>
//               <span className="text-center text-[10px] leading-tight text-white/35">
//                 {label}
//               </span>
//             </div>
//           ))}
//         </motion.div>

//         {/* Divider */}
//         <div className="mx-5 h-px bg-white/[0.06]" />

//         {/* Tags */}
//         <motion.div variants={itemVariants} className="flex flex-wrap gap-1.5 px-5 py-4">
//           {tags.map((tag) => (
//             <span
//               key={tag}
//               className="rounded-md border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-white/50"
//             >
//               {tag}
//             </span>
//           ))}
//         </motion.div>
//       </div>
//     </motion.aside>
//   );
// }

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { type Variants, type Easing } from "framer-motion";
import Image from "next/image";
import { MapPin, Code2, Sparkles, X } from "lucide-react";
import { useState, useEffect } from "react";

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

const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const lightboxVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.25, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.2, ease: "easeIn" },
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
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Close on Escape key
  useEffect(() => {
    if (!lightboxOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxOpen]);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxOpen]);

  return (
    <>
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

          {/* Avatar — overlaps banner, now larger (96px → 24) */}
          <motion.div
            variants={itemVariants}
            className="-mt-12 px-5"
          >
            <div className="relative inline-block">
              <button
                onClick={() => setLightboxOpen(true)}
                className="group relative block h-24 w-24 cursor-zoom-in overflow-hidden rounded-xl border-2 border-[#0a0a0a] ring-2 ring-white/10 transition-all duration-200 hover:ring-orange-500/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                aria-label="View profile photo"
              >
                <Image
                  src="/hero.png"
                  alt="Profile photo"
                  width={96}
                  height={96}
                  className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  priority
                />
                {/* Hover overlay hint */}
                <span className="absolute inset-0 flex items-center justify-center rounded-xl bg-black/0 transition-colors duration-200 group-hover:bg-black/20">
                  <span className="scale-75 text-[10px] font-medium text-white/0 transition-all duration-200 group-hover:scale-100 group-hover:text-white/80">
                    View
                  </span>
                </span>
              </button>

              {/* Available dot */}
              <span className="absolute bottom-1 right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-[#0a0a0a] bg-emerald-500">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" />
              </span>
            </div>
          </motion.div>

          {/* Name + role */}
          <motion.div variants={itemVariants} className="px-5 pt-3 pb-4">
            <h2 className="text-base font-semibold leading-snug text-white">
              Ashok Teja G
            </h2>
            <p className="mt-0.5 text-sm text-white/50">Full Stack Developer</p>
            <p className="mt-3 text-[13px] leading-relaxed text-white/60">
              Figuring out life one commit at a time —
              and exploring every corner of technology along the way.
            </p>
          </motion.div>

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

      {/* ── Lightbox ── */}
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
            {/* Close button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-white/20 hover:text-white"
              aria-label="Close photo"
            >
              <X size={18} />
            </button>

            {/* Photo card */}
            <motion.div
              key="lightbox"
              variants={lightboxVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="relative overflow-hidden rounded-2xl border border-white/[0.1] shadow-2xl"
              style={{ maxWidth: "min(360px, 90vw)" }}
            >
              {/* Orange glow behind image */}
              <div
                className="absolute -inset-px rounded-2xl opacity-40"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 100%, rgba(234,88,12,0.5) 0%, transparent 70%)",
                }}
              />
              <Image
                src="/hero.png"
                alt="Ashok Teja G"
                width={360}
                height={400}
                className="relative block h-auto w-full object-cover object-top"
                priority
              />
              {/* Name strip */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-5 pb-4 pt-10">
                <p className="text-base font-semibold text-white">Ashok Teja G</p>
                <p className="text-[13px] text-white/60">Full Stack Developer · Bengaluru</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}