"use client";

import { projectsButton, projectsData } from "@/assets";
import clsx from "clsx";
import { animate, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Heading from "./sub/Heading";
import Project from "./sub/Project";

export default function Projects() {
  //State:
  const [tech, setTech] = useState("All");
  const [index, setIndex] = useState(0); //The index of the button, for the styles of the button.

  const prevIndex = useRef(0); //Keeps track of the previoouosly clicked button. doesn't rerender the component.
  const buttonsRef = useRef([]); //To access to all the buttons.

  //Procedimiento:
  //1.Crear estado de index.
  //2. Preparar el prevIndex.
  //3. handler que revierta el estilo anterior, y luego aplique estilos especiales al nuevo elemento.
  //4. Disparar la funcion con un efecto, cada vez que index cambie. Dentro del mismo efecto, reemplazar current prevIndex con el indice nuevo.
  //5. El handler del botón, solo debe cambiar el estado de index.
  //6. convertir el elemento a animar en motion component.
  //7. añadir los props necesarios.

  useEffect(() => {
    handleClick();
    prevIndex.current = index;
  }, [index]);

  //Style:
  const buttonStyles = clsx(
    "text-sm font-light tracking-wider text-gray-400",
    "px-2 py-1",
    "border boder-yellow-500 rounded-xl  "
  );
  //Handlers:
  function handleClick() {
    //apply animations to the buttons.
    //Reverts the style of the previously selected button
    animate(buttonsRef.current[prevIndex.current], { opacity: 0.5, scale: 1 });
    animate(buttonsRef.current[index], { opacity: 1, scale: 1.2 });
  }

  return (
    <div className="min-h-screen py-20 px-80">
      <Heading text="Projects" />
      <div className="flex flex-wrap items-center justify-between gap-4 py-10">
        {projectsButton.map((text, i) => (
          <motion.button
            key={i}
            className={buttonStyles}
            ref={(el) => buttonsRef.current.push(el)}
            onClick={() => {
              setIndex(i);
              setTech(text);
            }}
            initial={{ opacity: i === 0 ? 1 : 1, scale: i === 0 ? 1.2 : 1 }}
          >
            {text}
          </motion.button>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-5">
        {projectsData
          .filter((project) => {
            return project.tech.some((item) =>
              tech === "All" ? true : item === tech
            );
          })
          .map((project, i) => (
            <motion.div key={i} layout>
              <Project index={i} {...project} />
            </motion.div>
          ))}
      </div>
    </div>
  );
}
