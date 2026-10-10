"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const PROMPT = "foss@iiitkalyani:~$";

type Line = { text: string; kind: "cmd" | "out" | "ok" };

const script: Line[] = [
  { kind: "cmd", text: "whoami" },
  { kind: "out", text: "foss@iiitkalyani" },
  { kind: "cmd", text: "cat mission.txt" },
  { kind: "out", text: "Building together." },
  { kind: "out", text: "Learning together." },
  { kind: "out", text: "Giving back to open source." },
  { kind: "cmd", text: "./start_contributing.sh" },
  { kind: "ok", text: "Community initialized" },
  { kind: "ok", text: "Ideas welcomed" },
  { kind: "ok", text: "Contributors needed" },
];

export default function Terminal() {
  const reduce = useReducedMotion();
  // `step` = index of the line currently typing, `chars` = chars shown on it
  const [step, setStep] = useState(reduce ? script.length : 0);
  const [chars, setChars] = useState(0);

  useEffect(() => {
    if (reduce) {
      setStep(script.length);
      return;
    }
    if (step >= script.length) return;
    const line = script[step];
    let t: ReturnType<typeof setTimeout>;
    if (line.kind === "cmd") {
      if (chars < line.text.length) {
        t = setTimeout(() => setChars((c) => c + 1), 55);
      } else {
        t = setTimeout(() => {
          setStep((s) => s + 1);
          setChars(0);
        }, 450);
      }
    } else {
      t = setTimeout(() => {
        setStep((s) => s + 1);
        setChars(0);
      }, 280);
    }
    return () => clearTimeout(t);
  }, [step, chars, reduce]);

  const done = step >= script.length;

  return (
    <div className="glass relative w-full overflow-hidden rounded-2xl shadow-[0_0_80px_-20px_rgba(0,255,136,0.45)]">
      <div className="flex items-center gap-2 border-b border-line bg-black/30 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" aria-hidden />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" aria-hidden />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" aria-hidden />
        <span className="ml-3 font-mono text-xs text-ink-3">foss — bash</span>
      </div>

      {/* Screen readers get the full text immediately */}
      <p className="sr-only">
        Terminal: whoami prints foss@iiitkalyani. mission.txt says: Building together. Learning together. Giving back to
        open source. start_contributing.sh reports: Community initialized, Ideas welcomed, Contributors needed.
      </p>

      <div aria-hidden className="min-h-[21rem] space-y-1.5 bg-black/20 p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
        {script.map((line, i) => {
          if (i > step) return null;
          const typing = i === step;
          if (line.kind === "cmd") {
            return (
              <div key={i} className={i > 0 ? "pt-3" : ""}>
                <span className="text-accent">{PROMPT}</span>{" "}
                <span className="text-ink">{typing ? line.text.slice(0, chars) : line.text}</span>
                {typing && <Cursor />}
              </div>
            );
          }
          if (typing) return null;
          return (
            <div key={i} className={line.kind === "ok" ? "text-accent-2" : "text-ink-2"}>
              {line.kind === "ok" ? "✓ " : ""}
              {line.text}
            </div>
          );
        })}
        {done && (
          <div className="pt-3">
            <span className="text-accent">{PROMPT}</span> <Cursor />
          </div>
        )}
      </div>
    </div>
  );
}

function Cursor() {
  return <span className="animate-cursor ml-0.5 inline-block h-[1.05em] w-[0.55em] translate-y-[3px] bg-accent" />;
}
