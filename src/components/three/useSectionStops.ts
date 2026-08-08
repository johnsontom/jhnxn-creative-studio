"use client";

import { useEffect, useRef } from "react";
import type { RefObject } from "react";
import { STOP_ANCHORS, defaultStops } from "./choreography";

/**
 * Remaps the choreography keyframe positions onto the real DOM section offsets,
 * so each 3D beat peaks when its section is centered in the viewport. Recomputes
 * on resize and once more after fonts/images settle (which changes page height).
 *
 * Returns a mutable ref of normalized `at` values (0..1), index-aligned with the
 * choreography STOPS. Read inside useFrame — never triggers a React re-render.
 */
export function useSectionStops(): RefObject<number[]> {
  const ref = useRef<number[]>(defaultStops());

  useEffect(() => {
    const measure = () => {
      const doc = document.documentElement;
      const maxScroll = Math.max(1, doc.scrollHeight - window.innerHeight);
      const vh = window.innerHeight;

      const ats = STOP_ANCHORS.map((id, i) => {
        if (i === 0) return 0;
        if (i === STOP_ANCHORS.length - 1) return 1;
        const el = id ? document.getElementById(id) : null;
        if (!el) return i / (STOP_ANCHORS.length - 1);
        const rect = el.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const center = top + rect.height / 2 - vh / 2;
        return Math.min(1, Math.max(0, center / maxScroll));
      });

      // Guarantee strictly ascending so the sampler's bracket search is stable.
      for (let i = 1; i < ats.length; i++) {
        if (ats[i] <= ats[i - 1]) ats[i] = Math.min(1, ats[i - 1] + 0.001);
      }
      ref.current = ats;
    };

    measure();
    window.addEventListener("resize", measure);
    const settle = window.setTimeout(measure, 1000);
    return () => {
      window.removeEventListener("resize", measure);
      window.clearTimeout(settle);
    };
  }, []);

  return ref;
}
