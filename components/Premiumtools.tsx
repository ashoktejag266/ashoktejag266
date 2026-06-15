"use client";

import { motion, type Variants, type Easing } from "framer-motion";
import Image from "next/image";

const ease: Easing = "easeOut";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05, ease },
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

const tools = [
  // Frontend
  {
    name: "React",
    label: "Frontend",
    icon: "/tools/react.png",
    bg: "bg-[#0a0a0a]",
  },
  {
    name: "Next.js",
    label: "Frontend",
    icon: "/next.svg",
    bg: "bg-black",
    iconInvert: true,
  },
  {
    name: "JavaScript",
    label: "Frontend",
    icon: "/tools/javascript.png",
    bg: "bg-[#0a0a0a]",
  },
  {
    name: "TypeScript",
    label: "Frontend",
    icon: "/tools/typescript.png",
    bg: "bg-[#0a0a0a]",
  },
  {
    name: "Tailwind CSS",
    label: "Frontend",
    icon: "/tools/tailwind.png",
    bg: "bg-[#0a0a0a]",
  },

  // Backend
  {
    name: "FastAPI",
    label: "Backend",
    icon: "/tools/fastapi.png",
    bg: "bg-[#0a0a0a]",
  },
  {
    name: "Python",
    label: "Backend",
    icon: "/tools/python.png",
    bg: "bg-[#0a0a0a]",
  },
  {
    name: "Supabase",
    label: "Database",
    icon: "/tools/supabase.png",
    bg: "bg-[#0a0a0a]",
  },
  {
    name: "PostgreSQL",
    label: "Database",
    icon: "/tools/postgresql.png",
    bg: "bg-[#0a0a0a]",
  },

  // Deployment
  {
    name: "Railway",
    label: "Backend Hosting",
    icon: "/tools/railway.png",
    bg: "bg-[#0a0a0a]",
  },
  {
    name: "Render",
    label: "Cloud Hosting",
    icon: "/tools/render.png",
    bg: "bg-[#0a0a0a]",
  },
  {
    name: "Vercel",
    label: "Frontend Hosting",
    icon: "/vercel.svg",
    bg: "bg-white",
    iconInvert: true,
  },

  // Integrations
  {
    name: "Razorpay",
    label: "Payments",
    icon: "/tools/razorpay.png",
    bg: "bg-[#0a0a0a]",
  },
  {
    name: "Shiprocket",
    label: "Shipping",
    icon: "/tools/shiprocket.png",
    bg: "bg-[#0a0a0a]",
  },
  {
    name: "Generative AI",
    label: "LLM Integration",
    icon: "/tools/ai.png",
    bg: "bg-[#0a0a0a]",
  },

  // Design
  {
    name: "Figma",
    label: "Design",
    icon: "/tools/figma.png",
    bg: "bg-[#0a0a0a]",
  },
  {
    name: "Shadcn UI",
    label: "Design",
    icon: "/tools/shadcn.png",
    bg: "bg-[#0a0a0a]",
  },
  {
    name: "Framer Motion",
    label: "Design",
    icon: "/tools/framer.png",
    bg: "bg-[#0a0a0a]",
  },
];

export default function TechStack() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={container}
      className="relative pb-16 pt-6"
      aria-label="Tech Stack"
    >
      {/* Heading */}
      <motion.div variants={fadeUp} className="mb-10 overflow-hidden">
        <h2 className="leading-[0.92] tracking-tight">
          <span
            className="block text-[clamp(3rem,9vw,5.5rem)] font-black uppercase text-white"
            style={{ letterSpacing: "-0.02em" }}
          >
            Tech
          </span>

          <span
            className="block text-[clamp(3rem,9vw,5.5rem)] font-black uppercase"
            style={{
              letterSpacing: "-0.02em",
              color: "rgba(255,255,255,0.12)",
            }}
          >
            Stack
          </span>
        </h2>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-3">
        {tools.map((tool) => (
          <motion.div
            key={tool.name}
            variants={fadeUp}
            className="flex items-center gap-3.5 rounded-2xl border border-white/[0.07] bg-white/[0.03] px-4 py-3.5 transition-all duration-200 hover:border-white/[0.14] hover:bg-white/[0.06]"
          >
            {/* Icon */}
            <div
              className={`relative flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl ${tool.bg}`}
            >
              <Image
                src={tool.icon}
                alt={tool.name}
                width={28}
                height={28}
                className={`object-contain ${
                  tool.iconInvert ? "invert" : ""
                }`}
              />
            </div>

            {/* Text */}
            <div className="min-w-0">
              <p className="text-[14px] font-semibold text-white">
                {tool.name}
              </p>

              <p className="text-[12px] text-white/40">{tool.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Divider */}
      <motion.div
        variants={fadeIn}
        className="mt-14 h-px w-full bg-gradient-to-r from-white/[0.06] via-white/[0.12] to-transparent"
      />
    </motion.section>
  );
}