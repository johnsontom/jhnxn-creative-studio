import FadeIn from "@/components/ui/FadeIn";
import ProcessStep from "./ProcessStep";

export default function Process() {
  return (
    <section
      id="process"
      className="bg-[#09090B] py-40 "
    >
      <div className="mx-auto max-w-[1400px] px-20">

        <FadeIn>

          <span className="text-sm uppercase tracking-[0.4em] text-violet-400">
            Our Process
          </span>

          <h2 className="mt-6 max-w-3xl text-5xl font-bold text-white">
            From idea to launch,
            every step is carefully crafted.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            Every project follows a clear process
            focused on quality, collaboration
            and results.
          </p>

        </FadeIn>

        <div className="mt-24 grid gap-16 lg:grid-cols-4">

          <FadeIn delay={0.1}>
            <ProcessStep
              number="01"
              title="Discovery"
              description="Understanding your goals, audience and vision."
            />
          </FadeIn>

          <FadeIn delay={0.2}>
            <ProcessStep
              number="02"
              title="Design"
              description="Creating modern interfaces with a focus on usability."
            />
          </FadeIn>

          <FadeIn delay={0.3}>
            <ProcessStep
              number="03"
              title="Development"
              description="Building fast, scalable websites using modern technologies."
            />
          </FadeIn>

          <FadeIn delay={0.4}>
            <ProcessStep
              number="04"
              title="Launch"
              description="Testing, deployment and ongoing support after delivery."
            />
          </FadeIn>

        </div>

      </div>
    </section>
  );
}