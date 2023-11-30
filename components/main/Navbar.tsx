import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full h-[75px] fixed top-0 shadow-lg shadow-[#14141417]/50 bg-[#03001417] backdrop-blur-md z-50 px-5 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex-row items-center hidden md:flex"
        >
          <h1 className="font-bold text-2xl  text-white uppercase">
            Shah Mir
            <span className="inline-block h-2 w-2 bg-white rounded-full ml-2"></span>
          </h1>
        </a>

        <div className="flex flex-row items-center justify-center md:mr-20">
          <div className="flex items-center justify-center gap-5 w-full  mr-[15px] md:px-[20px] py-[10px] text-white">
            <a href="#about-me" className="cursor-pointer">
              Home
            </a>
            <a href="#projects" className="cursor-pointer">
              Portfolio
            </a>
            <a href="#skills" className="cursor-pointer">
              About
            </a>
            <a href="#" className="cursor-pointer">
              Blogs
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center gap-5">
          <Link href="https://github.com/ShahMir99">
            <FaGithub className="h-7 w-7 text-white" />
          </Link>

          <button
            className="hidden
          bg-white text-black md:flex items-center gap-3 py-1 px-3
          rounded-md text-md
          "
          >
            Login
            <ArrowRightOnRectangleIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
