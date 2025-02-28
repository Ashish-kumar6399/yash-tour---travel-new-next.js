import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Navbar from "./navbar";

const UpperNavbar = () => {
    return (
      <div className="sticky top-0 z-50">
  
      <div className="  bg-primary text-white text-sm flex justify-between items-center  px-6 lg:px-20  py-2">
        {/* Left Side - Support Info */}
        <div className="flex items-center gap-2">
          <span role="img" aria-label="phone">📱</span>
          <span className="font-semibold">24x7 Support:</span>
          <span>9773764427, 9312288985</span>
        </div>
        
        {/* Right Side - Social Media Icons */}
        <div className="flex gap-2">
          <a href="#" className="border border-white p-1 rounded-sm hover:bg-white hover:text-black transition">
            <FaFacebookF size={14} />
          </a>
          {/* <a href="#" className="border border-white p-1 rounded-sm hover:bg-white hover:text-black transition">
            <FaTwitter size={14} />
          </a> */}
          <a href="#" className="border border-white p-1 rounded-sm hover:bg-white hover:text-black transition">
            <FaLinkedinIn size={14} />
          </a>
          <a href="#" className="border border-white p-1 rounded-sm hover:bg-white hover:text-black transition">
            <FaInstagram size={14} />
          </a>
        </div>
      </div>
      <Navbar/>
      </div>
    );
  };
  
  export default UpperNavbar;
  