import React from "react";

function GameSection1({ genre, name, discount, price, url }) {
  return (
    <div className="h-[350px] lg:h-[475px]">
      <div className="flex flex-col w-[150px] md:w-[150px] lg:w-[200px] ">
        <a href="">
          <div className="h-48 md:h-52 xl:h-80 w-full hover:opacity-75 transition-opacity relative">
            <div className="absolute inset-0">
              <img
                className="object-fill rounded-lg h-full w-full"
                src={url}
                alt=""
              />
            </div>
          </div>
          <div className="mt-2">
            <h1 className="font-light text-sm text-[#9C9C9C]">{genre}</h1>
            <h1 className="font-bold text-lg text-[#F6F6F6]">{name}</h1>
            <p className="text-[#03A9F4]">
              {price}
              <span className="text-white mr-1">.</span>
              <span className="text-white">{discount}</span>
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default GameSection1;
