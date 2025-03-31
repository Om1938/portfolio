import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ompdas.com"),
  title: "Om Prakash Das | Professional Portfolio | Senior Software Engineer",
  description:
    "A professional portfolio showcasing skills, projects, and experience.",
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
  openGraph: {
    title: "Professional Portfolio | Senior Software Engineer",
    description:
      "A professional portfolio showcasing skills, projects, and experience.",
    url: "https://ompdas.com",
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
      "A professional portfolio showcasing skills, projects, and experience.",
    images: ["/portfolio.png"],
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
