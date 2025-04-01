import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { ParallaxProvider } from "@/components/animation/ParallaxProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#4f46e5",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ompdas.com"),
  title: "Om Prakash Das | Professional Portfolio | Senior Software Engineer",
  description:
    "Full-stack developer portfolio showcasing expertise in React, Flutter, and Electron. Explore web and mobile projects built with modern technologies.",
  keywords: [
    "portfolio",
    "developer",
    "designer",
    "projects",
    "skills",
    "react",
    "nextjs",
    "typescript",
    "web development",
    "software engineer",
    "professional",
  ],
  authors: [{ name: "Om Prakash Das" }],
  creator: "Om Prakash Das",
  publisher: "Om Prakash Das",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Professional Portfolio | Senior Software Engineer",
    description:
      "Full-stack developer portfolio showcasing expertise in React, Flutter, and Electron. Explore web and mobile projects built with modern technologies.",
    url: "https://www.ompdas.com",
    siteName: "Om Prakash Das | Professional Portfolio",
    images: [
      {
        url: "/portfolio.png",
        width: 1200,
        height: 630,
        alt: "Professional Portfolio Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Om Prakash Das | Professional Portfolio | Senior Software Engineer",
    description:
      "Full-stack developer portfolio showcasing expertise in React, Flutter, and Electron. Explore web and mobile projects built with modern technologies.",
    images: ["/portfolio.png"],
    creator: "@omkletu",
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      {
        url: "/icons/apple-icon-180x180.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  verification: {
    google: "nF5o1GO8d1FUu0GV-QSckAysjHRWCba9xzAHPIJj7yA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ParallaxProvider>{children}</ParallaxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
