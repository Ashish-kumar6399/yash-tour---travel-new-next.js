"use client";
import { useState } from "react";
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
  const [activeIndex, setActiveIndex] = useState(0);

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
    <Layout>
      <Breadcrumbs />
      <h1 className="text-3xl font-bold text-center text-gray-800">{slug}</h1>

      <div className="container mx-auto px-4 lg:px-24 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation
            modules={[Autoplay, Navigation, Thumbs]}
            loop={true}
            thumbs={{ swiper: thumbsSwiper }}
            className="relative rounded-lg shadow-lg overflow-hidden"
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`Car Image ${index + 1}`}
                  className="w-full h-64 md:h-96 object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={5}
            watchSlidesProgress={true}
            modules={[Thumbs]}
            className="mt-4"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <div className={`relative transition-all ${activeIndex === index ? "brightness-100" : "brightness-50"}`}>
                  <img
                    src={src}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-20 object-cover cursor-pointer rounded-lg border-2 border-transparent hover:border-gray-800 transition"
                  />
                  {activeIndex !== index && (
                    <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <h2 className="text-xl font-bold">INTRODUCTION</h2>
          <p className="text-gray-700">
            BMW 7 Series car hire in India with well-trained uniform drivers. We offer world-class brands BMW 7 Series luxury car rental service in Delhi, Mumbai, Bengaluru, and Hyderabad with great comfort and safety features. Choose from our prestigious collection of super luxury BMW 7 Series cars on rent for Leisure Trips, VIP Meetings & Conventions, Business Travel, Weddings, Corporate Meetings, Video Shoots, Celebrity transport, and Outstation Trips. Indian Car Rental provides a BMW luxury car online booking service in major cities in India at economical prices. Book a BMW 7 Series car for Local Packages and Outstation Trips, including family holidays, corporate trips, individual tours, and airport pickups and drop-offs.
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

        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <h3 className="text-xl font-bold mb-4 text-gray-800">CONTACT US NOW</h3>
          <form className="space-y-2">
            <input type="text" name="name" placeholder="Name Please" className="w-full p-2 border rounded" onChange={handleChange} />
            <input type="text" name="phone" placeholder="Phone No" className="w-full p-2 border rounded" onChange={handleChange} />
            <input type="email" name="email" placeholder="Email ID" className="w-full p-2 border rounded" onChange={handleChange} />
            <input type="text" name="country" placeholder="Country Name" className="w-full p-2 border rounded" onChange={handleChange} />
            <input type="date" name="toDate" className="w-full p-2 border rounded" onChange={handleChange} />
            <input type="number" name="persons" placeholder="Number of Persons" className="w-full p-2 border rounded" onChange={handleChange} />
            <textarea name="itinerary" placeholder="Tour Itinerary" className="w-full p-2 border rounded" onChange={handleChange}></textarea>
            <input type="text" name="validation" placeholder="Enter Validation" className="w-full p-2 border rounded" onChange={handleChange} />
            <button type="submit" className="w-full bg-blue-600 text-white font-bold p-2 rounded hover:bg-blue-700 transition">SEND</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
