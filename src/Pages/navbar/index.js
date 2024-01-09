import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
export default function Navbar() {
  const isNonMobileScreen = useMediaQuery("(min-width: 1000px)");
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  return (
    <div className="w-full bg-white  sticky top-0 z-20 p-0 m-0">
      <div className="mx-5 lg:mx-20 h-16 flex flex-row justify-between items-center ">
        <Link>
          <img src={logo} alt="logo" className="h-14" />
        </Link>
        {isNonMobileScreen ? (
          <>
            <ul className="flex flex-row gap-8 font-Inter font-extrabold">
              <li className="hover:text-[#F29F05] hover:cursor-pointer hover:underline underline-offset-[10px]">
                Home
              </li>
              <li className="hover:text-[#F29F05] hover:cursor-pointer hover:underline underline-offset-[10px]">
                About
              </li>

              <li className="hover:text-[#F29F05] hover:cursor-pointer hover:underline underline-offset-[10px]">
                Services
              </li>
              <li className="hover:text-[#F29F05] hover:cursor-pointer hover:underline underline-offset-[10px]">
                Project
              </li>
              <li className="hover:text-[#F29F05] hover:cursor-pointer hover:underline underline-offset-[10px]">
                Contact
              </li>
            </ul>
            <Link className="bg-[#F29F05] hover:bg-[#131315] pr-3 pl-3 pt-2 pb-2 rounded-full">
              <span className="flex flex-row text-white ">
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
          </>
        ) : (
          <>
            <button>
              <MenuIcon
                sx={{ fontSize: "30px" }}
                onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
              />
            </button>
          </>
        )}

        {/* MOBILE NAV */}

        {!isNonMobileScreen && isMobileMenuToggled && (
          <div className="bg-white fixed h-full w-1/2 right-0 bottom-0 z-10">
            <div className="flex items-center justify-end w-full">
              <button className="m-5">
                <CloseIcon
                  sx={{ fontSize: "30px" }}
                  onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
                />
              </button>
            </div>
            <div>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Project</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
