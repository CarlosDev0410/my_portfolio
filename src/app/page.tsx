import { Hero, About, Skills, Projects, Contact } from "@/components/sections";
import { Footer } from "@/components/layout";
import { ScrollAnimation } from "@/components/magicui/scroll-animation";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ScrollAnimation>
        <About />
      </ScrollAnimation>
      <ScrollAnimation>
        <Skills />
      </ScrollAnimation>
      <ScrollAnimation>
        <Projects />
      </ScrollAnimation>
      <ScrollAnimation>
        <Contact />
      </ScrollAnimation>
      <Footer />
    </main>
  );
}
