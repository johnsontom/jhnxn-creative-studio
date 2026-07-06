"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

const links = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#portfolio" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  return (
    <AnimatePresence>

      {open && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-md lg:hidden"
        >

          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="
              absolute
              left-4
              right-4
              top-4
              rounded-[32px]
              border
              border-white/10
              bg-[#12121A]/90
              p-6
              backdrop-blur-3xl
            "
          >

            <div className="mb-8 flex items-center justify-between">

              <h2 className="text-xl font-bold text-white">
                Menu
              </h2>

              <button
                onClick={onClose}
                className="rounded-full bg-white/5 p-3"
              >
                <X size={20} />
              </button>

            </div>

            <div className="flex flex-col gap-2">

              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={onClose}
                  className="
                    rounded-2xl
                    px-5
                    py-4
                    text-lg
                    text-zinc-300
                    transition
                    hover:bg-violet-500/10
                    hover:text-violet-300
                  "
                >
                  {link.name}
                </Link>
              ))}

            </div>

            <Link
              href="#contact"
              onClick={onClose}
              className="
                mt-8
                flex
                h-14
                items-center
                justify-center
                rounded-full
                bg-gradient-to-r
                from-violet-600
                via-purple-600
                to-fuchsia-500
                font-semibold
                text-white
              "
            >
              Start Project →
            </Link>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}