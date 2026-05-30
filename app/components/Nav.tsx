import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:py-8">
      <div className="flex items-center gap-1.5">
        <span className="text-sm font-bold tracking-[0.35em] text-white/90">SAMAN</span>
        <span className="mt-1 h-1 w-1 rounded-full bg-(--accent-amber)" />
      </div>
      <nav className="hidden gap-8 text-sm text-white/60 md:flex">
        <Link href="#about" className="transition-colors hover:text-white">
          About
        </Link>
        <Link href="#projects" className="transition-colors hover:text-white">
          Projects
        </Link>
        <Link href="#contact" className="transition-colors hover:text-white">
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Nav;
