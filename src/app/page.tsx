import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/hero/Hero";
import Services from "@/components/sections/services/Services";
import FeaturedProjects from "@/components/sections/projects/FeaturedProjects";
import About from "@/components/sections/about/About";
import Process from "@/components/sections/process/Process";
import Contact from "@/components/sections/contact/Contact";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import SceneClient from "@/components/three/SceneClient";

export default function Home() {
  return (
    <>
      <SceneClient />
      <ScrollProgress />
      <Navbar />
      <div className="relative z-10">
        <Hero />
        <Services />
        <FeaturedProjects />
        <About />
        <Process />
        <Contact />
        <Footer />
      </div>
    </>
  );
}