import { useState } from "react";
import HeroSection from "./components/HeroSection";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const HomePage = () => {


  return (
    <div className="bg-[#F8F4EF]">

      {/* The rest of your homepage content */}
      <Navbar />
      <Banner />
      <div className="flex my-8 flex-col items-center justify-center gap-16"></div>
      <HeroSection />
      <div className="flex my-32 flex-col items-center justify-center gap-16"></div>
      <Footer />
    </div>
  );
};

export default HomePage;

