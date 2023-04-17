import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import VE1 from "../../Assets/pic/Vector 1.png";
import VE2 from "../../Assets/pic/Vector 2.png";
import ANT from "../../Assets/img/Anti.png";

function NavBar() {
  return (
    <div className="w-full">
      <div className="flex absolute">
        <div>
          <img src={VE1} alt="" />
        </div>
        <div>
          <img src={VE2} alt="" />
        </div>
      </div>
      <nav className="w-full px-[4rem] py-[2rem] flex">
        <div className="">
          <img className="h-[2rem]" src={ANT} alt="" />
        </div>
        <div className="grid place-items-center pl-[16rem]">
          <div className="rounded-full border-white border-[1px] border-solid px-4 py-1 flex cursor-pointer text-white">
            <AiOutlineSearch className="mt-1" color="#6E6E6E" size={25} />
            <input
              type="text"
              placeholder="Search everything"
              className="text-sm ml-2 mr-[-2rem] w-full bg-transparent focus:outline-none"
            />
          </div>
        </div>
        <div className="flex text-end">
          <p>Home</p>
          <p>Collections</p>
          <p>Feature</p>
          <p>Help</p>
          <p>FAQ</p>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
