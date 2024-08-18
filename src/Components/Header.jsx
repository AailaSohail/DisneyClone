import React, { useState } from "react";
import logo from "./../assets/Images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";

function Header() {
  const [toggle,setToggle] = useState(false);


  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];

  return (
    <div className="flex items-center justify-between mx-5">
      <div className="flex space-x-6">
        <img src={logo} className="w-20 mr-8" />
        <div className="hidden md:flex space-x-6">
        {menu.map((items) => (
          <div className="flex items-center space-x-3 font-semibold cursor-pointer">
            <items.icon />
            <h2 className="group">
              {items.name}
              <div className="bg-white h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </h2>
          </div>
        ))}
        </div>
        <div className="flex md:hidden space-x-9">
        {menu.map((items,index) => index <3 && (
          <div className="flex items-center cursor-pointer">
            <h2 className="group">
            <items.icon />
              <div className="bg-white h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </h2>
          </div>
        ))}
          <div onMouseEnter={() => setToggle(!toggle)} onMouseLeave={() => setToggle(!toggle)} className="flex items-center cursor-pointer">
            <HiDotsVertical />
          { toggle? <div className="more-opt absolute top-14 bg-zinc-900 space-y-2 pl-4 pr-8 pt-3 pb-3 outline outline-1 outline-zinc-600 rounded-sm">
          {menu.map((items,index) => index>=3 && (
          <div className="flex items-center space-x-3 font-semibold cursor-pointer">
            <items.icon />
            <h2 className="group">
              {items.name}
              <div className="bg-white h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </h2>
          </div>
          ))}
          </div>:null}
          </div>
        </div>
      </div>
      <div>
        <img
          src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
          className="w-10"
        />
      </div>
    </div>
  );
}

export default Header;
