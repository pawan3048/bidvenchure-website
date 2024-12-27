import { useState } from "react";
import joinasrestaurent from "../images/joinasrestaurent.png";
import postyourevent from "../images/postyourevent.png";
import "./HomeCard.css"; // CSS for animations and styles

const HomeCard = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const [isRestaurantPopupVisible, setIsRestaurantPopupVisible] =
    useState(false);

  const toggleRestaurantPopup = () => {
    setIsRestaurantPopupVisible(!isRestaurantPopupVisible);
  };

  return (
    <div className="flex flex-col items-center justify-center border">
      {/* Main Container with responsive grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full px-4 md:px-8">
        {/* Customers Card */}
        <div className="bg-[#ecb07f] shadow-lg rounded-lg flex flex-col items-center justify-center overflow-hidden">
          <img
            src={postyourevent}
            alt="Post Event"
            className="w-full h-48 md:h-72 object-cover"
          />
          <div className="text-center px-4 py-4 w-full">
            <p className="text-lg md:text-2xl font-semibold mb-2">
              Let restaurants compete for your event.
            </p>
            <p className="text-sm md:text-base mb-4">
              Save time, money, and stress by posting your event now.
            </p>

            <button
              onClick={togglePopup}
              className="explore-btn bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300 font-semibold"
            >
              Post Your Event Now
            </button>

            {/* Popup Form */}
            {isPopupVisible && (
              <div className="  fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                <div className="container mx-auto max-w-full sm:max-w-4xl bg-white p-6 sm:p-8 rounded-lg shadow-lg overflow-y-auto max-h-[80vh] relative">
                  {/* Close Button */}
                  <button
                    onClick={togglePopup}
                    className="absolute font-bold  top-3 right-3 text-4xl   text-gray-700 hover:text-red-500 focus:outline-none"
                  >
                    &times; {/* X symbol */}
                  </button>

                  <h1 className="text-2xl sm:text-3xl font-bold text-center text-[#4A90E2] mb-4">
                    Plan Your Perfect Event in Minutes
                  </h1>
                  <p className="text-center text-base sm:text-lg text-gray-600 mb-6">
                    Tell us what you need, and let nearby restaurants offer
                    their best deals.
                  </p>

                  <form>
                    {/* Event Type */}
                    <div className="mb-6">
                      <label
                        htmlFor="event-type"
                        className="block text-left text-sm sm:text-lg font-medium text-gray-700"
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
                        className="block text-left text-sm sm:text-lg font-medium text-gray-700"
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
                        className="block text-left text-sm sm:text-lg font-medium text-gray-700"
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
                        className="block text-left text-sm sm:text-lg font-medium text-gray-700"
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
                        className="block text-left text-sm sm:text-lg font-medium text-gray-700"
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
                        className="block text-left text-sm sm:text-lg font-medium text-gray-700"
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
                        className="bg-[#4A90E2] text-white px-8 py-3 rounded-lg text-base sm:text-lg hover:bg-[#357ABD] transition duration-300"
                      >
                        Post Your Event Now and Start Receiving Offers!
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Restaurants Card */}
        <div className="bg-[#ecb07f] shadow-lg rounded-lg flex flex-col items-center justify-center overflow-hidden">
          <img
            src={joinasrestaurent}
            alt="Join as Restaurant"
            className="w-full h-48 md:h-72 object-cover"
          />
          <div className="text-center px-4 py-4 w-full">
            <p className="text-lg md:text-2xl font-semibold mb-2">
              Showcase your services to customers.
            </p>
            <p className="text-sm md:text-base mb-4">
              Sign up and start bidding on local events today.
            </p>

            <button
              onClick={toggleRestaurantPopup}
              className="explore-btn bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300 font-semibold"
            >
              Join as a Restaurant
            </button>

            {/* Popup Form for Join as Restaurant */}
            {isRestaurantPopupVisible && (
              <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                <div className="container mx-auto max-w-full sm:max-w-4xl bg-white p-6 sm:p-8 rounded-lg shadow-lg relative max-h-[90vh] overflow-y-auto">
                  {/* Close Button */}
                  <button
                    onClick={toggleRestaurantPopup}
                    className="font-bold absolute top-3 right-3 text-4xl text-gray-700 hover:text-red-500 focus:outline-none"
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
                        className="block text-left text-sm sm:text-lg font-medium text-gray-700"
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
                        className="block text-left text-sm sm:text-lg font-medium text-gray-700"
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
                        className="block text-left text-sm sm:text-lg font-medium text-gray-700"
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
                        className="block text-left text-sm sm:text-lg font-medium text-gray-700"
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
                        className="block text-left text-sm sm:text-lg font-medium text-gray-700"
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
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
