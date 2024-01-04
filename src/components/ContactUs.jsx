import React from "react";
import map from "../assets/images/map.png";
const ContactUs = () => {
  return (
    <div
      className="max-w-[96%] md:max-w-[90%] xl:max-w-[80%] w-[100%] mx-auto bg-[#ffffff] mt-20 mb-20"
      id="about"
    >
      <h1 className="text-center text-[#000000] font-['Open Sans'] text-[32px] md:text-[42px] font-[700] mb-[60px]">
        Contact Us
      </h1>

      <div className="flex flex-col lg:flex-row">
        <div className="basis-1 lg:basis-1/2 lg:p-4">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="">
              <div>
                <input
                  type="text"
                  placeholder="Email address"
                  className="border-0 outline-0 bg-[#FAFAFA] rounded-[5px] py-3 px-5 w-[100%] mb-2 placeholder:text-[#5A5A5A] placeholder:text-[16px] placeholder:font-[400] placeholder:font-['Gothic A1']"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border-0 outline-0 bg-[#FAFAFA] rounded-[5px] py-3 px-5 w-[100%] mb-2 placeholder:text-[#5A5A5A] placeholder:text-[16px] placeholder:font-[400] placeholder:font-['Gothic A1']"
                />
              </div>
              <div>
                <textarea
                  name="Message"
                  placeholder="Message"
                  id=""
                  cols="30"
                  rows="10"
                  className="border-0 outline-0 bg-[#FAFAFA] rounded-[5px] py-3 px-5 w-[100%] mb-4 placeholder:text-[#5A5A5A] placeholder:text-[16px] placeholder:font-[400] placeholder:font-['Gothic A1']"
                ></textarea>
              </div>

              <div className="w-[100%] md:[65%] flex justify-center">
                <button
                  type="submit"
                  className="w-[113px] h-[38px] bg-[#00B16E] rounded-[5px]"
                >
                  Submit
                </button>
              </div>
              {/* 505 */}
            </div>
          </form>
        </div>

        <div className="basis-1 lg:basis-1/2 hidden lg:block">
          <img src={map} />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
