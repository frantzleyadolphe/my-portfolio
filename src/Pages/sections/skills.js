import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

export default function Skills() {
  return (
    <div className="w-full h-[420px] lg:h-60 md:h-80" id="skills">
      <div className="pt-5 lg:mx-20 mt-4  bg-[#131315] rounded-3xl h-full flex flex-col gap-6">
        <div
          className="text-xl h-10 text-center flex justify-center items-center"
          data-aos="zoom-in"
        >
          <h1 className="font-Poppins font-medium text-slate-400 ">
            MY SKILLS
          </h1>
        </div>
        <div className="flex justify-evenly gap-6 flex-wrap mx-2"></div>
      </div>
    </div>
  );
}
