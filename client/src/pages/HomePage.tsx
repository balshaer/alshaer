import WorkCard from "@/components/layouts/experiences/WorkCard";
import Footer from "@/components/layouts/footer/Footer";
import Header from "@/components/layouts/header/Header";
import Navbar from "@/components/layouts/navbar/Navbar";
import ProjectsCard from "@/components/layouts/projects/ProjectsCard";

export default function HomePage() {
  return (
    <>
      <div className="page">
        <Navbar />
        <Header />
        <WorkCard />
        <ProjectsCard />
      </div>
      <Footer />
    </>
  );
}
