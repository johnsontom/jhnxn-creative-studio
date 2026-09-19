import ProjectCard from "./ProjectCard";
import FadeIn from "@/components/ui/FadeIn";

export default function FeaturedProjects() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-gradient-to-b from-[#09090B] via-[#09090B]/70 to-[#09090B] py-40"
    >
      {/* Purple Atmosphere */}

      <div
        className="
          absolute
          inset-0
          -z-10
          bg-gradient-to-br
          from-violet-700/20
          via-transparent
          to-fuchsia-600/20
        "
      />

      {/* Content */}

      <div className="relative z-10 mx-auto max-w-[1400px] px-8 lg:px-20">

        <FadeIn>
          <span className="text-sm uppercase tracking-[0.4em] text-violet-400">
            Featured Work
          </span>

          <h2 className="mt-6 max-w-3xl text-5xl font-bold text-white">
            Selected projects that combine
            design, technology and creativity.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
           Each project represents a unique challenge solved through a combination of strategy, design, and development. From responsive business websites to fully customized digital platforms, every solution is built with performance, scalability, accessibility, and user experience at its core.
          </p>
        </FadeIn>

        <div className="mt-24 space-y-20">

          <FadeIn delay={0.15}>
            <ProjectCard
              title="T&T Productions"
              description="A premium photography and videography website designed to showcase creative work with elegance and performance."
              image="/images/tnt-home.webp"
              technologies={[
                "Next.js",
                "Supabase",
                "Tailwind CSS",
                "TypeScript",
              ]}
              liveUrl="https://tntproductions.vercel.app"
            />
          </FadeIn>

          <FadeIn delay={0.3}>
            <ProjectCard
              title="Olayinka Signature"
              description="A luxury ecommerce experience for a premium wig brand featuring product management, responsive layouts and a custom admin dashboard."
              image="/images/olayinka.png"
              technologies={[
                "Next.js",
                "Firebase",
                "Cloudinary",
                "Tailwind CSS",
              ]}
            />
          </FadeIn>

          <FadeIn delay={0.45}>
            <ProjectCard
              title="AJ Studio"
              description="An architecture and spatial design studio website built around an immersive, editorial layout that showcases projects, process and studio identity."
              image="/images/ajstudiong.png"
              technologies={[
                "Vite",
                "Three.js",
                "Supabase",
                "JavaScript",
              ]}
              liveUrl="https://ajstudiong.vercel.app"
            />
          </FadeIn>

        </div>

      </div>
    </section>
  );
}