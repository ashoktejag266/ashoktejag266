"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Home,
  FolderOpen,
  Briefcase,
  Wrench,
  PenLine,
} from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/projects", label: "Projects", icon: FolderOpen },
  { href: "/experience", label: "Experience", icon: Briefcase },
  { href: "/tools", label: "Tools", icon: Wrench },
  { href: "/thoughts", label: "Thoughts", icon: PenLine },
];

export default function Header() {
  const pathname = usePathname();
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-4 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className="relative flex items-center gap-1 rounded-2xl border border-white/10 bg-white/5 px-3 py-2.5 shadow-xl backdrop-blur-xl"
        aria-label="Main navigation"
      >
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive =
            href === "/" ? pathname === "/" : pathname.startsWith(href);

          return (
            <div
              key={href}
              className="relative"
              onMouseEnter={() => setHoveredHref(href)}
              onMouseLeave={() => setHoveredHref(null)}
            >
              <Link
                href={href}
                aria-label={label}
                className={`
                  relative flex h-9 w-9 items-center justify-center rounded-xl transition-colors duration-200
                  ${
                    isActive
                      ? "bg-orange-500 text-white"
                      : "text-white/50 hover:bg-white/10 hover:text-white"
                  }
                `}
              >
                <Icon size={17} strokeWidth={isActive ? 2.2 : 1.8} />

                {/* active dot */}
                {isActive && (
                  <motion.span
                    layoutId="nav-active-dot"
                    className="absolute -bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-orange-400"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>

              {/* tooltip */}
              {hoveredHref === href && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="pointer-events-none absolute left-1/2 top-full mt-2.5 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#1a1a1a] px-2.5 py-1 text-xs font-medium text-white/90 shadow-lg ring-1 ring-white/10"
                >
                  {label}
                  {/* triangle */}
                  <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-[#1a1a1a] ring-1 ring-white/10" />
                </motion.div>
              )}
            </div>
          );
        })}
      </nav>
    </motion.header>
  );
}