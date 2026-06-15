"use client";

import { motion, type Variants, type Easing } from "framer-motion";
import { ArrowRight, Download, Layers, Cpu, Globe } from "lucide-react";
import Link from "next/link";

const ease: Easing = "easeOut";

/* ── animation variants ─────────────────────────────── */
const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.11, delayChildren: 0.1, ease },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease } },
};

/* ── data ────────────────────────────────────────────── */
const chips = [
  { icon: Layers, label: "React · Next.js · TypeScript" },
  { icon: Cpu,    label: "FastAPI · Python · Supabase" },
  { icon: Globe,  label: "Vercel · Docker · Railway" },
];

// const specialties = [
//   "Full-Stack Products",
//   "CRM & Admin Dashboards",
//   "AI / LLM Integration",
//   "Platform Observability",
//   "SEO & Analytics",
// ];

/* ── component ───────────────────────────────────────── */
export default function HeroSection() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={container}
      className="relative pb-16 pt-6 md:pt-10"
      aria-label="Introduction"
    >
      {/* ── eyebrow ── */}
      <motion.div variants={fadeUp} className="mb-5 flex items-center gap-2.5">
        <span className="flex h-2 w-2 rounded-full bg-orange-500">
          <span className="h-2 w-2 animate-ping rounded-full bg-orange-400 opacity-75" />
        </span>
        <span className="text-xs font-medium uppercase tracking-[0.18em] text-orange-500/90">
          Available for work &amp; collaboration
        </span>
      </motion.div>

      {/* ── headline ── */}
      <motion.div variants={fadeUp} className="mb-6 overflow-hidden">
        <h1 className="leading-[0.92] tracking-tight">
          {/* "FULL STACK" — bright white, massive */}
          <span
            className="block text-[clamp(3rem,9vw,5.5rem)] font-black uppercase text-white"
            style={{ letterSpacing: "-0.02em" }}
          >
            Full Stack
          </span>
          {/* "DEVELOPER" — dimmed, same weight */}
          <span
            className="block text-[clamp(3rem,9vw,5.5rem)] font-black uppercase"
            style={{
              letterSpacing: "-0.02em",
              color: "rgba(255,255,255,0.18)",
            }}
          >
            Developer
          </span>
        </h1>
      </motion.div>

      {/* ── summary ── */}
      <motion.p
        variants={fadeUp}
        className="mb-8 max-w-xl text-[15px] leading-[1.75] text-white/55"
      >
        I architect and ship full-stack products end-to-end — from database schema and FastAPI backends to React/Next.js frontends and cloud deployment. I've built CRMs, e-commerce platforms, observability dashboards, and AI-integrated tools, and enjoy working closely with engineers, designers, and stakeholders to build reliable products from concept to production.
      </motion.p>

      {/* ── stack chips ── */}
      <motion.div variants={fadeUp} className="mb-8 flex flex-wrap gap-2">
        {chips.map(({ icon: Icon, label }) => (
          <span
            key={label}
            className="flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-[12px] font-medium text-white/50"
          >
            <Icon size={12} strokeWidth={1.8} className="text-orange-400/70" />
            {label}
          </span>
        ))}
      </motion.div>

      {/* ── specialty pills ── */}
      {/* <motion.div variants={fadeUp} className="mb-10 flex flex-wrap gap-2">
        {specialties.map((s) => (
          <span
            key={s}
            className="rounded-full border border-orange-500/20 bg-orange-500/[0.06] px-3 py-1 text-[11px] font-medium text-orange-400/80"
          >
            {s}
          </span>
        ))}
      </motion.div> */}

      {/* ── CTAs ── */}
      {/* <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3"> */}
        {/* <Link
          href="/projects"
          className="group inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-orange-400 active:scale-[0.97]"
        >
          View Projects
          <ArrowRight
            size={15}
            strokeWidth={2.2}
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </Link> */}

        {/* <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-white/70 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.08] hover:text-white active:scale-[0.97]"
        >
          <Download size={14} strokeWidth={1.8} />
          Download CV
        </a> */}
      {/* </motion.div> */}

      {/* ── subtle horizontal rule ── */}
      <motion.div
        variants={fadeIn}
        className="mt-14 h-px w-full bg-gradient-to-r from-white/[0.06] via-white/[0.12] to-transparent"
      />
    </motion.section>
  );
}