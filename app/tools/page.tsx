import Experience from "@/components/Experience";
import HeroSection from "@/components/Herosection";
import PremiumTools from "@/components/Premiumtools";
import RecentProjects from "@/components/Recentprojects";
import type { Metadata } from "next";

/* ── Page-level SEO (extends layout metadata) ─────────────────────────── */
export const metadata: Metadata = {
  title: "Ashok Teja G — Full Stack Developer",
  description:
    "Full-Stack Developer with 4+ years of experience building end-to-end products — CRMs, e-commerce platforms, observability dashboards, and AI-integrated tools using React, Next.js, FastAPI, and Supabase.",
  keywords: [
    "Ashok Teja G",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "FastAPI",
    "Supabase",
    "Bengaluru",
    "India",
    "Portfolio",
    "Software Engineer",
  ],
  alternates: {
    canonical: "https://yourdomain.com", // 👈 update
  },
  openGraph: {
    title: "Ashok Teja G — Full Stack Developer",
    description:
      "Building end-to-end products — from database schema and FastAPI backends to React / Next.js frontends and cloud deployment.",
    url: "https://yourdomain.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashok Teja G — Full Stack Developer",
    description:
      "Building end-to-end products — from database schema and FastAPI backends to React / Next.js frontends and cloud deployment.",
  },
};

/* ── Page ─────────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>

      <PremiumTools/>


  
    </>
  );
}