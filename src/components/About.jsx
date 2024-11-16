"use client";

import { aboutData, aboutText, arrowLeftIcon, downloadIcon } from "@/assets";
import Image from "next/image";
import Achievements from "./sub/Achievements";
import Heading from "./sub/Heading";

export default function About() {
  return (
    <div className="min-h-screen px-96 flex flex-col items-center justify-center">
      <Heading text="About me" />
      <div className="w-full flex items-center justify-between md:justify-center">
        <Image
          src="/about-me.png"
          alt="About image"
          width={400}
          height={400}
          className="w-[300px] lg:w-[200px] md:hidden"
        />
        {/* //aboutData, aboutText, downloadIcon */}
        <div className="relative max-w-[800px] rounded-xl bg-zinc-100 p-5 text-justify">
          <span className="absolute -left-5 top-20 scale-[2.5] text-zinc-100 md:hidden">
            {arrowLeftIcon}
          </span>
          <p className="text-lg font-light text-gray-700 first-letter:pl-3 lg:text-[16px] sm:text-[14px]">
            {aboutText}
          </p>
          <a
            href="/nick-cv.pdf"
            download=""
            className="w-max flex items-center gap-x-2 mt-6 rounded-full border border-gray-300 bg-red-400 px-3 py-2 font-light text-white hover:bg-red-500 transition-colors"
          >
            <span> Download CV</span>
            <span className="text-xl"> {downloadIcon}</span>
          </a>
        </div>
      </div>
      <div className="mt-20 w-full flex flex-wrap items-center justify-between gap-x-7 gap-y-10">
        {aboutData.map((item, i) => (
          <Achievements key={i} {...item}></Achievements>
        ))}
        <Achievements />
      </div>
    </div>
  );
}