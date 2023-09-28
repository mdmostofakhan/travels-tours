import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Icon } from '@iconify/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import AboutSection from "./AboutSection";
import TitleSection from "./TitleSection";

const MainAbout = () => {
  // const [travels, setTravels] = useState();
   
  const travels = [
    {
      id: 0,
      title: "New Travels",
      image: "https://gico.io/ghurbo/demos/ghurbo/images/resource/team-1.jpg",
      jobPosition: "CTO Travel"
    },
    {
      id: 1,
      title: "New Travels",
      image: "https://gico.io/ghurbo/demos/ghurbo/images/resource/team-2.jpg",
      jobPosition: "CTO Travel"
    },
    {
      id: 2,
      title: "New Travels",
      image: "https://gico.io/ghurbo/demos/ghurbo/images/resource/team-3.jpg",
      jobPosition: "CTO Travel"
    },
    {
      id: 4,
      title: "New Travels",
      image: "https://gico.io/ghurbo/demos/ghurbo/images/resource/team-4.jpg",
      jobPosition: "CTO Travel"
    },
  ]

  // useEffect(() => {
  //   fetch("file.json")
  //     .then((res) => res.json())
  //     .then((data) => setTravels(data));
  //   console.log(travels);
  // }, []);

  

  return (
    <div>
      <div className="mt-10">
        <iframe
          className="w-full h-[600px]"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/kxPCFljwJws?si=61ggZDPxYJpziJg8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div>
      <TitleSection newTitle={"TRENDING"} teams={"Destinations"}/>
      </div>
      {/* swiper,,,,,,,,,,,,,,,,,,,,,,,,, */}

      <div className="w-full">
        <>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            // pagination={{
            //   clickable: true,
            // }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className=" relative">
                <div className="">
                  <h1 className="absolute top-32 text-5xl text-white italic right-48">
                    Vietnam{" "}
                  </h1>
                  <div className="bg-[#c29d59]  absolute text-center end-8 bottom-1 text-white w-[64px] h-[64px] rounded-full">
                    <h1 className=" text-xl text-center">15 Tours</h1>
                  </div>
                </div>
                <img
                  src="https://gico.io/ghurbo/demos/ghurbo/images/resource/destination-2.jpg"
                  className="bg-cover"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" relative">
                <div className="">
                  <h1 className="absolute top-32 text-5xl text-white italic right-48">
                    Indonesia
                  </h1>
                  <div className="bg-[#c29d59]  absolute text-center end-8 bottom-1 text-white w-[64px] h-[64px] rounded-full">
                    <h1 className=" text-xl text-center">40 Tours</h1>
                  </div>
                </div>
                <img
                  src="https://gico.io/ghurbo/demos/ghurbo/images/resource/destination-1.jpg"
                  className="bg-cover"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" relative">
                <div className="">
                  <h1 className="absolute top-32 text-5xl text-white italic right-48">
                    Pakistan{" "}
                  </h1>
                  <div className="bg-[#c29d59]  absolute text-center end-8 bottom-1 text-white w-[64px] h-[64px] rounded-full">
                    <h1 className=" text-xl text-center">21 Tours</h1>
                  </div>
                </div>
                <img
                  src="https://gico.io/ghurbo/demos/ghurbo/images/resource/destination-4.jpg"
                  className="bg-cover"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" relative">
                <div className="">
                  <h1 className="absolute top-32 text-5xl text-white italic right-48">
                    Thailend{" "}
                  </h1>
                  <div className="bg-[#c29d59]  absolute text-center end-8 bottom-1 text-white w-[64px] h-[64px] rounded-full">
                    <h1 className=" text-xl text-center">60 Tours</h1>
                  </div>
                </div>
                <img
                  src="https://gico.io/ghurbo/demos/ghurbo/images/resource/destination-3.jpg"
                  className="bg-cover"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" relative">
                <div className="">
                  <h1 className="absolute top-32 text-5xl text-white italic right-48">
                    vietnam{" "}
                  </h1>
                  <div className="bg-[#c29d59]  absolute text-center end-8 bottom-1 text-white w-[64px] h-[64px] rounded-full">
                    <h1 className=" text-xl text-center">15 Tours</h1>
                  </div>
                </div>
                <img
                  src="https://gico.io/ghurbo/demos/ghurbo/images/resource/destination-2.jpg"
                  className="bg-cover"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" relative">
                <div className="">
                  <h1 className="absolute top-32 text-5xl text-white italic right-48">
                    Indonesia
                  </h1>
                  <div className="bg-[#c29d59]  absolute text-center end-8 bottom-1 text-white w-[64px] h-[64px] rounded-full">
                    <h1 className=" text-xl text-center">40 Tours</h1>
                  </div>
                </div>
                <img
                  src="https://gico.io/ghurbo/demos/ghurbo/images/resource/destination-1.jpg"
                  className="bg-cover"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" relative">
                <div className="">
                  <h1 className="absolute top-32 text-5xl text-white italic right-48">
                    Pakistan
                  </h1>
                  <div className="bg-[#c29d59]  absolute text-center end-8 bottom-1 text-white w-[64px] h-[64px] rounded-full">
                    <h1 className=" text-xl text-center">21 Tours</h1>
                  </div>
                </div>
                <img
                  src="https://gico.io/ghurbo/demos/ghurbo/images/resource/destination-4.jpg"
                  className="bg-cover"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" relative">
                <div className="">
                  <h1 className="absolute top-32 text-5xl text-white italic right-48">
                    Thailand{" "}
                  </h1>
                  <div className="bg-[#c29d59]  absolute text-center end-8 bottom-1 text-white w-[64px] h-[64px] rounded-full">
                    <h1 className=" text-xl text-center">60 Tours</h1>
                  </div>
                </div>
                <img
                  src="https://gico.io/ghurbo/demos/ghurbo/images/resource/destination-3.jpg"
                  className="bg-cover"
                  alt=""
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </>
      </div>

      <TitleSection newTitle={"TRENding"} teams={"Our Teams"}/>

      <div className="flex justify-center gap-5">
        {travels?.map((travel, index) => (
          <div 
          key={index}
          >
             <img src={travel.image} alt="" />
            <div className="text-center">
            <p>{travel.title} </p>
            <p>{travel.jobPosition}</p>
             <div className="flex justify-center gap-3">
              <p className="font-semibold from-indigo-50"> in</p>
              <Icon className="bg-white" icon="mdi:twitter" />
              <Icon icon="ri:google-fill" />
              <Icon icon="ri:facebook-fill" />
              <Icon className="text-red-600" icon="tabler:camera" />
             </div>
            </div>
          </div>
        ))}
      </div>

     
    </div>
  );
};

export default MainAbout;

/***
 * <div className="flex justify-center gap-5 mt-8">
        <div className="relative">
               <div className="absolute hover:bg-red-400">
               <p className="text-2xl">Tania</p>
                <p>Cto Travel</p>
               </div>
          <img
            src="https://gico.io/ghurbo/demos/ghurbo/images/resource/team-1.jpg"
            className="w-[300px]"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://gico.io/ghurbo/demos/ghurbo/images/resource/team-2.jpg"
            className="w-[300px]"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://gico.io/ghurbo/demos/ghurbo/images/resource/team-3.jpg"
            className="w-[300px]"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://gico.io/ghurbo/demos/ghurbo/images/resource/team-4.jpg"
            className="w-[300px]"
            alt=""
          />
        </div>
      </div> 
      <div className="mt-15">
        <h1>neeeeeeeeeeeeeee</h1>
      </div>
 */
