import React from "react";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <>
      <div className="bg-[#d3d7e9] py-10 px-4 sm:px-6 text-white  mt-10 md:mt-20 ">
        <div className="container-form-contact mx-auto mt-10 flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8">
          {/* Right Column: Contact Form */}
          <div className="w-full lg:w-1/2 bg-white text-gray-700 p-6 sm:p-8 rounded-lg shadow-lg">
            <h2 className="text-xl sm:text-2xl text-center font-semibold text-gray-800 mb-4">
              Contact Us
            </h2>
            <form>
              {/* Name Field */}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm sm:text-base font-medium"
                >
                  Enter your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your Name"
                  className="w-full mt-2 p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>

              {/* Email Field */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm sm:text-base font-medium"
                >
                  Enter Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full mt-2 p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>

              {/* Message Field */}
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm sm:text-base font-medium"
                >
                  Enter your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  rows="4"
                  className="w-full mt-2 p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full sm:w-auto px-4 py-2 sm:py-3 bg-purple-600 text-white rounded-lg text-sm sm:text-base hover:bg-purple-500 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Left Column: Contact Information */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="bg-white text-gray-700 rounded-lg shadow-lg p-6 sm:p-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                Join Our Big Venture
              </h1>
              <p className="text-sm sm:text-base mb-4">
                Nam ultricies ultricies nec tortor pulvinar esteras loremips est
                orem.
              </p>
              <div className="space-y-4 text-sm sm:text-base">
                <p>
                  <strong>Address:</strong> 3045 10 Sunrize Avenue, 123-456-7890
                </p>
                <p>
                  <strong>Working Hours:</strong> Mon - Fri: 9:00 am - 8:00 pm,
                  Sat - Sun: 9:00 am - 10:00 pm
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:contacts@esbnyc.com"
                    className="text-blue-400 hover:underline"
                  >
                    contacts@esbnyc.com
                  </a>
                </p>
              </div>

              {/* Social Media Links */}
              <div className="flex flex-wrap justify-start space-x-4 text-sm mt-6">
                <a href="#" className="hover:text-blue-400">
                  <i className="fab fa-facebook-f"></i> Facebook
                </a>
                <a href="#" className="hover:text-blue-400">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
                <a href="#" className="hover:text-blue-400">
                  <i className="fab fa-linkedin-in"></i> LinkedIn
                </a>
              </div>
              <p className="text-xs mt-4 text-gray-500">©2022 Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
