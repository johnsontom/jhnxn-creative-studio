"use client";

import Laptop from "./Laptop";
import Phone from "./Phone";
import { motion } from "motion/react";

export default function HeroVisual() {
  return (
    <div className="relative h-[760px] w-[760px]">

      {/* Purple Glow */}
      <div className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[180px]" />

      {/* Cyan Glow */}
      <div className="absolute left-10 top-28 h-[220px] w-[220px] rounded-full bg-cyan-500/10 blur-[120px]" />

      {/* Pink Glow */}
      <div className="absolute bottom-10 right-0 h-[200px] w-[200px] rounded-full bg-fuchsia-500/10 blur-[120px]" />

      {/* Laptop */}
      <motion.div
        className="absolute left-0 top-1/2 -translate-y-[58%]"
        initial={{ x: -220, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          y: [0, -10, 0],
        }}
        transition={{
          x: {
            duration: 1,
            ease: "easeOut",
          },
          opacity: {
            duration: 1,
          },
          y: {
            delay: 1,
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <Laptop />
      </motion.div>

      {/* Phone */}
      <motion.div
        className="absolute bottom-10 right-0 rotate-[-5deg]"
        initial={{ x: 220, opacity: 0 }}
        animate={{
  x: 0,
  opacity: 1,
  y: [0, -10, 0],
}}
        transition={{
          x: {
            duration: 1,
            delay: 0.2,
            ease: "easeOut",
          },
          opacity: {
            duration: 1,
            delay: 0.2,
          },
          y: {
            delay: 1.2,
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <Phone />
      </motion.div>

    </div>
  );
}