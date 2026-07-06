"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

import useActiveSection from "@/hooks/useActiveSection";
import useScrolled from "@/hooks/useScrolled";
import MobileMenu from "./MobileMenu";

const links = [
  { name: "Home", href: "#", id: "home" },
  { name: "Services", href: "#services", id: "services" },
  { name: "Work", href: "#portfolio", id: "portfolio" },
  { name: "About", href: "#about", id: "about" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const activeSection = useActiveSection();
  const scrolled = useScrolled();

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 lg:top-8 lg:px-6">

        <div className="relative w-full max-w-[1400px]">

          {/* Glow */}
          <div className="absolute -inset-4 -z-10 rounded-full bg-gradient-to-r from-violet-500/40 via-fuchsia-500/30 to-violet-500/40 blur-[90px]" />

          <nav
            className={`
              navbar-float
              relative
              flex
              ${scrolled ? "h-16" : "h-20"}
              items-center
              justify-between
              rounded-full
              border
              px-4
              lg:px-8
              backdrop-blur-[30px]
              transition-all
              duration-500
              ${
                scrolled
                  ? "border-violet-500/20 bg-[#0B0912]/90 shadow-[0_20px_70px_rgba(124,58,237,.22)]"
                  : "border-white/15 bg-[#1A132B]/65 shadow-[0_10px_60px_rgba(124,58,237,.12)]"
              }
            `}
          >
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-3"
            >
              <Image
                src="/images/logo-icon.png"
                alt="JHNXN"
                width={56}
                height={56}
                priority
                className="h-14 w-14 object-contain transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 lg:h-20 lg:w-20"
              />

              <div className="leading-none">

                <h2 className="text-base font-bold tracking-wide text-white lg:text-lg">
                  JHNXN
                </h2>

                <p className="mt-1 text-[9px] uppercase tracking-[0.35em] text-zinc-400 lg:text-[10px]">
                  Creative Studio
                </p>

              </div>

            </Link>

            {/* Desktop Nav */}

            <ul className="hidden items-center gap-6 lg:flex">
              {links.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className={`
                      rounded-full
                      px-5
                      py-2
                      text-sm
                      font-medium
                      transition-all
                      duration-300
                      ${
                        activeSection === link.id
                          ? "bg-violet-500/10 text-violet-300 shadow-[0_0_20px_rgba(168,85,247,.25)]"
                          : "text-zinc-300 hover:bg-white/5 hover:text-violet-300"
                      }
                    `}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA */}

            <Link
              href="#contact"
              className="
                hidden
                lg:flex
                items-center
                rounded-full
                bg-gradient-to-r
                from-violet-600
                via-purple-600
                to-fuchsia-500
                px-7
                py-3
                text-sm
                font-semibold
                text-white
                shadow-[0_0_20px_rgba(168,85,247,.25)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:scale-105
                hover:shadow-[0_0_40px_rgba(168,85,247,.55)]
              "
            >
              Start Project →
            </Link>

            {/* Mobile Button */}

            <button
              onClick={() => setMenuOpen(true)}
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/5
                text-white
                backdrop-blur-xl
                transition-all
                duration-300
                hover:bg-white/10
                lg:hidden
              "
            >
              <Menu size={22} />
            </button>

          </nav>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}