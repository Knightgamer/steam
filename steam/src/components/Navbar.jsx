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
    <div className="text-white flex justify-between h-24 mx-auto px-4">
      <h1 className="flex mt-3.5">
        <FaSteam className="mr-3 " size={24} />
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
      <div className="mt-5 block md:hidden" onClick={handleNav}>
        {!nav ? <AiOutlineClose size={24} /> : <RiMenu3Fill size={24} />}
      </div>
      <div
        className="fixed w-[60%] top-0 mt-10 h-full border-l border-l-gray-900 bg-[#0A0A0A] ease-in-out duration-500"
        style={{ right: !nav ? 0 : "-100%" }}
      >
        <ul className="pt-5">
          <li className="p-4">Store</li>
          <li className="p-4">Community</li>
          <li className="p-4">About</li>
          <li className="p-4">Support</li>
          <li className="p-4">Login</li>
          <li className="p-4">Install Steam</li>
          <AiOutlineGlobal className="ml-3.5 mt-3" size={18} />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
