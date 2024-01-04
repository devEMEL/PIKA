import React from "react";
import { Akure, AppStore, GPlay, HeroImg, Lagos, Oshogbo } from "./Icons";
import cuate from "../assets/images/cuate.png";

const Hero = () => {
  return (
    <div className="max-w-[96%] md:max-w-[90%] xl:max-w-[80%] w-[100%] mx-auto bg-[#ffffff] my-20">
      <div className="flex flex-col md:flex-row items-center">
        <div className="absolute left-[45%] bottom-[15%] hidden lg:block">
          <Oshogbo />
        </div>
        <div className="absolute right-[5%] bottom-[7%] -mb-[20px] hidden lg:block">
          <Akure />
        </div>

        {/* basis 1/2 */}
        <div className="lg:basis-1/2 font-['Poppins'] w-[100%]">
          <h1 className="text-[#FF592D] text-[60px] text-center lg:text-left xl:text-[90px] font-[800] leading-[88px]">
            Swift, Safe, & <br /> Secure
          </h1>
          <p className="text-[22.83px] font-[400] my-3 text-center lg:text-left mt-10">
            We're Taking Delivery to the Next Level
          </p>
        </div>

        {/* basis 1/2 */}
        {/* basis-1 lg:basis-1/2 hidden lg:block */}
        <div className="lg:basis-1/2 flex justify-center items-center relative hidden lg:block">
          <img src={cuate} className="w-[75%] m-auto" />

          <div className="absolute top-0 left-0 -mt-4 hidden lg:block">
            <Lagos />
          </div>
        </div>
      </div>
      {/* mt-40 lg:mt-20 */}
      <div className="flex w-[100%] lg:w-[50%]">
        <div className="flex basis-1/2 items-center bg-[#000000] rounded-md text-[#ffffff] py-[4px] md:py-[10px] pl-[10px] pr-[40px] lg:pl-[10px] lg:pr-[40px]">
          <GPlay />
          <div className="ml-2">
            <button>
              <p className="text-[12.83px] xl:text-[18.83px]">
                GET PIKA APP On
              </p>
              <p className="leading-[125.5%] font-[600] text-[18.83px] xl:text-[27.83px]">
                Google Play store
              </p>
            </button>
          </div>
        </div>
        <div className="flex basis-1/2 items-center bg-[#000000] rounded-md text-[#ffffff] py-[4px] md:py-[10px] pl-[10px] pr-[40px] lg:pl-[10px] lg:pr-[40px] ml-5">
          <AppStore />
          <div className="ml-2">
            <button>
              <p className="text-[12.83px] xl:text-[18.83px]">
                GET PIKA APP On
              </p>
              <p className="leading-[125.5%] font-[600]0 text-[18.83px] xl:text-[27.83px]">
                App store
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
