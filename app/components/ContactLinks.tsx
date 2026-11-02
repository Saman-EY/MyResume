"use client";

import Image from "next/image";
import { Mail, Send, ArrowUpRight } from "lucide-react";
import { Fade, Slide } from "react-awesome-reveal";
import type { ReactNode } from "react";

type ContactLink = {
  label: string;
  handle: string;
  href: string;
  icon: ReactNode;
  external?: boolean;
};

const links: ContactLink[] = [
  {
    label: "LinkedIn",
    handle: "saman-ezzatabadi",
    href: "https://www.linkedin.com/in/saman-ezzatabadi",
    icon: <Image src="/linkedin.svg" width={24} height={24} alt="" className="h-6 w-6" />,
    external: true,
  },
  {
    label: "GitHub",
    handle: "Saman-EY",
    href: "https://github.com/Saman-EY",
    icon: <Image src="/github.svg" width={24} height={24} alt="" className="h-6 w-6" />,
    external: true,
  },
  {
    label: "Telegram",
    handle: "@exhausted80",
    href: "https://t.me/exhausted80",
    icon: <Send size={22} />,
    external: true,
  },
  {
    label: "Gmail",
    handle: "saman.ezzatabadi@gmail.com",
    href: "mailto:saman.ezzatabadi@gmail.com",
    icon: <Mail size={22} />,
  },
];

export function ContactLinks() {
  return (
    <section id="contact" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
      <Fade triggerOnce className="w-full">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/4 p-8 backdrop-blur-xl md:p-14">
          <div aria-hidden className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-(--accent-cyan)/25 blur-3xl" />
          <div aria-hidden className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-(--accent-amber)/20 blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent" />

          <div className="relative">
            <Slide direction="left" triggerOnce>
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-(--accent-amber)">04 — Contact</p>
                <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
                  Let's build <br />
                  <span className="bg-linear-to-r from-white to-(--accent-amber) bg-clip-text text-transparent">
                    something great.
                  </span>
                </h2>
                <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/65">
                  Have a project in mind, a role to fill, or just want to say hi? Reach out on any of these — I usually reply
                  within a day.
                </p>
              </div>
            </Slide>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Fade direction="up" cascade damping={0.1} triggerOnce>
                {links.map(({ label, handle, href, icon, external }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
                  >
                    <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition-colors group-hover:bg-white/15 group-hover:text-white">
                      {icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-white">{label}</p>
                      <p className="truncate text-xs text-white/55">{handle}</p>
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="shrink-0 text-white/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                    />
                  </a>
                ))}
              </Fade>
            </div>
          </div>
        </div>
      </Fade>

      <footer className="mt-12 flex flex-col items-center justify-between gap-3 text-xs text-white/45 sm:flex-row">
        <span>© {new Date().getFullYear()} Saman Ezzatabadi</span>
        <span>Crafted with Next.js & Tailwind</span>
      </footer>
    </section>
  );
}
