"use client";

import { motion, type Variants, type Easing } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const ease: Easing = "easeOut";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05, ease },
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
const experiences = [
  {
    company: "Co-Founder & Full-Stack Developer",
    description:
      "Co-founded and scaled an HR-tech and digital marketing company, leading product architecture, software development, and technical decision-making across multiple business verticals. Owned the complete development lifecycle from requirements gathering and database design to backend engineering, frontend implementation, deployment, and ongoing maintenance. Collaborated closely with recruiters, clients, designers, and business stakeholders to transform operational challenges into scalable digital solutions. Built and maintained secure role-based systems, streamlined business workflows, automated manual processes, and established scalable foundations that supported growth across recruitment, marketing, and client-service operations.",
    period: "Mecherd Career Connect • May 2025 – Present",
    url: "https://mecherd.com",
  },
  {
    company: "Systems Engineer",
    description:
      "Worked across platform operations, observability, automation, and application development within enterprise-scale environments. Contributed to the design and development of internal tools that improved monitoring, incident response, operational visibility, and system reliability. Partnered with cross-functional engineering teams, support teams, and stakeholders to ensure platform stability and business continuity. Managed platform governance activities including access control, change management, release coordination, compliance processes, and performance monitoring while helping maintain high availability across multiple production and pre-production environments.",
    period: "Tata Consultancy Services • Jan 2022 – Apr 2025",
    url: "https://www.tcs.com",
  },
];

/* years: earliest start → now */

/* ── component ───────────────────────────────────────── */
export default function Experience() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={container}
      className="relative pb-16 pt-6"
      aria-label="Work Experience"
    >
      {/* ── heading ── */}
      <motion.div variants={fadeUp} className="mb-10 overflow-hidden">
        <h2 className="leading-[0.92] tracking-tight">
          <span
            className="block text-[clamp(2.6rem,8vw,5rem)] font-black uppercase text-white"
            style={{ letterSpacing: "-0.02em" }}
          >
            My 
          </span>
          <span
            className="block text-[clamp(2.6rem,8vw,5rem)] font-black uppercase"
            style={{
              letterSpacing: "-0.02em",
              color: "rgba(255,255,255,0.12)",
            }}
          >
            Journey
          </span>
        </h2>
      </motion.div>

      {/* ── experience list ── */}
      <div className="flex flex-col">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            variants={fadeUp}
            className={`relative py-6 ${
              i < experiences.length - 1
                ? "border-b border-white/[0.07]"
                : ""
            }`}
          >
            <div className="max-w-[calc(100%-2rem)]">
              <p className="mb-2 text-[17px] font-semibold text-white">
                {exp.company}
              </p>

              <p className="mb-3 text-[13px] leading-relaxed text-white/45">
                {exp.description}
              </p>

              <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-orange-400/60">
                {exp.period}
              </p>
            </div>

            {/* arrow link */}
            <Link
              href={exp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group absolute right-0 top-6"
              aria-label={`View ${exp.company}`}
            >
              <ArrowUpRight
                size={18}
                strokeWidth={2}
                className="text-orange-500/60 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-orange-400"
              />
            </Link>
          </motion.div>
        ))}
      </div>

      {/* ── divider ── */}
      <motion.div
        variants={fadeIn}
        className="mt-14 h-px w-full bg-gradient-to-r from-white/[0.06] via-white/[0.12] to-transparent"
      />
    </motion.section>
  );
}