"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn, scrollToId } from "@/lib/utils";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  arrow?: "right" | "up-right" | false;
  external?: boolean;
  className?: string;
  icon?: React.ReactNode;
};

export default function Button({ href, children, variant = "primary", arrow = "right", external, className, icon }: Props) {
  const isExternal = external ?? /^https?:/.test(href);
  return (
    <a
      href={href}
      onClick={
        href.startsWith("#")
          ? (e) => {
              e.preventDefault();
              scrollToId(href.slice(1));
            }
          : undefined
      }
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 active:scale-[0.98]",
        variant === "primary"
          ? "bg-accent text-black shadow-[0_0_30px_-6px_rgba(0,255,136,0.7)] hover:bg-cyan hover:shadow-[0_0_40px_-4px_rgba(0,255,136,0.9)]"
          : "glass text-ink hover:border-accent/70 hover:bg-accent/10 hover:shadow-[0_0_30px_-8px_rgba(0,255,136,0.6)]",
        className,
      )}
    >
      {icon}
      {children}
      {arrow === "right" && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />}
      {arrow === "up-right" && <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />}
    </a>
  );
}
