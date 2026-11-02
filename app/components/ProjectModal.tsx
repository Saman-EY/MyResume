"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image, { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight, ExternalLink, Maximize2, Minimize2, Play, X } from "lucide-react";
import type { BackProject, Project } from "./Projects";

type MediaItem = { type: "image"; src: string | StaticImageData } | { type: "video"; src: string };

function buildMedia(p: Project | BackProject): MediaItem[] {
  const images = [p.image, p.second_image, ...(p.gallery ?? [])].filter(Boolean) as (string | StaticImageData)[];
  const items: MediaItem[] = images.map((src) => ({ type: "image", src }));
  if (p.video) items.unshift({ type: "video", src: p.video });
  return items;
}

export function ProjectModal({ project, onClose }: { project: Project | BackProject; onClose: () => void }) {
  const media = buildMedia(project);
  const [index, setIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const viewerRef = useRef<HTMLDivElement>(null);
  const current = media[index];

  const go = useCallback(
    (dir: 1 | -1) => {
      if (media.length < 2) return;
      setIndex((i) => (i + dir + media.length) % media.length);
    },
    [media.length],
  );

  const toggleFullscreen = useCallback(async () => {
    const el = viewerRef.current;
    if (!el) return;

    if (el.requestFullscreen) {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await el.requestFullscreen().catch(() => setIsFullscreen((v) => !v));
    } else {
      // Fallback (e.g. iOS Safari): cover the screen with a fixed overlay
      setIsFullscreen((v) => !v);
    }
  }, []);

  // Keep state in sync when the user exits native fullscreen with Esc
  useEffect(() => {
    const onChange = () => setIsFullscreen(document.fullscreenElement === viewerRef.current);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  // Lock page scroll while open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // Keyboard: Esc closes (or exits fallback fullscreen), arrows navigate
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isFullscreen) setIsFullscreen(false);
        else onClose();
      }
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, isFullscreen, onClose]);

  const paragraphs = project.details?.length ? project.details : project.description ? [project.description] : [];

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.name}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-3 backdrop-blur-sm sm:p-6"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-(--hero-bg-from) shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]"
      >
        <div
          aria-hidden
          className={`pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-linear-to-br ${project.gradient} opacity-40 blur-3xl`}
        />

        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white/80 backdrop-blur-md transition-colors hover:bg-black/70 hover:text-white"
        >
          <X size={16} />
        </button>

        <div className="relative overflow-y-auto">
          {/* 1. Gallery */}
          {media.length > 0 && (
            <div className="p-3 pb-0 sm:p-4 sm:pb-0">
              <div
                ref={viewerRef}
                className={`group/viewer relative overflow-hidden bg-black ${
                  isFullscreen ? "fixed inset-0 z-[60] h-full w-full" : "aspect-video w-full rounded-2xl"
                }`}
              >
                {current.type === "image" ? (
                  <Image
                    key={index}
                    src={current.src}
                    alt={`${project.name} screenshot ${index + 1}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 896px"
                    className="object-contain"
                    priority={index === 0}
                  />
                ) : (
                  <video key={index} src={current.src} controls playsInline className="h-full w-full object-contain" />
                )}

                {media.length > 1 && (
                  <>
                    <NavButton side="left" onClick={() => go(-1)} />
                    <NavButton side="right" onClick={() => go(1)} />
                  </>
                )}

                <button
                  onClick={toggleFullscreen}
                  aria-label={isFullscreen ? "Exit fullscreen" : "View fullscreen"}
                  className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white/80 backdrop-blur-md transition-colors hover:bg-black/70 hover:text-white"
                >
                  {isFullscreen ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
                </button>

                {media.length > 1 && (
                  <span className="absolute bottom-3 right-3 rounded-full bg-black/60 px-2.5 py-1 text-[11px] text-white/80 backdrop-blur-md">
                    {index + 1} / {media.length}
                  </span>
                )}
              </div>

              {/* Thumbnails */}
              {media.length > 1 && (
                <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                  {media.map((m, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      aria-label={m.type === "video" ? "Show video" : `Show image ${i + 1}`}
                      aria-current={i === index}
                      className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border bg-black transition-all ${
                        i === index ? "border-(--accent-amber) opacity-100" : "border-white/10 opacity-60 hover:opacity-100"
                      }`}
                    >
                      {m.type === "image" ? (
                        <Image src={m.src} alt="" fill sizes="96px" className="object-cover" />
                      ) : (
                        <span className="flex h-full w-full items-center justify-center bg-white/10 text-white">
                          <Play size={18} fill="currentColor" />
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* 2. Body */}
          <div className="relative p-6 sm:p-8">
            <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{project.name}</h3>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.stack.map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/70">
                  {t}
                </span>
              ))}
            </div>

            {paragraphs.length > 0 ? (
              <div className="mt-6 max-w-2xl space-y-4 text-[15px] leading-relaxed text-white/70">
                {paragraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            ) : (
              <p className="mt-6 text-sm text-white/45">No description yet.</p>
            )}

            {/* 3. Link */}
            {project.link && (
              <div className="mt-8">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-900 shadow-[0_10px_40px_-10px_rgba(255,255,255,0.4)] transition-transform hover:-translate-y-0.5"
                >
                  Open project
                  <ExternalLink size={15} className="transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

function NavButton({ side, onClick }: { side: "left" | "right"; onClick: () => void }) {
  const Icon = side === "left" ? ChevronLeft : ChevronRight;
  return (
    <button
      onClick={onClick}
      aria-label={side === "left" ? "Previous" : "Next"}
      className={`absolute top-1/2 -translate-y-1/2 ${
        side === "left" ? "left-3" : "right-3"
      } flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white/80 backdrop-blur-md transition-colors hover:bg-black/70 hover:text-white`}
    >
      <Icon size={18} />
    </button>
  );
}
