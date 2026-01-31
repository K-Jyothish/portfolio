import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Blog from "@/components/Blog";
import DinoGame from "@/components/DinoGame";
import FreelanceCTA from "@/components/FreelanceCTA";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-[#121212]">
        <div className="relative z-10 bg-[#121212]">
          <ScrollyCanvas />
        </div>
        <div className="relative z-20 bg-[#121212] -mt-[1px]">
          <About />
          <Projects />
          <Achievements />
          <Blog />
          <DinoGame />
          <FreelanceCTA />
          <Footer />
        </div>
      </main>
    </PageTransition>
  );
}
