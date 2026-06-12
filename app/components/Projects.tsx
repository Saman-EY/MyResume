"use client";
import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { backendProjects, frontendProjects } from "@/lib/variables";
import { Fade, Slide } from "react-awesome-reveal";
import { useSearchParams } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/lib/ui/carousel";

export type Project = {
  name: string;
  link: string;
  stack: string[];
  gradient: string;
  image: string | StaticImageData | null;
  second_image?: string | StaticImageData | null;
  placeholder: string;
};

export type BackProject = {
  name: string;
  stack: string[];
  gradient: string;
  placeholder: string;
  link: string;
  image?: string
  second_image?: string
};

export function Projects() {
  const [activeTab, setActiveTab] = useState<"frontend" | "backend">("frontend");
  const projects = activeTab === "frontend" ? frontendProjects : backendProjects;

  const params = useSearchParams();
  const tabParam = params.get("tab");

  const useSlider = projects.length > 6;

  useEffect(() => {
    const newParams = new URLSearchParams(params.toString());
    if (tabParam === "backend") {
      setActiveTab("backend");
      newParams.set("tab", "backend");
    } else {
      setActiveTab("frontend");
      newParams.set("tab", "frontend");
    }
    window.history.replaceState(null, "", `?${newParams.toString()}`);
  }, [tabParam]);

  const handleTabChange = (tab: "frontend" | "backend") => {
    setActiveTab(tab);
    const newParams = new URLSearchParams(params.toString());
    newParams.set("tab", tab);
    window.history.replaceState(null, "", `?${newParams.toString()}`);
  };

  return (
    <section id="projects" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <Slide direction="right" cascade duration={1000} triggerOnce>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-(--accent-amber)">03 — Work</p>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight text-white md:text-5xl">Selected Projects</h2>
          </div>
        </Slide>

        <Slide direction="left" cascade duration={1000} triggerOnce>
          <div className="flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/3 p-1 backdrop-blur-md">
            <button
              onClick={() => handleTabChange("frontend")}
              className={`relative rounded-full px-5 py-2 text-sm font-medium transition-all ${
                activeTab === "frontend"
                  ? "bg-white/10 text-white shadow-[0_0_20px_-5px_rgba(255,255,255,0.15)]"
                  : "text-white/50 hover:text-white/80"
              }`}
            >
              Frontend
            </button>
            <button
              onClick={() => handleTabChange("backend")}
              className={`relative rounded-full px-5 py-2 text-sm font-medium transition-all ${
                activeTab === "backend"
                  ? "bg-white/10 text-white shadow-[0_0_20px_-5px_rgba(255,255,255,0.15)]"
                  : "text-white/50 hover:text-white/80"
              }`}
            >
              Backend
            </button>
          </div>
        </Slide>
      </div>

      {projects.length === 0 ? (
        <Fade direction="up" cascade duration={1000} triggerOnce>
          <div className="flex h-48 items-center justify-center rounded-2xl border border-white/10 bg-white/4 backdrop-blur-xl">
            <span className="text-lg font-medium tracking-tight text-white/80">No projects to show yet.</span>
          </div>
        </Fade>
      ) : (
        <Fade direction="up" cascade duration={1000} triggerOnce>
          {useSlider ? (
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent className="-ml-5">
                {Array.from({ length: Math.ceil(projects.length / 6) }).map((_, slideIdx) => {
                  const slideProjects = projects.slice(slideIdx * 6, slideIdx * 6 + 6);
                  return (
                    <CarouselItem key={slideIdx} className="pl-5 pt-2 basis-full">
                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {slideProjects.map((p) => (
                          <ProjectCard key={p.name} p={p} />
                        ))}
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <div className="mt-8 flex items-center justify-end gap-3">
                <CarouselPrevious className="static translate-y-0 border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white" />
                <CarouselNext className="static translate-y-0 border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white" />
              </div>
            </Carousel>
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                <ProjectCard key={p.name} p={p} />
              ))}
            </div>
          )}
        </Fade>
      )}
    </section>
  );
}

function ProjectCard({ p }: { p: Project | BackProject }) {
  return (
    <Link
      href={p.link}
      target={p.link ? "_blank" : "_self"}
      className="cursor-pointer group relative overflow-hidden rounded-2xl border border-white/10 bg-white/4 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-white/20"
    >
      <div
        aria-hidden
        className={`absolute -top-20 -right-20 h-48 w-48 rounded-full bg-linear-to-br ${p.gradient} opacity-60 blur-3xl transition-opacity group-hover:opacity-100`}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />

      <div className="relative h-48 w-full overflow-hidden ">
        {/* {p.image ? (
          <Image
            src={p.image}
            alt={`${p.name} preview`}
            width={512}
            height={512}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className={`flex h-full w-full items-center justify-center bg-linear-to-br ${p.gradient} opacity-80`}>
            <span className="text-4xl font-bold tracking-tight text-white/90">{p.placeholder}</span>
          </div>
        )} */}

        <Image
          alt="project img"
          src={p.image!}
          width={300}
          height={300}
          className={`w-full absolute h-full object-cover visible opacity-100 ${
            p?.second_image && "group-hover:invisible group-hover:opacity-0 "
          } transition-all duration-300`}
        />

        {p?.second_image && (
          <Image
            alt="project img"
            src={p?.second_image}
            width={300}
            height={300}
            className="w-full absolute h-full object-cover invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300"
          />
        )}

        <div className="absolute group-hover:opacity-0 transition inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
      </div>

      <div className="relative p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-white">{p.name}</h3>
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors group-hover:bg-white/15 group-hover:text-white">
            <ExternalLink size={15} />
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {p.stack.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/70"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

//  <Fade direction="up" cascade duration={1000} triggerOnce>
//         <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
//           {projects.map((p) => (
//             <ProjectCard key={p.name} p={p} />
//           ))}
//         </div>
//       </Fade>
