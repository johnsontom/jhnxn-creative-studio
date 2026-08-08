"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useDeviceProfile } from "./useDeviceProfile";
import StaticAtmosphere from "./StaticAtmosphere";

// ssr:false is legal here because this is a Client Component. A WebGL <Canvas>
// needs window/document, so it must never run during prerender. Next 16 errors
// if this call is made from a Server Component.
const Scene = dynamic(() => import("./Scene"), {
  ssr: false,
  loading: () => <StaticAtmosphere />,
});

/**
 * Fixed, full-viewport background layer for the 3D world. Sits behind all page
 * content (z-0) and ignores pointer events so scroll/anchor nav are untouched.
 * Falls back to a static gradient for reduced-motion / no-WebGL / lost context.
 */
export default function SceneClient() {
  const profile = useDeviceProfile();
  const [mounted, setMounted] = useState(false);
  const [contextLost, setContextLost] = useState(false);

  useEffect(() => setMounted(true), []);

  const useFallback =
    !mounted || profile.reducedMotion || !profile.hasWebGL || contextLost;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
      onContextMenu={(e) => e.preventDefault()}
    >
      {useFallback ? (
        <StaticAtmosphere />
      ) : (
        <div className="h-full w-full">
          <Scene onContextLost={() => setContextLost(true)} />
        </div>
      )}
    </div>
  );
}
