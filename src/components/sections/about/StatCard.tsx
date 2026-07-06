import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

type StatCardProps = {
  value: ReactNode;
  label: string;
  icon: LucideIcon;
};

export default function StatCard({
  value,
  label,
  icon: Icon,
}: StatCardProps) {
  return (
    <div
      className="
        group
        flex
        items-center
        gap-6
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        px-8
        py-7
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-violet-500/40
        hover:bg-white/[0.05]
        hover:shadow-[0_20px_60px_rgba(168,85,247,.18)]
      "
    >
      {/* Icon */}

      <div
        className="
          flex
          h-16
          w-16
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-violet-500/10
          text-violet-400
          transition-all
          duration-500
          group-hover:scale-110
          group-hover:bg-violet-500
          group-hover:text-white
          group-hover:shadow-[0_0_30px_rgba(168,85,247,.45)]
        "
      >
        <Icon size={28} />
      </div>

      {/* Text */}

      <div className="flex flex-col">

        <h3 className="text-4xl font-bold leading-none text-white">
          {value}
        </h3>

        <p className="mt-2 text-base text-zinc-400">
          {label}
        </p>

      </div>
    </div>
  );
}