import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaSpotify,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#09090B]">
      {/* Purple Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[180px]" />

      <div className="relative mx-auto max-w-[1400px] px-8 py-24 xl:px-20">
        <div className="grid gap-16 lg:grid-cols-[2fr_1fr_1fr]">

          {/* Brand */}
          <div>
            <h2 className="text-4xl font-bold text-white">
              JHNXN
            </h2>

            <p className="mt-6 max-w-md text-lg leading-8 text-zinc-400">
              Creating premium digital experiences through creativity and
              technology.
            </p>

            <Link
              href="#"
              className="mt-10 inline-flex items-center gap-2 text-violet-400 transition hover:text-violet-300"
            >
              Back to top
              <ArrowUpRight size={18} />
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Navigation
            </h3>

            <ul className="mt-8 space-y-4 text-zinc-400">

              <li>
                <Link href="#" className="transition hover:text-violet-400">
                  Home
                </Link>
              </li>

              <li>
                <Link href="#services" className="transition hover:text-violet-400">
                  Services
                </Link>
              </li>

              <li>
                <Link href="#portfolio" className="transition hover:text-violet-400">
                  Work
                </Link>
              </li>

              <li>
                <Link href="#about" className="transition hover:text-violet-400">
                  About
                </Link>
              </li>

              <li>
                <Link href="#contact" className="transition hover:text-violet-400">
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* Socials */}
          <div>

            <h3 className="text-lg font-semibold text-white">
              Connect
            </h3>

            <div className="mt-8 flex gap-4">

              <Link
                href="https://github.com/johnsontom"
                target="_blank"
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 transition-all duration-300 hover:border-violet-500 hover:bg-violet-500 hover:text-white hover:shadow-[0_0_25px_rgba(168,85,247,.45)]"
              >
                <FaGithub size={20} />
              </Link>

              <Link
                href="https://www.linkedin.com/in/johnson-tomiwa-3250b1102/"
                target="_blank"
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 transition-all duration-300 hover:border-violet-500 hover:bg-violet-500 hover:text-white hover:shadow-[0_0_25px_rgba(168,85,247,.45)]"
              >
                <FaLinkedin size={20} />
              </Link>

              <Link
                href="https://instagram.com/iamjhnxn"
                target="_blank"
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 transition-all duration-300 hover:border-violet-500 hover:bg-violet-500 hover:text-white hover:shadow-[0_0_25px_rgba(168,85,247,.45)]"
              >
                <FaInstagram size={20} />
              </Link>

              <Link
                href="https://spotify.com"
                target="_blank"
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 transition-all duration-300 hover:border-violet-500 hover:bg-violet-500 hover:text-white hover:shadow-[0_0_25px_rgba(168,85,247,.45)]"
              >
                <FaSpotify size={20} />
              </Link>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-20 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 text-sm text-zinc-500 lg:flex-row">

          <p>
            © 2026 JHNXN Creative Studio. All rights reserved.
          </p>

          <p>
            Designed & Developed by JHNXN.
          </p>

        </div>

      </div>
    </footer>
  );
}