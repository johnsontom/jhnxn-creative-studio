"use client";

export default function Phone() {
  return (
    <div className="relative">
      <div className="relative h-[360px] w-[180px] rounded-[46px] border border-zinc-200 bg-black p-[1px] shadow-[0_30px_60px_rgba(0,0,0,.45)]">

        {/* Screen */}
        <div className="relative h-full w-full overflow-hidden rounded-[40px]">

          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          >
            <source
              src="/videos/olayinka-mobile.mp4"
              type="video/mp4"
            />
          </video>

          {/* Dynamic Island */}
          <div className="absolute left-1/2 top-1.5 h-4 w-16 -translate-x-1/2 rounded-full bg-black" />

        </div>

      </div>
    </div>
  );
}