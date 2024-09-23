import Experience from "@/components/layouts/experiences/ExperienceSection";
import Footer from "@/components/layouts/footer/Footer";
import Header from "@/components/layouts/header/Header";
import Navbar from "@/components/layouts/navbar/Navbar";
import Projects from "@/components/layouts/projects/Projects";

export default function HomePage() {
  return (
    <div className="min-h-[100dvh] w-full">
      <Navbar />
      <div className="container">
        <Header />
        <Experience />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}
