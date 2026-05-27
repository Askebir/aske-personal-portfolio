const experiences = [
  {
    pariod: "2022 - present",
    role: "Senior Fronted Engineer",
    company: "Tech  Innovators Inc",
    description:
      "Leading frontend archtecture for a suite of fintech products. implement",
    technologies: ["React", "TypeScript", "Next.js", "GraphQL"],
    current: true,
  },
  {
    pariod: "2020 - 2022",
    role: "Frontend Engineer",
    company: "Digital Solutions Co.",
    description:
      "Build and maintained multiple Reat applications for enterprise client",
    technologies: ["React", "Redux", "Jest", "Cypress"],
    current: false,
  },
  {
    pariod: "2019 - 2020",
    role: "Junior Developer",
    company: "StartUp Labs",
    description:
      "Contributed to the development of a SaaS platform from MVP to production",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    current: false,
  },
  {
    pariod: "2018 - 2019",
    role: "Freelance Developer",
    company: "Self-Employed",
    description:
      "Delivered custom web solutions for small business and startups.Buil",
    technologies: ["JavaScript", "PHP", "WordPress", "MySQL"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32  relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2"></div>
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              Speaks volumes.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200 ">
            A timeline of my professional growth, from curious bignner to senior
            engineer leading teams and building products at scale
          </p>
        </div>
        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg=gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,160,0.8)]" />
        </div>
      </div>
    </section>
  );
};
