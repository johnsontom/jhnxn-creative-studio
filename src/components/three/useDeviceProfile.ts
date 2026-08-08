"use client";

import { useEffect, useState } from "react";

export type DeviceProfile = {
  isDesktop: boolean;
  reducedMotion: boolean;
  hasWebGL: boolean;
  dpr: [number, number];
  particleCount: number;
  geometryDetail: number;
  enableBloom: boolean;
  /** The coding-video core + refractive glass shell. On wherever WebGL runs; the
   *  transmission cost is tamed on mobile via transmissionResolutionScale below. */
  enableVideoTexture: boolean;
  /** Scales the (costly) transmission refraction render target. 1 on desktop;
   *  reduced on mobile so the extra glass pass stays cheap on weaker GPUs. */
  transmissionResolutionScale: number;
};

function detectWebGL(): boolean {
  if (typeof document === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return !!(
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl")
    );
  } catch {
    return false;
  }
}

function build(isDesktop: boolean, reducedMotion: boolean, hasWebGL: boolean): DeviceProfile {
  return {
    isDesktop,
    reducedMotion,
    hasWebGL,
    dpr: isDesktop ? [1, 1.75] : [1, 1.25],
    particleCount: isDesktop ? 4000 : 1200,
    geometryDetail: isDesktop ? 14 : 6,
    enableBloom: isDesktop,
    // Video-in-orb everywhere WebGL is available (hasWebGL/reducedMotion gate it
    // in Scene). Mobile keeps it affordable via a reduced transmission RT below.
    enableVideoTexture: true,
    transmissionResolutionScale: isDesktop ? 1 : 0.6,
  };
}

/**
 * Capability + tier detection for the 3D scene. Recomputes `isDesktop` on
 * resize; `reducedMotion` follows the OS media query live. `hasWebGL` is probed
 * once (a lost/regained context is handled separately at the Canvas level).
 */
export function useDeviceProfile(): DeviceProfile {
  const [profile, setProfile] = useState<DeviceProfile>(() => {
    if (typeof window === "undefined") return build(true, false, true);
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return build(isDesktop, reducedMotion, detectWebGL());
  });

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const hasWebGL = detectWebGL();

    const update = () =>
      setProfile(build(desktopQuery.matches, motionQuery.matches, hasWebGL));

    update();
    desktopQuery.addEventListener("change", update);
    motionQuery.addEventListener("change", update);
    return () => {
      desktopQuery.removeEventListener("change", update);
      motionQuery.removeEventListener("change", update);
    };
  }, []);

  return profile;
}
