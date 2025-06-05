import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Slide } from "react-awesome-reveal";

interface ProjectCardProps {
  data: {
    title: string;
    description: string;
    image1: string;
    image2: string | null;
    link: string | null;
  };
}

const projectsData = [
  {
    title: "JahanZar",
    description: "Nextjs - Tailwindcss - Redux",
    image1: "/assets/jahanzar1.png",
    image2: "/assets/jahanzar2.png",
    link: "https://jahan-zar.vercel.app",
  },
  {
    title: "Bermooda (Dashboard and Landing site)",
    description:
      "Nextjs - Tailwindcss - Redux - Antdesign - React Query - TypeScript",
    image1: "/assets/bermooda2.png",
    image2: "/assets/bermooda1.png",
    link: "https://office.bermooda.app",
  },
  {
    title: "Ali Qomi",
    description: "React - Tailwindcss - Context - framer motion",
    image1: "/assets/vila1.png",
    image2: "/assets/vila2.png",
    link: "https://vila-local.vercel.app",
  },
  {
    title: "Atic shop",
    description: "Nextjs - TypeSript - Tailwindcss - HeroUi - Redux",
    image1: "/assets/atic1.png",
    image2: "/assets/atic2.png",
    link: "https://atticbv.com",
  },
  {
    title: "Tourist",
    description: "Tailwind template",
    image1: "/assets/tourist1.png",
    image2: "/assets/tourist2.png",
    link: "https://touristweb.netlify.app",
  },
  {
    title: "Shop template",
    description: "Nextjs - Tailwindcss",
    image1: "/assets/shop1.png",
    image2: "/assets/shop2.png",
    link: "https://dress-shop-saman-ey.vercel.app",
  },
  {
    title: "Cafe (Template)",
    description: "Html - CSS - JavaScript",
    image1: "/assets/cafe2.png",
    image2: "/assets/cafe1.png",
    link: "https://cafe-template-1.vercel.app",
  },
  {
    title: "Shopping cart (Practice)",
    description: "React - Redux",
    image1: "/assets/cart2.png",
    image2: "/assets/cart1.png",
    link: "https://shopping-cart-nova.vercel.app",
  },
  {
    title: "AKP (Template)",
    description: "Html - CSS - JavaScript",
    image1: "/assets/akp1.png",
    image2: "/assets/akp2.png",
    link: "https://akp-landing.vercel.app",
  },
  {
    title: "Mobix (Template)",
    description: "Html - CSS - JavaScript",
    image1: "/assets/mobix1.png",
    image2: "/assets/mobix2.png",
    link: "https://mobix-delta.vercel.app",
  },
  {
    title: "Macan choob (Template)",
    description: "Html - CSS - JavaScript",
    image1: "/assets/macan1.png",
    image2: "/assets/macan2.png",
    link: "https://macan-choob.vercel.app",
  },
  {
    title: "Tarhamo (Template)",
    description: "Html - CSS - JavaScript",
    image1: "/assets/tarhamo2.png",
    image2: "/assets/tarhamo1.png",
    link: "https://tarhamo.vercel.app",
  },
  {
    title: "Todo App (Practice)",
    description: "Html - CSS - JavaScript",
    image1: "/assets/todo2.png",
    image2: "/assets/todo1.png",
    link: "https://todo-app-pro.netlify.app",
  },
  {
    title: "Telbox",
    description: "Nextjs - Tailwindcss - React Query - HeroUI",
    image1: "/assets/telbox1.png",
    image2: "/assets/telbox2.png",
    link: "https://telbox-test.vercel.app",
  },
  {
    title: "Sign up validation (Form practice)",
    description: "React - axios",
    image1: "/assets/form.png",
    image2: null,
    link: "https://sign-up-validation-nova.vercel.app/login",
  },
];

function ProjectsContainer() {
  return (
    <section className="px-2 md:px-5 mb-5 relative mt-20">
      <Image
        alt=""
        src={"/assets/color3.svg"}
        width={700}
        height={700}
        className="w-170 h-fit object-cover absolute -top-80 right-0 -z-10"
      />

      <h6 className="text-center text-3xl font-mono mb-4">My Projects</h6>

      <Slide direction="left" cascade triggerOnce>
        <section className="w-full max-w-544 mx-auto bg-[#062559]/20 backdrop-blur-2xl py-5 px-1  md:px-5 rounded-lg grid grid-cols-[repeat(auto-fill,minmax(360px,1fr))] gap-5">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} data={project} />
          ))}
        </section>
      </Slide>

      <Image
        alt=""
        src={"/assets/color3.svg"}
        width={700}
        height={700}
        className="w-140 h-fit object-cover absolute scale-x-[-1] -bottom-40 left-0 -z-10 "
      />
    </section>
  );
}

export default ProjectsContainer;

const ProjectCard = ({ data }: ProjectCardProps) => {
  return (
    <Link
      href={data?.link ?? ""}
      target={data?.link ? "_blank" : undefined}
      className="mx-auto rounded-lg w-70 sm:w-90 group overflow-hidden bg-[#062559]/30  border border-transparent transition-all duration-300  hover:scale-105  hover:border-[#4E339D] hover:shadow-lg shadow-[#4E339D]"
    >
      <div className="w-70 sm:w-90 h-67.5 overflow-hidden relative">
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
    </Link>
  );
};
