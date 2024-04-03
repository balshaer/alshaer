import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Content from "@/components/content/Content";

export default function Home() {
  return (
    <div className="h-full w-full">
      <Navbar />
      <div className="container h-max min-h-[100vh] max-w-3xl flex flex-col gap-[1.5rem]">
        <Content />
        <Footer />
      </div>
    </div>
  );
}
