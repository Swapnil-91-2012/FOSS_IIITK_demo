import Logo from "./Logo";
import { Send } from "lucide-react";
import { GithubIcon, InstagramIcon, LinkedinIcon, XIcon } from "./icons";
import { social } from "@/data/social";

const socials = [
  { label: "GitHub", href: social.github, Icon: GithubIcon },
  { label: "Instagram", href: social.instagram, Icon: InstagramIcon },
  { label: "LinkedIn", href: social.linkedin, Icon: LinkedinIcon },
  { label: "Telegram", href: social.telegram, Icon: Send },
  { label: "X", href: social.x, Icon: XIcon },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-black/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <Logo size={48} />
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold">Get in Touch</h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-2">
            Have an idea? Want to join?
            <br />
            Let&apos;s build it together.
          </p>
          <ul className="mt-5 flex gap-3">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} (opens in a new tab)`}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-line text-ink-2 transition hover:border-accent hover:text-accent hover:shadow-[0_0_20px_-4px_rgba(0,255,136,0.6)]"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="font-mono text-sm md:text-right">
          <p className="text-ink">Open source</p>
          <p className="text-ink-2">Open community</p>
          <p className="text-accent">Open possibilities</p>
        </div>
      </div>

      <div className="border-t border-line py-5 text-center text-xs text-ink-3">
        © 2026 FOSS Club IIIT Kalyani
      </div>
    </footer>
  );
}
