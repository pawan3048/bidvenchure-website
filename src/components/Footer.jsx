import {
  FaApple,
  FaFacebookF,
  FaGooglePlay,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa"; // Social Icons
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#483058] font-medium text-white py-10 px-6 h-auto">
      <div className="max-w-[90%] m-auto">
        {/* 4 sections */}
        <div className="flex flex-wrap gap-10 justify-between">
          {/* Column 1 - Logo and Description */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold text-red-500">
              Bid <span className="text-white">Venchure</span>
            </h2>
            <p className="mt-4 text-sm">
              Effortlessly plan your event by letting restaurants bid for your
              business. Save time, money, and stress.
            </p>
            {/* Social Icons */}
            <div className="flex mt-4 space-x-4">
              <FaFacebookF className="w-6 h-6 text-white hover:text-blue-500 cursor-pointer" />
              <FaTwitter className="w-6 h-6 text-white hover:text-blue-400 cursor-pointer" />
              <FaInstagram className="w-6 h-6 text-white hover:text-pink-500 cursor-pointer" />
              <FaLinkedinIn className="w-6 h-6 text-white hover:text-blue-700 cursor-pointer" />
            </div>
          </div>

          {/* Column 2 - Pages */}
          <div className="w-full md:w-[15%]">
            <h3 className="font-semibold text-2xl mb-4">Pages</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="hover:text-blue-500">
                Home
              </Link>
              <Link to="/works" className="hover:text-blue-500">
                Works
              </Link>
              <Link to="/services" className="hover:text-blue-500">
                Service
              </Link>
            </div>
          </div>

          {/* Column 3 - More Pages */}
          <div className="w-full md:w-[15%]">
            <h3 className="font-semibold text-2xl mb-4">More Pages</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/event" className="hover:text-blue-500">
                Event
              </Link>
              <Link to="/aboutus" className="hover:text-blue-500">
                About Us
              </Link>
              <Link to="/contactus" className="hover:text-blue-500">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Column 4 - Contact Info */}
          {/* <div className="w-full md:w-[30%]">
            <div className="space-y-1">
              <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
              <Link className="flex items-center space-x-2">
                <FiPhone className="text-xl" />
                <span className="font-thin">+91 1800123444</span>
              </Link>
              <Link className="flex items-center space-x-2">
                <FiMail className="text-xl" />
                <span className="font-thin">help@lorem.com</span>
              </Link>
              <Link className="flex items-center space-x-2">
                <HiOutlineLocationMarker className="text-xl" />
                <span className="font-thin">
                  Sub Nerdiv, Mumbai, India, 123456
                </span>
              </Link>
            </div>
          </div> */}
        </div>

        {/* Row 2 - Download the App and iOS */}

        <div className="mt-8 flex flex-wrap justify-between gap-8">
          <div className="w-full md:w-[30%]">
            <h3 className="font-bold text-lg mb-4">Download the app</h3>
            <div className="flex items-center space-x-2">
              <FaGooglePlay className="w-8 h-8 text-white" />
              <span>Get it on Google Play</span>
            </div>
          </div>

          <div className="w-full md:w-[30%]">
            <h3 className="font-bold text-lg mb-4">Download for iOS</h3>
            <div className="flex items-center space-x-2">
              <FaApple className="w-8 h-8 text-white" />
              <span>Download on the App Store</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-white/10 pt-4 text-center text-sm">
        © Copyright 2024, All Rights Reserved by YOUR WEBSITE. PVT. LTD
      </div>
    </footer>
  );
};

export default Footer;
