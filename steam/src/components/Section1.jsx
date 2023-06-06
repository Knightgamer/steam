import React from "react";
import { TiFlash } from "react-icons/ti";
import { FaTags, FaPercentage } from "react-icons/fa";
import { BsStars } from "react-icons/bs";

function Section1() {
  return (
    <div>
      {/* BROWSE SECTION */}
      <div
        id="browse"
        className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[14rem] md:h-[8rem] lg:h-[14rem] mt-10"
      >
        <button class="browse-option" type="button">
          <div class="browse-option-background"></div>
          <i
            class="fa-solid fa-tags"
            className="text-lg md:text-2xl lg:text-4xl"
          >
            <TiFlash />
          </i>
          <span class="label">New</span>
        </button>
        <button class="browse-option" type="button">
          <div class="browse-option-background"></div>
          <i
            class="fa-solid fa-tags"
            className="text-lg md:text-2xl lg:text-4xl"
          >
            <FaTags />
          </i>
          <span class="label">Tags</span>
        </button>
        <button class="browse-option" type="button">
          <div class="browse-option-background"></div>
          <i
            class="fa-light fa-percent"
            className="text-lg md:text-2xl lg:text-4xl"
          >
            <FaPercentage />
          </i>
          <span class="label">Specials</span>
        </button>
        <button class="browse-option" type="button">
          <div class="browse-option-background"></div>
          <i
            class="fa-solid fa-sparkles"
            className="text-lg md:text-2xl lg:text-4xl"
          >
            <BsStars />
          </i>
          <span class="label">Free</span>
        </button>
      </div>

      {/* LIST OPTIONS */}
      <div
        id="list"
        class="no-scrollbar"
        className="inline-flex rounded-md shadow-sm mt-5 overflow-auto w-auto text-sm"
        data-active-index="0"
      >
        <div class="list-options">
          <button class="list-option" type="button" data-index="0">
            New
          </button>
          <button class="list-option" type="button" data-index="1">
            Trending
          </button>
          <button class="list-option" type="button" data-index="2">
            Top
          </button>
          <button class="list-option" type="button" data-index="3">
            Upcoming
          </button>
        </div>
      </div>

      {/* GAME SECTION 1 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
        <div className="col-span-1">
          <div className="flex flex-col">
            <div className="h-48 md:h-52 xl:h-80 w-full">
              <img
                className="object-cover rounded-lg h-full w-full"
                src="https://upload.wikimedia.org/wikipedia/en/f/ff/Assassin%27s_Creed_Valhalla_cover.jpg"
                alt=""
              />
            </div>
            <div className="mt-2">
              <h1 className="font-light text-sm text-[#9C9C9C]">
                Action, Adventures
              </h1>
              <h1 className="font-bold text-lg text-[#F6F6F6]">
                Grand Theft Auto V
              </h1>
              <p className="text-[#03A9F4]">
                $5.99 <span className="text-white mr-1">.</span>
                <span className="text-white">84%</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex flex-col">
            <div className="h-48 md:h-52 xl:h-80 w-full">
              <img
                className="object-cover rounded-lg h-full w-full"
                src="https://upload.wikimedia.org/wikipedia/en/f/ff/Assassin%27s_Creed_Valhalla_cover.jpg"
                alt=""
              />
            </div>
            <div className="mt-2">
              <h1 className="font-light text-sm text-[#9C9C9C]">
                Action, Adventures
              </h1>
              <h1 className="font-bold text-lg text-[#F6F6F6]">
                Assassin Creed Valhalla
              </h1>
              <p className="text-[#03A9F4]">
                $5.99 <span className="text-white mr-1">.</span>
                <span className="text-white">84%</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex flex-col">
            <div className="h-48 md:h-52 xl:h-80 w-full">
              <img
                className="object-cover rounded-lg h-full w-full"
                src="https://image.api.playstation.com/cdn/HP0002/CUSA05373_00/us76R5zRi3SYn6IhmVnwmbg8pW6brdpVCsMIwsC6JeBdNnSHtltWLUdpjAOnttrM.png"
                alt=""
              />
            </div>
            <div className="mt-2">
              <h1 className="font-light text-sm text-[#9C9C9C]">
                Action, Adventures
              </h1>
              <h1 className="font-bold text-lg text-[#F6F6F6]">
                Assassin Creed Valhalla
              </h1>
              <p className="text-[#03A9F4]">
                $5.99 <span className="text-white mr-1">.</span>
                <span className="text-white">84%</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex flex-col">
            <div className="h-48 md:h-52 xl:h-80 w-full">
              <img
                className="object-cover rounded-lg h-full w-full"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                alt=""
              />
            </div>
            <div className="mt-2">
              <h1 className="font-light text-sm text-[#9C9C9C]">
                Action, Adventures
              </h1>
              <h1 className="font-bold text-lg text-[#F6F6F6]">
                Assassin Creed Valhalla
              </h1>
              <p className="text-[#03A9F4]">
                $5.99 <span className="text-white mr-1">.</span>
                <span className="text-white">84%</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
