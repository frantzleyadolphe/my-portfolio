import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import photo from "../../assets/photo.jpg";
// ..
AOS.init();

export default function About() {
  return (
    <div className="w-full bg-white pb-4">
      <div className="mx-5 lg:mx-20 h-full">
        <div className="pt-5 text-xl text-center" data-aos="zoom-in">
          <h1 className="font-Poppins font-medium text-slate-400">ABOUT ME</h1>
        </div>
        <div className="flex flex-col lg:flex-row items-center mt-5">
          <div className=" w-4/5 lg:w-1/2">
            <div
              className="w-full flex justify-center items-center "
              data-aos="fade-right"
            >
              <div className="rounded-full border-2 border-slate-400 ">
                <img
                  src={photo}
                  className="rounded-full h-40 lg:h-80 m-2"
                  alt="myPicture"
                />
              </div>
            </div>
          </div>
          <div className="w-4/5 lg:w-1/2">
            <div
              className="w-full h-full flex justify-center items-center"
              data-aos="fade-left"
            >
              <p className="text-md font-Nanum font-medium text-center lg:text-start mt-4 lg:mt-0">
                Hi, i'm{" "}
                <span className="text-[#F29F05] font-bold">
                  Frantzley ADOLPHE
                </span>
                , based in USA with four (4) years experiences and i'm
                passionate about everything that has to do with digital design
                and art direction, i've a serious passion for UI effects,
                animations and creating, dynamic user experiences and coding. I
                enjoy working with agencies and enthusiastic people who want to
                solve problems through beautiful design, website, mobile
                application and photographies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
