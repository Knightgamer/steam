import React from "react";
import { FaSteam } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="text-white flex justify-between h-24 mx-auto px-4">
      <h1 className="flex mt-3.5">
        <FaSteam className="mr-3 " size={24} />
        <span>STEAM</span>
      </h1>
      <ul className="flex mt-0.5">
        <li className="p-4">Store</li>
        <li className="p-4">Community</li>
        <li className="p-4">About</li>
        <li className="p-4">Support</li>
      </ul>
      <ul className="flex justify-end text-sm">
        <AiOutlineGlobal className="mr-3 mt-2.5" size={18} />
        <li className="p-2">Login</li>
        <li className="p-2">Install Steam</li>
      </ul>
    </div>
  );
};

export default Navbar;
