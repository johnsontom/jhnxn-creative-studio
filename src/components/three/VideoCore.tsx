"use client";

import { useEffect } from "react";
import { useVideoTexture } from "@react-three/drei";

type Props = {
  /** Public path to the looping clip, e.g. "/videos/code.mp4". */
  src: string;
  /** Inner core radius; ~0.75× the 1.4 shell so it fills the low-Fresnel centre
   *  while staying inside the shell at the (now reduced) video-mode distortion. */
  radius?: number;
};

/**
 * The coding-video "core" that lives inside the crystal shell. The video is drawn
 * on an UNLIT material (meshBasicMaterial = color × map, no lighting/metalness/
 * envmap path), so it shows at full fidelity regardless of scene lighting and is
 * immune to the shell's metalness. Seen refracted through the transmissive shell,
 * it reads as "code suspended inside the gem".
 *
 * Must render inside the Canvas subtree (Scene is loaded ssr:false), because
 * useVideoTexture creates a <video> element and needs `document`.
 */
export default function VideoCore({ src, radius = 1.05 }: Props) {
  // start:false → we own the play() promise so we can swallow the AbortError that
  // fires when pause() interrupts a pending play() on unmount. drei's own play()
  // call is uncaught, so letting drei autostart would surface an unhandled reject.
  // Other drei defaults already satisfy autoplay policy: muted, loop, playsInline.
  const texture = useVideoTexture(src, { start: false });

  useEffect(() => {
    const video = texture.image as HTMLVideoElement | undefined;
    if (!video) return;

    const play = () => {
      if (!document.hidden) void video.play().catch(() => {});
    };
    play();

    const onVisibility = () => (document.hidden ? video.pause() : play());
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      video.pause();
      texture.dispose();
    };
  }, [texture]);

  // Single opaque unlit sphere: brightest possible read of the video, seen sharp
  // through the (now clear, low-reflection) glass shell. The shell adds a bright
  // additive envmap reflection on a real GPU; color > 1 here lifts the dark
  // code-editor source so the core out-shines that reflection instead of being
  // buried by it, and clears the bloom threshold so the code glows.
  // toneMapped:false keeps it from being tone-mapped back down.
  return (
    <mesh>
      <sphereGeometry args={[radius, 48, 48]} />
      <meshBasicMaterial map={texture} toneMapped={false} color={[2.2, 2.2, 2.2]} />
    </mesh>
  );
}
