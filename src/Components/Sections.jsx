import React from "react";
import { explore, login, payment } from "../assets";

const data = [
  {
    id: "01A",
    h0: "Create an account",
    heading_0: "Create/Login to an existing account to get started",
    para_0: " An account is created with your email and a desired password",
  },
  {
    id: "01b",
    h1: "Explore Varieties",
    heading_1: "Shop for your favorited meal as e dey hot.",
    para_1: "  Shop for your favorite meals or drinks and enjoy while doing it",
  },
  {
    id: "01C",
    h2: "Checkout",
    heading_2: "When you done check out and get it delivered.",
    para_2: "When you done checkout and get it delivered with ease",
  },
];

const Sections = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-[20%]">
      {/* login */}
      <Dynamic
        SmallHeading={data[0].h0}
        heading={data[0].heading_0}
        para={data[0].para_0}
        img={login}
      />
      {/* PAayment */}
      <Dynamic2
        SmallHeading={data[1].h1}
        heading={data[1].heading_1}
        para={data[1].para_1}
        img={payment}
      />
      {/* Explore */}
      <Dynamic3
        SmallHeading={data[2].h2}
        heading={data[2].heading_2}
        para={data[2].para_2}
        img={explore}
      />
    </div>
  );
};
const Dynamic = ({ SmallHeading, heading, para, img }) => {
  return (
    <div className="flex items-center flex-col">
      <h1 className="text-xl my-5 font-semibold text-[#FA4A0C]">
        {SmallHeading}
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="text-center px-5 md:text-left">
          <h3 className="text-2xl mb-5 font-bold md:text-[2rem] leading-[1.5] ">
            {heading}
          </h3>
          <p className="text-[14px] font-semibold">{para}</p>
        </div>
        <div className="ml-[16%]">
          <img src={img} alt="Login Mockup" />
        </div>
      </div>
    </div>
  );
};
const Dynamic2 = ({ SmallHeading, heading, para, img }) => {
  return (
    <div className="flex items-center flex-col">
      <h1 className="text-xl my-5 font-semibold text-[#FA4A0C]">
        {SmallHeading}
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="ml-[10%]">
          <img src={img} alt="Login Mockup" />
        </div>
        <div className="text-center px-5 md:text-left">
          <h3 className="text-2xl mb-5 font-bold md:text-[2rem] leading-[1.5] ">
            {heading}
          </h3>
          <p className="text-[14px] font-semibold">{para}</p>
        </div>
      </div>
    </div>
  );
};

const Dynamic3 = ({ SmallHeading, heading, para, img }) => {
  return (
    <div className="flex items-center flex-col">
      <h1 className="text-xl my-5 font-semibold text-[#FA4A0C]">
        {SmallHeading}
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="text-center px-5 md:text-left">
          <h3 className="text-2xl mb-5 font-bold md:text-[2rem] leading-[1.5] ">
            {heading}
          </h3>
          <p className="text-[14px] font-semibold">{para}</p>
        </div>
        <div className="ml-[16%]">
          <img src={img} alt="Login Mockup" />
        </div>
      </div>
    </div>
  );
};
export default Sections;
