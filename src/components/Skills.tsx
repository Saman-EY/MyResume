"use client";
import Image from "next/image";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

function Skills() {
  return (
    <section className="relative my-10 mt-15">
      <Image
        alt=""
        src={"/assets/color2.svg"}
        width={400}
        height={400}
        className="w-100  object-cover absolute -top-40 left-0 -z-10"
      />

      {/* <Image
        alt=""
        src={"/assets/color2.svg"}
        width={400}
        height={400}
        className="w-120  object-cover absolute rotate-90 left-[50%] -translate-x-1/2 -top-50 -z-10"
      /> */}
      <h6 className="text-center text-3xl font-mono mb-4">Skills</h6>
      <div className="w-full bg-[#062559]/20 backdrop-blur-2xl text-white px-5 py-15">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          loop
          freeMode
          autoplay={{
            delay: 0,
          }}
          speed={3000}
          className="SkillSwiper"
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            220: {
              slidesPerView: 3,
            },
            650: {
              slidesPerView: 5,
            },
            1000: {
              slidesPerView: 6,
            },
            1200: {
              slidesPerView: 8,
            },
          }}
        >
          {skills.map((skill, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center gap-4">
                <span className={skill.spanClass}>
                  <Image
                    alt={skill.name}
                    src={skill.img}
                    width={100}
                    height={100}
                    className={skill.imgClass}
                  />
                </span>
                <span className="text-lg font-bold">{skill.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Skills;

const skills = [
  {
    name: "Next js",
    img: "/assets/nextjs-icon.svg",
    imgClass: "w-fit h-full",
    spanClass: "bg-white rounded-full",
  },
  {
    name: "React js",
    img: "/assets/react-icon.png",
    imgClass: "w-24 h-24",
    spanClass: "rounded-full",
  },
  {
    name: "TypeScript",
    img: "/assets/typescript-icon.png",
    imgClass: "w-24 h-24",
    spanClass: "bg-white",
  },
  {
    name: "Redux",
    img: "/assets/redux-icon.svg",
    imgClass: "w-18 h-18",
    spanClass: "bg-white rounded-full p-4",
  },
  {
    name: "Tailwind",
    img: "/assets/talwindcss-icon.svg",
    imgClass: "w-18 h-18",
    spanClass: "bg-white rounded-full p-4",
  },
  {
    name: "React Query",
    img: "/assets/reactQuery-icon.svg",
    imgClass: "w-18 h-18",
    spanClass: "rounded-full p-4",
  },
  {
    name: "Html",
    img: "/assets/html-icon.svg",
    imgClass: "w-18 h-18",
    spanClass: "rounded-full p-4",
  },
  {
    name: "CSS",
    img: "/assets/css-icon.svg",
    imgClass: "w-18 h-18",
    spanClass: "rounded-full p-4",
  },
];
