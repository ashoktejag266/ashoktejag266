

// // import type { Metadata, Viewport } from "next";
// // import { Inter } from "next/font/google";
// // import "./globals.css";
// // import PageWrapper from "@/components/Pagewrapper";
// // import Header from "@/components/header";
// // import Footer from "@/components/footer";
// // import ProfileCard from "@/components/profilecard";

// // const inter = Inter({
// //   subsets: ["latin"],
// //   variable: "--font-inter",
// //   display: "swap",
// // });

// // const siteUrl = "https://yourdomain.com"; // 👈 update this
// // const siteTitle = "Aaabad Ahmed — Software Engineer";
// // const siteDescription =
// //   "Passionate about creating intuitive and engaging user experiences. Specialising in transforming ideas into beautifully crafted products.";

// // export const metadata: Metadata = {
// //   metadataBase: new URL(siteUrl),
// //   title: {
// //     default: siteTitle,
// //     template: "%s | Aaabad Ahmed",
// //   },
// //   description: siteDescription,
// //   keywords: [
// //     "Software Engineer",
// //     "Frontend Developer",
// //     "React",
// //     "Next.js",
// //     "Full Stack",
// //     "Portfolio",
// //   ],
// //   authors: [{ name: "Aaabad Ahmed", url: siteUrl }],
// //   creator: "Aaabad Ahmed",
// //   openGraph: {
// //     type: "website",
// //     locale: "en_US",
// //     url: siteUrl,
// //     siteName: "Aaabad Ahmed",
// //     title: siteTitle,
// //     description: siteDescription,
// //     images: [
// //       {
// //         url: `${siteUrl}/og-image.png`, // add a 1200×630 image
// //         width: 1200,
// //         height: 630,
// //         alt: siteTitle,
// //       },
// //     ],
// //   },
// //   twitter: {
// //     card: "summary_large_image",
// //     title: siteTitle,
// //     description: siteDescription,
// //     creator: "@yourhandle", // 👈 update
// //     images: [`${siteUrl}/og-image.png`],
// //   },
// //   robots: {
// //     index: true,
// //     follow: true,
// //     googleBot: {
// //       index: true,
// //       follow: true,
// //       "max-video-preview": -1,
// //       "max-image-preview": "large",
// //       "max-snippet": -1,
// //     },
// //   },
// //   icons: {
// //     icon: "/favicon.ico",
// //     shortcut: "/favicon-16x16.png",
// //     apple: "/apple-touch-icon.png",
// //   },
// //   manifest: "/site.webmanifest",
// // };

// // export const viewport: Viewport = {
// //   themeColor: "#0a0a0a",
// //   width: "device-width",
// //   initialScale: 1,
// // };

// // export default function RootLayout({
// //   children,
// // }: {
// //   children: React.ReactNode;
// // }) {
// //   return (
// //     <html lang="en" className={inter.variable}>
// //       <body className="bg-[#0a0a0a] text-white antialiased selection:bg-orange-500/30 selection:text-white">
// //         {/* Subtle grid texture overlay */}
// //         <div
// //           aria-hidden
// //           className="pointer-events-none fixed inset-0 z-0"
// //           style={{
// //             backgroundImage: `
// //               radial-gradient(ellipse 80% 60% at 50% -10%, rgba(234,88,12,0.08) 0%, transparent 70%),
// //               linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
// //               linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
// //             `,
// //             backgroundSize: "100% 100%, 48px 48px, 48px 48px",
// //           }}
// //         />

// //         <PageWrapper>
// //           <div className="relative z-10 flex min-h-screen flex-col">
// //             <Header />

// //             {/* Content area: sidebar + page */}
// //             <div className="mx-auto w-full max-w-6xl flex-1 px-4 pt-8 pb-0 md:px-6">
// //               <div className="flex gap-6 lg:gap-8">
// //                 {/* Sticky profile sidebar — hidden on mobile, shown md+ */}
// //                 <div className="hidden md:block w-64 lg:w-72 shrink-0">
// //                   <ProfileCard />
// //                 </div>

// //                 {/* Page content */}
// //                 <main className="min-w-0 flex-1">{children}</main>
// //               </div>
// //             </div>

// //             <Footer />
// //           </div>
// //         </PageWrapper>
// //       </body>
// //     </html>
// //   );
// // }

// import type { Metadata, Viewport } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";

// import PageWrapper from "@/components/Pagewrapper";
// import Header from "@/components/header";
// import Footer from "@/components/footer";
// import ProfileCard from "@/components/profilecard";

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
//   display: "swap",
// });

// const siteUrl = "https://your-domain.vercel.app";

// export const metadata: Metadata = {
//   metadataBase: new URL(siteUrl),

//   title: {
//     default: "Ashok Teja G | Full Stack Developer",
//     template: "%s | Ashok Teja G",
//   },

//   description:
//     "Full Stack Developer specializing in React, Next.js, FastAPI, TypeScript, Supabase, and modern web applications.",

//   keywords: [
//     "Ashok Teja",
//     "Full Stack Developer",
//     "React",
//     "Next.js",
//     "FastAPI",
//     "TypeScript",
//     "Supabase",
//     "Portfolio",
//   ],

//   authors: [
//     {
//       name: "Ashok Teja G",
//       url: siteUrl,
//     },
//   ],

//   creator: "Ashok Teja G",

//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: siteUrl,
//     siteName: "Ashok Teja G Portfolio",
//     title: "Ashok Teja G | Full Stack Developer",
//     description:
//       "Building scalable web applications with React, Next.js, FastAPI, Supabase, and modern cloud technologies.",
//   },

//   twitter: {
//     card: "summary_large_image",
//     title: "Ashok Teja G | Full Stack Developer",
//     description:
//       "Building scalable web applications with React, Next.js, FastAPI, Supabase, and modern cloud technologies.",
//   },

//   robots: {
//     index: true,
//     follow: true,
//   },

//   icons: {
//     icon: "/favicon.ico",
//   },
// };

// export const viewport: Viewport = {
//   themeColor: "#0a0a0a",
//   width: "device-width",
//   initialScale: 1,
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className={inter.variable}>
//       <body className="bg-[#0a0a0a] text-white antialiased selection:bg-orange-500/30 selection:text-white">
//         {/* Background Grid */}
//         <div
//           aria-hidden
//           className="pointer-events-none fixed inset-0 z-0"
//           style={{
//             backgroundImage: `
//               radial-gradient(
//                 ellipse 80% 60% at 50% -10%,
//                 rgba(234,88,12,0.08) 0%,
//                 transparent 70%
//               ),
//               linear-gradient(
//                 rgba(255,255,255,0.015) 1px,
//                 transparent 1px
//               ),
//               linear-gradient(
//                 90deg,
//                 rgba(255,255,255,0.015) 1px,
//                 transparent 1px
//               )
//             `,
//             backgroundSize: "100% 100%, 48px 48px, 48px 48px",
//           }}
//         />

//         <PageWrapper>
//           <div className="relative z-10 flex min-h-screen flex-col">
//             <Header />

//             <div className="mx-auto w-full max-w-6xl flex-1 px-4 pt-8 md:px-6">
//               <div className="flex gap-6 lg:gap-8">
//                 {/* Sidebar */}
//                 <aside className="hidden md:block w-64 shrink-0 lg:w-72">
//                   <ProfileCard />
//                 </aside>

//                 {/* Main Content */}
//                 <main className="min-w-0 flex-1">
//                   {children}
//                 </main>
//               </div>
//             </div>

//             <Footer />
//           </div>
//         </PageWrapper>
//       </body>
//     </html>
//   );
// }

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import PageWrapper from "@/components/Pagewrapper";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ProfileCard from "@/components/profilecard";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://your-domain.vercel.app";

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
                <main className="min-w-0 flex-1">{children}</main>
              </div>
            </div>

            <Footer />
          </div>
        </PageWrapper>
      </body>
    </html>
  );
}