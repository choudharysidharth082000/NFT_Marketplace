import React from "react";

//importing the components
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";

const Home = () => {
  return (
    <div className="contanorMain bg-slate-50 overflow-y-hidden">
      {/* <div className="containorLine w-full h-1 bg-blue-400"></div> */}
      <Navbar />
      {/* <div className="w-full h-11 bg-slate-50"></div> */}
      <div className=" overflow-y-hidden">
        <HeroSection />
      </div>
    </div>
  );
};

export default Home;
