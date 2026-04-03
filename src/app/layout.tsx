import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "@/lib/theme-provider";
import "./globals.css";

const displayFont = Space_Grotesk({
  variable: "--font-display-var",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body-var",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ompdas.dev"),
  title: {
    default: "Om Prakash Das | Senior Software Engineer",
    template: "%s | Om Prakash Das",
  },
  description:
    "Senior Software Engineer with 6+ years of experience building resilient React & full-stack products. Specialist in web development, UI design systems, and TypeScript.",
  keywords: [
    "Om Prakash Das",
    "Senior Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Frontend Engineer",
    "Carestack",
    "Infosys",
    "HashedIn by Deloitte",
    "Web Developer",
    "UI Design",
  ],
  openGraph: {
    title: "Om Prakash Das | Senior Software Engineer",
    description:
      "Senior Software Engineer with 6+ years of experience. Solving problems using software.",
    url: "https://ompdas.com",
    siteName: "Om Prakash Das",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Om Prakash Das Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Om Prakash Das | Senior Software Engineer",
    description: "Senior Software Engineer. Solving problems using software.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: "https://ompdas.dev" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Om Prakash Das",
  url: "https://ompdas.dev",
  jobTitle: "Senior Software Engineer",
  description:
    "Senior Software Engineer with 6+ years of experience building resilient React & full-stack products.",
  worksFor: { "@type": "Organization", name: "Carestack" },
  sameAs: [
    "https://github.com/Om1938",
    "https://www.linkedin.com/in/omprakashdas/",
    "https://twitter.com/omkletu",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "UI/UX Design",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "KLE Technological University",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body
        className={`${displayFont.variable} ${bodyFont.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
