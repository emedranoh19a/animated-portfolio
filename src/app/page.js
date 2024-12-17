"use client"

import About from "@/components/About"
import Experience from "@/components/Experience"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Reviews from "@/components/Reviews"
import Skills from "@/components/Skills"

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Reviews />
      <Projects />
    </div>
  )
}
