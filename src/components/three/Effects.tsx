"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import { MathUtils } from "three";
import type { RefObject } from "react";
import { sampleChoreography, createChoreoState } from "./choreography";

type Props = {
  scroll: RefObject<number>;
  stops: RefObject<number[]>;
};

type BloomEffect = { intensity: number };

const damp = MathUtils.damp;

/** Desktop-only postprocessing. Bloom intensity swells toward the Contact finale. */
export default function Effects({ scroll, stops }: Props) {
  const bloom = useRef<BloomEffect>(null);
  const choreo = useRef(createChoreoState());

  useFrame((_, dt) => {
    if (!bloom.current) return;
    const clampedDt = Math.min(dt, 0.1);
    const s = sampleChoreography(scroll.current ?? 0, choreo.current, stops.current);
    bloom.current.intensity = damp(bloom.current.intensity, s.bloomIntensity, 3, clampedDt);
  });

  return (
    <EffectComposer enableNormalPass={false}>
      <Bloom
        ref={bloom as never}
        mipmapBlur
        intensity={0.7}
        luminanceThreshold={0.2}
        luminanceSmoothing={0.9}
      />
      <Vignette eskil={false} offset={0.3} darkness={0.7} />
    </EffectComposer>
  );
}
