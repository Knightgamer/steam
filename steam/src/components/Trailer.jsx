import React, { useState, useRef } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import AssassinVideo from "../assets/videos/Assassin.mp4";
import GTAGVideo from "../assets/videos/Grand Theft Auto V Trailer.mp4";
import Navbar from "./Navbar";

const Trailer = () => {
  const videos = [
    {
      url: AssassinVideo,
      endTime: 240, // Time in seconds to change the slide
    },
    {
      url: GTAGVideo,
      endTime: 84,
    },

    // Add more videos with their respective end times
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + videos.length) % videos.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % videos.length;
    setCurrentIndex(newIndex);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video.currentTime >= videos[currentIndex].endTime) {
      nextSlide();
    }
  };

  return (
     <div className="h-[40vh] md:h-[60vh] lg:h-[80vh] relative group">
    <video
      ref={videoRef}
      src={videos[currentIndex].url}
      className="w-full h-full rounded-2xl object-cover"
      autoPlay
      loop
      muted
    ></video>
    {/* Left Arrow */}
    <div className="hidden group-hover:block absolute top-1/2 left-5 transform -translate-y-1/2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer" style={{ zIndex: 10 }}>
      <BsChevronCompactLeft onClick={prevSlide} size={30} />
    </div>
    {/* Right Arrow */}
    <div className="hidden group-hover:block absolute top-1/2 right-5 transform -translate-y-1/2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer" style={{ zIndex: 10 }}>
      <BsChevronCompactRight onClick={nextSlide} size={30} />
    </div>
    <div className="absolute w-full top-0 h-full flex items-end justify-start mb-1" style={{ zIndex: 5 }}>
      <div className="lg:mb-10 md:mb-4 mb-1 md:ml-20 lg:ml-36 ml-10">
        <h1 className="text-white lg:text-4xl text-[10px] md:text-2xl font-semi-bold">
          Assassin's Creed Valhalla
        </h1>
        <p className="text-[#00aeff] lg:text-2xl text-[10px] md:text-xs font-medium">
          $5.99
        </p>
      </div>
    </div>
    <div className="flex justify-center py-2">
      {videos.map((video, index) => (
        <div
          key={index}
          className={`h-1 w-10 mx-1 rounded-full ${
            index === currentIndex ? "bg-white" : "bg-gray-300/50"
          }`}
        ></div>
      ))}
    </div>
    <Navbar />
  </div>
);
};

export default Trailer;
