"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
  lift?: boolean;
};

/** Glass surface with a thin border that brightens + glows on hover. */
export default function GlowCard({ children, className, as = "div", lift = true }: Props) {
  const Comp = motion[as];
  return (
    <Comp
      whileHover={lift ? { y: -6 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={cn(
        "glass group relative overflow-hidden rounded-2xl transition-[border-color,box-shadow] duration-300",
        "hover:border-accent/60 hover:shadow-[0_0_40px_-8px_rgba(0,255,136,0.35)]",
        className,
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
      />
      {children}
    </Comp>
  );
}
