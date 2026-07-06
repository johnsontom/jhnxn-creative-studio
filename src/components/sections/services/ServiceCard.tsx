type Props = {
  number: string;
  title: string;
  description: string;
};

export default function ServiceCard({
  number,
  title,
  description,
}: Props) {
  return (
    <div
      className="
      group
      flex
      items-center
      justify-between
      border-b
      border-white/10
      py-10
      transition-all
      duration-500
      hover:border-violet-500/50
      "
    >
      <div className="flex gap-8">

        <span
          className="
          text-sm
          font-medium
          text-violet-400
          "
        >
          {number}
        </span>

        <div>

          <h3
            className="
            text-3xl
            font-bold
            text-white
            transition
            group-hover:text-violet-300
            "
          >
            {title}
          </h3>

          <p className="mt-4 max-w-xl text-zinc-400 leading-8">
            {description}
          </p>

        </div>

      </div>

      <div
        className="
        text-3xl
        text-zinc-500
        transition-all
        duration-300
        group-hover:translate-x-4
group-hover:scale-110
        group-hover:text-violet-400
        "
      >
        →
      </div>
    </div>
  );
}