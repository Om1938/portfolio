import { Metadata } from "next";
import RootLayout from "@/components/layout/RootLayout";
import AnimatedSection from "@/components/animation/AnimatedSection";
import ParallaxBackground from "@/components/animation/ParallaxBackground";

export const metadata: Metadata = {
  title: "About Me | Om Prakash Das | Senior Software Engineer",
  description:
    "Explore my background, skills, and experience as a developer and designer driven by creativity, problem-solving, and a passion for building great products.",
  openGraph: {
    title: "About Me | Om Prakash Das | Senior Software Engineer",
    description:
      "Explore my background, skills, and experience as a developer and designer driven by creativity, problem-solving, and a passion for building great products.",
  },
};

export default function AboutPage() {
  return (
    <RootLayout>
      <ParallaxBackground />
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-muted-foreground">
              Get to know more about my journey, experience, and passion
            </p>
          </AnimatedSection>

          <div className="mt-16">
            <AnimatedSection direction="up">
              <div className="mx-auto max-w-3xl space-y-8">
                <div>
                  <h2 className="text-2xl font-bold">Background</h2>
                  <div className="mt-4 space-y-4 text-muted-foreground">
                    <p>
                      Hello! I’m a Senior Software Engineer with a strong focus
                      on building scalable, modern, and resilient applications —
                      both on the frontend and backend. Since starting my
                      journey in 2019, I’ve grown from writing simple UI
                      components to architecting full-stack systems that power
                      real-world products at scale.
                    </p>
                    <p>
                      With a solid grasp of infrastructure, performance, and
                      usability, I aim to build experiences that are not just
                      functional, but fast, accessible, and maintainable. I
                      enjoy working on challenging problems, and I care deeply
                      about clean abstractions, developer experience, and
                      writing code that makes sense six months later.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold">Education</h2>
                  <div className="mt-4 space-y-4">
                    <div className="rounded-lg border bg-card p-6 shadow-sm">
                      <h3 className="text-xl font-semibold">
                        Bachelor of Engineering in Computer Science
                      </h3>
                      <p className="text-muted-foreground">
                        KLE Technological University, 2015-2019
                      </p>
                      <p className="mt-2 text-muted-foreground">
                        Specialized in web development and user interface
                        design.
                      </p>
                    </div>

                    <div className="rounded-lg border bg-card p-6 shadow-sm">
                      <h3 className="text-xl font-semibold">
                        All India Senior School Certificate Examination
                      </h3>
                      <p className="text-muted-foreground">
                        Gen B.C. Joshi Army Public School
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold">Experience</h2>
                  <div className="mt-4 space-y-4">
                    <div className="rounded-lg border bg-card p-6 shadow-sm">
                      <h3 className="text-xl font-semibold">Senior Engineer</h3>
                      <p className="text-muted-foreground">
                        Carestack, 11/2022 - Present
                      </p>
                      <ul className="mt-2 list-disc pl-5 text-muted-foreground">
                        <li>
                          Developed and launched multiple sales tools for
                          production use, significantly enhancing operational
                          efficiency and revenue generation.
                        </li>
                        <li>
                          Led and mentored a team of 6 full stack developers,
                          fostering skill development and ensuring successful
                          project execution.
                        </li>
                        <li>
                          Expertly utilized React and Electron to create dynamic
                          desktop applications, enhancing user experience and
                          functionality.
                        </li>
                        <li>
                          Contributed to the team responsible for creating a new
                          design system, improving design consistency and brand
                          alignment across platforms.
                        </li>
                        <li>
                          Worked on an AI-based telecom application to monitor
                          call quality and generate transcripts, enhancing
                          operational efficiency and customer satisfaction.
                        </li>
                      </ul>
                    </div>

                    <div className="rounded-lg border bg-card p-6 shadow-sm">
                      <h3 className="text-xl font-semibold">Web Developer</h3>
                      <p className="text-muted-foreground">
                        Hashedin by Deloitte, 02/2022 - 11/2022
                      </p>
                      <ul className="mt-2 list-disc pl-5 text-muted-foreground">
                        <li>
                          Specialized in front-end development using React and
                          Apollo GraphQL, integrated with a Spring-based
                          backend, to build responsive and efficient web
                          applications.
                        </li>
                        <li>
                          Played a key role in developing a report generation
                          feature for the investigation software
                          &quot;CLEAR&quot;, utilized for comprehensive
                          background verification of entities.
                        </li>
                      </ul>
                    </div>

                    <div className="rounded-lg border bg-card p-6 shadow-sm">
                      <h3 className="text-xl font-semibold">Web Developer</h3>
                      <p className="text-muted-foreground">
                        Infosys Limited, 12/2018 - 02/2022
                      </p>
                      <ul className="mt-2 list-disc pl-5 text-muted-foreground">
                        <li>
                          Last Project - Teamworld (Blackrock) A stocks,
                          portfolio and client managing system a.k.a Aladdin.
                          Built a new and improvised attendance application
                          which is currently being used by over 15k members at
                          the Infosys training.
                        </li>
                        <li>
                          Automated build and continuous software integration
                          process to drive build/release failure resolution.
                        </li>
                        <li>
                          Eliminated downtime by implementing NoSQL database and
                          caching for optimizing response rate.
                        </li>
                        <li>
                          Mentored a team of interns for project onboarding and
                          ramp-up on .NET and Angular.
                        </li>
                        <li>
                          Built a new and improvised attendance application
                          which is currently being used by over 15k members at
                          the Infosys training.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold">Interests & Hobbies</h2>
                  <div className="mt-4 space-y-4 text-muted-foreground">
                    <p>
                      When I’m not shipping features or debugging edge cases,
                      I’m usually diving into online games — it’s my favorite
                      way to unwind and stay sharp in a different kind of
                      problem-solving arena. I also enjoy exploring new
                      hardware, building custom setups, and messing with
                      networking just for fun. Tinkering with systems — digital
                      or physical — has always been part of how I learn and
                      decompress.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </RootLayout>
  );
}
