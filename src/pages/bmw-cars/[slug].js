"use client";
import { useReducer, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Breadcrumbs from "@/components/Breadcrumb";
import Layout from "@/layout/Layout";
import { useRouter } from "next/router";

export default function CarRental() {

  const router = useRouter();
  const { slug } = router.query;
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    country: "",
    fromDate: "",
    toDate: "",
    persons: "",
    itinerary: "",
    validation: "",
  });

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const images = [
    "https://www.indiancarrental.com/uploads/carrent/21937_1696429021.jpg",
    "https://www.indiancarrental.com/uploads/carrent/57586_1696429021.jpeg",
    "https://www.indiancarrental.com/uploads/carrent/13507_1696429021.jpeg",
    "https://www.indiancarrental.com/uploads/carrent/28339_1696429021.jpg",
    "https://www.indiancarrental.com/uploads/carrent/13341_1696429021.webp",
    "https://www.indiancarrental.com/uploads/carrent/54777_1696397972.jpeg",
  ];

  return (
    <>
    <Layout>
      <Breadcrumbs/>

      <div className="conatiner mx-auto px-2 lg:px-24 p-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section */}

        <div className="lg:col-span-2 space-y-4">
          <h1 className="text-2xl text-center font-bold mt-4 ">{slug}</h1>
          {/* Main Slider */}
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation
            modules={[Autoplay, Navigation, Thumbs]}
            loop={true}
            thumbs={{ swiper: thumbsSwiper }}
            className="relative"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`Car Image ${index + 1}`}
                  className="w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[500px] object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Thumbnail Slider */}
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={6}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[Thumbs]}
            className="mt-4"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-20 object-cover cursor-pointer"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <h2 className="text-xl font-bold">INTRODUCTION</h2>
          <p className="text-gray-700">
            BMW 7 Series car hire in India with well trained uniform drivers. We offer world-class brands BMW 7 Series luxury car rental service in Delhi, Mumbai, Bengaluru and Hyderabad with great comfort, safety features. Choose from our prestigious collection of super luxury BMW 7 Series car on rent can be done for Leisure Trips, VIP Meetings & Conventions, Business Travel, Wedding, Corporate Meeting, Video Shoots, Celebrity and Outstation Trip. Indian Car Rental provides a BMW luxury car online booking in Delhi, Gurugram, Noida, Agra, Jaipur, Chennai, Goa, Pune, Kochi all major cities in india on economical price. You can book BMW 7 Series car in India for Local Packages and Outstation Trips for family holidays vacation, corporate trip, individual tours, airport pickup and drop include comfortable seats, seat belts and the latest audio system
          </p>
          <div className="bg-gray-100 p-4 rounded-lg grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-2"><span>🚗</span> 4 passengers + 1 driver</div>
            <div className="flex items-center gap-2"><span>🛄</span> 5 Luggage</div>
            <div className="flex items-center gap-2"><span>🎵</span> Audio system</div>
            <div className="flex items-center gap-2"><span>❄️</span> Air Conditioning</div>
            <div className="flex items-center gap-2"><span>🔋</span> Mobile Charger</div>
            <div className="flex items-center gap-2"><span>🎬</span> Television</div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className=" text-white p-6 rounded-lg  ">
          <h3 className="text-xl font-bold mb-4 text-black">CONTACT US NOW</h3>
          <form className="space-y-2 border-8  border-[#32064A]  ">
            <input type="text" name="name" placeholder="Name Please" className="w-full p-2 text-black rounded" onChange={handleChange} />
            <input type="text" name="phone" placeholder="Phone No" className="w-full p-2 text-black rounded" onChange={handleChange} />
            <input type="email" name="email" placeholder="Email ID" className="w-full p-2 text-black rounded" onChange={handleChange} />
            <input type="text" name="country" placeholder="Country Name" className="w-full p-2 text-black rounded" onChange={handleChange} />
            <input type="date" name="toDate" className="w-full p-2 text-black rounded" onChange={handleChange} />
            <input type="number" name="persons" placeholder="Number of Persons" className="w-full p-2 text-black rounded" onChange={handleChange} />
            <textarea name="itinerary" placeholder="Tour Itinerary" className="w-full p-2 text-black rounded" onChange={handleChange}></textarea>
            <input type="text" name="validation" placeholder="Enter Validation" className="w-full p-2 text-black rounded" onChange={handleChange} />
            <button type="submit" className="w-full bg-[#e42a69] text-black font-bold p-2 rounded">SEND</button>
          </form>
        </div>
      </div>
      </Layout>
    </>
  );
}
