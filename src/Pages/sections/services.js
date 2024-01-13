import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ui from "../../assets/ui.png";
import web from "../../assets/web.png";
import design from "../../assets/design.webp";
import photography from "../../assets/photography.png";

AOS.init();

export default function Services() {
  return (
    <div className="w-full id=services">
      <div className="pt-5 mx-5 lg:mx-20 rounded-3xl flex flex-col gap-6">
        <div className="text-xl h-10 text-center flex justify-center items-center">
          <h1
            className="font-Poppins font-medium text-slate-400"
            data-aos="zoom-in"
          >
            SERVICES
          </h1>
        </div>
        <div className="lg:flex justify-evenly gap-4 md:gap-4 grid grid-cols-2 flex-wrap mx-2">
          <div
            className="lg:h-44 lg:w-60 h-52 w-full md:w-full bg-gradient-to-r from-rose-100 to-teal-100 rounded-2xl flex flex-col items-center justify-center"
            data-aos="zoom-in"
          >
            <div className="w-[70px] h-[70px]">
              <img src={ui} alt="ui" width="70" height="70" />
            </div>
            <div className="w-full">
              <h1 className="font-Poppins font-normal text-sm text-slate-400 text-center">
                UI/UX
              </h1>
              <p className="text-[10px] lg:text-[10px] md:text-[15px] text-center pt-2 text-slate-600 font-Inter mx-2 font-light">
                It's crucial for ensuring that a product not only looks good but
                also provides a positive and efficient user experience.
              </p>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="lg:h-44 lg:w-60 h-52 w-full md:w-full bg-gradient-to-r from-rose-100 to-teal-100 rounded-2xl flex flex-col items-center justify-center"
          >
            <div className="w-[70px] h-[70px]">
              <img src={web} alt="ui" width="70" height="70" />
            </div>
            <div className="w-full">
              <h1 className="font-Poppins font-normal text-sm text-slate-400 text-center">
                Web & Mobile Development
              </h1>
              <p className="text-[10px] lg:text-[10px] text-center pt-2 md:text-[15px] text-slate-600 font-Inter mx-2 font-light">
                Services cover both front-end and back-end development for web
                and mobile applications.
              </p>
            </div>
          </div>

          <div
            data-aos="zoom-in"
            className="lg:h-44 lg:w-60 h-52 w-full md:w-full bg-gradient-to-r from-rose-100 to-teal-100 rounded-2xl flex flex-col items-center justify-center"
          >
            <div className="w-[70px] h-[70px]">
              <img src={design} alt="ui" width="70" height="70" />
            </div>
            <div className="w-full">
              <h1 className="font-Poppins font-normal text-sm text-slate-400 text-center">
                Graphic Design
              </h1>
              <p className="text-[10px] lg:text-[10px] text-center pt-2 md:text-[15px] text-slate-600 font-Inter mx-2 font-light">
                To create compelling visuals that resonate and convey brand
                messages to target audience and effectively convey the intended
                message.
              </p>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="lg:h-44 lg:w-60 h-52 w-full md:w-full sm:w-[350px] bg-gradient-to-r from-rose-100 to-teal-100 rounded-2xl flex flex-col items-center justify-center"
          >
            <div className="w-[70px] h-[70px]">
              <img src={photography} alt="ui" width="70" height="70" />
            </div>
            <div className="w-full">
              <h1 className="font-Poppins font-normal text-sm text-slate-400 text-center">
                Photography
              </h1>
              <p className="text-[10px] lg:text-[10px] text-center pt-2 md:text-[15px] text-slate-600 font-Inter mx-2 font-light">
                To capture moments, convey emotions, and visually represent
                products or concepts for personal use or business promotion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
