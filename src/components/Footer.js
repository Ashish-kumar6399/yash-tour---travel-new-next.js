import { FaAngleDoubleRight } from "react-icons/fa";

const quickLinks = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "about" },
  { name: "Contact Us", link: "contact-us" },
  { name: "Terms & Conditions", link: "/Terms-&-conditions" },
  { name: "Privacy Policy", link: "/Privacy-policy" },
];

const services = [
  { name: "Cars", link: "/" },
  { name: "Bus", link: "/" },
    { name: "Golden Triangle Tour", link: "golden-triangle" },

  { name: "Kashmir Tour", link: "#" },
  { name: "Gangtok Tour", link: "#" },
  { name: "Andaman Tour", link: "#" },
  // { name: "Kerala Tour", link: "#" },
];

const contacts = [
  {
    type: "phone",
    value: "+91 9773764427",
    link: "tel:+919773764427",
  },
  {
    type: "phone",
    value: "+91-9312288985",
    link: "tel:+919312288985",
  },
  {
    type: "email",
    value: "yashtourandtravels1@gmail.com  ",
    link: "mailto:yashtourandtravels1@gmail.com",
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: About */}
        <div>
          <h3 className="text-lg font-bold mb-4">Yash Tour & Travels</h3>
          <p className="text-white text-justify text-sm">
            Welcome to Yash Tour & Travels, your trusted partner for
            comfortable, reliable, and affordable journeys. Discover the joy of
            travel with our premium rental services across India.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">QUICK LINKS</h3>
          <ul className="space-y-2 px-4 text-white text-lg">
            {quickLinks.map((item, index) => (
              <li key={index} className="flex items-center">
                <FaAngleDoubleRight className="mr-2" />
                <a href={item.link} className="hover:text-blue-400">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h3 className="text-lg font-bold mb-4">Services</h3>
          <ul className="space-y-2 text-white text-lg">
            {services.map((service, index) => (
              <li key={index} className="flex items-center">
                <FaAngleDoubleRight className="mr-2" />
                <a href={service.link} className="hover:text-blue-400">
                  {service.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Us */}
        <div>
          <h3 className="text-lg font-bold mb-4">CONTACT US</h3>
          {contacts.map((contact, index) => (
            <p key={index} className="text-white text-sm flex items-center">
              <a href={contact.link} className="hover:text-blue-400">
                {contact.value}
              </a>
            </p>
          ))}
        </div>
      </div>

      {/* Copyright & Developer Info */}
      <div className="bg-primary text-white text-sm py-4">
        <div className="max-w-7xl mx-auto px-2 lg:px-6 flex flex-col md:flex-row justify-between text-center md:text-left">
          <p>Copyright © 2025 Yash Tour & Travels. All rights reserved.</p>
          <p className="text-white">
            Designed and Developed by
            <a
              href="https://kanakdrishtiinfo.com/"
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              {" "}
              Kanak Drishti Infotech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
