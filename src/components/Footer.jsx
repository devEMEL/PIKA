import React from "react";
import { Pika } from "./Icons";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import twitter from "../assets/images/twitter.png";
import youtube from "../assets/images/youtube.png";

const Footer = () => {
  return (
    <div className="bg-[#000000]">
      <div className="sm:max-w-[94%] md:max-w-[90%] xl:max-w-[80%] w-[100%] mx-auto">
        <div className="flex sm:flex-col lg:flex-row text-[#FFFFFF] pt-[60px] font-['Robobto']">
          <div className="sm:basis-1 lg:basis-1/2 lg:pr-[10%]">
            <Pika />
            <p className="mt-[40px] font-[14px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
              nihil delectus laboriosam omnis assumenda nam ab! Repudiandae
              blanditiis facere sunt. Ullam ad quam harum quibusdam est
              accusantium odio consequatur maxime.
            </p>
          </div>
          <div className="basis-1/2 text-[15px] font-[400] leading-[23px] mt-[65px]">
            <div className="flex justify-between">
              <div>
                <p className="font-[500] mb-2">Home</p>
                <p className="font-[500] mb-2">Features</p>
                <p className="font-[500] mb-2">How it works</p>
                <p className="font-[500] mb-2">Tariffs</p>
              </div>
              <div>
                <p className="font-[500] mb-2">About</p>
                <p className="font-[500] mb-2">Cities</p>
                <p className="font-[500] mb-2">Contact us</p>
              </div>
              <div>
                <p className="font-[500] mb-2">Become a driver</p>
                <p className="font-[500] mb-2">Terms and conditions</p>
                <p className="font-[500] mb-2">Privacy Policy</p>
              </div>
              <div>
                <p className="font-[500] mb-2">info@abc.com</p>
                <p className="font-[500] mb-2">+91 988778889</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex sm:justify-center lg:justify-start mt-4">
          <img src={facebook} className="mr-4" />
          <img src={instagram} className="mr-4" />
          <img src={twitter} className="mr-4" />
          <img src={youtube} />
        </div>

        <div className="text-[#FFFFFF] text-center font-['Roboto'] text-[14px] font-[400] leading-[23px] pb-2 pt-[60px]">
          2023 De-Aelum LLC All Right Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
