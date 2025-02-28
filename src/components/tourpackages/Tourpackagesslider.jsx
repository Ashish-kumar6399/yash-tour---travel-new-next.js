"use client";


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Travelpackgesslider() {
  return (
    <div className="relative w-full ">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full"
      >
       
        <SwiperSlide>
          <div className="relative w-full h-[30vh] md:h-[50vh] lg:h-[75vh]">
            <img
              src="https://media.cntraveler.com/photos/643d5d0a5722b1af03793a06/16:9/w_2560%2Cc_limit/Dal%2520Lake_GettyImages-1323846766.jpg"
              alt="Car 2"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[30vh] md:h-[50vh] lg:h-[75vh]">
            <img
              src="https://www.atterrir.com/wp-content/uploads/2018/01/destinations_ski_inde_gulmarg.jpg"
              alt="Car 2"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[30vh] md:h-[50vh] lg:h-[75vh]">
            <img
              src="https://wallpapercave.com/wp/wp9433338.jpg"
              alt="Car 2"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[30vh] md:h-[50vh] lg:h-[75vh]">
            <img
              src="https://i.ytimg.com/vi/DWGMqmSUIKo/maxresdefault.jpg"
              alt="Car 2"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
       
       
       
      </Swiper>

     

     
    </div>
  );
}
