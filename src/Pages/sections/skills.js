import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
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
import firebase from "../../assets/Firebase.png";
import css from "../../assets/CSS3.png";
import api from "../../assets/api.png";
import mongoDb from "../../assets/MongoDB.png";
// ..
AOS.init();

export default function Skills() {
  return (
    <div className="w-full h-[420px] lg:h-60 md:h-80" id="skills">
      <div className="mx-5 lg:mx-20 mt-4  bg-[#131315] rounded-3xl h-full flex flex-col gap-6">
        <div
          className="text-xl h-10 text-center flex justify-center items-center"
          data-aos="zoom-in"
        >
          <h1 className="font-Poppins font-medium text-slate-400 ">
            MY SKILLS
          </h1>
        </div>
        <div className="flex justify-evenly gap-6 flex-wrap mx-2">
          <div className="flex-center flex-col gap-4 ">
            <div className="max-w-[25px] max-h-[30px] lg:max-w-[30px] lg:max-h-[40px] m-auto mb-2">
              <img src={css} alt="css" width="70" height="70" />
            </div>
            <h3 className="font-Poppins text-center text-xs lg:text-md md:text-lg text-white ">
              CSS 3
            </h3>
          </div>
          <div className="flex-center flex-col gap-4 ">
            <div className="max-w-[30px] max-h-[30px] lg:max-w-[40px] lg:max-h-[40px] m-auto mb-2">
              <img src={JavaScript} alt="css" width="70" height="70" />
            </div>
            <h3 className="font-Poppins text-center text-xs lg:text-md md:text-lg  text-white ">
              Javascript
            </h3>
          </div>
          <div className="flex-center flex-col gap-4">
            <div className="max-w-[40px] max-h-[30px] lg:max-w-[50px] lg:max-h-[40px] m-auto mb-2">
              <img src={React_logo} alt="css" width="70" height="70" />
            </div>
            <h3 className="font-Poppins text-xs lg:text-md md:text-lg  text-white ">
              React & React-Native
            </h3>
          </div>
          <div className="flex-center flex-col gap-4">
            <div className="max-w-[30px] max-h-[30px] lg:max-w-[40px] lg:max-h-[40px] m-auto mb-2">
              <img src={php} alt="css" width="70" height="70" />
            </div>
            <h3 className="font-Poppins text-xs lg:text-md md:text-lg  text-white ">
              Php
            </h3>
          </div>
          <div className="flex-center flex-col gap-4">
            <div className="max-w-[30px] max-h-[30px] lg:max-w-[40px] lg:max-h-[40px] m-auto mb-2">
              <img src={Laravel} alt="css" width="70" height="70" />
            </div>
            <h3 className="font-Poppins text-xs lg:text-md md:text-lg  text-white ">
              Laravel
            </h3>
          </div>
          <div className="flex-center flex-col gap-4">
            <div className="max-w-[50px] max-h-[30px] lg:max-w-[70px] lg:max-h-[40px] m-auto mb-2">
              <img src={Tailwind} alt="css" width="70" height="70" />
            </div>
            <h3 className="font-Poppins text-xs lg:text-md md:text-lg  text-white ">
              Tailwind CSS
            </h3>
          </div>
          <div className="flex-center flex-col gap-4">
            <div className="max-w-[30px] max-h-[30px] lg:max-w-[40px] lg:max-h-[40px] m-auto mb-2">
              <img src={mongoDb} alt="css" width="70" height="70" />
            </div>
            <h3 className="font-Poppins text-xs lg:text-md md:text-lg  text-white ">
              mongoDB
            </h3>
          </div>
          <div className="flex-center flex-col gap-4">
            <div className="max-w-[20px] max-h-[30px] lg:max-w-[30px] lg:max-h-[40px] m-auto mb-2">
              <img src={firebase} alt="css" width="70" height="70" />
            </div>
            <h3 className="font-Poppins text-xs lg:text-md md:text-lg  text-white ">
              Firebase
            </h3>
          </div>
          <div className="flex-center flex-col gap-4">
            <div className="max-w-[60px] max-h-[30px] lg:max-w-[70px] lg:max-h-[40px] m-auto mb-2">
              <img src={api} alt="api" width="70" height="70" />
            </div>
            <h3 className="font-Poppins text-xs lg:text-md md:text-lg  text-white ">
              Restful API
            </h3>
          </div>
          <div className="flex-center flex-col gap-4">
            <div className="max-w-[30px] max-h-[30px] lg:max-w-[40px] lg:max-h-[40px] m-auto mb-2">
              <img src={photoshop} alt="css" width="70" height="70" />
            </div>
            <h3 className="font-Poppins text-xs lg:text-md md:text-lg  text-white ">
              Photoshop
            </h3>
          </div>
          <div className="flex-center flex-col gap-4">
            <div className="max-w-[30px] max-h-[30px] lg:max-w-[40px] lg:max-h-[40px] m-auto mb-2">
              <img src={illustrator} alt="css" width="70" height="70" />
            </div>
            <h3 className="font-Poppins text-xs lg:text-md md:text-lg  text-white ">
              Illustrator
            </h3>
          </div>
          <div className="flex-center flex-col gap-4">
            <div className="max-w-[30px] max-h-[30px] lg:max-w-[40px] lg:max-h-[40px] m-auto mb-2">
              <img src={Premiere} alt="css" width="70" height="70" />
            </div>
            <h3 className="font-Poppins text-xs lg:text-md md:text-lg  text-white ">
              Première Pro
            </h3>
          </div>
          <div className="flex-center flex-col gap-4">
            <div className="max-w-[30px] max-h-[30px] lg:max-w-[40px] lg:max-h-[40px] m-auto mb-2">
              <img src={inDesign} alt="css" width="70" height="70" />
            </div>
            <h3 className="font-Poppins text-xs lg:text-md md:text-lg  text-white ">
              inDesign
            </h3>
          </div>
          <div className="flex-center flex-col gap-4">
            <div className="max-w-[20px] max-h-[30px] lg:max-w-[30px] lg:max-h-[40px] m-auto mb-2">
              <img src={figma} alt="css" width="70" height="70" />
            </div>
            <h3 className="font-Poppins text-xs lg:text-md md:text-lg  text-white ">
              Figma
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
