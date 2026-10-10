"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Wifi } from "lucide-react";
import SectionHeading from "./SectionHeading";
import GlowCard from "./GlowCard";
import Reveal from "./Reveal";
import Button from "./Button";
import { events, eventsAllUrl } from "@/data/events";

export default function Events() {
  return (
    <section id="events" aria-labelledby="events-title" className="relative isolate overflow-hidden border-y border-white/[0.04] py-24 md:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_78%_18%,rgba(53,245,208,0.085),transparent_34%),radial-gradient(ellipse_at_12%_88%,rgba(0,255,136,0.055),transparent_36%)]" />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-30 [background-image:radial-gradient(rgba(53,245,208,0.20)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="events-title"
          index="03"
          label="EVENTS"
          title="Events"
          subtitle="Our event announcements and details will appear here soon."
        />

        <div className="relative">
          {/* Desktop horizontal glowing line */}
          <motion.div
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
            className="absolute left-0 right-0 top-[1.1rem] hidden h-px bg-gradient-to-r from-accent via-accent/60 to-transparent shadow-[0_0_12px_#00ff88] lg:block"
          />
          {/* Mobile vertical glowing line */}
          <motion.div
            aria-hidden
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
            className="absolute bottom-0 left-[0.55rem] top-2 w-px bg-gradient-to-b from-accent via-accent/50 to-transparent shadow-[0_0_12px_#00ff88] lg:hidden"
          />

          <ol className="grid gap-10 pl-8 lg:grid-cols-4 lg:gap-5 lg:pl-0 lg:pt-12">
            {events.map((e, i) => (
              <li key={`${e.title}-${i}`} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-8 top-6 h-3 w-3 rounded-full bg-accent shadow-[0_0_14px_#00ff88] ring-4 ring-bg lg:-top-[2.6rem] lg:left-5"
                />
                <Reveal delay={i * 0.1} className="h-full">
                  <GlowCard className="flex h-full flex-col p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div className="font-mono leading-none">
                        <div className="text-xs tracking-widest text-accent">{e.month}</div>
                        <div className="mt-1 text-2xl font-bold">{e.day}</div>
                      </div>
                      <span className="rounded-full border border-line bg-accent/10 px-3 py-1 font-mono text-[11px] text-accent">
                        {e.category}
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-xl font-semibold">{e.title}</h3>
                    <p className="text-sm text-accent-2">{e.subtitle}</p>
                    <p className="mt-3 text-sm leading-relaxed text-ink-2">{e.description}</p>

                    <dl className="mt-auto space-y-2 border-t border-line pt-4 text-xs text-ink-2">
                      <div className="flex items-center gap-2">
                        <dt className="sr-only">Time</dt>
                        <Clock className="h-3.5 w-3.5 shrink-0 text-ink-3" aria-hidden />
                        <dd>{e.time}</dd>
                      </div>
                      <div className="flex items-center gap-2">
                        <dt className="sr-only">Location</dt>
                        {e.mode === "online" ? (
                          <Wifi className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden />
                        ) : (
                          <MapPin className="h-3.5 w-3.5 shrink-0 text-ink-3" aria-hidden />
                        )}
                        <dd>
                          {e.location}
                          <span className="ml-2 font-mono text-[10px] uppercase tracking-wider text-ink-3">
                            [{e.mode.toUpperCase()}]
                          </span>
                        </dd>
                      </div>
                    </dl>
                  </GlowCard>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <Reveal className="mt-12 flex justify-center">
          <Button href={eventsAllUrl} variant="ghost">View All Events</Button>
        </Reveal>
      </div>
    </section>
  );
}
