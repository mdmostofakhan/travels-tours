import React from "react";
import { Icon } from "@iconify/react";


const About = () => {
  return (
    <div className="container mx-auto">
      <div className="flex gap-10 mt-12">
        <div className="">
          <h4 className="text-primary text-xl">Best agency</h4>
          <h2 className="text-5xl mt-4 font-primary">
            Why choose our{" "}
            <span className="text-primary">
              travel <br /> agency
            </span>
          </h2>
          <p className="mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. <br /> <br /> Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, s
          </p>
          <div className=" flex gap-10 mt-8">
            <div>
              <div className="bg-[#c29d59] border text-center justify-center  text-white w-[58px] h-[58px] rounded-full">
                <Icon
                  className=" text-4xl font-semibold mt-2 ml-2"
                  icon="arcticons:supercasts"
                />
              </div>
              <p className="text-black font-semibold text-2xl mt-2">
                Trust Safety
              </p>
              <p className="mt-6">All our cars come from main dealers and</p>
              <p>
                go through rigorous checks and tests before they <br />
                arrive at your door
              </p>
            </div>
            <div>
              <div className="bg-[#c29d59] border text-center justify-center  text-white w-[58px] h-[58px] rounded-full">
                <Icon
                  className=" text-4xl font-semibold mt-2 ml-2"
                  icon="clarity:airplane-line"
                />
              </div>
              <p className="text-black font-semibold text-2xl mt-2">
                Packages 10,000+
              </p>
              <p className="mt-6">All our cars come from main dealers and</p>
              <p>
                go through rigorous checks and tests before they <br /> arrive
                at your door
              </p>
            </div>
          </div>
          <p className="mt-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint <br />{" "}
            occaecat cupidatat non proident, s
          </p>
          <p className="mt-10 font-semibold text-2xl">
            Make your holiday Special
          </p>
        </div>

        {/* second,,,,,,,,,,,,,,,,,,,,, */}
        <div className="w-full flex  justify-center">
          <div className="w-8/12  relative">
            <img
              className="w-full h-[600px] object-cover "
              src="https://plus.unsplash.com/premium_photo-1677343210638-5d3ce6ddbf85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              className="absolute -left-32 top-auto bottom-2 w-11/12"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* three,,,,,,,,,,,,,,,,,,,,,, */}
      <div className="flex gap-10 mt-20  ">
        <div className="w-full">
          <img
            src="https://images.unsplash.com/photo-1505832018823-50331d70d237?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2108&q=80"
            className="w-11/12"
            alt=""
          />
        </div>
        <div className="">
          <p className=" text-5xl mt-8">Achive Summary</p>
          <p className="mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat <br /> <br />
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
            <br /> <br />
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat
          </p>
        </div>
      </div>

      <div className="flex flex-row-reverse gap-10 mt-20  ">
        <div className="w-full">
          <img
            src="https://images.unsplash.com/photo-1612278675615-7b093b07772d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
            className="w-full"
            alt=""
          />
        </div>
        <div className="">
          <p className=" text-5xl mt-8">Achive Summary</p>
          <p className="mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat <br /> <br />
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
            <br /> <br />
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default About;
