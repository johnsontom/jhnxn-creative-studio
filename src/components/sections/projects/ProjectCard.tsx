import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-[32px]

        border
        border-violet-500/15

        bg-white/[0.04]

        backdrop-blur-3xl

        transition-all
        duration-500

        hover:-translate-y-2
        hover:border-violet-400/50
        hover:shadow-[0_35px_90px_rgba(168,85,247,.22)]

        before:absolute
        before:inset-0
        before:rounded-[32px]
        before:bg-gradient-to-br
        before:from-white/5
        before:to-transparent
        before:pointer-events-none
      "
    >
      {/* Image */}

      <div
        className="
          relative
          h-[260px]
          overflow-hidden
          bg-gradient-to-br
          from-[#111]
          to-[#181818]
          sm:h-[340px]
          md:h-[420px]
          lg:h-[480px]
        "
      >
        <Image
          src={image}
          alt={title}
          fill
          className="
            object-contain
            md:object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />
      </div>

      {/* Content */}

      <div className="relative z-10 p-6 sm:p-8 lg:p-10">

        <h3 className="text-2xl font-bold text-white sm:text-3xl">
          {title}
        </h3>

        <p className="mt-4 text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
          {description}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-violet-500/20
                bg-violet-500/10
                px-4
                py-2
                text-sm
                text-violet-300
              "
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-full
                bg-gradient-to-r
                from-violet-600
                to-fuchsia-500
                px-7
                py-3
                text-center
                font-semibold
                text-white
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-[0_0_25px_rgba(168,85,247,.45)]
              "
            >
              View Live
            </a>
          )}

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-full
                border
                border-white/10
                bg-white/5
                px-7
                py-3
                text-center
                font-semibold
                text-white
                backdrop-blur-xl
                transition-all
                duration-300
                hover:bg-white/10
              "
            >
              GitHub
            </a>
          )}

        </div>

      </div>
    </div>
  );
}