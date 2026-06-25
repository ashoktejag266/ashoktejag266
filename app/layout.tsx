

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import PageWrapper from "@/components/Pagewrapper";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ProfileCard from "@/components/profilecard";
import MainTransition from "@/components/Maintransition";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://ashoktejag266.vercel.app/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Ashok Teja G | Full Stack Developer",
    template: "%s | Ashok Teja G",
  },

  description:
    "Full Stack Developer specializing in React, Next.js, FastAPI, TypeScript, Supabase, and modern web applications.",

  keywords: [
    "Ashok Teja",
    "Full Stack Developer",
    "React",
    "Next.js",
    "FastAPI",
    "TypeScript",
    "Supabase",
    "Portfolio",
  ],

  authors: [
    {
      name: "Ashok Teja G",
      url: siteUrl,
    },
  ],

  creator: "Ashok Teja G",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Ashok Teja G Portfolio",
    title: "Ashok Teja G | Full Stack Developer",
    description:
      "Building scalable web applications with React, Next.js, FastAPI, Supabase, and modern cloud technologies.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ashok Teja G | Full Stack Developer",
    description:
      "Building scalable web applications with React, Next.js, FastAPI, Supabase, and modern cloud technologies.",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#0a0a0a] text-white antialiased selection:bg-orange-500/30 selection:text-white">
        {/* Background Grid */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-0"
          style={{
            backgroundImage: `
              radial-gradient(
                ellipse 80% 60% at 50% -10%,
                rgba(234,88,12,0.08) 0%,
                transparent 70%
              ),
              linear-gradient(
                rgba(255,255,255,0.015) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,0.015) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "100% 100%, 48px 48px, 48px 48px",
          }}
        />

        <PageWrapper>
          <div className="relative z-10 flex min-h-screen flex-col">
            <Header />

            <div className="mx-auto w-full max-w-6xl flex-1 px-4 pt-8 md:px-6">
              <div className="flex gap-6 lg:gap-8">
                {/* Sidebar */}
                <aside className="hidden md:block w-64 shrink-0 lg:w-72">
                  <ProfileCard />
                </aside>

                {/* Main Content */}
<main className="min-w-0 flex-1">
  <MainTransition>
    {children}
  </MainTransition>
</main>              </div>
            </div>

            <Footer />
          </div>
        </PageWrapper>
      </body>
    </html>
  );
}