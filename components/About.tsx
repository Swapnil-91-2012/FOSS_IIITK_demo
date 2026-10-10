"use client";

import { motion } from "framer-motion";
import { BookOpen, Hammer, Users, GitPullRequest, type LucideIcon } from "lucide-react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import GlowCard from "./GlowCard";
import Reveal from "./Reveal";

const features: { n: string; title: string; text: string; icon: LucideIcon }[] = [
  { n: "01", title: "Learn", text: "Gain hands-on experience with real technologies.", icon: BookOpen },
  { n: "02", title: "Build", text: "Work on exciting projects and solve real problems.", icon: Hammer },
  { n: "03", title: "Collaborate", text: "Join a supportive and inclusive community.", icon: Users },
  { n: "04", title: "Contribute", text: "Give back to open source and make an impact.", icon: GitPullRequest },
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHeading id="about-title" index="01" label="ABOUT US" title="Who We Are" />
            <Reveal delay={0.1} className="-mt-6 space-y-5 text-base leading-relaxed text-ink-2 sm:text-lg md:-mt-8">
              <p>FOSS Club IIIT Kalyani is a community for students who believe technology gets better when it&apos;s shared.</p>
              <p>We bring together curious minds to learn, build, collaborate and contribute to the open-source ecosystem.</p>
            </Reveal>
          </div>

          {/* abstract visual composition */}
          <Reveal delay={0.15} className="relative mx-auto aspect-square w-full max-w-md">
            <div aria-hidden className="absolute inset-0 rounded-full bg-accent/10 blur-3xl" />
            <div aria-hidden className="animate-drift absolute -left-2 top-6 h-20 w-20 rotate-12 rounded-2xl border border-accent/40" />
            <div aria-hidden className="animate-drift absolute -right-2 bottom-10 h-14 w-14 rounded-full border border-cyan/40" style={{ animationDelay: "-3s" }} />
            <div aria-hidden className="animate-drift absolute right-6 top-0 h-3 w-3 rounded-full bg-accent shadow-[0_0_14px_#00ff88]" style={{ animationDelay: "-5s" }} />
            <span aria-hidden className="absolute left-0 bottom-16 font-mono text-5xl text-accent/40">{"</>"}</span>
            <span aria-hidden className="absolute right-2 top-16 font-mono text-4xl text-accent/30">{"{ }"}</span>
            <span aria-hidden className="absolute bottom-2 left-1/3 font-mono text-3xl text-cyan/30">git</span>

            <motion.div
              whileHover={{ rotate: -1.5, scale: 1.02 }}
              className="glass absolute inset-8 flex flex-col items-center justify-center gap-5 rounded-3xl p-8 shadow-[0_0_80px_-20px_rgba(0,255,136,0.5)]"
            >
              <div className="bg-grid absolute inset-0 rounded-3xl opacity-60" aria-hidden />
              <Image
                src="/images/foss-logo.png"
                alt="FOSS Club IIIT Kalyani logo"
                width={160}
                height={160}
                className="relative rounded-2xl shadow-[0_0_40px_-6px_rgba(0,255,136,0.6)]"
              />
              <p className="relative font-mono text-xs tracking-widest text-ink-2">$ git clone community</p>
            </motion.div>
          </Reveal>
        </div>

        <ul className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ n, title, text, icon: Icon }, i) => (
            <li key={title}>
              <Reveal delay={i * 0.08} className="h-full">
                <GlowCard className="h-full p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent shadow-[0_0_24px_-4px_rgba(0,255,136,0.6)] ring-1 ring-accent/30">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="font-mono text-xs text-ink-3">{n}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-2">{text}</p>
                </GlowCard>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
