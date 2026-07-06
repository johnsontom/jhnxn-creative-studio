"use client";

import { useEffect, useState } from "react";

const sections = [
  "home",
  "services",
  "portfolio",
  "about",
  "contact",
];

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element =
          section === "home"
            ? document.body
            : document.getElementById(section);

        if (!element) continue;

        const top =
          section === "home"
            ? 0
            : element.offsetTop;

        const height =
          section === "home"
            ? window.innerHeight
            : element.offsetHeight;

        if (
          scrollPosition >= top &&
          scrollPosition < top + height
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return activeSection;
}