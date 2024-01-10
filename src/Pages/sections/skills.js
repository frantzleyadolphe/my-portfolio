import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Firebase from "../../assets/Firebase.png";
import api from "../../assets/api.png";
import JavaScript from "../../assets/JavaScript.png";
import Tailwind from "../../assets/Tailwind.png";
import React_logo from "../../assets/React_logo.png";
import php from "../../assets/php.png";
import Laravel from "../../assets/Laravel.png";
import photoshop from "../../assets/photoshop.png";
import illustrator from "../../assets/illustrator.png";
import inDesign from "../../assets/inDesign.png";
import Premiere from "../../assets/Premiere.png";
import figma from "../../assets/figma.png";
// ..
AOS.init();

export default function Skills() {
  return (
    <div className="w-full">
      <div className="mx-5 lg:mx-20 mt-4  bg-[#131315] rounded-3xl h-40 lg:h-56 flex flex-col">
        <div
          className="text-xl h-10 text-center flex justify-center items-center"
          data-aos="zoom-in"
        >
          <h1 className="font-Poppins font-medium text-slate-400 ">SKILLS</h1>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <div className="flex flex-row gap-2 lg:gap-8 sm:gap-6 md:gap-8 m-2 justify-center items-center">
            <img
              src={JavaScript}
              alt="css"
              className="h-6 lg:h-16 md:h-10 sm:h-4"
            />
            <img
              src={React_logo}
              alt="css"
              className="h-6 lg:h-16 md:h-10 sm:h-4"
            />
            <img
              src={Tailwind}
              alt="css"
              className="h-6 lg:h-16 md:h-10 sm:h-4"
            />
            <img src={php} alt="css" className="h-8 lg:h-16 md:h-10 sm:h-4" />
            <img
              src={Laravel}
              alt="css"
              className="h-6 lg:h-16 md:h-10 sm:h-4"
            />
            <img
              src={Firebase}
              alt="css"
              className="h-8 lg:h-16 md:h-12 sm:h-8"
            />
            <img src={api} alt="css" className="h-8 lg:h-16 md:h-10 sm:h-4" />
          </div>
          <div className="flex flex-row gap-4 lg:gap-8 sm:gap-6 m-2 justify-center ">
            <img
              src={photoshop}
              alt="css"
              className="h-8 lg:h-16 md:h-10 sm:h-4"
            />
            <img
              src={illustrator}
              alt="css"
              className="h-8 lg:h-16 md:h-10 sm:h-4"
            />
            <img
              src={Premiere}
              alt="css"
              className="h-8 lg:h-16 md:h-10 sm:h-4"
            />
            <img
              src={inDesign}
              alt="css"
              className="h-8 lg:h-16 md:h-10 sm:h-4"
            />
            <img src={figma} alt="css" className="h-8 lg:h-16 md:h-10 sm:h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
