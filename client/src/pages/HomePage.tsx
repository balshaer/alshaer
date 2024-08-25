import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

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
