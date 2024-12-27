import { useEffect, useRef, useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";

import { NavLink, useNavigate } from "react-router-dom";
import bidVentureLogo from "../images/logo.png";
import "./Header.css";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isRestaurantPopupVisible, setIsRestaurantPopupVisible] =
    useState(false); // State for restaurant popup visibility
  const touchStart = useRef(0); // Used to track the initial touch position
  const touchEnd = useRef(0); // Used to track the end position for closing the sidebar
  const navigate = useNavigate();
  // Handle touch start (to capture initial touch position)
  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };

  // Handle touch move (to detect swipe distance for open/close)
  const handleTouchMove = (e) => {
    touchEnd.current = e.touches[0].clientX;
    const swipeDistance = touchStart.current - touchEnd.current;
    if (swipeDistance > 100) setIsSidebarOpen(false); // Close sidebar
    else if (swipeDistance < -100) setIsSidebarOpen(true); // Open sidebar
  };

  // Reset touch position on touch end
  const handleTouchEnd = () => {
    touchStart.current = 0;
    touchEnd.current = 0;
  };

  // Close sidebar when clicking outside
  const closeSidebarOnClickOutside = (e) => {
    if (
      isSidebarOpen &&
      !e.target.closest("aside") &&
      !e.target.closest(".hamburger-icon")
    ) {
      setIsSidebarOpen(false);
    }
  };

  // Handle click on hamburger icon (toggle sidebar)
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Handle popup visibility toggle
  const toggleRestaurantPopup = () =>
    setIsRestaurantPopupVisible(!isRestaurantPopupVisible);

  useEffect(() => {
    // Add event listeners for touch events
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    // Add event listener for clicks outside the sidebar
    document.addEventListener("click", closeSidebarOnClickOutside);

    return () => {
      // Cleanup event listeners
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      document.removeEventListener("click", closeSidebarOnClickOutside);
    };
  }, [isSidebarOpen]);
  console.log("Header component loaded");

  return (
    <div className="relative z-50">
      {/* Mobile Menu Icon */}
      <div className="fixed top-4 left-4 z-20 md:hidden hamburger-icon">
        <MdOutlineMenu
          onClick={toggleSidebar}
          className="text-3xl cursor-pointer"
        />
      </div>

      {/* Mobile Header Logo */}
      <div className="fixed top-4 right-4 z-20 md:hidden">
        <img src={bidVentureLogo} alt="Logo" className="w-20" />
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white shadow-lg mt-10 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } z-20 md:hidden w-[65%] ease-in-out duration-300`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <nav className="flex flex-col ml-10 space-y-4 mt-12">
          <NavLink
            to="/"
            className="text-lg font-semibold hover:text-indigo-600"
            onClick={() => setIsSidebarOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/works"
            className="text-lg font-semibold hover:text-indigo-600"
            onClick={() => setIsSidebarOpen(false)}
          >
            How It Works
          </NavLink>
          <NavLink
            to="/services"
            className="text-lg font-semibold hover:text-indigo-600"
            onClick={() => setIsSidebarOpen(false)}
          >
            For Restaurant
          </NavLink>
          <NavLink
            to="/event"
            className="text-lg font-semibold hover:text-indigo-600"
            onClick={() => setIsSidebarOpen(false)}
          >
            Post an Event
          </NavLink>
          <NavLink
            to="/aboutus"
            className="text-lg font-semibold hover:text-indigo-600"
            onClick={() => setIsSidebarOpen(false)}
          >
            About Us
          </NavLink>
          <NavLink
            to="/contactus"
            className="text-lg font-semibold hover:text-indigo-600"
            onClick={() => setIsSidebarOpen(false)}
          >
            Contact Us
          </NavLink>
          {/* <NavLink
            to=""
            className="text-lg font-semibold hover:text-indigo-600"
            onClick={() => setIsSidebarOpen(false)}
          >
            <div className="private-mobile">
              <a href="#" className="animated-button-mobile   ">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <button
                  className="private-funding-mobile font-bold"
                  onClick={toggleRestaurantPopup}
                >
                  Join as Restaurant
                </button>
              </a>
            </div>
          </NavLink> */}
          <div className="flex gap-4 flex-col pl-6 text-xl cursor-pointer">
            <FaFacebook onClick={() => navigate("/")} />
            <FaInstagram onClick={() => navigate("/")} />
            <FaTwitter onClick={() => navigate("/")} />
          </div>
        </nav>
      </aside>

      {/* Header for Desktop */}
      <header className="flex justify-between items-center px-8 py-4 fixed top-0 z-10 shadow-md w-full min-h-16 bg-white">
        <img src={bidVentureLogo} alt="Logo" className="hidden md:block w-52" />

        <nav className="hidden md:flex items-center space-x-8">
          <NavLink
            to="/"
            className="text-xl font-semibold relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-0.5 after:bg-orange-300 after:transition-all after:duration-300 hover:after:w-full"
            style={({ isActive }) =>
              isActive ? { fontWeight: "bold", color: "orange" } : undefined
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/works"
            className="text-xl  font-semibold relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-0.5 after:bg-orange-300 after:transition-all after:duration-300 hover:after:w-full"
            style={({ isActive }) =>
              isActive ? { fontWeight: "bold", color: "orange" } : undefined
            }
          >
            How It Works
          </NavLink>
          <NavLink
            to="/services"
            className="text-xl font-semibold relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-0.5 after:bg-orange-300 after:transition-all after:duration-300 hover:after:w-full"
            style={({ isActive }) =>
              isActive ? { fontWeight: "bold", color: "orange" } : undefined
            }
          >
            For Restaurant
          </NavLink>
          <NavLink
            to="/event"
            className="text-xl font-semibold relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-0.5 after:bg-orange-300 after:transition-all after:duration-300 hover:after:w-full"
            style={({ isActive }) =>
              isActive ? { fontWeight: "bold", color: "orange" } : undefined
            }
          >
            Post an Event
          </NavLink>
          <NavLink
            to="/aboutus"
            className="text-xl font-semibold relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-0.5 after:bg-orange-300 after:transition-all after:duration-300 hover:after:w-full"
            style={({ isActive }) =>
              isActive ? { fontWeight: "bold", color: "orange" } : undefined
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/contactus"
            className="text-xl font-semibold relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-0.5 after:bg-orange-300 after:transition-all after:duration-300 hover:after:w-full"
            style={({ isActive }) =>
              isActive ? { fontWeight: "bold", color: "orange" } : undefined
            }
          >
            Contact Us
          </NavLink>

          {/* Join as Restaurant Button */}
          {/* <div className="private">
            <div className="animated-button">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <button
                className="flex gap-2private-funding font-bold"
                onClick={toggleRestaurantPopup}
              >
                Join as Restaurant
              </button>
            </div>
          </div> */}
          <div className="flex gap-4 text-2xl cursor-pointer">
            <FaFacebook onClick={() => navigate("/")} />
            <FaInstagram onClick={() => navigate("/")} />
            <FaTwitter onClick={() => navigate("/")} />
          </div>
        </nav>
      </header>

      {/* Popup Form for Join as Restaurant */}
      {isRestaurantPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="container mx-auto max-w-full sm:max-w-4xl bg-white p-6 sm:p-8 rounded-lg shadow-lg relative max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={toggleRestaurantPopup}
              className="absolute font-bold top-3 right-3 text-4xl text-gray-700 hover:text-red-500 focus:outline-none"
            >
              &times;
            </button>

            <h1 className="text-2xl sm:text-3xl font-bold text-center text-[#4A90E2] mb-4">
              Join as Restaurant
            </h1>

            <form>
              {/* Owner Name */}
              <div className="mb-6">
                <label
                  htmlFor="owner-name"
                  className="block text-sm sm:text-lg font-medium text-gray-700"
                >
                  Owner Name
                </label>
                <input
                  id="owner-name"
                  type="text"
                  className="mt-2 w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Enter Owner Name"
                />
              </div>

              {/* Restaurant Name */}
              <div className="mb-6">
                <label
                  htmlFor="restaurant-name"
                  className="block text-sm sm:text-lg font-medium text-gray-700"
                >
                  Restaurant Name
                </label>
                <input
                  id="restaurant-name"
                  type="text"
                  className="mt-2 w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Enter Restaurant Name"
                />
              </div>

              {/* City */}
              <div className="mb-6">
                <label
                  htmlFor="city"
                  className="block text-sm sm:text-lg font-medium text-gray-700"
                >
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  className="mt-2 w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Enter City"
                />
              </div>

              {/* Email */}
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm sm:text-lg font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="mt-2 w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Enter Email Address"
                />
              </div>

              {/* Mobile Number */}
              <div className="mb-6">
                <label
                  htmlFor="mobile"
                  className="block text-sm sm:text-lg font-medium text-gray-700"
                >
                  Mobile Number
                </label>
                <input
                  id="mobile"
                  type="tel"
                  className="mt-2 w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Enter Mobile Number"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#4A90E2] text-white px-8 py-3 rounded-lg text-base sm:text-lg font-semibold transition duration-300 hover:bg-blue-600 focus:outline-none"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
