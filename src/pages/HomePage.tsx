import WorkCard from "@/components/layouts/experiences/WorkCard";
import Footer from "@/components/layouts/footer/Footer";
import Header from "@/components/layouts/header/Header";
import Navbar from "@/components/layouts/navbar/Navbar";
import ProjectsCard from "@/components/layouts/projects/ProjectsCard";
import { PageTitlesData } from "@/data/PageTitlesData";
import { PageTitle } from "@/helper";

import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <>
      <PageTitle title={PageTitlesData.main} />
      <div className="page">
        <Navbar />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          transition={{ duration: 0.5 }}
        >
          <Header />
          <WorkCard />
          <ProjectsCard />
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
