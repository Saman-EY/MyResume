import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Fade } from "react-awesome-reveal";

function Profile() {
  return (
    <section className="flex flex-col lg:flex-row justify-between gap-15 CustomContainer1400px px-3 lg:px-10 mt-10 items-center">
      <Fade cascade direction="left" triggerOnce>
        <div className="flex flex-col gap-4 w-full px-5 lg:w-auto  max-w-144 lg:max-w-none">
          <h6 className="text-white text-4xl font-semibold">
            Saman Ezzatabadi
          </h6>
          <h6 className="text-gray-300 text-2xl font-semibold">
            Front-end Developer
          </h6>

          <div className="bg-[#F8E7A1] h-1 lg:w-60 rounded-lg my-5"></div>

          <p className="text-gray-300 text-lg lg:max-w-76 font-normal ">
            I’m a Front-end Developer with nearly a year of hands-on experience
            building responsive and modern web interfaces. I specialize in React
            and Next.js, and I’m confident working with both Tailwind CSS and
            plain CSS to craft pixel-perfect, mobile-friendly layouts. I’m also
            comfortable using component libraries like Ant Design to bring
            complex UIs to life efficiently and elegantly.
          </p>

          {/* <Link
            href={"/"}
            target="_blank"
            className="text-CusYellow  min-w-36 group mt-5 font-medium w-fit flex items-center gap-2"
          >
            Let's talk
            <span className="group-hover:translate-x-12 transition-transform duration-300">
              <ArrowSvg />
            </span>
          </Link> */}
        </div>
      </Fade>

      <Fade cascade direction="right" triggerOnce>
        <section className="flex flex-col lg:flex-row gap-4 ">
          <Image
            alt="profile"
            src={"/assets/myProfile.png"}
            width={400}
            height={400}
            className="rounded-lg scale-x-[-1] w-100 h-130 object-cover"
          />

          <div className="flex lg:flex-col justify-between max-h-80 gap-4 lg:min-w-40 ">
            <div className="flex flex-col gap-3 items-end">
              <span className="font-semibold text-xl lg:max-w-40 text-end text-Secondary">
                Years of Experience
              </span>
              <span className="font-bold text-2xl ">2+</span>
            </div>
            <div className="flex flex-col gap-3 items-end">
              <span className="font-semibold text-xl lg:max-w-32 text-end text-Secondary">
                Complete Project
              </span>
              <span className="font-bold text-2xl ">30+</span>
            </div>
          </div>
        </section>
      </Fade>
    </section>
  );
}

export default Profile;

const ArrowSvg = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.4302 5.92993L20.5002 11.9999L14.4302 18.0699"
        stroke="#F8E7A1"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 12H20.33"
        stroke="#F8E7A1"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
