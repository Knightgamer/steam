import React, { useState, useRef } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import AssassinVideo from "../assets/videos/Assassin.mp4";
import GTAGVideo from "../assets/videos/Grand Theft Auto V Trailer.mp4";

const Testing = () => {
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
    <div className="max-w-[1440px] h-[780px] w-full m-auto py-16 px-4 relative group">
      <video
        ref={videoRef}
        src={videos[currentIndex].url}
        className="w-full h-full rounded-2xl object-cover"
        autoPlay
        loop
        muted
        onTimeUpdate={handleTimeUpdate}
      ></video>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-1/2 left-5 transform -translate-y-1/2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-1/2 right-5 transform -translate-y-1/2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
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
    </div>
  );
};

export default Testing;
