import React from "react";

import pikaMobile from "../assets/images/pikaMobile.png";

const EarlyAccess = () => {
  return (
    <div className="sm:max-w-[94%] md:max-w-[90%] xl:max-w-[80%] w-[100%] mx-auto bg-[#FFFFFF] mt-40">
      <div className="flex sm:flex-col md:flex-row md:items-center">
        <div className="sm:basis-[100%] sm:mb-4 md:basis-[50%] lg:basis-[40%] md:hidden lg:block">
          <div className="sm:flex sm:justify-center sm:mb-4">
            <img src={pikaMobile} className="w-[300px] lg:w-[350px]" />
          </div>
        </div>
        <div className="sm:basis-[100%] md:basis-[50%] lg:basis-[60%]">
          <div className="font-['Montserrat']">
            <h1 className="text-[#E10000] text-[24px] font-bold font-[700] leading-[36px] tracking-[0.1px] sm:">
              Get early access
            </h1>
            <h1 className="text-[#252B42] md:text-[40px] sm:text-[30px] font-[700] leading-[57px] tracking-[0.2px] mt-[10px] mb-[20px]">
              Be part of the first users
            </h1>
            <p className="text-[#737373] md:text-[24px] sm:text-[20px] font-[500] leading-[30px] tracking-[0.2px]">
              Join the Pika waitlist today and be the first to <br /> know when
              we launch! get your delivery at your <br /> Fingertips.
            </p>
            <div className="">
              <form
                action=""
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="flex sm:flex-col md:flex-row mt-[40px]">
                  <div className="sm:mr-0 md:mr-8">
                    <input
                      type="text"
                      placeholder="Email address"
                      className="sm:w-[100%] sm:mb-4 md:w-[357px] md:h-[68px] sm:h-[55px] px-[37px] py-[13px] rounded-[30px] outline-0 border border-solid border-[#C1C1C1] placeholder:text-[#A5A5A5] placeholder:text-[18px] font-['Sora'] font-[400]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="sm:w-[100%] md:w-[357px] md:h-[68px] sm:h-[55px] rounded-[30px] bg-[#FF592D] text-[#FFFFFF] text-[18px] font-[700] leading-[36px] tracking-[0.1px]" 
                    
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarlyAccess;
