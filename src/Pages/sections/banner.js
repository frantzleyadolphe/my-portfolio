import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Typewriter } from "react-simple-typewriter";
import profil from "../../assets/profil.png";
export default function Banner() {
  return (
    <div className="mx-5 lg:mx-20 mt-1 bg-[#131315] rounded-3xl h-[650px]">
      <div className="flex flex-col text-white text-center w-4/5 lg:w-1/2 h-full m-auto items-center justify-center">
        <img
          src={profil}
          alt="profil"
          className="rounded-full text-center h-28 lg:h-48 w-28 lg:w-48 m-5 self-center"
        />
        <h1 className="font-Poppins font-bold lg:text-3xl text-xl self-center">
          I'm a{" "}
          <span className="text-[#F29F05] ">
            <Typewriter
              words={[
                "<Developer />",
                "UI/UX Designer",
                "Brand Designer",
                "Content Creator",
                "Photographer",
                "Freelancer",
              ]}
              loop={5}
              cursor
              cursorStyle="|"
              cursorColor="white"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>
        <p className="font-Nanum font-normal text-sm  lg:text-sm mt-2 self-center ">
          I create illustrative designs that help your brand to life, produce
          intuitive digital product and build your website or mobile application
          from scratch to create a seamless user experience.
        </p>
        <div className="flex flex-row gap-5 self-center mt-5">
          <a
            href="https://www.linkedin.com/in/frantzley-adolphe-760b4b1b3/"
            className="hover:text-[#F29F05]"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/frantzleyadolphe"
            className="hover:text-[#F29F05]"
          >
            <GitHubIcon />
          </a>

          <a href="#" className="hover:text-[#F29F05]">
            <TwitterIcon />
          </a>

          <a
            href="https://www.instagram.com/frantzley.adolphe/"
            className="hover:text-[#F29F05]"
          >
            <InstagramIcon />
          </a>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 self-center">
          <button className="bg-[#F29F05] hover:text-[#131315] text-white font-Poppins py-2 px-4 rounded-full mt-5 ">
            <span className="flex flex-row gap-2 justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
              Download CV
            </span>
          </button>
          <button className="bg-[#F29F05] hover:text-[#131315] text-white font-Poppins py-2 px-4 rounded-full mt-1 lg:mt-5 flex flex-row gap-2">
            <span className="flex flex-row gap-2 justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 1.5a.75.75 0 0 1 .75.75V4.5a.75.75 0 0 1-1.5 0V2.25A.75.75 0 0 1 12 1.5ZM5.636 4.136a.75.75 0 0 1 1.06 0l1.592 1.591a.75.75 0 0 1-1.061 1.06l-1.591-1.59a.75.75 0 0 1 0-1.061Zm12.728 0a.75.75 0 0 1 0 1.06l-1.591 1.592a.75.75 0 0 1-1.06-1.061l1.59-1.591a.75.75 0 0 1 1.061 0Zm-6.816 4.496a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68ZM3 10.5a.75.75 0 0 1 .75-.75H6a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 10.5Zm14.25 0a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H18a.75.75 0 0 1-.75-.75Zm-8.962 3.712a.75.75 0 0 1 0 1.061l-1.591 1.591a.75.75 0 1 1-1.061-1.06l1.591-1.592a.75.75 0 0 1 1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
              Let's work together
            </span>
          </button>
        </div>
        <button className="self-center m-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M11.47 13.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 0 0-1.06-1.06L12 11.69 5.03 4.72a.75.75 0 0 0-1.06 1.06l7.5 7.5Z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M11.47 19.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 1 0-1.06-1.06L12 17.69l-6.97-6.97a.75.75 0 0 0-1.06 1.06l7.5 7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
