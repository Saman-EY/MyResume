import Image from "next/image";
import React from "react";

function Profile() {
  return (
    <section className="flex flex-col-reverse lg:flex-row justify-between gap-15 CustomContainer1000px px-3 lg:px-10 mt-10 items-center">
      <div className="flex flex-col gap-4 w-full px-5 lg:w-auto  max-w-144 lg:max-w-none">
        <h6 className="text-white text-4xl font-semibold">Saman Ezzatabadi</h6>
        <h6 className="text-gray-300 text-2xl font-semibold">
          Front-end Developer
        </h6>

        <div className="bg-[#F8E7A1] h-1 lg:w-60 rounded-lg my-5"></div>

        <p className="text-gray-300 text-lg lg:max-w-76 font-normal">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus consequuntur aperiam minus consequatur repellat illo
          nostrum minima accusantium dolores dolorum, fugiat, magni consectetur
          dolore doloribus. Soluta quidem iste beatae sit!
        </p>

        <button className="text-CusYellow  min-w-36 group mt-5 font-medium w-fit flex items-center gap-2">
          Let's talk
          <span className="group-hover:translate-x-12 transition-transform duration-300">
            <ArrowSvg />
          </span>
        </button>
      </div>

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
            <span className="font-bold text-2xl ">8 Month+</span>
          </div>
          <div className="flex flex-col gap-3 items-end">
            <span className="font-semibold text-xl lg:max-w-32 text-end text-Secondary">
              Complete Project
            </span>
            <span className="font-bold text-2xl ">20+</span>
          </div>
        </div>
      </section>
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
