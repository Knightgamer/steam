import React, { useState } from "react";
import { FaSteam } from "react-icons/fa";
import { AiOutlineGlobal, AiOutlineClose } from "react-icons/ai";
import { RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-white top-0 left-0 right-0 flex absolute justify-between mx-auto px-4 backdrop-filter backdrop-blur-sm bg-gradient-to-b  from-[rgba(0,0,0,0.95)] to-[rgba(0,0,0,0.4)] shadow-lg">
      <h1 className="flex mt-3.5">
        <FaSteam className="mr-3" size={24} />
        <span>STEAM</span>
      </h1>

      <ul className="hidden md:flex mt-0.5">
        <li className="p-4">Store</li>
        <li className="p-4">Community</li>
        <li className="p-4">About</li>
        <li className="p-4">Support</li>
      </ul>
      <ul className="hidden md:flex justify-end text-sm ">
        <AiOutlineGlobal className="mr-3 mt-2.5" size={18} />
        <li className="p-2">Login</li>
        <li className="p-2">Install Steam</li>
      </ul>

      <div onClick={handleNav} className="mt-2.5 block md:hidden">
        {nav ? <AiOutlineClose size={24} /> : <RiMenu3Fill size={24} />}
      </div>

      <ul
        className="fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#0A0A0A] ease-in-out duration-700"
        style={{ left: nav ? 0 : "-100%" }}
      >
        <li className="p-4 bg-[#0A0A0A]">Store</li>
        <li className="p-4 bg-[#0A0A0A]">Community</li>
        <li className="p-4 bg-[#0A0A0A]">About</li>
        <li className="p-4 bg-[#0A0A0A]">Support</li>
        <li className="p-4 bg-[#0A0A0A]">Login</li>
        <li className="p-4 bg-[#0A0A0A]">Install Steam</li>
        <AiOutlineGlobal className="ml-3.5 mt-3" size={18} />
      </ul>
    </div>
  );
};

export default Navbar;
