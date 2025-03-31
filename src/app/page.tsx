import { Metadata } from "next";
import RootLayout from "@/components/layout/RootLayout";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import ParallaxWrapper from "@/components/animation/ParallaxWrapper";
import ParallaxBackground from "@/components/animation/ParallaxBackground";

export const metadata: Metadata = {
  title: "Home | Om Prakash Das | Senior Software Engineer",
  description:
    "Welcome to my professional portfolio showcasing my skills, projects, and experience.",
};

export default function Home() {
  return (
    <RootLayout>
      {/* Global parallax background */}
      <ParallaxBackground />

      {/* Main content with parallax effects */}
      <div className="relative">
        <HeroSection />

        <ParallaxWrapper direction="up" speed={0.3} offset={100}>
          <AboutSection />
        </ParallaxWrapper>

        <ParallaxWrapper direction="up" speed={0.4} offset={80}>
          <ProjectsSection />
        </ParallaxWrapper>

        <ParallaxWrapper direction="up" speed={0.5} offset={60}>
          <ContactSection />
        </ParallaxWrapper>
      </div>
    </RootLayout>
  );
}
