import React from "react";
import applyNow from "../assets/images/applyNow.png";
const ApplyNow = () => {
  return (
    <div className="sm:max-w-[94%] md:max-w-[90%] xl:max-w-[80%] w-[100%] mx-auto bg-[#ffffff] my-20">
      <div className="flex sm:flex-col md:flex-row items-center">
        <div className="basis-1/2 flex justify-center md:mr-8 sm:mr-0">
          <img src={applyNow} />
        </div>
        <div className="basis-1/2">
          <div className="font-['Montserrat']">
            <h1 className="text-[#E10000] sm:text-[20px] md:text-[24px] font-bold font-[700] leading-[36px] tracking-[0.1px] sm:mt-8 md:mt-0">
              Earn as a Pika rider
            </h1>
            <h1 className="text-[#252B42] sm:text-[30px] md:text-[40px] font-[700] leading-[57px] tracking-[0.2px] mt-[10px] mb-[20px]">
              Become a rider
            </h1>
            <p className="text-[#737373] sm:text-[20px] md:text-[24px] font-[500] leading-[38px] tracking-[0.2px]">
              You have the freedom to determine the timing, location, and extent
              of your work. You can choose to accept or decline orders and
              easily find deliveries in your vicinity. The need to report to a
              physical office or answer to a supervisor becomes a thing of the
              past
            </p>

            <button
              type="submit"
              className="sm:w-[100%] md:w-[357px] md:h-[68px] sm:h-[55px] rounded-[30px] bg-[#FF592D] text-[#FFFFFF] text-[18px] font-[700] leading-[36px] tracking-[0.1px] mt-8"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyNow;
