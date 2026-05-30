import Image from "next/image";
import { Fade, Slide } from "react-awesome-reveal";

const skills = [
  { name: "HTML", color: "#E34F26", icon: "html" },
  { name: "CSS", color: "#1572B6", icon: "css" },
  { name: "JavaScript", color: "#F7DF1E", icon: "js" },
  { name: "React", color: "#61DAFB", icon: "react" },
  { name: "TypeScript", color: "#3178C6", icon: "ts" },
  { name: "Next.js", color: "#ffffff", icon: "next" },
  { name: "Redux", color: "#764ABC", icon: "redux" },
  { name: "Tailwind", color: "#38BDF8", icon: "tw" },
  { name: "React Query", color: "#FF4154", icon: "rq" },
  { name: "Zustand", color: "#7a4d1b", icon: "zustand" },
  { name: "Nest.js", color: "#FF4154", icon: "nest" },
  { name: "Express.js", color: "#ffffff", icon: "express" },
  { name: "Sequelize", color: "#3178C6", icon: "sequelize" },
  { name: "Typeorm", color: "#eb6d1e", icon: "typeorm" },
  { name: "Mongoose", color: "#0f6f08", icon: "mongoose" },
];

function SkillGlyph({ icon, color }: { icon: string; color: string }) {
  const common = { width: 36, height: 36, viewBox: "0 0 24 24", fill: "none" } as const;
  switch (icon) {
    case "react":
      return (
        <svg {...common} stroke={color} strokeWidth="1.2">
          <circle cx="12" cy="12" r="2" fill={color} />
          <ellipse cx="12" cy="12" rx="10" ry="4" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        </svg>
      );
    case "ts":
      return (
        <div
          className="flex h-9 w-9 items-center justify-center rounded-md text-xs font-bold text-white"
          style={{ background: color }}
        >
          TS
        </div>
      );
    case "next":
      return <Image className="bg-white rounded-full" src={"/nextjs-icon.svg"} width={34} height={34} alt="" />;
    case "redux":
      return (
        <div className="bg-white rounded-lg p-1">
          <Image className="" src={"/redux-icon.png"} width={34} height={34} alt="" />
        </div>
      );
    case "tw":
      return (
        <svg {...common} fill={color}>
          <path d="M12 6c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 2 1.4 1 1.1 2.2 2.3 4.7 2.3 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-2-1.4-1-1.1-2.2-2.3-4.7-2.3zM7 12c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 2 1.4 1 1.1 2.2 2.3 4.7 2.3 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-2-1.4-1-1.1-2.2-2.3-4.7-2.3z" />
        </svg>
      );
    case "rq":
      return <Image className="object-cover" src={"/reactQuery-icon.svg"} width={38} height={38} alt="" />;
    case "js":
      return (
        <div
          className="flex h-9 w-9 items-center justify-center rounded-md text-xs font-bold text-black"
          style={{ background: color }}
        >
          JS
        </div>
      );
    case "html":
      return (
        <div
          className="flex h-9 w-9 items-center justify-center rounded-md text-[10px] font-bold text-white"
          style={{ background: color }}
        >
          HTML
        </div>
      );
    case "css":
      return (
        <div
          className="flex h-9 w-9 items-center justify-center rounded-md text-xs font-bold text-white"
          style={{ background: color }}
        >
          CSS
        </div>
      );
    case "zustand":
      return <Image className="object-cover rounded-md" src={"/zustand.jpg"} width={38} height={38} alt="" />;
    case "nest":
      return <Image className="object-cover rounded-full" src={"/nestjs.png"} width={42} height={42} alt="" />;
    case "express":
      return <Image className="object-cover rounded-full" src={"/express.png"} width={42} height={42} alt="" />;
    case "sequelize":
      return <Image className="object-cover rounded-full" src={"/sequelize.png"} width={42} height={42} alt="" />;
    case "typeorm":
      return <Image className="object-cover rounded-md" src={"/typeorm.png"} width={42} height={42} alt="" />;
    case "mongoose":
      return <Image className="object-cover rounded-full" src={"/mongoose.png"} width={42} height={42} alt="" />;
  }
  return null;
}

export function Skills() {
  return (
    <section id="skills" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12 flex items-end justify-between">
        <Slide direction="right" cascade damping={0.1} triggerOnce>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-(--accent-amber)">02 — Toolkit</p>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight text-white md:text-5xl">Skills & Stack</h2>
          </div>
        </Slide>
        <div className="hidden h-px flex-1 max-w-xs ml-8 bg-linear-to-r from-white/50 to-transparent md:block" />
      </div>

      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-5">
        <Fade direction="up" cascade damping={0.1} triggerOnce>
          {skills.map((s) => (
            <div
              key={s.name}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/4 p-5 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
            >
              <div
                aria-hidden
                className="absolute -top-12 -right-12 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-40"
                style={{ background: s.color }}
              />
              <div
                aria-hidden
                className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-40"
                style={{ background: s.color }}
              />
              <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />
              <div className="relative flex flex-col items-center gap-3">
                <SkillGlyph icon={s.icon} color={s.color} />
                <span className="text-sm font-medium text-white/85">{s.name}</span>
              </div>
            </div>
          ))}
        </Fade>
      </div>
    </section>
  );
}
