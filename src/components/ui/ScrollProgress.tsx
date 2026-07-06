"use client";

import { motion, useScroll } from "motion/react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        transformOrigin: "0%",
      }}
      className="
        fixed
        left-0
        top-0
        z-[999]
        h-[3px]
        w-full
        bg-gradient-to-r
        from-violet-500
        via-fuchsia-500
        to-violet-500
      "
    />
  );
}