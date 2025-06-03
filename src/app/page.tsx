import ConnectSection from "@/components/ConnectSection";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Profile from "@/components/Profile";
import ProjectsContainer from "@/components/ProjectsContainer";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative  h-screen overflow-auto flex flex-col">
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
      <ConnectSection />
      <Footer />
    </main>
  );
}
