import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Events from "@/components/Events";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-casa_1 w-full h-full flex flex-col justify-start items-center">
      <Navbar />
      <Hero />
      <Events />
      <Footer />
    </div>
  );
}
