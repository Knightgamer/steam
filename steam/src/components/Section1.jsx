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
    </div>
  );
}

export default Section1;
