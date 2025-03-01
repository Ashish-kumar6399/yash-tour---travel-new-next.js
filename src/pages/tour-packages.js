"use client";
import Breadcrumbs from "@/components/Breadcrumb";
import Layout from "@/layout/Layout";
import Image from "next/image";
import Link from "next/link";

const tours = [
    {
        title: "Golden Triangle",
        description: "Hotel, Breakfast, Transfer, Sightseeing & All Taxes.",
        image: "https://absolutetourism.in/wp-content/uploads/2024/02/golden-triangle-tour-1.jpg",
        link: "/golden-triangle"
    },
    {
        title: "Kashmir Tour",
        description: "Hotel, Breakfast, Transfer, Sightseeing & All Taxes.",
        image: "https://media.cntraveler.com/photos/643d5d0a5722b1af03793a06/16:9/w_2560%2Cc_limit/Dal%2520Lake_GettyImages-1323846766.jpg",
        link: "kashmir-tour"
    },
    {
        title: "Gangtok Darjeeling",
        description: "Hotel, Breakfast, Transfer, Sightseeing & All Taxes.",
        image: "https://cdn1.tripoto.com/media/filter/tst/img/1524784/Image/1585127333_d_and_g_1.jpg",
        link: "gangtok-darjeeling"
    },
    {
        title: "Andaman Tour",
        description: "Hotel, Breakfast, Transfer, Sightseeing & All Taxes.",
        image: "https://www.ghumindiaghum.com/blog/wp-content/uploads/2022/08/andaman.jpg",
        link: "andaman-tour"
    },
];

export default function GoldenTriangleTours() {
  return (
    <Layout>
    <Breadcrumbs/>
    <div className="max-w-7xl mx-auto p-6 text-center">
      <h2 className="text-3xl font-bold">
        Tour <span className="text-orange-600">packages</span>
      </h2>
      <p className="text-black-600 mt-2">
       
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel condimentum
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel condimentum
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel condimentum
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel condimentum
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel condimentum
      </p>
      <h3 className="text-xl font-semibold mt-6">
        List of  Tours Packages
      </h3>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tours.map((tour, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border-2 border-orange-600 shadow-lg overflow-hidden"
          >
            <img
              src={tour.image}
              alt={tour.title}
              className="w-full object-cover"
            />
            <div className="p-4">
              <h4 className="text-lg font-bold text-start">{tour.title}</h4>
              <p className="text-black-600 text-start">{tour.description}</p>
              <Link href={`/tour-packages/${tour.link}`}>
                <button className="mt-4 font-bold bg-orange-600 hover:bg-orange-600 text-white px-4 py-2 rounded flex items-center gap-2">
                  VIEW DETAIL →
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </Layout>
  );
}
