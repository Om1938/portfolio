import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { getAllPosts } from "@/lib/mdx";

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        <Hero />
        <div
          className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12"
          style={{ paddingTop: "0" }}
        >
          <About />
          <Experience />
          <Education />
          <Skills />
          <Projects />
          <Blog posts={posts} />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
