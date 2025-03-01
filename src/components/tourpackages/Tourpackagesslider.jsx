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
              src="https://www.haridwarrishikeshtourism.com/tour-packages/golden-triangle-with-rishikesh-trip.jpg"
              alt="Car 2"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[30vh] md:h-[50vh] lg:h-[75vh]">
            <img
              src="https://www.haridwarrishikeshtourism.com/tour-packages/rishikesh-tour-with-golden-triangle.jpg"
              alt="Car 2"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[30vh] md:h-[50vh] lg:h-[75vh]">
            <img
              src="https://www.haridwarrishikeshtourism.com/tour-packages/rishikesh-with-golden-traingle-tour.jpg"
              alt="Car 2"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[30vh] md:h-[50vh] lg:h-[75vh]">
            <img
              src="https://www.haridwarrishikeshtourism.com/tour-packages/rishikesh-with-golden-traingle-tour-package.jpg"
              alt="Car 2"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
       
       
       
      </Swiper>

     

     
    </div>
  );
}
