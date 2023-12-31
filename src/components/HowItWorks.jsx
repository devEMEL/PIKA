import React from "react";
import { DeliveryIcon } from "./Icons";
import deliveryIcon from "../assets/images/trackDelivery.png";
import selectAddressIcon from "../assets/images/selectAddress.png";
import selectCategoryIcon from "../assets/images/selectCategory.png";
import trackDeliveryIcon from "../assets/images/trackDelivery.png";

const HowItWorks = () => {
  return (
    <div className="max-w-[96%] md:max-w-[90%] xl:max-w-[80%] w-[100%] mx-auto bg-[#ffffff] mt-[20px]" id="howItWorks">
      <h1 className="text-center text-[#000000] font-['Open Sans'] text-[32px] md:text-[42px] font-[700] mt-20">
        How It Works
      </h1>
      <div className="flex flex-col md:flex-row md:items-center mt-[30px] md:mt-[50px] mb-[50px]">
        <div className="basis-1 md:basis-1/2 pl-[40px] pl-0">
          <h1 className="text-[#000000] font-['Open Sans'] text-[24px] md:text-[34px] font-[700] mb-2">
            Select your Delivery Type
          </h1>
          <p className="text-[#444444] font-['Open Sans'] text-[16px] md:text-[18px] font-[400] leading-[35px] tracking-[0.36px] mb-8">
            With Pika you can request the type of delivery you want <br />
            ranging from same day delivery to Interstate Delivery
          </p>
        </div>
        <div className="basis-1 md:basis-1/2 md:flex md:justify-end flex justify-center">
          <img src={deliveryIcon} />
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center mt-[50px] mb-[50px]">
        <div className="basis-1 md:basis-1/2 md:flex md:justify-start flex justify-center">
          <img src={selectAddressIcon} />
        </div>

        <div className="basis-1 md:basis-1/2 pl-[40px] pl-0 -order-1 md:order-2">
          <h1 className="text-[#000000] font-['Open Sans'] text-[24px] md:text-[34px] font-[700] mb-2">
            Select your Address
          </h1>
          <p className="text-[#444444] font-['Open Sans'] text-[16px] md:text-[18px] font-[400] leading-[35px] tracking-[0.36px] mb-8">
            With Pika you can do Bla Bla Bla Bla Bla
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center mt-[50px] mb-[50px]">
        <div className="basis-1 md:basis-1/2 pl-[40px] pl-0">
          <h1 className="text-[#000000] font-['Open Sans'] text-[24px] md:text-[34px] font-[700] mb-2">
            Select your Category and Size
          </h1>
          <p className="text-[#444444] font-['Open Sans'] text-[16px] md:text-[18px] font-[400] leading-[35px] tracking-[0.36px] mb-8">
            With Pika you can bla bla bla bla bla bla bla bla bla bl abla <br />
            vkdjhvsdjsdjifbsduf h/g;fhdf b uhfgvsd yj
          </p>
        </div>
        <div className="basis-1 md:basis-1/2 md:flex md:justify-end flex justify-center">
          <img src={selectCategoryIcon} />
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center mt-[50px] mb-[50px]">
        <div className="basis-1 md:basis-1/2 md:flex md:justify-start flex justify-center order-last md:-order-1">
          <img src={trackDeliveryIcon} />
        </div>

        <div className="basis-1 md:basis-1/2 pl-[40px] pl-0">
          <h1 className="text-[#000000] font-['Open Sans'] text-[24px] md:text-[34px] font-[700] mb-2">
            Track and Monitor your Delivery <br /> in Real time
          </h1>
          <p className="text-[#444444] font-['Open Sans'] text-[16px] md:text-[18px] font-[400] leading-[35px] tracking-[0.36px] mb-8">
            With Pika you can do bal bla bl a bla <br /> bla bla lbbblablabla
            blaba\ jifdi g wydhsa
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
