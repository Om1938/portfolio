import { Metadata } from "next";
import RootLayout from "@/components/layout/RootLayout";
import AnimatedSection from "@/components/animation/AnimatedSection";
import ContactForm from "@/components/sections/ContactForm";
import ParallaxBackground from "@/components/animation/ParallaxBackground";

export const metadata: Metadata = {
  title: "Contact | Om Prakash Das | Senior Software Engineer",
  description:
    "Reach out for project inquiries, freelance opportunities, collaborations, or just to connect and talk tech, design, or development.",
  openGraph: {
    title: "Contact | Om Prakash Das | Senior Software Engineer",
    description:
      "Reach out for project inquiries, freelance opportunities, collaborations, or just to connect and talk tech, design, or development.",
  },
};

export default function ContactPage() {
  return (
    <RootLayout>
      <ParallaxBackground />
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
                Contact Me
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-muted-foreground">
              Reach out for collaborations, questions, or just to say hello
            </p>
          </AnimatedSection>

          <div className="mt-16 grid gap-10 md:grid-cols-2">
            <AnimatedSection direction="left">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold">Get In Touch</h2>
                  <p className="mt-2 text-muted-foreground">
                    I&apos;m always open to new opportunities and
                    collaborations. Feel free to reach out!
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href="mailto:omkletu@gmail.com"
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        omkletu@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <a
                        href="tel:+917727877741"
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        +91 7727877741
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">
                        Trivandrum, Kerala, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </RootLayout>
  );
}
