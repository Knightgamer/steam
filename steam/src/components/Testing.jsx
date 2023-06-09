import React, { useState, useRef } from "react";
import AssassinVideo from "../assets/videos/Assassin.mp4";
import GTAGVideo from "../assets/videos/Grand Theft Auto V Trailer.mp4";
import { GoMute, GoUnmute } from "react-icons/go";

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
  const [muted, setMuted] = useState(true);
  const videoRef = useRef(null);
  const viewersCount = 100; // Number of viewers (replace with dynamic value)

  const handleScroll = (e) => {
    const delta = Math.sign(e.deltaY);
    if (delta === 1) {
      // Scroll down
      nextSlide();
    } else if (delta === -1) {
      // Scroll up
      prevSlide();
    }
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + videos.length) % videos.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % videos.length;
    setCurrentIndex(newIndex);
  };

  const handleMute = () => {
    setMuted(true);
    videoRef.current.muted = true;
  };

  const handleUnmute = () => {
    setMuted(false);
    videoRef.current.muted = false;
  };

  return (
    <div
      className="w-full m-auto py-16 relative group flex"
      onWheel={handleScroll}
    >
      <div className="relative flex-1">
        <video
          ref={videoRef}
          src={videos[currentIndex].url}
          className="w-full h-[25vh] md:h-[40vh] lg:h-[80vh] rounded-2xl object-cover"
          autoPlay
          loop
          muted={muted}
        ></video>
        {/* Mute Button */}
        {muted ? (
          <div
            className="absolute top-0 left-3 transform translate-y-full flex items-center space-x-2 cursor-pointer"
            onClick={handleUnmute}
          >
            <GoMute size={25} className="text-white ml-3" />
          </div>
        ) : (
          <div
            className="absolute top-1 left-3 transform translate-y-full flex items-center space-x-2 cursor-pointer"
            onClick={handleMute}
          >
            <GoUnmute size={25} className="text-white ml-3" />
          </div>
        )}

        {/* Line Indicator */}

        {/* Live Count */}
        <div className="absolute top-1 right-3 transform translate-y-full flex items-center text-white rounded-md">
          <span className="bg-red-500 rounded-full px-2 py-1 text-sm font-bold mr-1">
            LIVE
          </span>
          <span className="text-sm block">{viewersCount} watching</span>
        </div>
      </div>
      <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-center py-2 pl-2">
        {videos.map((video, index) => (
          <div
            key={index}
            className={`h-1 my-1 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-300/50"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Testing;
