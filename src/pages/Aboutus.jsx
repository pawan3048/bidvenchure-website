import FAQ from "../components/FAQ.jsx";
import Footer from "../components/Footer";
import OurTeamSection from "../components/OurTeamSection.jsx";
import Testimonial from "../components/Testimonial.jsx";
import "./Aboutus.css";

import img from "../images/picaboutus.png";

const Aboutus = () => {
  return (
    <>
      <section className="bg-gray-50 py- px-6 md:px-20 md:mt-32 md:ml-20  mt-20">
        <div className="container-about  mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 ">
          {/* Right Side - Content */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold  mb-6">About Us</h2>
            <p className="text-lg text-gray-700 mb-6">
              <strong>Mission Statement:</strong> Our mission is to make event
              planning effortless for customers while helping restaurants grow
              their business through meaningful connections.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              <strong>Vision Statement:</strong> We envision a world where
              finding the perfect venue is simple, affordable, and stress-free.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              <strong>Our Team:</strong> We’re a passionate group of event
              enthusiasts, restaurant experts, and tech innovators working to
              create better experiences for everyone.
            </p>
            <div className="mt-8">
              <button className="bg-[#7489e3] text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300">
                Have questions? Contact us today!
              </button>
            </div>
          </div>

          {/*  */}

          {/* Left Side - Image */}
          <div className="flex justify-center items-center">
            <img
              src={img} // replace with your actual image path
              alt="Team"
              className="aboutus-image w-[500px] lg:w-2/3 h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>
      <OurTeamSection />
      <Testimonial />
      <FAQ />
      <Footer />
    </>
  );
};

export default Aboutus;
