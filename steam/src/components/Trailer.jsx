import React from "react";
import Assassin from "../assets/videos/Assassin.mp4";
// import GTAV from "../assets/videos/Grand Theft Auto V Trailer.mp4";
import Navbar from "./Navbar";

const Trailer = () => {
  return (
    <div className="main relative">
      <div className="video-container h-[45vh]">
        <video
          className="brightness-75 w-full h-full object-cover"
          src={Assassin}
          autoPlay
          autoFocus
          loop
          muted
          type="video/mp4"
        />
      </div>
      <div className="absolute w-full top-0 h-full flex items-end justify-start mb-1">
        <div className="lg:mb-10 md:mb-4 mb-1 md:ml-20 lg:ml-36 ml-10">
          <h1 className="text-white lg:text-4xl text-[10px] md:text-2xl font-semi-bold">
            Assassin's Creed Valhalla
          </h1>
          <p className="text-[#00aeff] lg:text-2xl text-[10px] md:text-xs font-medium">
            $5.99
          </p>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Trailer;
