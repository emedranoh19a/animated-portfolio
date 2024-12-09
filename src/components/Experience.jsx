"use client";
import { arrowLeftIcon, experienceData } from "@/assets";
import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Heading from "./sub/Heading";

function useTimelineAnimation() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    //start tracking when 95% of the container is visible.
    //finish tracking when the bottom of the container reaches the end of the viewport
    offset: ["start 95%", "end end"],
  });

  const scrollY = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 20,
  });
  return { containerRef, scrollY };
}
export default function Experience() {
  const date = new Date().getFullYear();
  const { containerRef, scrollY } = useTimelineAnimation();
  return (
    <div className="relative py-20 px-96">
      <Heading text="Experience & Education" />
      <Image
        src="/education.png"
        alt="Experience image"
        width={400}
        height={400}
        className="absolute -top-4 right-96 opacity-70 lg:hidden"
      />
      <div
        ref={containerRef}
        className="w-full height-full flex flex-col items-center justify-center gap-y-10 lg:gap-y-20 py-10"
      >
        {experienceData.map((item, i) => {
          return (
            <div
              key={`id${i}`}
              className={`w-[600px] xl:w-[480px] sm:w-full px-12 sm:px-0 relative  ${
                i % 2 === 0
                  ? "-left-[300px] xl:-left-[240px] lg:-left-0"
                  : "left-[300px] xl:left-[240px] lg:left-0"
              }`}
            >
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
                viewport={{ once: true }}
                className="relative flex flex-col gap-y-3 rounded-md border border-red-300 bg-white p-4 tracking-wide sm:text-sm"
              >
                <h1 className="text-xl sm:text-lg font-light text-gray-700">
                  {item.title}
                </h1>
                <p className="text-gray-800">
                  <span className="block font-light">Education</span>
                  <span className="block pl-2 font-extralight">
                    {item.education}
                  </span>
                </p>
                <div className="text-gray-800">
                  <span className="font-light">Experience:</span>
                  <ul className="pl-2">
                    {item.experience.map((exp, j) => (
                      <li key={j} className="my-1 font-extralight">
                        {exp}
                      </li>
                    ))}
                  </ul>
                </div>
                <span
                  className={`absolute top-20 text-red-300 -translate-y-1/2 ${
                    i % 2 === 0 ? "left-full rotate-180" : "right-full"
                  }`}
                >
                  {arrowLeftIcon}
                </span>
              </motion.div>
              <div
                className={`absolute top-20 w-14  border border-gray-300 rounded-full aspect-square grid place-items-center texxt-red-400 font-light -translate-y-1/2 z-10 bg-white ${
                  i % 2 === 0
                    ? "left-full -translate-x-1/2 lg:left-1/2"
                    : "right-full translate-x-1/2 lg:right-1/2"
                }`}
              >
                {date - experienceData.length + i + 1}
              </div>
            </div>
          );
        })}

        <motion.div
          className="absolute w-1 h-full rounded-full bg-gray-300 origin-top"
          initial={{ scaleY: 0 }}
          style={{ scaleY: scrollY }}
        />
      </div>
    </div>
  );
}
