import SectionHeading from "./SectionHeading";
import GlowCard from "./GlowCard";
import Reveal from "./Reveal";
import { GithubIcon, LinkedinIcon } from "./icons";
import { team } from "@/data/team";

export default function Team() {
  return (
    <section id="team" aria-labelledby="team-title" className="relative isolate overflow-hidden py-24 md:py-32">
      {/* Distinct team backdrop: soft violet-teal aurora with understated diagonal lines. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_16%_48%,rgba(116,92,255,0.09),transparent_36%),radial-gradient(ellipse_at_90%_22%,rgba(0,255,136,0.07),transparent_32%)]" />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-20 [background-image:repeating-linear-gradient(135deg,transparent_0,transparent_38px,rgba(255,255,255,0.07)_39px,transparent_40px)]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="team-title"
          index="05"
          label="MEET THE PEOPLE"
          title="Behind the Community"
          subtitle="A diverse group of students, builders and dreamers working together to make FOSS IIIT Kalyani happen."
        />

        <ul className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {team.map((m, i) => (
            <li key={`${m.role}-${i}`}>
              <Reveal delay={i * 0.08} className="h-full">
                <GlowCard className="h-full p-3 sm:p-4">
                  <div className="relative aspect-square overflow-hidden rounded-xl bg-surface-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={m.image ?? "/images/placeholders/avatar.svg"}
                      alt={`${m.name}, ${m.role}`}
                      className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                      loading="lazy"
                    />
                    <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-bg/70 to-transparent" />
                  </div>
                  <div className="px-1 pb-1 pt-4">
                    <h3 className="font-display text-base font-semibold sm:text-lg">{m.name}</h3>
                    <p className="font-mono text-xs text-accent">{m.role}</p>
                    <div className="mt-3 flex gap-2">
                      {m.github && (
                        <a
                          href={m.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${m.name} (${m.role}) on GitHub`}
                          className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-ink-2 transition hover:border-accent hover:text-accent"
                        >
                          <GithubIcon className="h-4 w-4" />
                        </a>
                      )}
                      {m.linkedin && (
                        <a
                          href={m.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${m.name} (${m.role}) on LinkedIn`}
                          className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-ink-2 transition hover:border-accent hover:text-accent"
                        >
                          <LinkedinIcon className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </GlowCard>
              </Reveal>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
