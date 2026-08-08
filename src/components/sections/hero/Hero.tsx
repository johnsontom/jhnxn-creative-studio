"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen justify-center overflow-hidden">

      {/* Soft violet atmosphere — a scrim over the 3D world, not an occluder */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-violet-700/20
          via-transparent
          to-fuchsia-600/15
        "
      />

      {/* Left-side legibility scrim so headline text stays readable over the 3D */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#09090B]/85 via-[#09090B]/40 to-transparent lg:to-[#09090B]/0" />


      {/* Hero Content */}
    <div
  className="
    relative
    z-10
    mx-auto
    grid
    min-h-screen
    w-full
    max-w-[1400px]
    items-center
    gap-12
    px-6
    pt-32
    pb-20
    lg:grid-cols-2
    lg:gap-20
    lg:px-20
    lg:pt-0
    lg:pb-0
  "
>
        {/* LEFT */}
        <div className="max-w-[700px]">
          <span className="inline-flex items-center rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-sm font-medium tracking-[0.25em] text-violet-300 backdrop-blur-xl">
            ✦ JHNXN CREATIVE STUDIO
          </span>

          <h1 className="mt-8 text-4xl
font-bold
leading-tight
tracking-tight
sm:text-5xl
lg:text-6xl
xl:text-7xl">
            <span className="text-white">
              Where Creativity
              <br />
              Meets
            </span>

            <br />

            <span className="bg-gradient-to-r from-violet-300 via-violet-500 to-purple-700 bg-clip-text text-transparent">
              Technology.
            </span>
          </h1>

          <p className="mt-8 max-w-[620px] text-base
sm:text-lg leading-8 text-zinc-400">
          We craft premium websites, digital products, and digital experiences that combine creativity, performance, and cutting-edge technology. Every project is thoughtfully designed to help ambitious brands stand out, build trust, and leave a lasting impression.
          </p>

          <div className="mt-14 flex flex-col gap-4 sm:flex-row">
            <Link href="#contact">
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.96 }}
    className="
      flex
      h-14
      min-w-[180px]
      items-center
      justify-center
      rounded-full
      bg-violet-600
      px-8
      text-base
      font-semibold
      text-white
      transition
      duration-300
      hover:bg-violet-500
    "
  >
    Start Project
  </motion.div>
</Link>

            <Link href="#portfolio">
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.96 }}
    className="
      flex
      h-14
      min-w-[180px]
      items-center
      justify-center
      rounded-full
      border
      border-white/10
      bg-white/5
      px-8
      text-base
      font-semibold
      text-white
      backdrop-blur-xl
      transition
      duration-300
      hover:bg-white/10
    "
  >
    View Portfolio
  </motion.div>
</Link>
          </div>
        </div>

        {/* RIGHT — the 3D crystal shows through here (see SceneClient) */}
        <div className="hidden lg:block" aria-hidden="true" />
      </div>
    </section>
  );
}