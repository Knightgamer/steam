import React from "react";
import GameSection1 from "./GameSection1";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

function GameSectionC1() {
  const scrollLeft = () => {
    const contentDiv = document.getElementById("content");
    contentDiv.scrollLeft -= contentDiv.offsetWidth;
  };

  const scrollRight = () => {
    const contentDiv = document.getElementById("content");
    contentDiv.scrollLeft += contentDiv.offsetWidth;
  };

  return (
    <div className="relative mt-10">
      <div className="absolute right-0 top-0 text-[#c4c4c4] ">
        <button
          onClick={scrollLeft}
          className="md-4 p-2 mx-2  rounded-full bg-[#0f0f0f] hover:text-[#ffffff] transition ease-in-out"
        >
          <RiArrowLeftSLine size={30} />
        </button>
        <button
          onClick={scrollRight}
          className="md-4 p-2 mx-2  rounded-full bg-[#0f0f0f] hover:text-[#ffffff] transition ease-in-out"
        >
          <RiArrowRightSLine size={30} />
        </button>
      </div>
      <div className="absolute left-0 top-0  text-white text-[25px]">
        <a href="" className="text-md">
          Explore more games
        </a>
      </div>
      <div className="carousel overflow-x-auto ">
        <div
          id="content"
          className="gap-4 mt-16 carousel flex items-center justify-start  overflow-x-auto relative scrollbar-hide scroll-smooth "
        >
          <div>
            <GameSection1
              genre="Action, Adventures"
              name="Among Us"
              price="$5.99"
              discount="84%"
              url="https://assets-prd.ignimgs.com/2020/12/15/among-us-button-fin-1608054673652.jpg"
            />
          </div>
          <div>
            <GameSection1
              genre="Action, Adventures"
              name="Assassin Creed Valhalla"
              price="$5.99"
              discount="84%"
              url="https://m.media-amazon.com/images/I/91lmTAVXgHL.jpg"
            />
          </div>
          <div>
            <GameSection1
              genre="Action, Adventures"
              name="Doraemon Space Heroes"
              price="$5.99"
              discount="84%"
              url="https://m.media-amazon.com/images/M/MV5BZTg0NjE0NTQtZTBlYS00OGI4LWE1NTgtYTY4ZmRlZThkYjEzXkEyXkFqcGdeQXVyNjUxODQxNzQ@._V1_FMjpg_UX1000_.jpg"
            />
          </div>

          <div>
            <GameSection1
              genre="Action, Adventures"
              name="Forza Horizon"
              price="$5.99"
              discount="84%"
              url="https://assets-prd.ignimgs.com/2021/08/24/forza-horizon-5-button-fin-1629830068379.jpg"
            />
          </div>
          <div>
            <GameSection1
              genre="Action, Adventures"
              name="Fortnite"
              price="$5.99"
              discount="84%"
              url="https://assets-prd.ignimgs.com/2023/06/09/fortnitewilds-1686353306240.jpg?width=300&crop=1%3A1%2Csmart"
            />
          </div>
          <div>
            <GameSection1
              genre="Action, Adventures"
              name="Call of Duty: Modern Warfare 2"
              price="$5.99"
              discount="84%"
              url="https://assets-prd.ignimgs.com/2022/05/24/call-of-duty-modern-warfare-2-button-02-1653417394041.jpg?width=300&crop=1%3A1%2Csmart"
            />
          </div>
          <div>
            <GameSection1
              genre="Action, Adventures"
              name="Roblox"
              price="$5.99"
              discount="84%"
              url="https://assets-prd.ignimgs.com/2022/03/01/roblox-sq-1646155371025.jpg?width=300&crop=1%3A1%2Csmart"
            />
          </div>

          {/* Add more GameSection1 components with appropriate props */}
        </div>
      </div>
    </div>
  );
}

export default GameSectionC1;
