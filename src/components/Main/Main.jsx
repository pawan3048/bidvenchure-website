import React, { useState } from "react";
import AssociateBanner from "../AssociateBanner.jsx";
import BannerIcon from "../BannerIcon.jsx";
import Footer from "../Footer.jsx";
// import Header from "../Header.jsx";
import HomeCard from "../HomeCard.jsx";
import Slider2 from "../Slider2.jsx";
import Steps from "../Steps.jsx";
import Whychooseus3 from "../Whychooseus3.jsx";
import "./Main.css";

const Main = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div>
      <Slider2 />
      <BannerIcon />
      <HomeCard />

      <Whychooseus3 />
      <AssociateBanner />
      <Steps />
      <Footer />

      <button onClick={togglePopup} className="explore-btn1  ">
        Book Your Event
      </button>

      {/* Popup Form */}
      {isPopupVisible && (
        <div className="  fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="container mx-auto max-w-full sm:max-w-4xl bg-white p-6 sm:p-8 rounded-lg shadow-lg overflow-y-auto max-h-[80vh] relative">
            {/* Close Button */}
            <button
              onClick={togglePopup}
              className="absolute font-bold  top-3 right-3 text-4xl  text-gray-700 hover:text-red-500 focus:outline-none"
            >
              &times; {/* X symbol */}
            </button>

            <h1 className="  text-xl   sm:text-3xl font-bold text-center text-[#4A90E2] mb-4">
              Plan Your Perfect Event in Minutes
            </h1>
            <p className="text-center text-base sm:text-lg text-gray-600 mb-6">
              Tell us what you need, and let nearby restaurants offer their best
              deals.
            </p>

            <form>
              {/* Event Type */}
              <div className="mb-6">
                <label
                  htmlFor="event-type"
                  className="block text-sm sm:text-lg font-medium text-gray-700"
                >
                  Event Type
                </label>
                <select
                  id="event-type"
                  className="mt-2 w-full p-3 border border-gray-300 rounded-md"
                >
                  <option value="birthday">Birthday</option>
                  <option value="wedding">Wedding</option>
                  <option value="corporate">Corporate</option>
                </select>
              </div>

              {/* Event Date and Time */}
              <div className="mb-6">
                <label
                  htmlFor="event-date"
                  className="block text-sm sm:text-lg font-medium text-gray-700"
                >
                  Event Date and Time
                </label>
                <input
                  id="event-date"
                  type="datetime-local"
                  className="mt-2 w-full p-3 border border-gray-300 rounded-md"
                />
              </div>

              {/* Number of Guests */}
              <div className="mb-6">
                <label
                  htmlFor="guests"
                  className="block text-sm sm:text-lg font-medium text-gray-700"
                >
                  Number of Guests
                </label>
                <input
                  id="guests"
                  type="number"
                  placeholder="e.g., 50 people"
                  className="mt-2 w-full p-3 border border-gray-300 rounded-md"
                />
              </div>

              {/* Budget Per Guest */}
              <div className="mb-6">
                <label
                  htmlFor="budget"
                  className="block text-sm sm:text-lg font-medium text-gray-700"
                >
                  Budget Per Guest
                </label>
                <input
                  id="budget"
                  type="text"
                  placeholder="e.g., $25-$50 per guest"
                  className="mt-2 w-full p-3 border border-gray-300 rounded-md"
                />
              </div>

              {/* Location */}
              <div className="mb-6">
                <label
                  htmlFor="location"
                  className="block text-sm sm:text-lg font-medium text-gray-700"
                >
                  Location
                </label>
                <input
                  id="location"
                  type="text"
                  placeholder="City or specific area"
                  className="mt-2 w-full p-3 border border-gray-300 rounded-md"
                />
              </div>

              {/* Additional Preferences */}
              <div className="mb-6">
                <label
                  htmlFor="preferences"
                  className="block text-sm sm:text-lg font-medium text-gray-700"
                >
                  Additional Preferences
                </label>
                <textarea
                  id="preferences"
                  rows="4"
                  placeholder="e.g., Vegan options, outdoor seating, etc."
                  className="mt-2 w-full p-3 border border-gray-300 rounded-md"
                ></textarea>
              </div>

              {/* CTA Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#4A90E2] text-white px-8 py-3 rounded-lg text-sm sm:text-lg hover:bg-[#357ABD] transition duration-300"
                >
                  Post Your Event Now and Start Receiving Offers!
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
