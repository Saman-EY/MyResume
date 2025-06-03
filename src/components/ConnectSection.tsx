"use client";
import Image from "next/image";
import React from "react";
import { Slide } from "react-awesome-reveal";

function ConnectSection() {
  return (
    <section className="relative ">
      <Image
        alt=""
        src="/assets/color4.svg"
        width={300}
        height={300}
        className="w-fit h-180 object-contain absolute scale-x-[-1] scale-y-[-1] right-0 -top-30 -z-10"
      />

      <section className=" mt-40 mx-auto w-full md:max-w-300 flex flex-col md:flex-row gap-5 justify-between items-end px-3">
        <div className="w-full">
          <div className="mb-10">
            <h6 className="text-white font-bold text-4xl uppercase">
              Let’s connect
            </h6>
            <p className="mt-2">
              Say hello at{" "}
              <a
                href="mailto:saman.ezzatabadi@gmail.com"
                className="underline text-blue-300"
              >
                saman.ezzatabadi@gmail.com
              </a>{" "}
            </p>
          </div>

          <Slide cascade triggerOnce direction="left">
            <Image
              className="w-full md:w-150 h-100 object-cover rounded"
              alt=""
              src="/assets/connect-img.jpg"
              width={700}
              height={700}
            />
          </Slide>
        </div>
        <div className="flex flex-col gap-4  w-full">
          <Slide triggerOnce direction="right">
            <label className="flex flex-col gap-3" htmlFor="name">
              Name
              <input
                placeholder="Enter your name :)"
                onInput={(e) => {
                  e.currentTarget.value = e.currentTarget.value.replace(
                    /^\s+/,
                    ""
                  );
                }}
                type="text"
                className="bg-[#09214a] rounded outline-0 px-2 py-2 min-w-120"
              />
            </label>
            <label className="flex flex-col gap-3" htmlFor="name">
              Email
              <input
                placeholder="lorem@mail.com..."
                onInput={(e) => {
                  e.currentTarget.value = e.currentTarget.value.replace(
                    /^\s+/,
                    ""
                  );
                }}
                type="text"
                className="bg-[#09214a] rounded outline-0 px-2 py-2 min-w-120"
              />
            </label>
            <label className="flex flex-col gap-3" htmlFor="name">
              Message
              <textarea
                placeholder="Enter your message"
                onInput={(e) => {
                  e.currentTarget.value = e.currentTarget.value.replace(
                    /^\s+/,
                    ""
                  );
                }}
                rows={5}
                className="bg-[#09214a] rounded outline-0 px-2 py-2 min-w-120 resize-none"
              />
            </label>
            <button
              disabled
              className="rounded px-5 py-2.5 bg-blue-800 hover:bg-blue-700 transition-all opacity-30  !cursor-not-allowed"
            >
              Submit
            </button>
          </Slide>
        </div>
      </section>
    </section>
  );
}

export default ConnectSection;
