"use client";

import { heroIcons } from "@/assets";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

function useCharacterAnimation() {
  //State:
  //1. Initialization of window dimensions, mouse coordinates, and mouse movement
  const [windowOffset, setWindowOffset] = useState({
    innerHeight: 0,
    innerWidth: 0,
  });
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [mouseMove, setMouseMove] = useState(false);

  //Handlers:
  //1. onMouseEnter: alert movement and adjust dimensions
  //2. onMouseMove: Performance by mutation of motion values x and y, with clientX and clientY (destructured from event)
  const handleMouseEnter = () => {
    setWindowOffset({
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth,
    });
    setMouseMove(true);
  };
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    x.set(clientX);
    y.set(clientY);
  };

  //Dataflow:
  //1. prepare springs instead of mutated linear values. (optional)
  //2. use window dimensions (state) to map the spring values. These are the final style calculations

  const xSpring = useSpring(x, { stiffness: 100, damping: 10 });
  const ySpring = useSpring(y, { stiffness: 100, damping: 10 });

  const { innerHeight, innerWidth } = windowOffset;
  const rotateY = useTransform(xSpring, [0, innerWidth], [-30, 30]);
  const rotateX = useTransform(ySpring, [0, innerHeight], [10, -50]);

  return {
    rotateY,
    rotateX,
    handleMouseEnter,
    handleMouseMove,
    mouseMove,
  };
}

export default function Hero() {
  const { rotateY, rotateX, handleMouseEnter, handleMouseMove, mouseMove } =
    useCharacterAnimation();
  const [buttonHover, setButtonHover] = useState(false);

  return (
    <div
      className="h-screen grid place-content-center"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
    >
      <div>
        <div className="flex flex-col items-center justify-center gap-y-3 font-light capitalize">
          <motion.div
            className="flex items-center justify-center"
            style={{
              rotateX: mouseMove ? rotateX : 0,
              rotateY: mouseMove ? rotateY : 0,
              transition: "0.1s",
            }}
          >
            <Image
              src="/person.png"
              alt="Person Image"
              width={400}
              height={400}
              priority
              className="h-auto w-[150px]"
            />
            <motion.span
              className="absolute text-3xl font-semibold text-white"
              initial={{ scale: 0 }}
              animate={{
                opacity: buttonHover ? 0 : 1,
                scale: buttonHover ? 2 : 0,
                y: buttonHover ? -40 : 0,
              }}
              transition={{ opacity: { delay: 0.4 } }}
            >
              Hi
            </motion.span>
          </motion.div>
          <h1 className="text-center text-3xl font-bold tracking-wider text-gray-500 sm:text-2xl">
            Mi Name is Nick Brown &
          </h1>
          <p className="text-lg tracking-wider text-gray-700">
            I like animations!
          </p>
        </div>
        <div className="mt-8 flex justify-center gap-x-10 text-3xl text-yellow-600">
          {heroIcons.map((icon, i) => {
            return (
              <a
                href="#"
                key={i}
                className="hover:bg-red-400 transition-colors hover:text-white rounded-lg p-2"
              >
                {icon}
              </a>
            );
          })}
          {/* <a href="#">{heroIcons}</a> */}
        </div>
        <a
          onMouseEnter={() => {
            setButtonHover(true);
          }}
          onMouseLeave={() => setButtonHover(false)}
          className="mt-7 block w-max rounded-lg bg-red-400 px-3 py-1 font-light capitalize tracking-wider mx-auto text-white hover:bg-red-500 transition-colors"
        >
          Talk to me
        </a>
      </div>
    </div>
  );
}
