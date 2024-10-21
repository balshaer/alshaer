import Experience from "@/components/layouts/experiences/WorkSection";
import Footer from "@/components/layouts/footer/Footer";
import Header from "@/components/layouts/header/Header";
import Navbar from "@/components/layouts/navbar/Navbar";
import Projects from "@/components/layouts/projects/Projects";

export default function HomePage() {
  return (
    <>
      <div className="page ">
        <Navbar />

        <Header />
        <Experience />
        <Projects />
      </div>
      <Footer />
    </>
  );
}
