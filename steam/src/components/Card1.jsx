import React from "react";

function Card1({ genre, name, discount, price, url }) {
  return (
    <div className="col-span-1">
      <div className="flex flex-col">
        <a href="">
          <div className="h-48 md:h-52 xl:h-80 w-full hover:opacity-75 transition-opacity">
            <img
              className="object-cover rounded-lg h-full w-full"
              //   src="https://assets-prd.ignimgs.com/2021/08/24/forza-horizon-5-button-fin-1629830068379.jpg"
              src={url}
              alt=""
            />
          </div>
          <div className="mt-2">
            <h1 className="font-light text-sm text-[#9C9C9C]">
              {/* Action, Adventures */}
              {genre}
            </h1>
            <h1 className="font-bold text-lg text-[#F6F6F6]">
              {/* Assassin Creed Valhalla */}
              {name}
            </h1>
            <p className="text-[#03A9F4]">
              {/* $5.99 */} {price}
              <span className="text-white mr-1">.</span>
              <span className="text-white">
                {/* 84% */}
                {discount}
              </span>
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Card1;
