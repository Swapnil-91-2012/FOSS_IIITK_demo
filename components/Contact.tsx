import Reveal from "./Reveal";
import Button from "./Button";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "./icons";
import { social } from "@/data/social";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-3xl px-6 py-16 text-center shadow-[0_0_100px_-30px_rgba(0,255,136,0.5)] sm:px-12 md:py-24">
            <div aria-hidden className="bg-grid mask-fade absolute inset-0 opacity-60" />
            <div aria-hidden className="absolute left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[100px]" />

            <div className="relative">
              <p className="mb-5 font-mono text-xs tracking-[0.2em] text-accent">06 &nbsp;— &nbsp;CONTACT</p>
              <h2 id="contact-title" className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
                Got an idea?
                <br />
                <span className="text-accent text-glow">Let&apos;s build it together.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-2 sm:text-lg">
                Have an idea? Want to contribute? Want to learn?
                <br />
                Join the FOSS community.
              </p>

              <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Button href={social.join}>Join Community</Button>
                <Button href={social.github} variant="ghost" arrow="up-right" icon={<GithubIcon className="h-4 w-4" />}>GitHub</Button>
                <Button href={social.instagram} variant="ghost" arrow="up-right" icon={<InstagramIcon className="h-4 w-4" />}>Instagram</Button>
                <Button href={social.linkedin} variant="ghost" arrow="up-right" icon={<LinkedinIcon className="h-4 w-4" />}>LinkedIn</Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
