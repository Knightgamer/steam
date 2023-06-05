import React from "react";
import Navbar from "./components/Navbar";
import Trailer from "./components/Trailer";
import Search from "./components/Search";

function App() {
  return (
    <div>
      <Trailer />
      <div className="max-w-[360px] md:max-w-[640px] lg:max-w-[1240px] mx-auto mt-7 md:mt-10 lg:mt-14">
        <Search />
      </div>
    </div>
  );
}

export default App;
