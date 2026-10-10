import { ArrowUpRight, Code2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Button from "./Button";
import { projects, projectsAllUrl } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="relative isolate overflow-hidden py-24 md:py-32">
      {/* Distinct project backdrop: subtle emerald radial light and fine technical grid. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_18%_22%,rgba(0,255,136,0.10),transparent_38%),radial-gradient(ellipse_at_88%_78%,rgba(53,245,208,0.06),transparent_34%)]" />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(0,255,136,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.025)_1px,transparent_1px)] bg-[size:42px_42px] [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="projects-title"
          index="02"
          label="FEATURED PROJECTS"
          title="Our Projects"
          subtitle="A space for the ideas and open-source projects we will build together."
        />

        {projects.length > 0 ? (
          <ul className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <li key={project.name} className="glass rounded-2xl p-6">
                <h3 className="font-display text-xl font-semibold">{project.name}</h3>
                <p className="mt-2 text-sm text-ink-2">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => <span key={tag} className="rounded-md border border-line px-2.5 py-1 font-mono text-xs text-ink-2">{tag}</span>)}
                </div>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm text-accent hover:text-cyan">View repository <ArrowUpRight className="h-4 w-4" aria-hidden /></a>
              </li>
            ))}
          </ul>
        ) : (
          <Reveal>
            <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-line bg-[#07110f]/75 px-6 py-12 text-center shadow-[0_20px_90px_-55px_rgba(0,255,136,0.45)] backdrop-blur-xl sm:px-12 sm:py-16">
              <div aria-hidden className="absolute left-1/2 top-0 h-36 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-[70px]" />
              <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-accent/25 bg-accent/[0.07] text-accent shadow-[0_0_35px_-15px_rgba(0,255,136,0.7)]">
                <Code2 className="h-7 w-7" aria-hidden />
              </div>
              <p className="relative mt-6 font-mono text-xs tracking-[0.22em] text-accent">UNDER CONSTRUCTION</p>
              <h3 className="relative mt-3 font-display text-2xl font-semibold sm:text-3xl">Something is brewing.</h3>
              <p className="relative mx-auto mt-3 max-w-lg text-sm leading-relaxed text-ink-2 sm:text-base">
                We don&apos;t have projects to showcase just yet. This space will feature community-built projects as soon as they are ready.
              </p>
            </div>
          </Reveal>
        )}

        <Reveal className="mt-10 flex justify-center">
          <Button href={projectsAllUrl} variant="ghost" arrow="up-right">View All Projects</Button>
        </Reveal>
      </div>
    </section>
  );
}
