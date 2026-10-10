"use client";

import { motion } from "framer-motion";
import { ChevronRight, Search, GitFork, PencilLine, GitPullRequest, PartyPopper, type LucideIcon } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Button from "./Button";
import { social } from "@/data/social";

const steps: { n: string; title: string; text: string; icon: LucideIcon }[] = [
  { n: "01", title: "Find a project", text: "Explore our repositories and find something interesting.", icon: Search },
  { n: "02", title: "Fork it", text: "Make a copy to your own account.", icon: GitFork },
  { n: "03", title: "Make your changes", text: "Build, improve and add something new.", icon: PencilLine },
  { n: "04", title: "Open a PR", text: "Submit your changes and get them reviewed.", icon: GitPullRequest },
  { n: "05", title: "You're a contributor", text: "Welcome to the FOSS community!", icon: PartyPopper },
];

export default function Contribution() {
  return (
    <section aria-labelledby="contrib-title" className="relative overflow-hidden py-24 md:py-32">
      {/* abstract scenic background: grid floor + mountains + glow */}
      <div aria-hidden className="absolute inset-0 -z-0 bg-gradient-to-b from-transparent via-surface/60 to-transparent" />
      <svg aria-hidden className="absolute inset-x-0 bottom-0 h-64 w-full opacity-60" viewBox="0 0 1440 260" preserveAspectRatio="none">
        <defs>
          <linearGradient id="mtn" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#00ff88" stopOpacity="0.18" />
            <stop offset="1" stopColor="#00ff88" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0 260 L0 190 L180 110 L300 170 L470 60 L640 180 L800 100 L980 190 L1150 80 L1300 160 L1440 120 L1440 260Z" fill="url(#mtn)" />
        <path d="M0 190 L180 110 L300 170 L470 60 L640 180 L800 100 L980 190 L1150 80 L1300 160 L1440 120" fill="none" stroke="#00ff88" strokeOpacity="0.45" strokeWidth="1" />
      </svg>
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.06] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="contrib-title"
          index="04"
          label="GET INVOLVED"
          title="Make Your First Contribution"
          subtitle="It's easier than you think. Follow these simple steps and become part of the open-source journey."
          align="center"
        />

        <ol className="relative grid gap-10 lg:grid-cols-5 lg:gap-4">
          {/* connecting line (desktop) */}
          <motion.div
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
            className="absolute left-[10%] right-[10%] top-8 hidden h-px bg-gradient-to-r from-accent/20 via-accent to-accent/20 shadow-[0_0_12px_#00ff88] lg:block"
          />
          {steps.map((s, i) => {
            const Icon = s.icon;
            const last = i === steps.length - 1;
            return (
              <li key={s.n} className="relative flex gap-5 lg:flex-col lg:items-center lg:gap-0 lg:text-center">
                {/* connecting line (mobile) */}
                {!last && <span aria-hidden className="absolute left-8 top-16 h-[calc(100%-2rem)] w-px bg-gradient-to-b from-accent/70 to-accent/10 lg:hidden" />}
                <Reveal delay={i * 0.12} className="flex gap-5 lg:flex-col lg:items-center">
                  <span
                    className={
                      "relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border bg-bg text-accent " +
                      (last
                        ? "border-accent bg-accent/15 shadow-[0_0_40px_-4px_rgba(0,255,136,0.8)]"
                        : "border-accent/40 shadow-[0_0_24px_-6px_rgba(0,255,136,0.6)]")
                    }
                  >
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="lg:mt-6">
                    <p className="font-mono text-xs text-accent">{s.n}</p>
                    <h3 className="mt-1 font-display text-lg font-semibold">{s.title}</h3>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-2">{s.text}</p>
                  </div>
                </Reveal>
                {!last && (
                  <ChevronRight aria-hidden className="absolute -right-4 top-[1.4rem] z-10 hidden h-5 w-5 text-accent lg:block" />
                )}
              </li>
            );
          })}
        </ol>

        <Reveal className="mt-14 flex justify-center">
          <Button href={social.join}>Join Community</Button>
        </Reveal>
      </div>
    </section>
  );
}
