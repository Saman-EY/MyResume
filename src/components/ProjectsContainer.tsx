import Image from "next/image";
import React from "react";

function ProjectsContainer() {
  return (
    <section className="px-5 mb-5 relative mt-20">
      <Image
        alt=""
        src={"/assets/color3.svg"}
        width={400}
        height={400}
        className="w-170 h-fit object-cover absolute -top-80 right-0 -z-10"
      />

      <h6 className="text-center text-3xl font-mono mb-4">My Projects</h6>

      <section className="w-full bg-[#062559]/20 backdrop-blur-2xl h-100 rounded-lg"></section>
    </section>
  );
}

export default ProjectsContainer;
