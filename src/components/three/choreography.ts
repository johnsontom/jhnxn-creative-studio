/**
 * Scroll-driven choreography for the 3D world.
 *
 * A flat array of keyframe "stops" (one per narrative beat) each holding scalar
 * channels. `sampleChoreography(p)` finds the bracketing pair for a normalized
 * scroll progress `p` (0..1) and linearly interpolates every channel. Callers
 * then damp toward the sampled target inside useFrame, so scroll never triggers
 * a React re-render.
 */

export type ChoreoState = {
  camZ: number;
  camY: number;
  objScale: number;
  objPosX: number;
  objDistort: number;
  objSpeed: number;
  objRotSpeed: number;
  colorIndex: number;
  particleSpread: number;
  bloomIntensity: number;
};

type Keyframe = ChoreoState & { at: number };

// Ordered by `at`. Energy per section: hero/portfolio/contact are BOLD, the
// text-dense sections (services/about/process) recede for legibility.
const STOPS: Keyframe[] = [
  {
    at: 0.0, // hero — bold, object offset right where the old HeroVisual sat
    camZ: 6,
    camY: 0,
    objScale: 1.55,
    objPosX: 2.2,
    objDistort: 0.35,
    objSpeed: 1.4,
    objRotSpeed: 0.25,
    colorIndex: 0,
    particleSpread: 1,
    bloomIntensity: 0.7,
  },
  {
    at: 0.18, // services — calm, recedes and centers
    camZ: 7,
    camY: 0.2,
    objScale: 1.1,
    objPosX: 0,
    objDistort: 0.2,
    objSpeed: 1,
    objRotSpeed: 0.15,
    colorIndex: 1,
    particleSpread: 1.1,
    bloomIntensity: 0.45,
  },
  {
    at: 0.4, // portfolio — bold morph spike, push in
    camZ: 5,
    camY: -0.2,
    objScale: 1.7,
    objPosX: 0.6,
    objDistort: 0.55,
    objSpeed: 2.2,
    objRotSpeed: 0.4,
    colorIndex: 2,
    particleSpread: 1.4,
    bloomIntensity: 1,
  },
  {
    at: 0.6, // about — drifts left opposite the portrait, soft
    camZ: 6.5,
    camY: 0.15,
    objScale: 1.2,
    objPosX: -2.4,
    objDistort: 0.25,
    objSpeed: 1.1,
    objRotSpeed: 0.18,
    colorIndex: 3,
    particleSpread: 1.1,
    bloomIntensity: 0.5,
  },
  {
    at: 0.75, // process — steady medium energy
    camZ: 6,
    camY: 0,
    objScale: 1.35,
    objPosX: 0.4,
    objDistort: 0.32,
    objSpeed: 1.5,
    objRotSpeed: 0.28,
    colorIndex: 4,
    particleSpread: 1.2,
    bloomIntensity: 0.6,
  },
  {
    at: 0.9, // contact — bold finale, bloom peak
    camZ: 4.6,
    camY: 0,
    objScale: 1.9,
    objPosX: 0,
    objDistort: 0.45,
    objSpeed: 1.8,
    objRotSpeed: 0.35,
    colorIndex: 5,
    particleSpread: 1.6,
    bloomIntensity: 1.3,
  },
  {
    at: 1.0, // footer — settle and dim
    camZ: 6,
    camY: 0.1,
    objScale: 1.3,
    objPosX: 0,
    objDistort: 0.28,
    objSpeed: 1.1,
    objRotSpeed: 0.2,
    colorIndex: 5,
    particleSpread: 1.2,
    bloomIntensity: 0.5,
  },
];

const CHANNELS: (keyof ChoreoState)[] = [
  "camZ",
  "camY",
  "objScale",
  "objPosX",
  "objDistort",
  "objSpeed",
  "objRotSpeed",
  "colorIndex",
  "particleSpread",
  "bloomIntensity",
];

/**
 * DOM element ids each keyframe is anchored to, index-aligned with STOPS.
 * `null` = a synthetic endpoint (hero = top of page, footer = bottom), which
 * has no measurable center. Consumed by useSectionStops to remap `at` to the
 * real section positions so each 3D beat fires when its section is on screen.
 */
export const STOP_ANCHORS: (string | null)[] = [
  null, // hero → 0
  "services",
  "portfolio",
  "about",
  "process",
  "contact",
  null, // footer → 1
];

export const STOP_COUNT = STOPS.length;

/** Default normalized positions, used until the DOM is measured. */
export function defaultStops(): number[] {
  return STOPS.map((s) => s.at);
}

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/**
 * Sample the choreography at normalized progress `p`. `ats` optionally overrides
 * the keyframe positions (from measured section offsets); it must be sorted
 * ascending and the same length as STOPS.
 */
export function sampleChoreography(
  p: number,
  out: ChoreoState,
  ats?: number[],
): ChoreoState {
  const at = (i: number) => (ats && ats.length === STOPS.length ? ats[i] : STOPS[i].at);
  const progress = Math.max(0, Math.min(1, p));

  if (progress <= at(0)) return assign(out, STOPS[0]);
  const lastIdx = STOPS.length - 1;
  if (progress >= at(lastIdx)) return assign(out, STOPS[lastIdx]);

  let hi = 1;
  while (hi < STOPS.length && at(hi) < progress) hi++;
  const lo = hi - 1;
  const span = at(hi) - at(lo);
  const t = span > 0 ? (progress - at(lo)) / span : 0;

  for (const ch of CHANNELS) {
    out[ch] = lerp(STOPS[lo][ch], STOPS[hi][ch], t);
  }
  return out;
}

function assign(out: ChoreoState, kf: Keyframe): ChoreoState {
  for (const ch of CHANNELS) out[ch] = kf[ch];
  return out;
}

/** A fresh mutable state bag callers can reuse across frames. */
export function createChoreoState(): ChoreoState {
  return sampleChoreography(0, {} as ChoreoState);
}
