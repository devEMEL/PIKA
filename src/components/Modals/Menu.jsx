import React from "react";
import { Map, Pika, MenuIcon, CloseIcon } from "../Icons";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleMenuModal,
  showMenuModal,
  hideMenuModal,
} from "../../services/features/menuModal/menuModalSlice";

const Menu = () => {
  const { showModal } = useSelector((store) => store.menuModal);
  const dispatch = useDispatch();
  return (
    <>
      {showModal && (
        <div className="block md:hidden">
          <div className="max-w-[96%] w-[100%] mx-auto fixed">
            <div className="w-full fixed top-[0] left-[0]">
              <div className="bg-[#000000] text-[#FFFFFF] pb-[100vh]">
                <div className="pt-4 pb-6 pl-6 flex justify-between items-center">
                  <div className="">
                    <Pika />
                  </div>
                  <div className="mr-4">
                    <button
                      onClick={() => {
                        if (showModal == true) {
                          dispatch(hideMenuModal());
                          console.log("hide menu bar");
                        } else {
                          dispatch(showMenuModal());
                          console.log("show menu bar");
                        }
                      }}
                    >
                      {!showModal ? <MenuIcon /> : <CloseIcon />}
                    </button>
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="capitalize text-[22.83px] pl-6 font-[500] pb-2 mt-2 mb-1 border-b-2 border-solid border-[#FFFFFF]">
                    <a
                      href="#"
                      onClick={() => {
                        dispatch(hideMenuModal());
                        console.log("show menu bar");
                      }}
                    >
                      Home
                    </a>
                  </p>

                  <p className="capitalize text-[16.83px] pl-6 font-[300] pb-2 mb-2 border-b-2 border-solid border-[#FFFFFF]">
                    <a
                      href="#howItWorks"
                      onClick={() => {
                        dispatch(hideMenuModal());
                        console.log("show menu bar");
                      }}
                    >
                      How It works
                    </a>
                  </p>

                  <p className="capitalize text-[16.83px] pl-6 font-[300] pb-2 mb-2 border-b-2 border-solid border-[#FFFFFF]">
                    <a
                      href="#partner"
                      onClick={() => {
                        dispatch(hideMenuModal());
                        console.log("show menu bar");
                      }}
                    >
                      Partner With Us
                    </a>
                  </p>

                  {/* <p className="capitalize text-[16.83px] pl-6 font-[300] pb-2 mb-2 border-b-2 border-solid border-[#FFFFFF]">
                    <button>Our offices</button>
                  </p> */}

                  <p className="text-[#ffffff] pl-6 flex items-center rounded-md mb-2 border-b-2 border-solid border-[#FFFFFF]">
                    <a
                      href="#earlyAccess"
                      onClick={() => {
                        dispatch(hideMenuModal());
                        console.log("show menu bar");
                      }}
                    >
                      <Map />
                    </a>
                    <span className="ml-3">
                      <a
                        href="#earlyAccess"
                        onClick={() => {
                          dispatch(hideMenuModal());
                          console.log("show menu bar");
                        }}
                      >
                        Early Access
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
