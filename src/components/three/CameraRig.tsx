"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { MathUtils, Vector3 } from "three";
import { useRef } from "react";
import type { RefObject } from "react";
import { sampleChoreography, createChoreoState } from "./choreography";

type Props = {
  scroll: RefObject<number>;
  stops: RefObject<number[]>;
};

const damp = MathUtils.damp;

/**
 * Dollies/cranes the camera per section and adds a soft damped pointer parallax.
 * Reads scroll from the shared ref; never re-renders React.
 */
export default function CameraRig({ scroll, stops }: Props) {
  const camera = useThree((s) => s.camera);
  const pointer = useThree((s) => s.pointer);
  const choreo = useRef(createChoreoState());
  const lookAt = useRef(new Vector3(0, 0, 0));

  useFrame((_, dt) => {
    const clampedDt = Math.min(dt, 0.1);
    const s = sampleChoreography(scroll.current ?? 0, choreo.current, stops.current);

    const targetX = pointer.x * 0.6;
    const targetY = s.camY + pointer.y * 0.3;

    camera.position.x = damp(camera.position.x, targetX, 2.5, clampedDt);
    camera.position.y = damp(camera.position.y, targetY, 2.5, clampedDt);
    camera.position.z = damp(camera.position.z, s.camZ, 3, clampedDt);

    lookAt.current.x = damp(lookAt.current.x, s.objPosX * 0.25, 2, clampedDt);
    camera.lookAt(lookAt.current);
  });

  return null;
}
