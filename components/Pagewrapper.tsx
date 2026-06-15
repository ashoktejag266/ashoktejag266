"use client";

import { motion, AnimatePresence, type Variants, type Easing } from "framer-motion";
import { usePathname } from "next/navigation";

const ease: Easing = "easeOut";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease,
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="contents"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}