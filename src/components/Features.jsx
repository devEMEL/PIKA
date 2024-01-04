import React from "react";
import ridersImg from "../assets/images/pencil1.png";
import easyPayImg from "../assets/images/hand1.png";
import lowPriceImg from "../assets/images/lowprice1.png";

const Features = () => {
  return (
    <div className="max-w-[96%] md:max-w-[90%] xl:max-w-[80%] w-[100%] mx-auto bg-[#FFFFFF] mt-20">
      <h1 className="text-center text-[#000000] font-['Open Sans'] text-[32px] md:text-[42px] font-[700] mb-[60px]">
        Features
      </h1>
      <div>
        <div className="flex flex-col lg:flex-row text-[#333333]">
          <div className="basis-1 mr-0 lg:basis-[32%] lg:mr-[2%] leading-[24px] pl-[30px] pr-[30px] py-[40px] border border-solid border-[#E2E2E2] rounded-[10px] shadow-[0px_6px_10px_5px_rgba(0,0,0,0.04)] mb-4 lg:mb-0">
            <img
              src={ridersImg}
              className="bg-[#5A449B] p-3 md:p-5 mt-5 rounded-[12px]"
            />

            <h1 className="text-[#000000] font-['Open Sans'] text-[24px] md:text-[34px] font-[700] my-10">
              Verified Riders
            </h1>
            <p className="leading-[30px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
              fermentum lorem. Lorem ipsum dolor sit amet adipiscing elit.
              Nullam id fermentum lorem. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </div>
          <div className="basis-1 mr-0 lg:basis-[32%] lg:mr-[2%] leading-[24px] pl-[30px] pr-[30px] py-[40px] border border-solid border-[#E2E2E2] rounded-[10px] shadow-[0px_6px_10px_5px_rgba(0,0,0,0.04)] mb-4 lg:mb-0">
            <img
              src={easyPayImg}
              className="bg-[#F15B35] p-3 md:p-5 mt-5 rounded-[12px]"
            />
            <h1 className="text-[#000000] font-['Open Sans'] text-[24px] md:text-[34px] font-[700] my-10">
              Easy pay
            </h1>
            <p className="leading-[30px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
              fermentum lorem. Lorem ipsum dolor sit amet adipiscing elit.
              Nullam id fermentum lorem. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </div>
          <div className="basis-1 lg:basis-[32%] leading-[24px] pl-[30px] pr-[30px] py-[40px] border border-solid border-[#E2E2E2] rounded-[10px] shadow-[0px_6px_10px_5px_rgba(0,0,0,0.04)]">
            <img
              src={lowPriceImg}
              className="bg-[#F15B35] p-3 md:p-5 mt-5 rounded-[12px]"
            />

            <h1 className="text-[#000000] font-['Open Sans'] text-[24px] md:text-[34px] font-[700] my-10">
              Low price
            </h1>
            <p className="leading-[30px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
              fermentum lorem. Lorem ipsum dolor sit amet adipiscing elit.
              Nullam id fermentum lorem. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
