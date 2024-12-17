"use client";

import { arrowIcons, reviewsData, starIcons } from "@/assets";
import { animate, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Heading from "./sub/Heading";
export default function Reviews() {
  //State:
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(false); //manage navigation direction.
  const prevIndex = useRef(0);
  //Allows to create a reference to a dom element. To persist accross re-renders.
  //Does not trigger re-renders. It is tight to the lyfecycle of the component.
  const slides = useRef([]);

  useEffect(() => {
    direction ? leftClickHandler() : rightClickHandler();
    prevIndex.current = index;
  }, [index]);

  //Handlers:
  function rightClickHandler() {
    //dynamically change the properties of an element.
    animate(slides.current[index], { x: 0 }, { delay: 0.3 });
    //animating the previous slide.
    animate(slides.current[prevIndex.current], {
      scale: index === 0 ? 1 : 0.4,
      rotate: index === 0 ? 0 : index % 2 === 0 ? 10 : -10,
    });
  }

  function leftClickHandler() {
    animate(slides.current[index], { scale: 1, rotate: 0 }, { delay: 0.2 });
    animate(slides.current[prevIndex.current], { x: "100%" });
  }
  //TODO: How to implement a carousel in framer motion.
  return (
    <div className="my-20 px-96">
      <Heading text="Reviews" />
      <div className="flex flex-col items-center justify-center">
        <motion.div
          className="overflow-hidden relative w-[800px] lg:w-[600px] md:w-[95%] sm:w-[280px] h-[500px] lg:h-[450px] md:h-[400px] sm:h-[600px] flex items-center justify-center"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {reviewsData.map((review, i) => (
            <Review key={i} {...review} ref={(el) => slides.current.push(el)} />
          ))}
        </motion.div>
        <div className="flex gap-x-4 text-4xl text-yellow-500 mt-5">
          <button
            onClick={() => {
              setDirection(true);
              setIndex(index - 1);
            }}
            disabled={index === 0}
          >
            {arrowIcons[0]}
          </button>
          <button
            onClick={() => {
              setDirection(false);
              setIndex(index + 1);
            }}
            disabled={index === reviewsData.length - 1}
          >
            {arrowIcons[1]}
          </button>
        </div>
      </div>
    </div>
  );
}

function Review({ image, name, comment, stars, ref }) {
  return (
    <motion.div
      ref={ref}
      className="absolute inset-0 flex flex-col items-center justify-center gap-y-7 lg:gap-y-4 border border-yellow-500 bg-zinc-50 p-14 lg:p-5 rounded-xl"
      initial={{ x: "100%" }}
    >
      <Image
        src={image}
        alt="Reviews Image"
        width={130}
        height={130}
        className="w-[130px] aspect-square rounded-full border border-yellow-500 p-4 object-contain"
      />
      <h1 className="first-letter:capitalize text-2xl md:text-xl text-center tracking-wider text-yellow-600">
        {name}
      </h1>
      <p className="text-lg md:text-sm text-justify font-extralight tracking-wide text-gray-600 first-letter:pl-2">
        {comment}
      </p>
      <div className="flex flex-col items-center justify-center gap-y-2">
        <span className="text-lg font-light text-yellow-600 mr-3">
          {stars
            .reduce((acum, item) => {
              return (acum += item);
            }, 0)
            .toFixed(1)}
        </span>
        <div className="flex items-center gap-x-2 text-2xl text-yellow-500">
          {stars.map((star, i) => (
            <span key={i}>{star === 1 ? starIcons[0] : starIcons[1]}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
//TODO: Una página debería contener todos los proyectos ordenados.
//TODO: quiero navegar por los proyectos, dentro de cualquier pagina, a menos que sea un proyecto un poco más pesado.
