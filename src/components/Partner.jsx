import React from "react";

const Partner = () => {
  return (
    <div className="bg-[#5A449B] max-w-[100%] w-[100%]">
      <div className="sm:max-w-[94%] md:max-w-[90%] xl:max-w-[80%] w-[100%] mx-auto mt-20">
        <div className="flex flex-col items-center sm:py-[50px] md:py-[100px] font-['Montserrat']">
          <h1 className="sm:text-[30px] md:text-[40px] font-[700] leading-[57px] tracking-[0.2px] text-[#FFFFFF]">
            Want to partner with us ?
          </h1>

          <p className="sm:text-[20px] md:text-[24px] font-[500] leading-[38px] tracking-[0.2px] text-center text-[#ffffff] mt-6 sm:mb-6 md:mb-12">
            Are you a logistics company looking to expand your reach. Or you{" "}
            <br />
            would like to be part of what we are building.
          </p>
          <button
            type="submit"
            className="sm:w-[100%] md:w-[357px] md:h-[68px] sm:h-[55px] rounded-[30px] bg-[#FF592D] text-[#FFFFFF] text-[24px] font-[700] leading-[36px] tracking-[0.1px] sm:mt-0 md:mt-8"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Partner;
