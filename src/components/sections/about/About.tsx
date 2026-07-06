"use client";

import Image from "next/image";
import {
  Rocket,
  Sparkles,
  Code2,
  MapPin,
} from "lucide-react";

import FadeIn from "@/components/ui/FadeIn";
import StatCard from "./StatCard";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#09090B] py-24 lg:py-40"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-20 px-6 lg:grid-cols-2 lg:px-20">

        {/* LEFT */}

        <FadeIn>

          <span className="text-sm uppercase tracking-[0.4em] text-violet-400">
            About Me
          </span>

          <h2
            className="
              mt-6
              max-w-xl
              text-4xl
              font-bold
              leading-tight
              text-white
              sm:text-5xl
            "
          >
            Building premium digital experiences through creativity and
            technology.
          </h2>

          <p className="mt-8 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
           I'm Tomiwa Johnson, the founder of JHNXN Creative Studio, a creative developer and designer passionate about building premium digital experiences. I specialize in designing and developing modern websites, digital products, and interactive experiences that not only look beautiful but also deliver exceptional performance, accessibility, and user experience. Every project is carefully crafted to help businesses build credibility, attract customers, and stand out in an increasingly competitive digital landscape.
          </p>

          <p className="mt-6 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
           My approach combines thoughtful design, clean code, and strategic thinking to create solutions that are both visually compelling and technically robust. From the first concept to the final launch, every detail is refined to ensure speed, responsiveness, scalability, and an experience that users genuinely enjoy interacting with.
          </p>

          {/* Stats */}

          <div className="mt-12 grid gap-5 sm:mt-16">

            <StatCard
              value={
                <>
                  20<span className="text-violet-400">+</span>
                </>
              }
              label="Projects Delivered"
              icon={Rocket}
            />

            <StatCard
              value={
                <>
                  5<span className="text-violet-400">+</span>
                </>
              }
              label="Years Experience"
              icon={Sparkles}
            />

            <StatCard
              value={
                <>
                  100<span className="text-violet-400">%</span>
                </>
              }
              label="Custom Built"
              icon={Code2}
            />

            <StatCard
              value="UK"
              label="London Based"
              icon={MapPin}
            />

          </div>

        </FadeIn>

        {/* RIGHT */}

        <FadeIn delay={0.2}>

          <div
            className="
              relative
              flex
              h-[420px]
              items-end
              justify-center
              overflow-visible

              sm:h-[520px]

              lg:h-[760px]
            "
          >

            {/* Large Glow */}

            <div
              className="
                absolute
                h-[300px]
                w-[300px]
                rounded-full
                bg-violet-600/20
                blur-[100px]

                sm:h-[450px]
                sm:w-[450px]

                lg:h-[700px]
                lg:w-[700px]
                lg:blur-[180px]
              "
            />

            {/* Medium Glow */}

            <div
              className="
                absolute
                h-[220px]
                w-[220px]
                rounded-full
                bg-fuchsia-500/20
                blur-[70px]

                sm:h-[320px]
                sm:w-[320px]

                lg:h-[450px]
                lg:w-[450px]
                lg:blur-[140px]
              "
            />

            {/* Small Glow */}

            <div
              className="
                absolute
                h-[140px]
                w-[140px]
                rounded-full
                bg-purple-400/20
                blur-[50px]

                sm:h-[180px]
                sm:w-[180px]

                lg:h-[250px]
                lg:w-[250px]
                lg:blur-[100px]
              "
            />

            {/* Portrait */}

            <Image
              src="/images/johnson.png"
              alt="Johnson"
              width={700}
              height={900}
              priority
              className="
                relative
                z-10
                h-auto
                w-[260px]
                object-contain
                drop-shadow-[0_35px_80px_rgba(0,0,0,.55)]

                sm:w-[340px]

                lg:w-[620px]
                lg:translate-x-8
              "
            />

          </div>

        </FadeIn>

      </div>
    </section>
  );
}