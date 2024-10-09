import React from "react";
import profilepic from "../assets/daniel.png";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div>
      <div className="max-w-[1200px] h-[80vh] mx-auto flex flex-col-reverse sm:flex-row justify-center align-center">
        
        {/* Left Side with Text */}
        <div className="my-auto">
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
            <TypeAnimation
              sequence={[
                "Full-Stack Dev",
                1000,
                "Bioinformatics",
                1000,
                "CS Junior @ UF",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <div className="flex justify-center items-center">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold text-gray-200">
              with 2+ years experience
            </p>
          </div>

          {/* Social media icons */}
          <div className="text-5xl flex justify-start gap-16 my-7 text-purple-600">
            {/* LinkedIn Button */}
            <a href="https://linkedin.com/in/danielgeorge922" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin />
            </a>

            {/* GitHub Button */}
            <a href="https://github.com/danielgeorge922" target="_blank" rel="noopener noreferrer">
              <AiFillGithub />
            </a>
          </div>

          {/* Download CV Button */}
          <div className="relative inline-flex group my-3">
            <div className="absolute transition-all 
            duration-1000 opacity-70 -inset-px bg-gradient-to-r
             from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl 
             blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <a
              href="https://drive.google.com/file/d/1SHyN52-f-RCU_3SlGn8avuzwZtL4CxfF/view?usp=sharing" // Add your CV download link here
              title="Download CV"
              role="button"
              className="w-[190px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-color font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right Side with Profile Picture */}
        <div className="my-auto">
          <img
            className="w-[300px] sm:w-[500px] mx-auto h-auto rounded-full"
            src={profilepic}
            alt="profile pic"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
