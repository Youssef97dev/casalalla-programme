"use client";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Events from "./Events";
import Gallery from "./Gallery";
import Footer from "./Footer";

const Loader = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setIsClient(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isClient ? (
        <div className="bg-casa_1 w-full h-full flex flex-col justify-start items-center">
          <Navbar />
          <Hero />
          <Events />
          <Gallery />
          <Footer />
        </div>
      ) : (
        <div className="fixed inset-0 z-40 flex items-center justify-center">
          {/* Initial white background animation */}
          <div className="absolute inset-0 flex z-50">
            <div className="bg-casa_2  flex-1 animate-slide-left"></div>
            <div className="bg-casa_2  flex-1 animate-slide-right"></div>
          </div>

          {/* Beige background with logo animation */}
          <div className="absolute inset-0 bg-casa_1 flex items-center justify-center">
            <img
              src="/logo-1.png" // Replace with your logo path
              alt="Logo"
              className="w-32 h-32 animate-scale-3d"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Loader;
