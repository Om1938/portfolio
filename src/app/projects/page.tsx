import { Metadata } from "next";
import RootLayout from "@/components/layout/RootLayout";
import AnimatedSection from "@/components/animation/AnimatedSection";
import ProjectGrid from "@/components/sections/ProjectGrid";
import ParallaxBackground from "@/components/animation/ParallaxBackground";

export const metadata: Metadata = {
  title: "Projects | Om Prakash Das | Senior Software Engineer",
  description:
    "Explore a curated portfolio of projects demonstrating expertise in web development, app design, and modern frontend technologies.",
  openGraph: {
    title: "Projects | Om Prakash Das | Senior Software Engineer",
    description:
      "Explore a curated portfolio of projects demonstrating expertise in web development, app design, and modern frontend technologies.",
  },
};

export default function ProjectsPage() {
  return (
    <RootLayout>
      <ParallaxBackground />
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
                My Projects
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-muted-foreground">
              A showcase of my work, designs, and development projects
            </p>
          </AnimatedSection>

          <div className="mt-16">
            <ProjectGrid />
          </div>
        </div>
      </section>
    </RootLayout>
  );
}
