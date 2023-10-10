import React from "react";
// import "animate.css/animate.min.css";

const HeroSection = () => {
  return (
    <div className="text-white bg-[#0B0E11] py-16 overflow-x-hidden min-w-screen-sm">
      <div className="max-w-full mt-[-96px] min-w-screen-sm min-w-screen-md min-w-screen-lg min-w-screen-xl h-screen mx-auto text-center flex flex-col justify-center sm:max-w-[90%] md:m-auto">
        <p style={{fontFamily:'cursive'}} className="text-[#00df9a] font-bold text-[4em] md:text-7xl sm:text-[2em] sm:mt-[3.5em] text-4xl">
          ALO NDUBUISI
        </p>
        <div>
          <p className="pt-[1em] text-2xl font-bold text-gray-500">
            SOFTWARE ENGINEER | DATA ANALYST
          </p>
        </div>
        <div>
          <p className="py-4 text-2xl font-bold text-gray-500">
            Python | Django | Reactjs | Nextjs Developer and Data Analyst
          </p>
          <div className='pt-3 sm:flex flex-col sm:max-w-screen-xl'>
            <a href='https://github.com/AloNdubuisi?tab=repositories' className='bg-[#00df9a] rounded-md font-medium mx-2 my-3 md:mx-2 sm:mx-2 p-2 text-[#000] text-2xl'>
            My Resume
            </a>
            <a href='https://github.com/AloNdubuisi?tab=repositories' className='bg-[#00df9a] rounded-md font-medium my-0 md:mx-2
          sm:mx-2 p-2 text-[#000] text-2xl'>
              Public Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
