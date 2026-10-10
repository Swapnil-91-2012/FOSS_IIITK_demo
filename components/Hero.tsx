"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Button from "./Button";
import Terminal from "./Terminal";
import { social } from "@/data/social";
import { scrollToId } from "@/lib/utils";

export default function Hero() {
  const { scrollY } = useScroll();
  const waveY = useTransform(scrollY, [0, 600], [0, 90]);
  const glowY = useTransform(scrollY, [0, 600], [0, -60]);

  return (
    <section id="home" aria-labelledby="hero-title" className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-28 lg:pt-24">
      {/* decorative layers */}
      <motion.div aria-hidden style={{ y: glowY }} className="pointer-events-none absolute right-[-10%] top-1/2 h-[46rem] w-[46rem] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,255,136,0.16),transparent_65%)]" />
      <motion.svg
        aria-hidden
        style={{ y: waveY }}
        className="pointer-events-none absolute inset-x-0 bottom-0 h-72 w-full opacity-70"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wave" x1="0" x2="1">
            <stop offset="0" stopColor="#00ff88" stopOpacity="0" />
            <stop offset="0.5" stopColor="#00ff88" stopOpacity="0.9" />
            <stop offset="1" stopColor="#35f5d0" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0 220 C 240 120, 420 300, 720 200 S 1200 100, 1440 210" fill="none" stroke="url(#wave)" strokeWidth="1.5" className="animate-wave" />
        <path d="M0 250 C 260 160, 480 320, 760 240 S 1220 150, 1440 250" fill="none" stroke="url(#wave)" strokeWidth="1" opacity="0.5" className="animate-wave" style={{ animationDuration: "26s" }} />
        <path d="M0 220 C 240 120, 420 300, 720 200 S 1200 100, 1440 210 V320 H0Z" fill="url(#wave)" opacity="0.04" />
      </motion.svg>
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-bg/40 via-transparent to-bg" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* LEFT */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] tracking-[0.22em] text-accent sm:text-xs"
          >
            <span>OPEN SOURCE</span>
            <span aria-hidden className="text-ink-3">×</span>
            <span>COLLABORATION</span>
            <span aria-hidden className="text-ink-3">×</span>
            <span>COMMUNITY</span>
          </motion.p>

          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-[clamp(3rem,9vw,6.5rem)] font-bold leading-[0.98] tracking-tight"
          >
            Build.
            <br />
            Contribute.
            <br />
            <span className="text-accent text-glow">Together.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-7 max-w-xl text-base leading-relaxed text-ink-2 sm:text-lg"
          >
            FOSS Club IIIT Kalyani is a student-driven community exploring open source, technology and collaborative development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button href="#projects">Explore Projects</Button>
            <Button href={social.join} variant="ghost" arrow={false}>Join Community</Button>
          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <Terminal />
        </motion.div>
      </div>

      <button
        type="button"
        onClick={() => scrollToId("about")}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 font-mono text-xs text-ink-3 transition-colors hover:text-accent sm:flex"
      >
        Scroll to explore
        <ChevronDown className="animate-bob h-4 w-4" aria-hidden />
      </button>
    </section>
  );
}
