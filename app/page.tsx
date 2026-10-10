import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Events from "@/components/Events";
import Contribution from "@/components/Contribution";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Events />
        <Contribution />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
