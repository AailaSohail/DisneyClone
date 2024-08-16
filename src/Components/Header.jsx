import React from "react";
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
