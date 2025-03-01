"use client";
import Breadcrumbs from "@/components/Breadcrumb";
import Travelpackgesslider from "@/components/tourpackages/Tourpackagesslider";
import Layout from "@/layout/Layout";
import Image from "next/image";
import Link from "next/link";

const itinerary = [
  {
    day: "Day 1: Arrival in Srinagar",
    description:
      "Arrive in Srinagar and transfer to your hotel or houseboat on Dal Lake. Take a shikara ride on Dal Lake, enjoying the beautiful scenery and the floating market. Visit Nishat Bagh (Garden of Joy), Shalimar Bagh, and Chashme Shahi (Royal Spring). Explore the famous Mughal Gardens and enjoy the picturesque views of the snow-capped mountains.\n\n**Overnight stay in Srinagar hotel.**",
  },
  {
    day: "Day 2: Gulmarg",
    description:
      "After breakfast, head towards Gulmarg (2.5 – 3 hours drive from Srinagar), a popular hill station known for its meadows and snow activities. In winter, you can enjoy skiing and snowboarding, or take the Gondola ride to Apharwat Peak for a panoramic view. In summer, enjoy activities like horse riding, golfing, or trekking. Visit the famous St. Mary’s Church and the Gulmarg Biosphere Reserve if you have time. Return to Srinagar in the evening for an overnight stay.",
  },
  {
    day: "Day 3: Pahalgam",
    description:
      "After breakfast, drive to Pahalgam (approx. 2-3 hours from Srinagar). Explore Betaab Valley, Aru Valley, and Baisaran Valley. Visit Mamelshwar Temple and the Chandanwari (base for the Amarnath Yatra). If you’re interested in nature walks, the Lidder River offers great scenic views for trekking or relaxing. Optional: Take a pony ride or explore the local markets in Pahalgam. Overnight stay in Pahalgam.",
  },
  {
    day: "Day 4: Sonamarg",
    description:
      "After breakfast, proceed for a day trip to Sonamarg (approx. 2.5 hours drive from Srinagar). Known as the 'Meadow of Gold', Sonamarg is famous for its stunning Himalayan landscapes, glaciers, and lush green meadows. Optional: Take a pony ride to Thajiwas Glacier. Return to Srinagar in the evening. Overnight stay in Srinagar.",
  },
];

const inclusions = [
  "3 Nights Accommodation in Manali",
  "3 Morning Tea, Breakfast & Dinner",
  "Pick up & Drop ex. – Delhi",
  "Hot & Cold Water 24 Hours",
  "All Toll, parking charges, driver charges, fuel cost inclusive.",
  "All Transfers & Sightseeing by AC Sedan Cab",
];

const exclusions = [
  "AC Will Not Work In Hill Area",
  "Air Fare / Train fare",
  "Personal Expenses",
  "Entrance Fees & Guide charges. Insurance",
  "Any increase in taxes or fuel price leading to increased costs",
  "05 % On Advance Payment",
];

export default function KashmirTour() {
  return (
    <Layout>

    
      <Travelpackgesslider />
      <Breadcrumbs/>
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Itinerary Section */}
        <div className="md:col-span-2">
          <h2 className=" text-xl lg:text-3xl font-bold text-[#e42a69]">Kashmir Tour <span className="text-gray-500">🕒 4N/5D</span></h2>
          <h3 className="text-xl font-semibold mt-2">
            Destination Covered: <span className="font-bold">Srinagar - Gulmarg - Pahalgam - Sonamarg</span>
          </h3>
          {itinerary.map((item, index) => (
            <div key={index} className="mt-6 border-4 border-primary p-4 rounded-md">
              <h4 className="bg-white px-4 py-2 font-bold text-orange-600 text-xl rounded-t-md">
                {item.day}
              </h4>
              <p className="text-gray-700 mt-2">{item.description}</p>
            </div>
          ))}

          {/* Package Inclusions */}
          <div className="mt-6 border-2 border-primary p-4 rounded-md">
            <h3 className="text-xl font-bold text-blue-900 border-b-2 border-primary pb-2">PACKAGE INCLUSIONS —</h3>
            <ul className="list-disc pl-5 mt-2 text-gray-700">
              {inclusions.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Package Exclusions */}
          <div className="mt-6 border-2 border-primary p-4 rounded-md">
            <h3 className="text-xl font-bold text-blue-900 border-b-2 border-primary pb-2">PACKAGE EXCLUSIONS —</h3>
            <ul className="list-disc pl-5 mt-2 text-gray-700">
              {exclusions.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-gray-300 p-6  rounded-md shadow-md">
          <h3 className="text-2xl font-bold bg-orange-600 text-white py-2 px-4 rounded-t-md">Contact Us</h3>
          <form className="mt-4">
            <input type="text" placeholder="Enter your name" className="w-full p-2 border rounded mt-2" />
            <input type="email" placeholder="Enter your email" className="w-full p-2 border rounded mt-2" />
            <input type="text" placeholder="Enter your mobile number" className="w-full p-2 border rounded mt-2" />
            <input type="text" placeholder="Numbers of passenger" className="w-full p-2 border rounded mt-2" />
            <input type="date" placeholder="Numbers of passenger" className="w-full p-2 border rounded mt-2" />
            <textarea placeholder="Your message" className="w-full p-2 border rounded mt-2 h-24"></textarea>
            <select className="w-full p-2 border rounded mt-2">
              <option>Select a Package</option>
              <option>Kashmir Tour</option>
              <option>Gangtok Tour</option>
              <option>Andaman Tour</option>
              <option>Kerala Tour</option>
              <option>Golden Triangle Tour</option>
            </select>
            <button className="w-full mt-4 bg-orange-600 text-white py-2 rounded hover:bg-orange-600">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
