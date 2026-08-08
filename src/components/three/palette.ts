import { Color } from "three";

/**
 * Brand palette for the 3D world, derived from the design tokens in
 * src/app/globals.css so a token change has a single mirror here.
 */
export const palette = {
  void: new Color("#09090b"), // --background
  violet: new Color("#7c3aed"), // --primary
  secondary: new Color("#a855f7"), // --secondary
  accent: new Color("#c084fc"), // --accent
  fuchsia: new Color("#e879f9"), // hero fuchsia glow
  cyan: new Color("#22d3ee"), // hero cyan glow
};

/**
 * One object/fog color per narrative beat. `colorIndex` in the choreography
 * indexes into this array (fractional values lerp between neighbours).
 */
export const sectionColors: Color[] = [
  palette.violet, // hero
  palette.secondary, // services
  palette.fuchsia, // portfolio
  palette.accent, // about
  palette.secondary, // process
  palette.accent, // contact
];

/** Sample the section color ramp at a fractional index, lerping between stops. */
export function sampleColor(index: number, target: Color): Color {
  const max = sectionColors.length - 1;
  const clamped = Math.max(0, Math.min(max, index));
  const lo = Math.floor(clamped);
  const hi = Math.min(max, lo + 1);
  const t = clamped - lo;
  return target.copy(sectionColors[lo]).lerp(sectionColors[hi], t);
}
