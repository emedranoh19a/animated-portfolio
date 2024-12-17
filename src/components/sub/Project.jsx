import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
export default function Project({ name, desc, url, tech, index }) {
  //url is the path to the image
  //tech is an array of skills.
  //layout must be used with the key prop.
  //State:
  const [show, setShow] = useState(false);
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: index % 2 === 0 ? 100 : -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, type: "spring", stiffness: 100 }}
      className="relative w-[300px] sm:w-full h-max border border-yellow-400 rounded-lg cursor-pointer overflow-hidden"
      onClick={() => setShow((s) => !s)}
    >
      <Image
        src={url}
        alt="Project Image"
        width={400}
        height={400}
        className="opacity-70 rounded-lg"
      />
      {/* This will be the back side */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: show ? 1 : 0 }}
        className="absolute top-0 w-full h-full flex flex-col items-center justify-center gap-y-2 bg-white/95 p-6 rounded-lg"
      >
        <h2 className="text-lg font-bold tracking-wide text-gray-500">
          {name}
        </h2>
        <p className=" text-justify text-gray-500 first-letter:pl-2">{desc} </p>
      </motion.div>
    </motion.div>
  );
}
