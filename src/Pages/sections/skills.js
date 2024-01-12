import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

import Circle from "react-circle";
AOS.init();

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
          <div
            className="w-20 h-20 flex justify-center items-center flex-col"
            data-aos="zoom-out"
          >
            <Circle
              animate={true} // Boolean: Animated/Static progress
              animationDuration="1s" //String: Length of animation
              responsive={true} // Boolean: Make SVG adapt to parent size
              size={150} // Number: Defines the size of the circle.
              lineWidth={20} // Number: Defines the thickness of the circle's stroke.
              progress={68} // Number: Update to change the progress and percentage.
              progressColor="#F29F05" // String: Color of "progress" portion of circle.
              bgColor="#343840" // String: Color of "empty" portion of circle.
              textColor="white" // String: Color of percentage text color.
              textStyle={{
                font: "bold 5rem Poppins, Arial, sans-serif", // CSSProperties: Custom styling for percentage.
              }}
              percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
              roundedStroke={true} // Boolean: Rounded/Flat line ends
              showPercentage={true} // Boolean: Show/hide percentage.
              showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
            />
            <h3 className="text-white font-Poppins">Javascript</h3>
          </div>
          <div
            className="w-20 h-20 flex justify-center items-center flex-col"
            data-aos="zoom-out"
          >
            <Circle
              animate={true} // Boolean: Animated/Static progress
              animationDuration="1s" //String: Length of animation
              responsive={true} // Boolean: Make SVG adapt to parent size
              size={150} // Number: Defines the size of the circle.
              lineWidth={20} // Number: Defines the thickness of the circle's stroke.
              progress={75} // Number: Update to change the progress and percentage.
              progressColor="#F29F05" // String: Color of "progress" portion of circle.
              bgColor="#343840" // String: Color of "empty" portion of circle.
              textColor="white" // String: Color of percentage text color.
              textStyle={{
                font: "bold 5rem Poppins, Arial, sans-serif", // CSSProperties: Custom styling for percentage.
              }}
              percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
              roundedStroke={true} // Boolean: Rounded/Flat line ends
              showPercentage={true} // Boolean: Show/hide percentage.
              showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
            />
            <h3 className="text-white font-Poppins">Tailwind</h3>
          </div>
          <div
            className="w-20 h-20 flex justify-center items-center flex-col"
            data-aos="zoom-out"
          >
            <Circle
              animate={true} // Boolean: Animated/Static progress
              animationDuration="1s" //String: Length of animation
              responsive={true} // Boolean: Make SVG adapt to parent size
              size={150} // Number: Defines the size of the circle.
              lineWidth={20} // Number: Defines the thickness of the circle's stroke.
              progress={75} // Number: Update to change the progress and percentage.
              progressColor="#F29F05" // String: Color of "progress" portion of circle.
              bgColor="#343840" // String: Color of "empty" portion of circle.
              textColor="white" // String: Color of percentage text color.
              textStyle={{
                font: "bold 5rem Poppins, Arial, sans-serif", // CSSProperties: Custom styling for percentage.
              }}
              percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
              roundedStroke={true} // Boolean: Rounded/Flat line ends
              showPercentage={true} // Boolean: Show/hide percentage.
              showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
            />
            <h3 className="text-white font-Poppins">React</h3>
          </div>
          <div
            className="w-20 h-20 flex justify-center items-center flex-col"
            data-aos="zoom-out"
          >
            <Circle
              animate={true} // Boolean: Animated/Static progress
              animationDuration="1s" //String: Length of animation
              responsive={true} // Boolean: Make SVG adapt to parent size
              size={150} // Number: Defines the size of the circle.
              lineWidth={20} // Number: Defines the thickness of the circle's stroke.
              progress={75} // Number: Update to change the progress and percentage.
              progressColor="#F29F05" // String: Color of "progress" portion of circle.
              bgColor="#343840" // String: Color of "empty" portion of circle.
              textColor="white" // String: Color of percentage text color.
              textStyle={{
                font: "bold 5rem Poppins, Arial, sans-serif", // CSSProperties: Custom styling for percentage.
              }}
              percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
              roundedStroke={true} // Boolean: Rounded/Flat line ends
              showPercentage={true} // Boolean: Show/hide percentage.
              showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
            />
            <h3 className="text-white font-Poppins">R-Native</h3>
          </div>
          <div
            className="w-20 h-20 flex justify-center items-center flex-col"
            data-aos="zoom-out"
          >
            <Circle
              animate={true} // Boolean: Animated/Static progress
              animationDuration="1s" //String: Length of animation
              responsive={true} // Boolean: Make SVG adapt to parent size
              size={150} // Number: Defines the size of the circle.
              lineWidth={20} // Number: Defines the thickness of the circle's stroke.
              progress={70} // Number: Update to change the progress and percentage.
              progressColor="#F29F05" // String: Color of "progress" portion of circle.
              bgColor="#343840" // String: Color of "empty" portion of circle.
              textColor="white" // String: Color of percentage text color.
              textStyle={{
                font: "bold 5rem Poppins, Arial, sans-serif", // CSSProperties: Custom styling for percentage.
              }}
              percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
              roundedStroke={true} // Boolean: Rounded/Flat line ends
              showPercentage={true} // Boolean: Show/hide percentage.
              showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
            />
            <h3 className="text-white font-Poppins">Php</h3>
          </div>
          <div
            className="w-20 h-20 flex justify-center items-center flex-col"
            data-aos="zoom-out"
          >
            <Circle
              animate={true} // Boolean: Animated/Static progress
              animationDuration="1s" //String: Length of animation
              responsive={true} // Boolean: Make SVG adapt to parent size
              size={150} // Number: Defines the size of the circle.
              lineWidth={20} // Number: Defines the thickness of the circle's stroke.
              progress={75} // Number: Update to change the progress and percentage.
              progressColor="#F29F05" // String: Color of "progress" portion of circle.
              bgColor="#343840" // String: Color of "empty" portion of circle.
              textColor="white" // String: Color of percentage text color.
              textStyle={{
                font: "bold 5rem Poppins, Arial, sans-serif", // CSSProperties: Custom styling for percentage.
              }}
              percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
              roundedStroke={true} // Boolean: Rounded/Flat line ends
              showPercentage={true} // Boolean: Show/hide percentage.
              showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
            />
            <h3 className="text-white font-Poppins">Laravel</h3>
          </div>
          <div
            className="w-20 h-20 flex justify-center items-center flex-col"
            data-aos="zoom-out"
          >
            <Circle
              animate={true} // Boolean: Animated/Static progress
              animationDuration="1s" //String: Length of animation
              responsive={true} // Boolean: Make SVG adapt to parent size
              size={150} // Number: Defines the size of the circle.
              lineWidth={20} // Number: Defines the thickness of the circle's stroke.
              progress={70} // Number: Update to change the progress and percentage.
              progressColor="#F29F05" // String: Color of "progress" portion of circle.
              bgColor="#343840" // String: Color of "empty" portion of circle.
              textColor="white" // String: Color of percentage text color.
              textStyle={{
                font: "bold 5rem Poppins, Arial, sans-serif", // CSSProperties: Custom styling for percentage.
              }}
              percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
              roundedStroke={true} // Boolean: Rounded/Flat line ends
              showPercentage={true} // Boolean: Show/hide percentage.
              showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
            />
            <h3 className="text-white font-Poppins">MongoDB</h3>
          </div>
          <div
            className="w-20 h-20 flex justify-center items-center flex-col"
            data-aos="zoom-out"
          >
            <Circle
              animate={true} // Boolean: Animated/Static progress
              animationDuration="1s" //String: Length of animation
              responsive={true} // Boolean: Make SVG adapt to parent size
              size={150} // Number: Defines the size of the circle.
              lineWidth={20} // Number: Defines the thickness of the circle's stroke.
              progress={75} // Number: Update to change the progress and percentage.
              progressColor="#F29F05" // String: Color of "progress" portion of circle.
              bgColor="#343840" // String: Color of "empty" portion of circle.
              textColor="white" // String: Color of percentage text color.
              textStyle={{
                font: "bold 5rem Poppins, Arial, sans-serif", // CSSProperties: Custom styling for percentage.
              }}
              percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
              roundedStroke={true} // Boolean: Rounded/Flat line ends
              showPercentage={true} // Boolean: Show/hide percentage.
              showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
            />
            <h3 className="text-white font-Poppins">Mysql</h3>
          </div>
          <div
            className="w-20 h-20 flex justify-center items-center flex-col"
            data-aos="zoom-out"
          >
            <Circle
              animate={true} // Boolean: Animated/Static progress
              animationDuration="1s" //String: Length of animation
              responsive={true} // Boolean: Make SVG adapt to parent size
              size={150} // Number: Defines the size of the circle.
              lineWidth={20} // Number: Defines the thickness of the circle's stroke.
              progress={73} // Number: Update to change the progress and percentage.
              progressColor="#F29F05" // String: Color of "progress" portion of circle.
              bgColor="#343840" // String: Color of "empty" portion of circle.
              textColor="white" // String: Color of percentage text color.
              textStyle={{
                font: "bold 5rem Poppins, Arial, sans-serif", // CSSProperties: Custom styling for percentage.
              }}
              percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
              roundedStroke={true} // Boolean: Rounded/Flat line ends
              showPercentage={true} // Boolean: Show/hide percentage.
              showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
            />
            <h3 className="text-white font-Poppins">Photoshop</h3>
          </div>
          <div
            className="w-20 h-20 flex justify-center items-center flex-col"
            data-aos="zoom-out"
          >
            <Circle
              animate={true} // Boolean: Animated/Static progress
              animationDuration="1s" //String: Length of animation
              responsive={true} // Boolean: Make SVG adapt to parent size
              size={150} // Number: Defines the size of the circle.
              lineWidth={20} // Number: Defines the thickness of the circle's stroke.
              progress={70} // Number: Update to change the progress and percentage.
              progressColor="#F29F05" // String: Color of "progress" portion of circle.
              bgColor="#343840" // String: Color of "empty" portion of circle.
              textColor="white" // String: Color of percentage text color.
              textStyle={{
                font: "bold 5rem Poppins, Arial, sans-serif", // CSSProperties: Custom styling for percentage.
              }}
              percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
              roundedStroke={true} // Boolean: Rounded/Flat line ends
              showPercentage={true} // Boolean: Show/hide percentage.
              showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
            />
            <h3 className="text-white font-Poppins">Illustrator</h3>
          </div>
          <div
            className="w-20 h-20 flex justify-center items-center flex-col"
            data-aos="zoom-out"
          >
            <Circle
              animate={true} // Boolean: Animated/Static progress
              animationDuration="1s" //String: Length of animation
              responsive={true} // Boolean: Make SVG adapt to parent size
              size={150} // Number: Defines the size of the circle.
              lineWidth={20} // Number: Defines the thickness of the circle's stroke.
              progress={75} // Number: Update to change the progress and percentage.
              progressColor="#F29F05" // String: Color of "progress" portion of circle.
              bgColor="#343840" // String: Color of "empty" portion of circle.
              textColor="white" // String: Color of percentage text color.
              textStyle={{
                font: "bold 5rem Poppins, Arial, sans-serif", // CSSProperties: Custom styling for percentage.
              }}
              percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
              roundedStroke={true} // Boolean: Rounded/Flat line ends
              showPercentage={true} // Boolean: Show/hide percentage.
              showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
            />
            <h3 className="text-white font-Poppins">inDesign</h3>
          </div>
          <div
            className="w-20 h-20 flex justify-center items-center flex-col"
            data-aos="zoom-out"
          >
            <Circle
              animate={true} // Boolean: Animated/Static progress
              animationDuration="1s" //String: Length of animation
              responsive={true} // Boolean: Make SVG adapt to parent size
              size={150} // Number: Defines the size of the circle.
              lineWidth={20} // Number: Defines the thickness of the circle's stroke.
              progress={80} // Number: Update to change the progress and percentage.
              progressColor="#F29F05" // String: Color of "progress" portion of circle.
              bgColor="#343840" // String: Color of "empty" portion of circle.
              textColor="white" // String: Color of percentage text color.
              textStyle={{
                font: "bold 5rem Poppins, Arial, sans-serif", // CSSProperties: Custom styling for percentage.
              }}
              percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
              roundedStroke={true} // Boolean: Rounded/Flat line ends
              showPercentage={true} // Boolean: Show/hide percentage.
              showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
            />
            <h3 className="text-white font-Poppins">Figma</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
