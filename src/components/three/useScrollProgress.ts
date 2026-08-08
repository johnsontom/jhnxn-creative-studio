"use client";

import { useEffect, useRef } from "react";
import { useScroll } from "motion/react";
import type { RefObject } from "react";

/**
 * Bridges the native window scroll into the WebGL render loop as a mutable ref.
 *
 * Mirrors the proven `useScroll()` binding in src/components/ui/ScrollProgress.tsx,
 * but writes to a ref instead of a style value. useFrame reads `ref.current`, so
 * scrolling never triggers a React re-render — the whole scene updates on the GL
 * clock, not the React one.
 */
export function useScrollProgress(): RefObject<number> {
  const ref = useRef(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    ref.current = scrollYProgress.get();
    const unsubscribe = scrollYProgress.on("change", (v) => {
      ref.current = v;
    });
    return unsubscribe;
  }, [scrollYProgress]);

  return ref;
}
