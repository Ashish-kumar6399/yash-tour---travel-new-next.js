"use client";
import React from "react";
import Link from "next/link";

const tourPackages = [
  {
    title: "Golden Triangle",
    description: "Hotel, Breakfast, Transfer, Sightseeing & All Taxes.",
    image: "https://absolutetourism.in/wp-content/uploads/2024/02/golden-triangle-tour-1.jpg",
    link: "/tour-packages/golden-triangle", // Replace with actual route
  },
  {
    title: "Kashmir Tour",
    description: "Hotel, Breakfast, Transfer, Sightseeing & All Taxes.",
    image: "https://media.cntraveler.com/photos/643d5d0a5722b1af03793a06/16:9/w_2560%2Cc_limit/Dal%2520Lake_GettyImages-1323846766.jpg",
    link: "", // Replace with actual route
  },
  {
    title: "Gangtok Darjeeling",
    description: "Hotel, Breakfast, Transfer, Sightseeing & All Taxes.",
    image: "https://cdn1.tripoto.com/media/filter/tst/img/1524784/Image/1585127333_d_and_g_1.jpg",
    link: "", // Replace with actual route
  },
  {
    title: "Andaman Tour",
    description: "Hotel, Breakfast, Transfer, Sightseeing & All Taxes.",
    image: "https://www.ghumindiaghum.com/blog/wp-content/uploads/2022/08/andaman.jpg",
    link: "", // Replace with actual route
  },
];

const TourPackagesSection = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-center text-3xl mb-6 text-[#e66a1f] underline">TOUR PACKAGES</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tourPackages.map((tour, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <Link href={tour.link} className="block">
              {/* Image Section */}
              <img src={tour.image} alt={tour.title} className="w-full h-52 object-cover" />
            </Link>

            {/* Content Section */}
            <div className="p-4">
              <Link href={tour.link}>
                <h3 className="text-lg font-bold text-gray-800 cursor-pointer">{tour.title}</h3>
              </Link>
              <p className="text-gray-600 text-sm">{tour.description}</p>
              <p className="text-green-600 font-semibold text-sm mt-1">Best Service Guarantee</p>

              {/* Buttons Section */}
              <div className="flex justify-between items-center mt-4">
                <Link href={tour.link}>
                  <button className="px-2 md:px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-800">
                    BOOK NOW
                  </button>
                </Link>
                <Link href={tour.link}>
                  <button className="px-2 md:px-4 py-2 bg-[#e66a1f] text-white text-sm rounded-md hover:bg-[#e66a1f]-700">
                    DETAIL
                  </button>
                </Link>
                <a
                  href="https://wa.me/yourwhatsappnumber" // Replace with actual WhatsApp number
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 md:px-4 py-2 bg-green-500 text-white text-sm rounded-md flex items-center gap-1 hover:bg-green-700"
                >
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourPackagesSection;
