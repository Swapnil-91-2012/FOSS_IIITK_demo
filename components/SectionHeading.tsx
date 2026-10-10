import Reveal from "./Reveal";
import { cn } from "@/lib/utils";

type Props = {
  index: string;
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  id?: string;
};

export default function SectionHeading({ index, label, title, subtitle, align = "left", id }: Props) {
  const center = align === "center";
  return (
    <Reveal className={cn("mb-12 max-w-2xl md:mb-16", center && "mx-auto text-center")}>
      <p className={cn("mb-4 flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-accent", center && "justify-center")}>
        <span>{index}</span>
        <span aria-hidden className="h-px w-8 bg-accent/50" />
        <span>{label}</span>
      </p>
      <h2 id={id} className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-base leading-relaxed text-ink-2 sm:text-lg">{subtitle}</p>}
    </Reveal>
  );
}
