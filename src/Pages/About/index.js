import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import photo from "../../assets/photo.jpg";

// ..
AOS.init();

export default function About() {
  return (
    <div className="w-full bg-white pb-8">
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
            <h1
              data-aos="zoom-in"
              className="text-lg lg:text-xl font-Poppins font-bold mb-2 lg:mb-4 lg:text-start text-center mt-4 md:mt-4 sm:mt-4 lg:mt-0"
            >
              Why you{" "}
              <span className="text-[#F29F05] underline underline-offset-[5px]">
                Hire me
              </span>{" "}
              for your next projects ?
            </h1>
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
            <div
              className="flex w-full flex-row items-center"
              data-aos="zoom-in"
            >
              <div className="flex flex-col w-1/2 pt-4 md:text-center text-center lg:text-start">
                <h1 className="font-Poppins font-bold text-lg">8 +</h1>
                <p className=" text-xs font-Poppins">Projects completed</p>
              </div>
              <div className="flex flex-col w-1/2 pt-4 md:text-center text-center lg:text-start">
                <h1 className="font-Poppins font-bold text-lg">3</h1>
                <p className=" text-xs font-Poppins">Entreprises corvered</p>
              </div>
            </div>
            <div
              className="flex justify-center items-center lg:justify-start hover:cursor-auto "
              data-aos="zoom-in"
            >
              <a
                href="#"
                className=" text-center text-[#F29F05] border-2 border-[#F29F05] mt-6 p-2 w-40 rounded-full "
              >
                Hire me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
