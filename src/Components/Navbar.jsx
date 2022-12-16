import React, { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { logo } from "../assets";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="w-full flex justify-between md:justify-center flex-row items-center px-4 py-1">
      {/* Desktop navbar */}
      <div className="md:flex justify-between w-full px-3">
        <div className="md:flex-[0.5] flex-initial justify-center items-center">
          <img src={logo} alt="Logo" className="w-35 cursor-pointer" />
        </div>
        <ul className="text-black md:flex hidden list-none flex-row justify-between items-center flex-initial">
          {["Home", "Product", "FAQ", "Contect"].map((item, index) => (
            <NavBarItem key={item + index} title={item} />
          ))}
        </ul>
      </div>
      {/* Mobile navbar */}

      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt1
            fontSize={28}
            className="text-black md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <ul className=" bg-gradient-to-r from-[#fd746c] to-[#ff9068] z-10 fixed -top-0 -right-0 p-3 w-[70vw] h-screen shadow-xl md:hidden list-none flex flex-col justify-start items-end rounded-md text-[#f1f1f1] animate-slide-in">
            <li className="text-xl w-full my-2 ">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {["Home", "Product", "FAQ", "Contect"].map((item, index) => (
              <NavBarItem
                key={item + index}
                title={item}
                classprops="my-3 text-lg"
              />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

const NavBarItem = ({ classprops, title }) => {
  return (
    <li
      className={`mx-3 cursor-pointer ${classprops} text-[16.5px] font-semibold hover:text-[#FA4A0C]`}
    >
      {title}
    </li>
  );
};

export default Navbar;
