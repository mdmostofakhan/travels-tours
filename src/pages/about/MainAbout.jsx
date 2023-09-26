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
        <h1 className="text-center text-4xl italic font-bold">Destinations</h1>
            <p className="text-center">Lorem ipsum dolor sit amet, conseetuer adipiscing elit. Aenan comdo <br />
                igula eget. Aenean massa cum sociis Theme natoque</p>
        </div>
      </div>

      <div>
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
            <div className="h-[350px] ">
              <img
                src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[350px] ">
              <img
                src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[350px] ">
              <img
                src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[350px] ">
              <img
                src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[350px] ">
              <img
                src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[350px] ">
              <img
                src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[350px] ">
              <img
                src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
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
            <p className="text-center">Lorem ipsum dolor sit amet, conseetuer adipiscing elit. Aenan comdo <br />
                igula eget. Aenean massa cum sociis Theme natoque</p>
        </div>
      </div>
      
    </div>
  );
};

export default MainAbout;
