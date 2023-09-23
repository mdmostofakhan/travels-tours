import React from "react";
import { Icon } from '@iconify/react';
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
const About = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-8 mt-12">
        <div className="w-auto">
          <h2 className="text-[#c29d59] text-xl">Best agency</h2>
          <p className="text-black font-semibold text-6xl mt-2">Why choose our <span className="text-[#c29d59] font-semibold text-6xl">travel</span></p>
          <p className="text-[#c29d59] font-semibold text-6xl mt-2">agency</p>
               <p className="mt-11">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                <p className="mt-2">incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                <p className="mt-2">exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p className="mt-6">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
                <p className="mt-2">nulla pariatur. Excepteur sint occaecat cupidatat non proident, s</p>
            <div className=" grid grid-cols-2 mt-8">
                <div>
                <div className="bg-[#c29d59] border text-center justify-center  text-white w-[58px] h-[58px] rounded-full">
                  <Icon className=" text-4xl font-semibold mt-2 ml-2"  icon="arcticons:supercasts" />
                  </div>
                   <p className="text-black font-semibold text-2xl mt-2">Trust & Safety</p>
                   <p className="mt-6" >All our cars come from main dealers and</p>
                   <p>go through rigorous checks and tests before they <br />arrive at your door</p>
                   
                </div>
                <div>
                <div className="bg-[#c29d59] border text-center justify-center  text-white w-[58px] h-[58px] rounded-full">
                  <Icon className=" text-4xl font-semibold mt-2 ml-2"  icon="arcticons:supercasts" />
                  </div>
                   <p className="text-black font-semibold text-2xl mt-2">Trust & Safety</p>
                   <p className="mt-6" >All our cars come from main dealers and</p>
                   <p>go through rigorous checks and tests before they <br /> arrive at your door</p>
                   
                </div>
                </div>
                <p className="mt-6">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint <br /> occaecat cupidatat non proident, s</p>
                  <p className="mt-10">Make your holiday Special</p>
           </div>
        <div className="relative">
          <img className=" w-9/12 absolute right-6 h-full" src={image1} alt="" />
          <img className=" w-9/12  absolute 0-left-8 top-[420px]" src={image2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
