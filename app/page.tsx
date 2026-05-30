import { Contact } from "./components/Contact";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

import Nav from "./components/Nav";
import Hero from "./components/Hero";

function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(ellipse_at_top_right,var(--hero-bg-via)_0%,var(--hero-bg-from)_45%,var(--hero-bg-to)_100%)] text-foreground">
      {/* Ambient blurred orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-32 h-130 w-130 rounded-full bg-(--accent-cyan)/25 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -left-40 h-105 w-105 rounded-full bg-indigo-500/20 blur-[160px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/3 h-90 w-90 rounded-full bg-(--accent-amber)/15 blur-[140px]"
      />

      {/* Subtle grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />

      <Nav />

      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

export default Page;
