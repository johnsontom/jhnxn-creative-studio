import { LucideIcon } from "lucide-react";

type ContactCardProps = {
  icon: LucideIcon;
  title: string;
  value: string;
  href: string;
};

export default function ContactCard({
  icon: Icon,
  title,
  value,
  href,
}: ContactCardProps) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="
        group
        flex
        items-center
        gap-5
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-6
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-violet-500/40
        hover:bg-white/[0.05]
        hover:shadow-[0_20px_50px_rgba(168,85,247,.18)]
      "
    >
      <div
        className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-violet-500/10
          text-violet-400
          transition-all
          duration-500
          group-hover:bg-violet-500
          group-hover:text-white
        "
      >
        <Icon size={24} />
      </div>

      <div>
        <p className="text-sm text-zinc-500">{title}</p>

        <h3 className="mt-1 text-white font-semibold">
          {value}
        </h3>
      </div>
    </a>
  );
}