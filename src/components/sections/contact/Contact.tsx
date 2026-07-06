"use client";

import {
  Mail,
  Phone,
  MapPin,
  Globe,
} from "lucide-react";

import FadeIn from "@/components/ui/FadeIn";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#09090B] py-40"
    >
      <div className="mx-auto grid max-w-[1400px] gap-20 px-8 lg:grid-cols-2 xl:px-20">

        {/* LEFT */}

        <FadeIn>

          <span className="text-sm uppercase tracking-[0.4em] text-violet-400">
            Contact
          </span>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-white">
            Let's build something amazing together.
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
            Whether you're starting a brand,
            launching a business or redesigning
            your website, I'd love to hear your idea.
          </p>

          <div className="mt-12 space-y-5">

            <ContactCard
              icon={Mail}
              title="Email"
              value="jhnxnlimited@gmail.com"
              href="mailto:jhnxnlimited@gmail.com"
            />

            <ContactCard
              icon={Phone}
              title="WhatsApp"
              value="+44 7344 393646"
              href="https://wa.me/447344393646"
            />

            <ContactCard
              icon={MapPin}
              title="Location"
              value="London, United Kingdom"
              href="#"
            />

            <ContactCard
              icon={Globe}
              title="GitHub"
              value="github.com/Jhnxn"
              href="https://github.com/johnsontom"
            />

          </div>

        </FadeIn>

        {/* RIGHT */}

        <FadeIn delay={0.2}>
          <ContactForm />
        </FadeIn>

      </div>
    </section>
  );
}