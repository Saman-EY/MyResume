import Nav from "@/components/Nav";
import Profile from "@/components/Profile";
import ProjectsContainer from "@/components/ProjectsContainer";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
      <Image
        alt=""
        src={"/assets/color1.svg"}
        width={400}
        height={400}
        className="w-fit  object-contain absolute  right-0 -z-10"
      />
      <Nav />
      <Profile />
      <Skills />
      <ProjectsContainer />
    </main>
  );
}
