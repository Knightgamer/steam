import React from "react";
import Trailer from "./components/Trailer";
import Search from "./components/Search";
import Section1 from "./components/Section1";
import Testing from "./components/Testing";
import GameSectionC1 from "./components/GameSectionC1";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Trailer />
      <div className="max-w-[360px] md:max-w-[640px] lg:max-w-[1240px] mx-auto mt-7 md:mt-10 lg:mt-14 ">
        <Search />    
        <Section1 />
        {/* <GameSectionC1 /> */}
        <Testing />
      </div>
      <Footer />
    </div>
  );
}

export default App;
