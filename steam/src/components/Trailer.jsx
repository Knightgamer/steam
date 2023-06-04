import React from "react";
import Assassin from "../assets/Assassin.mp4";
import Navbar from "./Navbar";

const Trailer = () => {
  return (
    <div className="main relative">
      <video
        className="mb:h-24  brightness-75"
        src={Assassin}
        autoPlay
        autoFocus
        loop
        muted
      />
      <div className="absolute w-full top-0 h-full flex items-end justify-start mb-1 ">
        <div className="lg:mb-10 md:mb-4 mb-1  md:ml-20 lg:ml-36 ml-10 ">
          <h1 className="text-white lg:text-4xl text-[10px] md:text-2xl">
            Assassin's Creed Valhalla
          </h1>
          <p className="text-[#00aeff] lg:text-2xl text-[10px] md:text-xs">
            $5.99
          </p>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Trailer;
