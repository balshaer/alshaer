import Content from "@/core/components/layouts/content/Content";
import Footer from "@/core/components/layouts/footer/Footer";
import Navbar from "@/core/components/layouts/navbar/Navbar";

export default function Home() {
  return (
    <div className="h-full w-full">
      <Navbar />
      <div className="container h-max min-h-[100vh] max-w-3xl flex flex-col gap-[1.5rem]">
        <Content />
      </div>

      <Footer />
    </div>
  );
}
