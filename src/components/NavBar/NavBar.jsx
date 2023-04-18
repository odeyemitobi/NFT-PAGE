import React from "react";
import { FiSearch } from "react-icons/fi";
import VE1 from "../../Assets/pic/Vector 1.png";
import VE2 from "../../Assets/pic/Vector 2.png";
import ANT from "../../Assets/img/Anti.png";

function NavBar() {
  return (
    <div className="w-full">
      <div className="flex absolute mt-9">
        <div>
          <img src={VE1} alt="" />
        </div>
        <div>
          <img src={VE2} alt="" />
        </div>
      </div>
      <nav className="w-full relative px-[4rem] py-[2rem] flex justify-between">
        <div className="w-[50%]">
          <img className="h-[3rem]" src={ANT} alt="" />
        </div>
        <div className="w-[70%] pr-[5rem] grid place-items-center">
          <div className="rounded-full search px-4 py-1 text-red-700 flex cursor-pointer">
            <input
              type="text"
              placeholder="Search"
              className="text-lg placeholder-white placeholder:text-[23px] pt-1 text-white mr-[1rem] w-full bg-transparent focus:outline-none"
            />
            <FiSearch className="mt-1" color="#fff" size={25} />
          </div>
        </div>
        <div className="w-full cursor-pointer font1 flex place-items-center justify-between ">
          <p className="text-[#FEEE44] text-[23px] leading-[34px] font-semibold">
            Home
          </p>
          <p className="text-white text-[23px] leading-[34px] font-semibold">
            Collections
          </p>
          <p className="text-white text-[23px] leading-[34px] font-semibold">
            Feature
          </p>
          <p className="text-white text-[23px] leading-[34px] font-semibold">
            Help
          </p>
          <p className="text-white text-[23px] leading-[34px] font-semibold">
            FAQ
          </p>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
