"use client";
import Breadcrumbs from "@/components/Breadcrumb";
import Layout from "@/layout/Layout";
import React from "react";

const aboutSections = [
  "Journeys. Discover the joy of travel with our premium rental services across India. Every journey is a promise of memories that last a lifetime. As your premier travel companion, we are dedicated to providing you with comfortable, reliable, and affordable travel solutions. Our mission is to make your voyages across India's diverse landscapes as seamless and enjoyable as possible.",
  "Our fleet, a symphony of modernity and convenience, is meticulously maintained to ensure your safety and comfort. From the sleek sedans that glide through cityscapes to the robust SUVs ready for off-road adventures, we have a vehicle for every traveler’s need. For larger groups, our tempo travelers, vans, and buses offer spacious interiors and modern amenities, ensuring everyone travels in comfort.",
  "We understand that travel is not just about destinations; it's about the experiences along the way. That's why we offer personalized tour packages that cater to your unique interests. Whether it's the historical allure of the Taj Mahal, the spiritual serenity of Varanasi, or the picturesque beauty of the Himalayas, our packages are designed to give you an immersive experience.",
  "Our services extend beyond just rentals. We provide 24/7 customer support to assist you at every step of your journey. Our experienced drivers are not just chauffeurs but your guides, well-versed in the local culture and geography, ready to take you through the heart of India.",
  "At Car Coach Rental India, we believe in sustainable travel. We are committed to eco-friendly practices, ensuring that our operations contribute positively to the environment. We encourage our travelers to join us in this endeavor, making responsible choices that preserve the beauty of our destinations.",
  "Booking with us is a breeze. Our user-friendly website and dedicated customer service team make it easy for you to plan your trip, select your vehicle, and customize your itinerary. We offer transparent pricing with no hidden costs, so you can travel with peace of mind, knowing that you're getting the best value for your money.",
  "Our commitment to excellence has earned us the trust of countless travelers, families, corporate clients, and tourists from around the world. Their testimonials speak volumes about their satisfying experiences and the bonds we've built over the years.",
];

const formFields = [
  { type: "text", placeholder: "Name Please" },
  { type: "text", placeholder: "Phone No" },
  { type: "email", placeholder: "Email ID" },
  { type: "text", placeholder: "Country Name" },
  // { type: "date", placeholder: "From Date" },
  { type: "date", placeholder: "To Date" },
  { type: "number", placeholder: "Number of Persons" },
];

const AboutUs = () => {
  return (
  
    <Layout>
    <div className="text-black">
      
      <Breadcrumbs/>

      {/* Main Layout Container */}
      <div className="bg-white text-black py-10">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8">
          {/* Left Section - About Us Text */}
          <div className="lg:w-2/3">
            <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-4">
              ABOUT US
            </h2>
            {aboutSections.map((text, index) => (
              <p key={index} className="text-gray-700 mb-4 text-justify">
                {text}
              </p>
            ))}
          </div>

          {/* Right Section - Contact Us Form */}
          <div className="lg:w-1/3 bg-black text-white p-6 rounded-md shadow-lg">
            <h3 className="text-lg font-bold border-b pb-2 mb-4">
              CONTACT US NOW
            </h3>
            <form className="space-y-3">
              {formFields.map((field, index) => (
                <input
                  key={index}
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full px-3 py-2 border rounded-md bg-white text-black"
                />
              ))}
              <textarea
                placeholder="Tour Itinerary"
                className="w-full px-3 py-2 border rounded-md bg-white text-black h-20"
              ></textarea>
              <input
                type="text"
                placeholder="Enter Validation"
                className="w-full px-3 py-2 border rounded-md bg-white text-black"
              />

              {/* Captcha & Button */}
              <div className="flex items-center justify-between">
                <input
                  type="text"
                  value="248"
                  className="w-16 px-3 py-2 border rounded-md bg-white text-black text-center"
                  disabled
                />
                <button className="w-full bg-[#e66a1f] text-black font-bold py-2 rounded-md hover:bg-yellow-600 ml-2">
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </Layout>
    
  );
};

export default AboutUs;
