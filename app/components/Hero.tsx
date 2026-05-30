import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";
import StatCard from "./StatCard";

function Hero() {
  return (
    <section className="relative  z-10 mx-auto flex flex-col md:justify-between md:flex-row max-w-7xl items-center  gap-12 px-6 pb-24 pt-10  lg:gap-8 lg:pt-16">
      {/* Left: copy */}
      <Fade cascade direction="left" triggerOnce>
        <div className="">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-md">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-(--accent-amber)" />
            Available for new projects
          </div>

          <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
            Saman <br />
            <span className="bg-linear-to-r from-white via-white to-(--accent-amber) bg-clip-text text-transparent">
              Ezzatabadi
            </span>
          </h1>
          <p className="mt-4 text-lg font-medium text-white/80 md:text-xl">Full Stack Developer</p>

          <div className="mt-6 h-px w-32 bg-linear-to-r from-(--accent-amber) to-transparent" />

          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/65 tracking-wider">
            I'm a developer whose main expertise lies in frontend development, with nearly{" "}
            <span className=" font-bold text-(--accent-amber)">3 years</span> of hands-on experience building responsive
            and modern web interfaces using React, Next.js, and Tailwind CSS. I'm also comfortable working with backend
            technologies like NestJS and Express, and I have about 6 months of experience developing REST APIs and
            backend services.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-900 shadow-[0_10px_40px_-10px_rgba(255,255,255,0.4)] transition-transform hover:-translate-y-0.5"
            >
              View My Work
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white/10"
            >
              Get in touch
            </a>
          </div>
        </div>
      </Fade>

      {/* Right: glass image card + stats */}
      <Fade cascade direction="right" triggerOnce>
        <div className="max-w-lg">
          <div className="grid grid-cols-1  items-center  gap-6">
            {/* Glass image card */}
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-2 rounded-[2rem] bg-linear-to-br from-(--accent-cyan)/40 via-transparent to-(--accent-amber)/30 blur-2xl"
              />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/5 p-2 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] backdrop-blur-xl">
                <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent" />
                <Image
                  src={"/hero1.jpg"}
                  alt="Futuristic developer workspace with floating holographic code"
                  width={1024}
                  height={1024}
                  className="h-115 w-full rounded-[1.4rem] object-cover sm:h-130"
                />
                {/* floating glass chip */}
                <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-2.5 backdrop-blur-xl">
                  <span className="flex h-2 w-2">
                    <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <span className="text-xs font-medium text-white/90">Currently building</span>
                </div>
              </div>
            </div>

            {/* Stats stacked */}
            <div className="flex  justify-center items-center gap-4">
              <StatCard label="Years of Experience" value="3" />
              <StatCard label="Completed Projects" value="30+" />
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}

export default Hero;
