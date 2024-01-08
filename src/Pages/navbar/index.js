import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="mx-5 lg:mx-20 h-16 flex flex-row justify-between items-center">
      <Link>
        <img src={logo} alt="logo" className="h-14" />
      </Link>
      <ul className="flex flex-row gap-8 font-Inter font-extrabold">
        <li className="hover:text-[#F29F05] hover:cursor-pointer hover:underline underline-offset-[10px]">
          Home
        </li>
        <li className="hover:text-[#F29F05] hover:cursor-pointer hover:underline underline-offset-[10px]">
          About
        </li>
        <li className="hover:text-[#F29F05] hover:cursor-pointer hover:underline underline-offset-[10px]">
          Project
        </li>
        <li className="hover:text-[#F29F05] hover:cursor-pointer hover:underline underline-offset-[10px]">
          Services
        </li>
      </ul>
      <Link className="bg-[#F29F05] hover:bg-[#131315] pr-3 pl-3 pt-2 pb-2 rounded-full">
        <span className="flex flex-row text-white">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 pr-2"
            >
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
          </span>
          Get in touch
        </span>
      </Link>
    </div>
  );
}
