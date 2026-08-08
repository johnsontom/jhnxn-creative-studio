"use client";

import { Canvas } from "@react-three/fiber";
import { useThree } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import { useEffect } from "react";
import { useScrollProgress } from "./useScrollProgress";
import { useSectionStops } from "./useSectionStops";
import { useDeviceProfile } from "./useDeviceProfile";
import CrystalObject from "./CrystalObject";
import CameraRig from "./CameraRig";
import Particles from "./Particles";
import Effects from "./Effects";
import { palette } from "./palette";

/** Pauses the render loop while the tab is hidden. */
function VisibilityController() {
  const setFrameloop = useThree((s) => s.setFrameloop);
  useEffect(() => {
    const onChange = () =>
      setFrameloop(document.hidden ? "never" : "always");
    document.addEventListener("visibilitychange", onChange);
    return () => document.removeEventListener("visibilitychange", onChange);
  }, [setFrameloop]);
  return null;
}

/**
 * Sizes the transmission (glass refraction) render target. three defaults this to
 * 1.0 (full drawing-buffer resolution) — costly on mobile GPUs where we also want
 * the video-in-orb. Reactive so a desktop↔mobile resize re-applies the right scale.
 */
function TransmissionQuality({ scale }: { scale: number }) {
  const gl = useThree((s) => s.gl);
  useEffect(() => {
    gl.transmissionResolutionScale = scale;
  }, [gl, scale]);
  return null;
}

type SceneProps = {
  /** Called if the WebGL context is lost so the parent can show the static fallback. */
  onContextLost?: () => void;
};

export default function Scene({ onContextLost }: SceneProps) {
  const scroll = useScrollProgress();
  const stops = useSectionStops();
  const profile = useDeviceProfile();

  // Video-in-orb runs wherever the animated scene runs. Reduced-motion / no-WebGL
  // never reach here (SceneClient shows StaticAtmosphere); re-assert defensively.
  const enableVideo =
    profile.hasWebGL && !profile.reducedMotion && profile.enableVideoTexture;

  return (
    <Canvas
      dpr={profile.dpr}
      camera={{ position: [0, 0, 6], fov: 42, near: 0.1, far: 100 }}
      gl={{
        alpha: true,
        antialias: profile.isDesktop,
        powerPreference: "high-performance",
        stencil: false,
        depth: true,
      }}
      frameloop="always"
      onCreated={({ gl }) => {
        gl.domElement.addEventListener(
          "webglcontextlost",
          (e) => {
            e.preventDefault(); // allow a potential restore, but drop to fallback now
            onContextLost?.();
          },
          { once: true }
        );
      }}
    >
      <VisibilityController />
      <TransmissionQuality scale={profile.transmissionResolutionScale} />
      <fog attach="fog" args={[palette.void.getHex(), 8, 24]} />

      <ambientLight intensity={0.25} />

      {/*
        Self-contained image-based lighting (no external HDR / CDN). The
        Lightformers become the crystal's reflections, which is what makes a
        metallic surface read as "glossy" instead of flat black.
      */}
      <Environment resolution={256} frames={Infinity}>
        <color attach="background" args={["#050506"]} />
        <Lightformer
          intensity={3}
          color="#c084fc"
          position={[0, 3, -4]}
          scale={[8, 8, 1]}
        />
        <Lightformer
          intensity={4}
          color="#7c3aed"
          position={[-5, -1, -2]}
          rotation={[0, Math.PI / 3, 0]}
          scale={[6, 6, 1]}
        />
        <Lightformer
          intensity={3.5}
          color="#e879f9"
          position={[5, -2, 2]}
          rotation={[0, -Math.PI / 3, 0]}
          scale={[6, 6, 1]}
        />
        <Lightformer
          intensity={2}
          color="#22d3ee"
          position={[0, -4, 3]}
          scale={[5, 5, 1]}
        />
      </Environment>

      <directionalLight position={[5, 5, 5]} intensity={0.8} color={palette.accent} />
      <pointLight position={[-6, -2, -4]} intensity={2} color={palette.fuchsia} />

      <CameraRig scroll={scroll} stops={stops} />
      <CrystalObject
        scroll={scroll}
        stops={stops}
        detail={profile.geometryDetail}
        enableVideo={enableVideo}
      />
      <Particles scroll={scroll} stops={stops} count={profile.particleCount} />

      {profile.enableBloom && <Effects scroll={scroll} stops={stops} />}
    </Canvas>
  );
}
