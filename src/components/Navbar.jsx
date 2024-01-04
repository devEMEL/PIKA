import React from "react";
import { Map, MenuIcon, Pika } from "./Icons";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleMenuModal,
  showMenuModal,
  hideMenuModal,
} from "../services/features/menuModal/menuModalSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <div className="max-w-[96%] md:max-w-[90%] xl:max-w-[80%] w-[100%] mx-auto bg-[#ffffff] mt-[20px]">
      <div className="flex justify-between items-center">
        <div>
          <Pika />
        </div>

        <div className="hidden md:block">
          <div className="flex justify-between items-center font-['Poppins']">
            <p className="capitalize text-[22.83px] ml-6 font-[500]">Home</p>

            <p className="capitalize text-[16.83px] ml-6 font-[300]">
              
              <a href="#howItWorks">How It works</a>
            </p>
            <p className="capitalize text-[16.83px] ml-6 font-[300]"><a href="#partner">Partner With Us</a></p>
            {/* <p className="capitalize text-[16.83px] ml-6 font-[300]">
              Our offices
            </p> */}
            <button className="bg-[#E96A48CC] text-[#ffffff] ml-6 py-[10px] px-[22px] flex justify-between items-center rounded-md">
              <Map />
              <p className="ml-3 text-[#000000]"><a href="#earlyAccess">Early Access</a></p>
            </button>
          </div>
        </div>

        <div className="block md:hidden">
          <button
            onClick={() => {
              dispatch(showMenuModal());
              console.log("show menu bar");
            }}
          >
            <MenuIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
