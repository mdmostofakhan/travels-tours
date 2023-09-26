import React from "react";
import { Icon } from "@iconify/react";
import imagebg from "../../assets/map-pattern.png";
import icon1 from "../../assets/icons/icon-1.png";
import icon2 from "../../assets/icons/icon-2.png";
import icon3 from "../../assets/icons/icon-3.png";
import MainAbout from "./MainAbout";



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

      {/* for,,,,,,,,,,,,,,,,,,, */}

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

      {/* five,,,,,,,,, */}
      <div className=" w-[60%] mx-auto  mt-8">
        <div className="w-full ">
          <div
            className="   bg-center  w-full bg-no-repeat  h-96 top-24"
            style={{
              backgroundImage: `url(${imagebg})`,
            }}
          >
            <div className="flex justify-around gap-4 ">
              <div className="">
                <img className="w-[60px]" src={icon1} alt="" />
                <p className="mt-4 font-secondary text-2xl ">Total Travel</p>
                <p className="mt-4 font-secondary text-5xl ">1K+</p>
              </div>
              <div className="">
                <img className="w-[60px]" src={icon2} alt="" />
                <p className="mt-4 font-secondary text-2xl ">Travel Country</p>
                <p className="mt-4 font-secondary text-5xl ">30</p>
              </div>
              <div className="">
                <img className="w-[70px]" src={icon3} alt="" />
                <p className="mt-4 font-secondary text-2xl ">
                  Five Star Rating
                </p>
                <p className="mt-4 font-secondary text-5xl ">20+</p>
              </div>
            </div>
            <div className="text-center mt-6 text-xl">
              <p>
                Along with 1000s of cars to choose from, you can apply for
                finance online and value your <br /> existing car all from the
                comfort of your favourite armchair
              </p>
            </div>
            <div className=" flex justify-center mt-6">
              <button className=" btn-animation border text-center py-4 text-xl bg-[#C29D59]  text-white  px-4">
                <span className=" relative z-10">THINGS TO DO</span>
              </button>
            </div>
           
          </div>
        </div>
      </div>
             
      <div className="mt-12">
        <MainAbout></MainAbout>
      </div>
       
    </div>
  );
};

export default About;
