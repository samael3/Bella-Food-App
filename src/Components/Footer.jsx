import React from "react";
import { fb, ig, twitter, footerBg } from "../assets";
const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#252B42] md:bg-transparent text-[#f1f1f1] px-4 py-6 ">
      <img
        src={footerBg}
        alt="Footer Bg"
        className="hidden md:flex absolute w-full h-[50vh] -z-10"
      />
      <div className="text-center">
        <h1 className="font-bold text-3xl mb-5">Download the app now</h1>
        <p className="font-[400] text-xl mb-5">
          Most calendars are <br /> designed for teams
        </p>
      </div>
      <div className="flex items-center justify-around my-5 gap-4">
        <Button text={"Buy More"} />
        <Button text={"Try for free"} />
      </div>
      <div className="flex items-center justify-around w-[40%] md:w-[20%] mt-5">
        <img src={fb} alt="Facebook" />
        <img src={ig} alt="Instagram" />
        <img src={twitter} alt="Twitter" />
      </div>
    </div>
  );
};

const Button = ({ text }) => {
  return (
    <button className="  bg-[#FA4A0C]  px-8  py-3  rounded-lg ">{text}</button>
  );
};
export default Footer;
