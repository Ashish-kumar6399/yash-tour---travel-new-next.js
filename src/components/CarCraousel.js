"use client";

import { useState } from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


export default function CarRentalCarousel() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    description: "",
    validation: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

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
              src="https://www.carscoops.com/wp-content/uploads/2021/01/Mercedes-S-Class-1.jpg"
              alt="Car 2"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
         <SwiperSlide>
          <div className="relative w-full h-[30vh] md:h-[50vh] lg:h-[75vh]">
            <img
              src="https://static3.toyotabharat.com/images/showroom/innova-mmc/unmatched-unrivaled-banner1600x850.jpg"
              alt="Car 2"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-[30vh] md:h-[50vh] lg:h-[75vh]">
            <img
              src="https://th.bing.com/th/id/R.4ea54f75ad8b5f75c3a1c6e95b149fcd?rik=5qb%2fdM97yDvFVg&riu=http%3a%2f%2fwww.hdcarwallpapers.com%2fwalls%2f2015_mercedes_benz_cls-HD.jpg&ehk=Ek4F0Kr1Np%2b0KEoUz1pjqwrf2DurpxM8rKZYmw8Ifn8%3d&risl=&pid=ImgRaw&r=0"
              alt="Car 2"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[30vh] md:h-[50vh] lg:h-[75vh]">
            <img
              src="https://s2.paultan.org/image/2013/09/BMW_i8_022.jpg"
              alt="Car 2"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[30vh] md:h-[50vh] lg:h-[75vh]">
            <img
              src="https://hillsimages.s3-accelerate.amazonaws.com/2020/10/IMG_5587.jpg"
              alt="Car 2"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide> 
        <SwiperSlide>
          <div className="relative w-full h-[30vh] md:h-[50vh] lg:h-[75vh]">
            <img
              src="https://wallpapercave.com/wp/wp6586790.jpg"
              alt="Car 2"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-[30vh] md:h-[50vh] lg:h-[75vh]">
            <img
              src="https://www.indiancarrental.com/uploads/slider/1709389030.jpg"
              alt="Car 2"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[30vh] md:h-[50vh] lg:h-[75vh]">
            <img
              src="https://image.made-in-china.com/2f0j00UEPRLgWGztqr/2017-New-Passenger-Bus-with-Luxury-VIP-Bus-Seat-Slk6126-.jpg"
              alt="Car 2"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[30vh] md:h-[50vh] lg:h-[75vh]">
            <img
              src="https://www.minivanhiredelhi.com/uploads/24964_slider2.jpg"
              alt="Car 2"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[30vh] md:h-[50vh] lg:h-[75vh]">
            <img
              src="https://yash-tour-and-travels.netlify.app/IMG/home-page/Hawa-mahal.webp"
              alt="Car 1"
              className="w-full h-full object-cover"
            />
            {/* <div className="absolute top-1/3 left-16 text-white text-xl font-semibold">
              Book Now
            </div> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[30vh] md:h-[50vh] lg:h-[75vh]">
            <img
              src="https://media.cntraveler.com/photos/643d5d0a5722b1af03793a06/16:9/w_2560%2Cc_limit/Dal%2520Lake_GettyImages-1323846766.jpg"
              alt="Car 2"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="  hidden lg:block absolute top-80  md:top-16 md:right-10 bg-black p-4 text-white w-full md:w-96 z-40 rounded">
        <h3 className="text-lg font-bold border-b-2 border-[#e66a1f] pb-2 mb-4">
          Quick Enquiry
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full p-2 bg-white text-black"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email ID"
            className="w-full p-2 bg-white text-black"
            onChange={handleChange}
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile No"
            className="w-full p-2 bg-white text-black"
            onChange={handleChange}
          />
          <textarea
            name="description"
            placeholder="Description"
            className="w-full p-2 bg-white text-black"
            onChange={handleChange}
          ></textarea>
          <input
            type="text"
            name="validation"
            placeholder="Enter Validation"
            className="w-full p-2 bg-white text-black"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full bg-[#e66a1f] text-white text-lg p-2 font-bold"
          >
            SEND
          </button>
        </form>
      </div>

      <div className="absolute bottom-5 right-5 md:right-10">
        <button className="bg-green-500 text-white p-3 rounded-full flex items-center space-x-2">
          <FaWhatsapp size={24} />
          <span>WhatsApp</span>
        </button>
      </div>
    </div>
  );
}
