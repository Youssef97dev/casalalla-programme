import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div className="bg-casa_2 w-full h-full flex flex-col justify-start items-center">
      <Navbar />
      <div className="w-full h-screen mt-28 text-black">rest</div>
      <Footer />
    </div>
  );
};

export default page;
