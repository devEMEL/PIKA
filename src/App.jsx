import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EarlyAccess from "./components/EarlyAccess";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import ApplyNow from "./components/ApplyNow";
import Partner from "./components/Partner";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Flex from "./components/Flex";
import Menu from "./components/Modals/Menu";
import { useDispatch, useSelector } from "react-redux";
import { hideMenuModal } from "../src/services/features/menuModal/menuModalSlice";

export default function App() {
  const { showModal } = useSelector((store) => store.menuModal);
  const dispatch = useDispatch();

  window.addEventListener("resize", () => {
    const screenSize = document.body.clientWidth;
    if (screenSize >= 768) {
      if (showModal == false) {
        dispatch(hideMenuModal());
      }
    }


    // run once md screen size is reached
    //get screen width
    // on width of 768 above
    // check if showModal is false, else set it to false
  });
  return (
    <div className="overflow-hidden m-0 p-0 w-full h-full">
      <Navbar />
      <Hero />
      <EarlyAccess />
      <HowItWorks />
      <Features />
      <ApplyNow />
      <Partner />
      <ContactUs />
      <Footer />
      {/* <Flex /> */}

      
      {/* Modals */}
      <Menu />
    </div>
  );
}
