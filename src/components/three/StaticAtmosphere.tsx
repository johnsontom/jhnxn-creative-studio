/**
 * Zero-WebGL fallback for reduced-motion / no-WebGL / lost-context cases.
 * Reuses the hero's violet atmosphere so the site still feels premium and
 * on-brand without any animation or GPU work.
 */
export default function StaticAtmosphere() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-700/20 via-transparent to-fuchsia-600/15" />
      <div className="absolute left-1/2 top-1/3 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[180px]" />
      <div className="absolute bottom-10 right-10 h-[300px] w-[300px] rounded-full bg-fuchsia-500/10 blur-[120px]" />
    </div>
  );
}
