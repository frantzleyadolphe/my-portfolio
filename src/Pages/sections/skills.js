import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { Circle } from "rc-progress";
AOS.init();

const skills = [
  {
    name: "Javascript",
    percentage: 65,
  },
  {
    name: "Tailwind",
    percentage: 80,
  },
  {
    name: "React",
    percentage: 75,
  },
  {
    name: "R-Native",
    percentage: 75,
  },
  {
    name: "Php",
    percentage: 70,
  },
  {
    name: "Laravel",
    percentage: 75,
  },
  {
    name: "MongoDB",
    percentage: 72,
  },
  {
    name: "Mysql",
    percentage: 75,
  },
  {
    name: "Photoshop",
    percentage: 80,
  },
  {
    name: "Illustrator",
    percentage: 70,
  },
  {
    name: "inDesign",
    percentage: 70,
  },
  {
    name: "Figma",
    percentage: 80,
  },
];

export default function Skills() {
  return (
    <div className="w-full h-[550px] lg:h-60 md:h-80" id="skills">
      <div className="pt-5 mx-5 lg:mx-20  bg-[#131315] rounded-3xl h-full flex flex-col gap-6">
        <div
          className="text-xl h-10 text-center flex justify-center items-center"
          data-aos="zoom-in"
        >
          <h1 className="font-Poppins font-medium text-slate-400 ">
            MY SKILLS
          </h1>
        </div>
        <div className="flex justify-evenly gap-6 flex-wrap mx-2">
          {skills.map((skill, index) => (
            <div
              className="w-20 h-20 flex justify-center items-center flex-col"
              data-aos="zoom-out"
            >
              <Circle
                percent={skill.percentage}
                strokeWidth={10}
                trailColor="#2E3340"
                strokeColor="#F29F05"
                steps={10}
                space={4}
              />
              <h3 className="text-white font-Poppins text-sm pt-2">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
