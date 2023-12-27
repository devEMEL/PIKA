import React from "react";
import { Akure, AppStore, GPlay, HeroImg, Lagos, Oshogbo } from "./Icons";
import cuate from "../assets/images/cuate.png";

const Hero = () => {
  return (
    <div className="sm:max-w-[94%] md:max-w-[90%] xl:max-w-[80%] w-[100%] mx-auto bg-[#ffffff] my-20">
      <div className="flex sm:flex-col md:flex-row items-center">
        <div className="absolute left-[45%] bottom-[15%] sm:hidden lg:block">
          <Oshogbo />
        </div>
        <div className="absolute right-[5%] bottom-[7%] -mb-[20px] sm:hidden lg:block">
          <Akure />
        </div>

        {/* basis 1/2 */}
        <div className="lg:basis-1/2 font-['Poppins'] w-[100%]">
          <h1 className="text-[#FF592D] sm:text-[60px] sm:text-center lg:text-left xl:text-[90px] font-[800] leading-[88px]">
            Swift, Safe, & <br /> Secure
          </h1>
          <p className="text-[22.83px] font-[400] my-3 sm:text-center lg:text-left">
            We're Taking Delivery to the Next Level
          </p>
          
        </div>

        {/* basis 1/2 */}
        {/* sm:basis-1 lg:basis-1/2 sm:hidden lg:block */}
        <div className="lg:basis-1/2 flex justify-center items-center relative sm:hidden lg:block">
          <img src={cuate} className="w-[75%] m-auto" />

          <div className="absolute top-0 left-0 -mt-4 sm:hidden lg:block">
            <Lagos />
          </div>
        </div>
      </div>
      {/* sm:mt-40 lg:mt-20 */}
      <div className="flex md:w-[100%] lg:w-[50%]">
            <div className="flex sm:basis-1/2 items-center bg-[#000000] mr-5 rounded-md text-[#ffffff] sm:py-[4px] md:py-[10px] sm:pl-[10px] sm:pr-[40px] lg:pl-[10px] lg:pr-[40px]">
              <GPlay />
              <div className="ml-2">
                <button className="">
                  <p className="sm:text-[12.83px] xl:text-[18.83px]">
                    GET PIKA APP On
                  </p>
                  <p className="leading-[125.5%] font-[600] sm:text-[18.83px] xl:text-[27.83px]">
                    Google Play store
                  </p>
                </button>
              </div>
            </div>
            <div className="flex sm:basis-1/2 items-center bg-[#000000] rounded-md text-[#ffffff] sm:py-[4px] md:py-[10px] sm:pl-[10px] sm:pr-[40px] lg:pl-[10px] lg:pr-[40px]">
              <AppStore />
              <div className="ml-2">
                <button>
                  <p className="sm:text-[12.83px] xl:text-[18.83px]">
                    GET PIKA APP On
                  </p>
                  <p className="leading-[125.5%] font-[600] sm:text-[18.83px] xl:text-[27.83px]">
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
