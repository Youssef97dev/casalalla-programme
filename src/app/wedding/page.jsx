import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "./components/Hero";
import BookWedding from "./components/BookWedding";
import MenuWedding from "./components/MenuWedding";
import Gallery from "./components/Gallery";

const page = () => {
  return (
    <div className="bg-casa_1 w-full h-full flex flex-col justify-start items-center">
      <Navbar />
      <Hero />
      <BookWedding />
      <MenuWedding />
      <Gallery />
      <Footer />
    </div>
  );
};

export default page;
