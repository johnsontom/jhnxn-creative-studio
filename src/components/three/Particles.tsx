"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { AdditiveBlending, MathUtils, Points as ThreePoints } from "three";
import type { RefObject } from "react";
import { sampleChoreography, createChoreoState } from "./choreography";
import { palette } from "./palette";

type Props = {
  scroll: RefObject<number>;
  stops: RefObject<number[]>;
  count: number;
};

const damp = MathUtils.damp;

/** Deterministic pseudo-random so positions are stable across reloads (no Math.random in module scope). */
function seeded(i: number): number {
  const x = Math.sin(i * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

export default function Particles({ scroll, stops, count }: Props) {
  const points = useRef<ThreePoints>(null);
  const choreo = useRef(createChoreoState());

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Sample within a sphere shell for depth around the central object.
      const r = 4 + seeded(i) * 9;
      const theta = seeded(i + 1) * Math.PI * 2;
      const phi = Math.acos(2 * seeded(i + 2) - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi) - 4;
    }
    return arr;
  }, [count]);

  useFrame((_, dt) => {
    if (!points.current) return;
    const clampedDt = Math.min(dt, 0.1);
    const s = sampleChoreography(scroll.current ?? 0, choreo.current, stops.current);

    points.current.rotation.y += 0.02 * clampedDt;
    const spread = damp(points.current.scale.x, s.particleSpread, 2, clampedDt);
    points.current.scale.setScalar(spread);
  });

  return (
    <Points ref={points} positions={positions} frustumCulled={false}>
      <PointMaterial
        transparent
        color={palette.accent}
        size={0.035}
        sizeAttenuation
        depthWrite={false}
        blending={AdditiveBlending}
        opacity={0.7}
      />
    </Points>
  );
}
