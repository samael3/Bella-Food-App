import React from "react";
import { mockup, bgMain } from "../assets";
const Home = () => {
  return (
    <div className="flex items-center flex-col w-full h-[100vh]">
      <img
        src={bgMain}
        className=" hidden md:flex w-full  object-cover absolute -z-10 opacity-95 "
      />
      <div className="mt-[1.5rem] md:flex flex-col items-center justify-center h-[60vh]">
        {/* TextBox */}
        <div className="text-center px-4 text-[] md:text-[#f1f1f1]">
          <h3 className="text-sm font-bold my-4 ">Food App</h3>
          <p className="text-3xl font-bold mb-4 md:px-[15%] leading-[3rem]	">
            Why stay hungry when you can order form Bella Onojie
          </p>
          <p className="text-[1rem] mb-3">
            Download the bella onoje's food app now on{" "}
          </p>
        </div>
        {/* Button */}
        <div className="flex items-center justify-center p-4 flex-col gap-5 md:flex-row">
          <Button text={"Play Store"} />
          <Button text={"App Store"} />
        </div>
      </div>
      <Mockup />
    </div>
  );
};
const Button = ({ text }) => {
  return (
    <button className="bg-[#FA4A0C] px-8 py-3 rounded-lg text-[#f1f1f1] text-[13.5px] font-bold hover:bg-white border-white bg-none">
      {text}
    </button>
  );
};

const Mockup = () => {
  return (
    <div
      className="w-full flex flex-col items-center justify-center h-[35vh]
    "
    >
      <div className="">
        <img src={mockup} />
        {/* <div className=" bg-gray-400 h-[3px] hidden md:inline-block"></div> */}
      </div>
    </div>
  );
};

export default Home;
