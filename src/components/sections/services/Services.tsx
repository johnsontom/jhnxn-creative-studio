import ServiceCard from "./ServiceCard";
import FadeIn from "@/components/ui/FadeIn";

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#09090B] py-40"
    >
      <div className="mx-auto max-w-[1400px] px-20">
        <FadeIn>
        <span className="text-sm uppercase tracking-[0.4em] text-violet-400">
          What We Do
        </span>

        <h2 className="mt-6 max-w-3xl text-5xl font-bold text-white">
          Premium digital experiences
          built for ambitious brands.
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
          Every project combines beautiful design,
          modern technology and thoughtful strategy
          to create experiences that people remember.
        </p>
        </FadeIn>
        <div className="mt-24">
        <FadeIn delay={0.1}>
          <ServiceCard
            number="01"
            title="Web Design"
            description="Beautiful user interfaces designed to build trust, improve conversions and elevate your brand."
          />
        </FadeIn>
        <FadeIn delay={0.2}>
          <ServiceCard
            number="02"
            title="Web Development"
            description="Fast, responsive websites built with Next.js, React and modern technologies."
          />
        </FadeIn>
        <FadeIn delay={0.3}>
          <ServiceCard
            number="03"
            title="Music Production"
            description="Professional recording, mixing and mastering that gives every song a polished commercial sound."
          />
        </FadeIn>
        <FadeIn delay={0.4}>
          <ServiceCard
            number="04"
            title="Creative Strategy"
            description="Helping businesses define their identity through branding, design and digital experiences."
          />
        </FadeIn>
        </div>

      </div>
    </section>
  );
}