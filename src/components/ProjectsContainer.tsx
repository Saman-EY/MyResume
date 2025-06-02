import Image from "next/image";
import React from "react";

interface ProjectCardProps {
  data: {
    title: string;
    description: string;
    image1: string;
    image2: string | null;
  };
}

const projectsData = [
  {
    title: "JahanZar",
    description: "Nextjs - Tailwindcss - Redux",
    image1: "/assets/jahanzar1.png",
    image2: "/assets/jahanzar2.png",
  },
  {
    title: "Bermooda (Dashboard and Landing site)",
    description:
      "Nextjs - Tailwindcss - Redux - Antdesign - React Query , TypeScript",
    image1: "/assets/bermooda2.png",
    image2: "/assets/bermooda1.png",
  },
  {
    title: "Ali Qomi",
    description: "React - Tailwindcss - Context - framer motion",
    image1: "/assets/vila1.png",
    image2: "/assets/vila2.png",
  },
  {
    title: "Atic shop",
    description: "Nextjs - TypeSript - Tailwindcss - HeroUi - Redux",
    image1: "/assets/atic1.png",
    image2: "/assets/atic2.png",
  },
  {
    title: "Tourist",
    description: "Tailwind template",
    image1: "/assets/tourist1.png",
    image2: "/assets/tourist2.png",
  },
  {
    title: "Shop template",
    description: "Nextjs - Tailwindcss",
    image1: "/assets/shop1.png",
    image2: "/assets/shop2.png",
  },
  {
    title: "Cafe",
    description: "Html - CSS - JavaScript",
    image1: "/assets/cafe2.png",
    image2: "/assets/cafe1.png",
  },
  {
    title: "Shopping cart template",
    description: "React - Redux",
    image1: "/assets/cart2.png",
    image2: "/assets/cart1.png",
  },
  {
    title: "AKP (just template)",
    description: "Html - CSS - JavaScript",
    image1: "/assets/akp1.png",
    image2: "/assets/akp2.png",
  },
  {
    title: "Mobix (just template)",
    description: "Html - CSS - JavaScript",
    image1: "/assets/mobix1.png",
    image2: "/assets/mobix2.png",
  },
  {
    title: "Macan choob (just template)",
    description: "Html - CSS - JavaScript",
    image1: "/assets/macan1.png",
    image2: "/assets/macan2.png",
  },
  {
    title: "Tarhamo (just template)",
    description: "Html - CSS - JavaScript",
    image1: "/assets/tarhamo2.png",
    image2: "/assets/tarhamo1.png",
  },
  {
    title: "Todo App",
    description: "Html - CSS - JavaScript",
    image1: "/assets/todo1.png",
    image2: null,
  },
  {
    title: "Telbox",
    description: "Nextjs - Tailwindcss - React Query - HeroUI",
    image1: "/assets/telbox1.png",
    image2: "/assets/telbox2.png",
  },
  {
    title: "Sign up validation (form practice)",
    description: "React - axios",
    image1: "/assets/form.png",
    image2: null,
  },
];

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

      <section className="w-full bg-[#062559]/20 backdrop-blur-2xl p-5 rounded-lg grid grid-cols-[repeat(auto-fill,minmax(360px,1fr))] gap-5">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} data={project} />
        ))}
      </section>
    </section>
  );
}

export default ProjectsContainer;

const ProjectCard = ({ data }: ProjectCardProps) => {
  return (
    <div className="mx-auto rounded-lg w-90 group cursor-pointer overflow-hidden bg-[#062559]/30  border border-transparent transition-all duration-300  hover:scale-105  hover:border-[#4E339D] hover:shadow-lg shadow-[#4E339D]">
      <div className="w-90 h-67.5 overflow-hidden relative">
        <Image
          alt="project img"
          src={data?.image1}
          width={300}
          height={300}
          className={`w-full absolute h-full object-cover visible opacity-100 ${
            data?.image2 && "group-hover:invisible group-hover:opacity-0 "
          } transition-all duration-300`}
        />

        {data?.image2 && (
          <Image
            alt="project img"
            src={data?.image2}
            width={300}
            height={300}
            className="w-full absolute h-full object-cover invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300"
          />
        )}
      </div>
      <div className="flex flex-col p-2">
        <h3 className="text-xl font-bold">{data.title}</h3>
        <p className="text-gray-500">{data.description}</p>
      </div>
    </div>
  );
};
