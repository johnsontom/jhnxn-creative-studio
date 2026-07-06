"use client";

import { motion } from "motion/react";
import Laptop from "./Laptop";
import Phone from "./Phone";

export default function MobileHeroVisual() {
  return (
    <div className="relative h-[420px] w-full max-w-[360px]">

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[100px]" />

      {/* Laptop */}
      <motion.div
        className="
          absolute
          left-1/2
          top-4
          -translate-x-1/2
          origin-top
          scale-[0.42]
        "
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            delay: 1,
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Laptop />
        </motion.div>
      </motion.div>

      {/* Phone */}
    {/* Phone */}
<motion.div
  className="
    absolute
    bottom-10
    right-6
    origin-bottom-right
    scale-[0.48]
    z-20
  "
  initial={{ x: 200, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.4 }}
  transition={{
    duration: 1,
    delay: 0.2,
    ease: "easeOut",
  }}
>
  <motion.div
    animate={{ y: [0, 10, 0] }}
    transition={{
      delay: 1.2,
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <Phone />
  </motion.div>

      
      </motion.div>

    </div>
  );
}