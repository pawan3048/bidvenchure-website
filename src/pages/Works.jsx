import WorkHomeCard from "../../src/pages/WorkHomeCard";
import Footer from "../components/Footer";
import "./Works.css";

import backgroundImage from "../images/banner1.png"; // Adjust path as needed

const Works = () => {
  return (
    <>
      <div className="bg-gray-50 py-16 mt-8 sm:mt-16">
        <div className="container1 mx-auto px-6 lg:px-16 text-center">
          {/* Heading */}
          <h1 className="text-4xl font-bold text-gray-800 mb-1">
            Plan Smarter. Book Faster.
          </h1>

          {/* Subheading */}
          <p className="text-lg text-gray-600  ">
            See how our platform connects customers and restaurants seamlessly.
          </p>

          <WorkHomeCard className="mt-4" />

          {/* Step-by-Step Guide */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-16">
            {/* For Customers */}
            <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
              {/* <h2 className="text-2xl font-semibold text-[#d2273f] mb-6">For Customers</h2> */}

              <div className="private1">
                <p href="#" className="animated-button1">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <button className="private-funding1 font-bold">
                    For Customers
                  </button>
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#d2273f] text-white p-3 rounded-full">
                    <i className="fas fa-sign-in-alt text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Step 1: Sign up and fill out a simple event form.
                    </h3>
                    <p className="text-gray-600">
                      Create an account and share the details of your upcoming
                      event.
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-[#d2273f] text-white p-3 rounded-full">
                    <i class="fas fa-comment-dollar"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Step 2: Get personalized bids from nearby restaurants.
                    </h3>
                    <p className="text-gray-600">
                      Restaurants in your area will send you custom offers based
                      on your needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-[#d2273f] text-white p-3 rounded-full">
                    <i className="fas fa-comments text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Step 3: Chat, compare, and confirm your booking.
                    </h3>
                    <p className="text-gray-600">
                      {" "}
                      Communicate with restaurants, compare offers, and finalize
                      your booking.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* For Restaurants */}
            <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
              {/* <h2 className="text-2xl font-semibold text-[#d2273f] mb-6">For Restaurants</h2> */}

              <div className="private1">
                <p href="#" className="animated-button1">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <button className="private-funding1 font-bold">
                    For Restaurant
                  </button>
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#d2273f] text-white p-3 rounded-full">
                    <i className="fas fa-user-plus text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Step 1: Create a profile to highlight your services.
                    </h3>
                    <p className="text-gray-600">
                      Sign up and build your restaurant profile to showcase your
                      offerings.
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-[#d2273f] text-white p-3 rounded-full">
                    <i className="fas fa-search text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Step 2: Browse active event opportunities in your area.
                    </h3>
                    <p className="text-gray-600">
                      Look for events in your area and start bidding on those
                      that match your expertise.
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-[#d2273f] text-white p-3 rounded-full">
                    <i className="fas fa-handshake text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Step 3: Submit bids and secure bookings effortlessly.
                    </h3>
                    <p className="text-gray-600">
                      Submit your offers and secure bookings with just a few
                      clicks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}

          {/* <div className="work-button  bg-[#d2273f] h-[250px] pt-20 text-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">Join us today and make event planning a breeze!</h2>
          <button className="bg-white text-[#d2273f] font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300">
            Get Started
          </button>
        </div> */}

          <div
            className="work-button relative h-[250px] pt-20 text-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-cover bg-center"
            style={{
              backgroundImage: `url(${backgroundImage})`, // Use imported image
            }}
          >
            {/* Blurred Background Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-md rounded-lg  "></div>

            {/* Content */}
            <div className="relative z-10 mb-4 ">
              <h2 className="text-2xl font-semibold mb-4">
                Join us today and make event planning a breeze!
              </h2>
              <div>
                <div className="flex gap-4 justify-center m-2">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="join_post"
                      className="cursor-pointer w-4 h-4"
                    />
                    <span className="">Post your event</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="join_post"
                      className="cursor-pointer w-4 h-4"
                    />
                    <span className="">Join as a restaurant</span>
                  </div>
                </div>
              </div>
              <button className="bg-white text-[#101010] font-semibold py-2 px-6 rounded-lg hover:bg-orange-500 transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Works;
