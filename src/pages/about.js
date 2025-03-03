"use client";

import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import Layout from "@/layout/Layout";
import Breadcrumbs from "@/components/Breadcrumb";

const aboutSections = [
  "Journeys. Discover the joy of travel with our premium rental services across India. Every journey is a promise of memories that last a lifetime. As your premier travel companion, we are dedicated to providing you with comfortable, reliable, and affordable travel solutions. Our mission is to make your voyages across India's diverse landscapes as seamless and enjoyable as possible.",
  "Our fleet, a symphony of modernity and convenience, is meticulously maintained to ensure your safety and comfort. From the sleek sedans that glide through cityscapes to the robust SUVs ready for off-road adventures, we have a vehicle for every traveler’s need. For larger groups, our tempo travelers, vans, and buses offer spacious interiors and modern amenities, ensuring everyone travels in comfort.",
  "We understand that travel is not just about destinations; it's about the experiences along the way. That's why we offer personalized tour packages that cater to your unique interests. Whether it's the historical allure of the Taj Mahal, the spiritual serenity of Varanasi, or the picturesque beauty of the Himalayas, our packages are designed to give you an immersive experience.",
  "Our services extend beyond just rentals. We provide 24/7 customer support to assist you at every step of your journey. Our experienced drivers are not just chauffeurs but your guides, well-versed in the local culture and geography, ready to take you through the heart of India.",
  "At Car Coach Rental India, we believe in sustainable travel. We are committed to eco-friendly practices, ensuring that our operations contribute positively to the environment. We encourage our travelers to join us in this endeavor, making responsible choices that preserve the beauty of our destinations.",
  "Booking with us is a breeze. Our user-friendly website and dedicated customer service team make it easy for you to plan your trip, select your vehicle, and customize your itinerary. We offer transparent pricing with no hidden costs, so you can travel with peace of mind, knowing that you're getting the best value for your money.",
  "Our commitment to excellence has earned us the trust of countless travelers, families, corporate clients, and tourists from around the world. Their testimonials speak volumes about their satisfying experiences and the bonds we've built over the years.",
];

const AboutUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    country: "",
    toDate: "",
    persons: "",
    itinerary: "",
  });
  
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("/api/sendEmail", formData);
      toast.success(response.data.message, { duration: 4000, style: { background: "#4caf50", color: "white" } });
      setFormData({
        name: "",
        phone: "",
        email: "",
        country: "",
        toDate: "",
        persons: "",
        itinerary: "",
      });
    } catch (error) {
      toast.error("Error sending message. Please try again.", { duration: 4000, style: { background: "#f44336", color: "white" } });
    }

    setLoading(false);
  };

  return (
    <Layout>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="text-black">
        <Breadcrumbs />
        <div className="bg-white text-black py-10">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-4">ABOUT US</h2>
              {aboutSections.map((text, index) => (
                <p key={index} className="text-black-700 mb-4 text-justify">{text}</p>
              ))}
            </div>

            <div className="lg:w-1/3 bg-black text-white p-6 rounded-md shadow-lg">
              <h3 className="text-lg font-bold border-b pb-2 mb-4">CONTACT US NOW</h3>
              <form onSubmit={handleSubmit} className="space-y-3">
                <input type="text" name="name" placeholder="Name Please" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border rounded-md bg-white text-black" required />
                <input type="text" name="phone" placeholder="Phone No" value={formData.phone} onChange={handleChange} className="w-full px-3 py-2 border rounded-md bg-white text-black" required />
                <input type="email" name="email" placeholder="Email ID" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border rounded-md bg-white text-black" required />
                <input type="text" name="country" placeholder="Country Name" value={formData.country} onChange={handleChange} className="w-full px-3 py-2 border rounded-md bg-white text-black" required />
                <input type="date" name="toDate" value={formData.toDate} onChange={handleChange} className="w-full px-3 py-2 border rounded-md bg-white text-black" required />
                <input type="number" name="persons" placeholder="Number of Persons" value={formData.persons} onChange={handleChange} className="w-full px-3 py-2 border rounded-md bg-white text-black" required />
                <textarea name="itinerary" placeholder="Tour Itinerary" value={formData.itinerary} onChange={handleChange} className="w-full px-3 py-2 border rounded-md bg-white text-black h-20" required></textarea>
                
                <button type="submit" className="w-full bg-[#e66a1f] text-black font-bold py-2 rounded-md hover:bg-yellow-600" disabled={loading}>
                  {loading ? "Sending..." : "SEND"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
