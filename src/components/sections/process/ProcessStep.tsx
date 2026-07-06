type ProcessStepProps = {
  number: string;
  title: string;
  description: string;
};

export default function ProcessStep({
  number,
  title,
  description,
}: ProcessStepProps) {
  return (
    <div className="relative group">

      {/* Number */}

      <span className="text-7xl font-black text-white/5 transition duration-500 group-hover:text-violet-500/20">
        {number}
      </span>

      <h3 className="mt-4 text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-4 leading-8 text-zinc-400">
        {description}
      </p>

    </div>
  );
}