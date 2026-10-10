/**
 * Page-wide fixed background: drifting grid, soft blobs, floating dots.
 * Pure CSS animation (no JS), disabled by prefers-reduced-motion in globals.css.
 */
const dots = Array.from({ length: 22 }, (_, i) => ({
  left: (i * 37 + 11) % 100,
  top: (i * 53 + 7) % 100,
  size: 2 + (i % 3),
  delay: (i % 7) * 0.9,
  duration: 6 + (i % 5) * 1.4,
}));

export default function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-gradient-to-b from-bg via-bg-2 to-bg-3">
      <div className="bg-grid animate-grid mask-fade absolute inset-0 opacity-70" />
      <div className="animate-blob-a absolute -left-[10%] top-[5%] h-[42rem] w-[42rem] rounded-full bg-accent/[0.07] blur-[120px]" />
      <div className="animate-blob-b absolute -right-[12%] top-[40%] h-[36rem] w-[36rem] rounded-full bg-cyan/[0.06] blur-[120px]" />
      {dots.map((d, i) => (
        <span
          key={i}
          className="animate-dot absolute rounded-full bg-accent"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            animationDelay: `${d.delay}s`,
            animationDuration: `${d.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
