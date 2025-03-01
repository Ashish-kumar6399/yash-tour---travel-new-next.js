"use client";
import Breadcrumbs from "@/components/Breadcrumb";
import Layout from "@/layout/Layout";
import Link from "next/link";

const tours = [
  {
    title: "Rishikesh - with Golden Triangle",
    duration: "08 Nights/09 Days",
    locations: "Delhi - Agra - Jaipur - Rishikesh - Delhi",
    image: "https://web.archive.org/web/20190813134629im_/https://www.asparkholidays.com/uploads/61326_taj-mahal-tour%20with-yoga-in-rishikesh.jpg",
   
    link: "/Rishikeshgoldentraingle"
  }, {
    title: "Kashmir Tour",
    duration: "08 Nights/09 Days",
    locations: "Srinagar - Gulmarg - Pahalgam - Sonamarg",
    image: "https://media.cntraveler.com/photos/643d5d0a5722b1af03793a06/16:9/w_2560%2Cc_limit/Dal%2520Lake_GettyImages-1323846766.jpg",
    link: "#"
  },
  {
    title: "Goa - with Golden Triangle",
    duration: "08 Nights/09 Days",
    locations: "Delhi - Agra - Jaipur - Rishikesh - Delhi",
    image: "https://web.archive.org/web/20190813140033im_/https://www.asparkholidays.com/uploads/24695_goa-img.jpg",
    link: "#"
  },
  {
    title: "Amritsar - with Golden Triangle",
    duration: "08 Nights/09 Days",
    locations: "Delhi - Agra - Jaipur - Rishikesh - Delhi",
    image: "https://web.archive.org/web/20190813134721im_/https://www.asparkholidays.com/uploads/65004_jaipur1.jpg",
    link: "#"
  }
];

export default function RajasthanGoldenTriangleTours() {
  return (
    <>
    <Layout>
    <Breadcrumbs/>
    <div className="max-w-7xl mx-auto p-6 text-center">
      <h2 className="text-4xl font-bold">
         Golden <span className="text-orange-500">Triangle Tours</span>
      </h2>
      <p className="text-black-600 mt-4 max-w-2xl mx-auto">
        Rajasthan Golden Triangle Tour Packages: One of the most popular tourist circuits in India, encompassing three significant cities: Delhi, Agra, and Jaipur.
      </p>
      <h3 className="text-2xl font-semibold mt-8">List of  Golden Triangle Tours Packages</h3>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tours.map((tour, index) => (
          <div key={index} className="bg-white rounded-lg  shadow-lg overflow-hidden border-2 border-primary">
            <img src={tour.image} alt={tour.title} className="w-full h-56 object-cover" />
            <div className="p-4 text-left">
              <h4 className="text-lg font-bold">{tour.title}</h4>
              <p className="text-black-500 flex items-center mt-2">📅 {tour.duration}</p>
              <p className="text-black-500 flex items-center mt-1">📍 {tour.locations}</p>
              <Link href={tour.link ? `/tour-packages/golden-triangle${tour.link}` : "#"} className="block no-underline">


              
                <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center gap-2 w-full justify-center">
                  VIEW DETAIL →
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </Layout>
    </>
  );
}
