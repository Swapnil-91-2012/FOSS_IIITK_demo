"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import Logo from "./Logo";
import { navItems, type SectionId } from "@/data/navigation";
import { social } from "@/data/social";
import { cn, scrollToId } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<SectionId>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section detection
  useEffect(() => {
    const els = navItems.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id as SectionId);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Lock body scroll + close on Escape while the mobile menu is open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    // wait a tick so the body scroll-lock is released before scrolling
    setTimeout(() => scrollToId(id), 30);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300",
        scrolled || open ? "border-line bg-bg/80" : "border-transparent bg-transparent",
      )}
    >
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-20">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            go("home");
          }}
          aria-label="FOSS Club IIIT Kalyani — home"
        >
          <Logo size={40} />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  go(item.id);
                }}
                aria-current={active === item.id ? "page" : undefined}
                className={cn(
                  "relative rounded-lg px-4 py-2 text-sm transition-colors",
                  active === item.id ? "text-accent" : "text-ink-2 hover:text-ink",
                )}
              >
                {item.label}
                {active === item.id && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-x-4 -bottom-0.5 h-px bg-accent shadow-[0_0_8px_#00ff88]"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={social.join}
          target="_blank"
          rel="noopener noreferrer"
          className="group hidden min-h-10 items-center gap-2 rounded-xl border border-accent/50 bg-accent/10 px-5 text-sm font-semibold text-accent transition hover:bg-accent hover:text-black lg:inline-flex"
        >
          Join Community
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="glass inline-flex h-11 w-11 items-center justify-center rounded-xl lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden border-t border-line lg:hidden"
          >
            <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-5 pb-6 pt-3 sm:px-8">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      go(item.id);
                    }}
                    aria-current={active === item.id ? "page" : undefined}
                    className={cn(
                      "flex min-h-12 items-center justify-between rounded-xl px-4 text-lg font-medium",
                      active === item.id ? "bg-accent/10 text-accent" : "text-ink-2",
                    )}
                  >
                    {item.label}
                    {active === item.id && <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />}
                  </a>
                </motion.li>
              ))}
              <li className="mt-3">
                <a
                  href={social.join}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-accent font-semibold text-black"
                >
                  Join Community <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
