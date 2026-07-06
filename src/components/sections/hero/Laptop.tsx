"use client";

import Image from "next/image";

export default function Laptop() {
  return (
    <div className="relative">
      {/* Screen */}
      <div className="relative h-[430px] w-[730px] overflow-hidden rounded-[22px] border border-zinc-600 bg-black shadow-[0_35px_90px_rgba(0,0,0,.45)]">

        {/* Camera */}
        <div className="absolute left-1/2 top-2 z-20 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-700" />

        {/* Screen */}
     <Image
  src="/images/tnt-home.webp"
  alt="T&T Productions"
  fill
  priority
  sizes="(max-width: 768px) 100vw, 730px"
  className="object-contain bg-[#111]"
/>

        {/* Reflection */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />

      </div>

      {/* Hinge */}
      <div className="mx-auto h-[5px] w-[160px] rounded-full bg-zinc-700" />

      {/* Base */}
      <div className="mx-auto h-[12px] w-[740px] rounded-b-full bg-gradient-to-b from-zinc-300 via-zinc-500 to-zinc-800" />

      {/* Shadow */}
      <div className="mx-auto mt-3 h-4 w-[520px] rounded-full bg-black/40 blur-md" />
    </div>
  );
}