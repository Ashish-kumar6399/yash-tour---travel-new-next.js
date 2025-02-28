"use client";
import React from "react";
import { FaShuttleVan, FaCity } from "react-icons/fa"; // Importing Icons

const services = [
  {
    title: "AIRPORT TRANSFERS",
    description:
      "Airport Transfer is a great way to travel conveniently, whether you are visiting a foreign country or just another domestic city, whether you are on a vacation or on a business trip. We are delivering private transportation for groups and individuals, holidays and business, from any airport Pickup & drop service in India. The service is extremely convenient when you are visiting places.",
    icon: <FaShuttleVan size={50} />,
  },
  {
    title: "MAJOR CITIES IN INDIA",
    cities: [
      "Delhi",
      "Mumbai",
      "Bangalore",
      "Chennai",
      "Kolkata",
      "Hyderabad",
      "Pune",
      "Jaipur",
      "Ahmedabad",
    ],
    icon: <FaCity size={50} />,
  },
];

const ServicesSection = () => {
  return (
    <div className="container mx-auto px-2 px-lg-6 py-12">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {services.map((service, index) => (
          <div key={index} className="p-6">
            {/* Icon with border */}
            <div className="flex justify-center items-center mb-4">
              <div className="w-24 h-24 flex items-center justify-center border-2 border-gray-400 rounded-full">
                {service.icon}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>

            {/* Description or List */}
            {service.description && (
              <p className="text-gray-700 mb-4 text-justify text-lg">
                {service.description}
              </p>
            )}

            {service.cities && (
              <ul className="text-gray-700 mb-4 text-lg text-left  list-inside  w-max m-auto" >
                {service.cities.map((city, i) => (
                  <li key={i}>{city}</li>
                ))}
              </ul>
            )}

            {/* Read More Button */}
            <button className="px-5 py-2 border bg-[#e42a69] text-white font-semibold rounded-md hover:bg-black hover:text-white transition-all">
              READ MORE
            </button>
          </div>
        ))}

        {/* Replacing "ONEWAY PICKUP & DROP" section with an Image */}
        <div className="p-2  px-lg-6 flex justify-center">
          <img
            src="https://mauritiustaxi-service.com/wp-content/uploads/2021/04/airport-transfer-Mauritius.jpg" 
            alt="Oneway Pickup & Drop"
            className="rounded-lg  h-20rem md:h-[26rem] lg:h-[24rem] mt-10"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
