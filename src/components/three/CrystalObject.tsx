"use client";

import { Suspense, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import { Color, Mesh } from "three";
import { MathUtils } from "three";
import type { RefObject } from "react";
import { sampleChoreography, createChoreoState } from "./choreography";
import { sampleColor, palette } from "./palette";
import VideoCore from "./VideoCore";

type Props = {
  scroll: RefObject<number>;
  stops: RefObject<number[]>;
  detail: number;
  /** When true, the shell becomes refractive glass and a coding-video core is shown inside it. */
  enableVideo: boolean;
};

// Distort material ref type is loose across drei versions; alias the fields we touch.
type DistortMat = {
  distort: number;
  speed: number;
  color: Color;
  emissive: Color;
};

const damp = MathUtils.damp;

// Glass base color multiplies the transmitted video (transmitted = (1-F)·color·video),
// so in video mode we pull the section hue toward white to keep the code bright/true.
const WHITE = new Color(1, 1, 1);

export default function CrystalObject({ scroll, stops, detail, enableVideo }: Props) {
  const mesh = useRef<Mesh>(null);
  const mat = useRef<DistortMat>(null);
  const choreo = useRef(createChoreoState());
  const targetColor = useRef(new Color());

  useFrame((_, dt) => {
    if (!mesh.current || !mat.current) return;
    const clampedDt = Math.min(dt, 0.1); // guard against tab-refocus jumps
    const s = sampleChoreography(scroll.current ?? 0, choreo.current, stops.current);

    // Position / scale
    mesh.current.position.x = damp(mesh.current.position.x, s.objPosX, 3, clampedDt);
    const scale = damp(mesh.current.scale.x, s.objScale, 4, clampedDt);
    mesh.current.scale.setScalar(scale);

    // Continuous rotation, speed driven by choreography
    mesh.current.rotation.y += s.objRotSpeed * clampedDt;
    mesh.current.rotation.z += s.objRotSpeed * 0.3 * clampedDt;

    // Material morph — in video mode keep distortion low so the code isn't smeared
    // by the shell's surface wobble (transmission samples the refracted-ray exit).
    const distortTarget = enableVideo ? s.objDistort * 0.4 : s.objDistort;
    mat.current.distort = damp(mat.current.distort, distortTarget, 4, clampedDt);
    mat.current.speed = damp(mat.current.speed, s.objSpeed, 4, clampedDt);

    // Color ramp (base + emissive rim glow). In video mode the shell's base color
    // multiplies the transmitted video, so lighten the target toward white — the
    // code stays bright/true and the glass keeps only a faint section-colored tint.
    sampleColor(s.colorIndex, targetColor.current);
    if (enableVideo) targetColor.current.lerp(WHITE, 0.72);
    const k = 1 - Math.exp(-3 * clampedDt);
    mat.current.color.lerp(targetColor.current, k);
    mat.current.emissive.lerp(targetColor.current, k);
  });

  return (
    <mesh ref={mesh} position={[2.2, 0, 0]}>
      <icosahedronGeometry args={[1.4, detail]} />
      <MeshDistortMaterial
        ref={mat as never}
        color={palette.violet}
        emissive={palette.violet}
        // Faint rim glow in video mode so the glass doesn't add a milky self-glow
        // over the transmitted code; brighter for the solid-gem look otherwise.
        emissiveIntensity={enableVideo ? 0.04 : 0.12}
        // Clear glass (video mode) reads the core sharply; frosted metal otherwise.
        roughness={enableVideo ? 0.04 : 0.18}
        // Glass lens (video mode) vs the original glossy metal. transmission must
        // be > 0 at creation so the shader define is stable — no recompile hitch.
        metalness={enableVideo ? 0 : 0.9}
        transmission={enableVideo ? 1 : 0}
        // Thin glass: near-1:1 passthrough of the core, minimal displacement.
        thickness={enableVideo ? 0.25 : 0}
        // Low IOR: weak Fresnel rim + little ray-bending, so the code stays put.
        ior={enableVideo ? 1.2 : 1.5}
        // The key real-GPU knob: keep reflections from out-shining the video core.
        envMapIntensity={enableVideo ? 0.3 : 1.6}
        distort={0.4}
        speed={1.4}
      />
      {enableVideo && (
        <Suspense fallback={null}>
          <VideoCore src="/videos/code.mp4" />
        </Suspense>
      )}
    </mesh>
  );
}
