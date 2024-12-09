"use client";

import { skillsData } from "@/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import Heading from "./sub/Heading";

export default function Skills() {
  const variants = {
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.3 + i * 0.07 },
    }),
    hidden: { opacity: 0, y: 30 },
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-y-20 px-96">
      <Heading text="Skills" />
      <div className="w-full flex justify-between flex-wrap gap-x-8 gap-y-10 lg:gap-y-6">
        {skillsData.map((item, i) => (
          <Skill key={i} name={item.name} icon={item.icon} index={i} />
        ))}
      </div>
    </div>
  );
}

function Skill({ name, icon, index }) {
  const variants = {
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.3 + i * 0.07 },
    }),
    hidden: { opacity: 0, y: 30 },
  };
  //TODO: It would be amazing to animate all these inside the skills globe.
  return (
    <motion.div
      //TODO: find out what the hell is custom prop.
      custom={index}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      className="flex items-center justify-center gap-x-3 rounded-xl border border-yellow-500 bg-zinc-200 px-5 py-2 lg:px-2"
      whileHover={{ scale: 1.1 }}
      viewport={{ margin: "50px", once: true }}
    >
      <Image
        src={icon}
        alt="skills image"
        width={100}
        height={100}
        className="h-auto w-[40px]"
      />
      <p className="text-sm text-gray-600">{name}</p>
    </motion.div>
  );
}
