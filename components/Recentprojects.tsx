// "use client";

// import { motion, type Variants, type Easing } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";

// const ease: Easing = "easeOut";

// const container: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.1, delayChildren: 0.05, ease },
//   },
// };

// const fadeUp: Variants = {
//   hidden: { opacity: 0, y: 22 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
// };

// const fadeIn: Variants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { duration: 0.5, ease } },
// };

// /* ── data ────────────────────────────────────────────── */
// const projects = [
// {
// name: "Mecherd Recruitment Connect",
// type: "Recruitment Marketplace Platform",
// description:
// "A recruitment marketplace connecting companies, freelance recruiters, and staffing consultancies. Organizations can publish job openings while authorized recruiters and agencies submit candidate profiles, track hiring progress, and earn through successful placements using a centralized workflow platform.",
// url: "https://vendor.mecherd.com",
// image: "/vendor.png",
// accent: "from-orange-500/20 to-transparent",
// },

// {
// name: "Mecherd Careers",
// type: "Job Portal",
// description:
// "A free job portal where employers can publish openings and candidates can apply directly. Built to simplify the hiring process through job management, application tracking, and streamlined candidate engagement for both recruiters and job seekers.",
// url: "https://career.mecherd.com",
// image: "/career.png",
// accent: "from-cyan-500/20 to-transparent",
// },

// {
// name: "AEDs India",
// type: "E-Commerce Platform",
// description:
// "A full-scale e-commerce solution featuring custom CMS, inventory management, Razorpay payment integration, Shiprocket shipping automation, product catalog management, and streamlined order processing workflows.",
// url: "https://aed-ecom.vercel.app",
// image: "/aed.png",
// accent: "from-emerald-500/20 to-transparent",
// },

// {
// name: "Fly Bangalore Vacations",
// type: "Travel Booking Platform",
// description:
// "A complete travel booking ecosystem with customer management, trip planning, booking workflows, member dashboards, administrative tools, and mobile application integration for seamless vacation experiences.",
// url: "https://appadmin.flybangalorevacations.com",
// appUrl:
// "https://play.google.com/store/apps/details?id=com.flybangalore.app",
// image: "/fly.png",
// accent: "from-sky-500/20 to-transparent",
// },

// {
// name: "Mecherd Marketing Connect",
// type: "Digital Marketing Platform",
// description:
// "A digital marketing platform showcasing agency services, client success stories, and lead-generation solutions. Built to support client acquisition, campaign management, and business growth initiatives.",
// url: "https://marketing.mecherd.com",
// image: "/marketing.png",
// accent: "from-violet-500/20 to-transparent",
// },

// {
// name: "Mecherd Career Connect",
// type: "Company Website",
// description:
// "The primary company website presenting Mecherd's HR-tech and digital marketing offerings. Serves as the central brand presence connecting recruitment solutions, marketing services, and client engagement channels.",
// url: "https://mecherd.com",
// image: "/mecherd.png",
// accent: "from-orange-500/20 to-transparent",
// },

// {
// name: "STEP Edges",
// type: "EdTech Platform",
// description:
// "An education platform with custom content management, course listings, lead capture workflows, and student engagement features designed to support learning and business growth.",
// url: "https://stepedges.com",
// image: "/step-edges.png",
// accent: "from-indigo-500/20 to-transparent",
// },

// {
// name: "Yuvan Cabs",
// type: "Business Website",
// description:
// "A modern transportation and cab-service website designed to strengthen online visibility, improve customer acquisition, and provide a seamless experience for prospective customers.",
// url: "https://yuvancabs.com",
// image: "/yuvan.png",
// accent: "from-amber-500/20 to-transparent",
// },
// ];


// /* ── component ───────────────────────────────────────── */
// export default function RecentProjects() {
//   return (
//     <motion.section
//       initial="hidden"
//       animate="visible"
//       variants={container}
//       className="relative pb-16 pt-6"
//       aria-label="Recent Projects"
//     >
//       {/* ── heading ── */}
//       <motion.div variants={fadeUp} className="mb-10 overflow-hidden">
//         <h2 className="leading-[0.92] tracking-tight">
//           <span
//             className="block text-[clamp(3rem,9vw,5.5rem)] font-black uppercase text-white"
//             style={{ letterSpacing: "-0.02em" }}
//           >
//             Recent
//           </span>
//           <span
//             className="block text-[clamp(3rem,9vw,5.5rem)] font-black uppercase"
//             style={{
//               letterSpacing: "-0.02em",
//               color: "rgba(255,255,255,0.12)",
//             }}
//           >
//             Projects
//           </span>
//         </h2>
//       </motion.div>

//       {/* ── project cards ── */}
//       <div className="flex flex-col gap-4">
//         {projects.map((project) => (
//           <motion.div key={project.name} variants={fadeUp}>
//             <div className="group relative flex items-center gap-5 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4 transition-all duration-200 hover:border-white/[0.14] hover:bg-white/[0.06]">
//               {/* thumbnail */}
//               <div className="relative h-[84px] w-[130px] flex-shrink-0 overflow-hidden rounded-xl bg-white/[0.06]">
//                 <Image
//                   src={project.image}
//                   alt={project.name}
//                   fill
//                   sizes="130px"
//                   className="object-cover transition-transform duration-300 group-hover:scale-105"
//                 />

//                 {/* accent glow */}
//                 <div
//                   className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-60`}
//                 />
//               </div>

//               {/* text */}
//               <div className="min-w-0 flex-1 pr-16">
//                 <p className="mb-0.5 text-[17px] font-semibold text-white">
//                   {project.name}
//                 </p>

//                 <p className="mb-2 text-[12px] font-medium uppercase tracking-[0.1em] text-orange-400/70">
//                   {project.type}
//                 </p>

//                 <p className="text-[13px] leading-relaxed text-white/45">
//                   {project.description}
//                 </p>
//               </div>

//               {/* links */}
//               <div className="absolute right-4 top-4 flex items-center gap-2">
//                 <Link
//                   href={project.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={`Visit ${project.name}`}
//                 >
//                   <ArrowUpRight
//                     size={18}
//                     strokeWidth={2}
//                     className="text-orange-500/70 transition-transform duration-200 hover:-translate-y-0.5 hover:translate-x-0.5 hover:text-orange-400"
//                   />
//                 </Link>

//                 {"appUrl" in project && project.appUrl && (
//                   <Link
//                     href={project.appUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="rounded-md border border-white/10 px-2 py-1 text-[10px] font-medium text-white/60 transition-colors hover:border-white/20 hover:text-white"
//                   >
//                     APP
//                   </Link>
//                 )}
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* ── divider ── */}
//       <motion.div
//         variants={fadeIn}
//         className="mt-14 h-px w-full bg-gradient-to-r from-white/[0.06] via-white/[0.12] to-transparent"
//       />
//     </motion.section>
//   );
// }

"use client";

import { motion, type Variants, type Easing } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
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
const projects = [
  {
    name: "Mecherd Recruitment Connect",
    type: "Recruitment Marketplace Platform",
    description:
      "A recruitment marketplace connecting companies, freelance recruiters, and staffing consultancies. Organizations can publish job openings while authorized recruiters and agencies submit candidate profiles, track hiring progress, and earn through successful placements using a centralized workflow platform.",
    url: "https://vendor.mecherd.com",
    image: "/vendor.png",
    accent: "from-orange-500/20 to-transparent",
  },
  {
    name: "Mecherd Careers",
    type: "Job Portal",
    description:
      "A free job portal where employers can publish openings and candidates can apply directly. Built to simplify the hiring process through job management, application tracking, and streamlined candidate engagement for both recruiters and job seekers.",
    url: "https://career.mecherd.com",
    image: "/career.png",
    accent: "from-cyan-500/20 to-transparent",
  },
  {
    name: "AEDs India",
    type: "E-Commerce Platform",
    description:
      "A full-scale e-commerce solution featuring custom CMS, inventory management, Razorpay payment integration, Shiprocket shipping automation, product catalog management, and streamlined order processing workflows.",
    url: "https://aed-ecom.vercel.app",
    image: "/aed.png",
    accent: "from-emerald-500/20 to-transparent",
  },
  {
    name: "Fly Bangalore Vacations",
    type: "Travel Booking Platform",
    description:
      "A complete travel booking ecosystem with customer management, trip planning, booking workflows, member dashboards, administrative tools, and mobile application integration for seamless vacation experiences.",
    url: "https://appadmin.flybangalorevacations.com",
    appUrl: "https://play.google.com/store/apps/details?id=com.flybangalore.app",
    image: "/fly.png",
    accent: "from-sky-500/20 to-transparent",
  },
  {
    name: "Mecherd Marketing Connect",
    type: "Digital Marketing Platform",
    description:
      "A digital marketing platform showcasing agency services, client success stories, and lead-generation solutions. Built to support client acquisition, campaign management, and business growth initiatives.",
    url: "https://marketing.mecherd.com",
    image: "/marketing.png",
    accent: "from-violet-500/20 to-transparent",
  },
  {
    name: "Mecherd Career Connect",
    type: "Company Website",
    description:
      "The primary company website presenting Mecherd's HR-tech and digital marketing offerings. Serves as the central brand presence connecting recruitment solutions, marketing services, and client engagement channels.",
    url: "https://mecherd.com",
    image: "/mecherd.png",
    accent: "from-orange-500/20 to-transparent",
  },
  {
    name: "STEP Edges",
    type: "EdTech Platform",
    description:
      "An education platform with custom content management, course listings, lead capture workflows, and student engagement features designed to support learning and business growth.",
    url: "https://stepedges.com",
    image: "/step-edges.png",
    accent: "from-indigo-500/20 to-transparent",
  },
  {
    name: "Yuvan Cabs",
    type: "Business Website",
    description:
      "A modern transportation and cab-service website designed to strengthen online visibility, improve customer acquisition, and provide a seamless experience for prospective customers.",
    url: "https://yuvancabs.com",
    image: "/yuvan.png",
    accent: "from-amber-500/20 to-transparent",
  },
];

/* ── component ───────────────────────────────────────── */
export default function RecentProjects() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={container}
      className="relative pb-16 pt-6"
      aria-label="Recent Projects"
    >
      {/* ── heading ── */}
      <motion.div variants={fadeUp} className="mb-10 overflow-hidden">
        <h2 className="leading-[0.92] tracking-tight">
          <span
            className="block text-[clamp(3rem,9vw,5.5rem)] font-black uppercase text-white"
            style={{ letterSpacing: "-0.02em" }}
          >
            Recent
          </span>
          <span
            className="block text-[clamp(3rem,9vw,5.5rem)] font-black uppercase"
            style={{ letterSpacing: "-0.02em", color: "rgba(255,255,255,0.12)" }}
          >
            Projects
          </span>
        </h2>
      </motion.div>

      {/* ── project cards ── */}
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <motion.div key={project.name} variants={fadeUp}>
            <div className="group relative rounded-2xl border border-white/[0.07] bg-white/[0.03] transition-all duration-200 hover:border-white/[0.14] hover:bg-white/[0.06]">

              {/* ── Mobile: stacked (image top, content bottom) ── */}
              <div className="flex flex-col sm:hidden">
                {/* Thumbnail — full width on mobile */}
                <div className="relative h-44 w-full overflow-hidden rounded-t-2xl bg-white/[0.06]">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-60`} />
                </div>

                {/* Content */}
                <div className="relative p-4 pt-3">
                  {/* link top-right */}
                  <div className="absolute right-4 top-4 flex items-center gap-2">
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.name}`}
                    >
                      <ArrowUpRight
                        size={18}
                        strokeWidth={2}
                        className="text-orange-500/70 transition-transform duration-200 hover:-translate-y-0.5 hover:translate-x-0.5 hover:text-orange-400"
                      />
                    </Link>
                    {"appUrl" in project && project.appUrl && (
                      <Link
                        href={project.appUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md border border-white/10 px-2 py-1 text-[10px] font-medium text-white/60 transition-colors hover:border-white/20 hover:text-white"
                      >
                        APP
                      </Link>
                    )}
                  </div>

                  <p className="pr-8 text-[16px] font-semibold text-white">{project.name}</p>
                  <p className="mb-2 mt-0.5 text-[11px] font-medium uppercase tracking-[0.1em] text-orange-400/70">
                    {project.type}
                  </p>
                  <p className="text-[13px] leading-relaxed text-white/45">{project.description}</p>
                </div>
              </div>

              {/* ── Desktop: side by side (image left, content right) ── */}
              <div className="hidden sm:flex items-center gap-5 p-4">
                {/* Thumbnail */}
                <div className="relative h-[84px] w-[130px] flex-shrink-0 overflow-hidden rounded-xl bg-white/[0.06]">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="130px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-60`} />
                </div>

                {/* Text */}
                <div className="min-w-0 flex-1 pr-16">
                  <p className="mb-0.5 text-[17px] font-semibold text-white">{project.name}</p>
                  <p className="mb-2 text-[12px] font-medium uppercase tracking-[0.1em] text-orange-400/70">
                    {project.type}
                  </p>
                  <p className="text-[13px] leading-relaxed text-white/45">{project.description}</p>
                </div>

                {/* Links */}
                <div className="absolute right-4 top-4 flex items-center gap-2">
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.name}`}
                  >
                    <ArrowUpRight
                      size={18}
                      strokeWidth={2}
                      className="text-orange-500/70 transition-transform duration-200 hover:-translate-y-0.5 hover:translate-x-0.5 hover:text-orange-400"
                    />
                  </Link>
                  {"appUrl" in project && project.appUrl && (
                    <Link
                      href={project.appUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md border border-white/10 px-2 py-1 text-[10px] font-medium text-white/60 transition-colors hover:border-white/20 hover:text-white"
                    >
                      APP
                    </Link>
                  )}
                </div>
              </div>

            </div>
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