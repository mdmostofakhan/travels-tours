import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const MainAbout = () => {
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
      <div className=" mt-10 flex justify-center  relative">
        <div className=" font-bold text-[200px]">
          <h1 className="text-[#f9f7f3]  ">TRENDING</h1>
        </div>
        <div className=" top-24 absolute">
          <h1 className="text-center text-4xl italic font-bold">
            Destinations
          </h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet, conseetuer adipiscing elit. Aenan comdo{" "}
            <br />
            igula eget. Aenean massa cum sociis Theme natoque
          </p>
        </div>
      </div>

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
              <div className="h-[400px] relative">
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
              <div className="h-[400px] relative">
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
              <div className="h-[400px] relative">
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
              <div className="h-[400px] relative">
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
              <div className="h-[400px] relative">
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
              <div className="h-[400px] relative">
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
              <div className="h-[400px] relative">
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
              <div className="h-[400px] relative">
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

      <div className=" mt-10 flex justify-center  relative">
        <div className=" font-bold text-[200px]">
          <h1 className="text-[#f9f7f3] ">Teams</h1>
        </div>
        <div className=" top-24 absolute">
          <h1 className="text-center text-4xl italic font-bold">Our Teams</h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet, conseetuer adipiscing elit. Aenan comdo{" "}
            <br />
            igula eget. Aenean massa cum sociis Theme natoque
          </p>
        </div>
      </div>

      <div className="flex justify-center gap-5 mt-8">
        <div className="relative">
               <div className="absolute hover:bg-red-400">
               <p>Tania</p>
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
    </div>
  );
};

export default MainAbout;
