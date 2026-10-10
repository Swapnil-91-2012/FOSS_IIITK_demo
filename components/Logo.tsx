import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = { size?: number; className?: string; withText?: boolean };

/** Official FOSS logo (public/images/foss-logo.png) + optional wordmark. */
export default function Logo({ size = 40, className, withText = true }: Props) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <Image
        src="/images/foss-logo.png"
        alt="FOSS Club IIIT Kalyani logo"
        width={size}
        height={size}
        priority
        className="rounded-lg"
        style={{ width: size, height: size }}
      />
      {withText && (
        <span className="flex flex-col leading-tight">
          <span className="font-display text-base font-bold">FOSS Club</span>
          <span className="text-xs text-ink-2">IIIT Kalyani</span>
        </span>
      )}
    </span>
  );
}
