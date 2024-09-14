import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import me1 from "../assets/me1.jpeg";
import me2 from "../assets/me2.jpeg";
import me3 from "../assets/me3.jpeg";
import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants";

// Define the animation keyframes for the gradient
const gradientAnimation = {
  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
};

// Container animation variant
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

// Words to animate
const words = ["Website", "Business", "Brand", "Strategy"];

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWord((prevWord) => {
        const nextIndex = (words.indexOf(prevWord) + 1) % words.length;
        return words[nextIndex];
      });
    }, 3000); // Change every 3 seconds

    return () => clearInterval(wordInterval);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send email, show confirmation, etc.)
    console.log("Form submitted");
  };

  return (
    <div className="relative border-neutral-900 pb-10 lg:mb-16 mx-6 px-4 sm:px-8 md:px-10 rounded-3xl md:py-10 border-b">
      <motion.div
        className="my-8 flex flex-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-6 pt-6 text-5xl sm:text-2xl md:text-4xl lg:text-5xl tracking-tight lg:mt-5 font-sans font-bold text-white"
          >
            <b>
              <motion.span
                animate={gradientAnimation}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="bg-gradient-to-r from-orange-400 via-blue-800 to-green-800 bg-clip-text text-center text-transparent inline-block"
                style={{ backgroundSize: "200%" }}
              >
                WEB & APP DEVELOPMENT
              </motion.span>{" "}
              <motion.span
                animate={gradientAnimation}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="bg-gradient-to-r from-slate-900 via-blue-800 to-green-300 bg-clip-text text-transparent inline-block"
                style={{ backgroundSize: "200%" }}
              >
                {" "}
              </motion.span>
            </b>
          </motion.h1>

          <motion.div
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-400 via-blue-400 to-purple-400 bg-clip-text text-xl sm:text-2xl tracking-tight text-transparent font-thin"
          >
            <b className="">
              Develop your{" "}
              <motion.span
                key={currentWord}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
              >
                <b className="text-blue-500 p-2 border-b border-gray-300 ">
                  {currentWord}
                </b>{" "}
              </motion.span>
              .
            </b>
          </motion.div>
          <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="text-lg font-light mt-10"
          >
            Welcome to{" "}
            <span className="bg-gradient-to-r from-yellow-400  to-violet-800 bg-clip-text text-sm sm:text-xl tracking-normal text-transparent font-bold ">
              CODE-TECH,{" "}
            </span>{" "}
            where innovative web development meets exceptional design. In
            today’s digital world, your website is often the first impression
            potential customers have of your business. Make it count with a
            website that not only looks stunning but performs flawlessly. At
            <span className="bg-gradient-to-r from-yellow-400  to-violet-800 bg-clip-text text-sm sm:text-xl tracking-normal text-transparent font-bold ">
              &nbsp; CODE-TECH,{" "}
            </span>{" "}
            we specialize in crafting tailor-made web solutions that drive
            results and elevate your online presence.
          </motion.p>
          <button
            onClick={() => setShowMore(true)}
            className="bg-gradient-to-r from-blue-600 via-blue-600 to-green-600 bg mt-4 px-6 py-3 text-white font-bold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 mb-16"
          >
            Explore
          </button>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end lg:pl-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Slider {...settings} className="w-full lg:w-full">
            {[me1, me2, me3].map((image, index) => (
              <div key={index} className="p-4">
                <motion.img
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="rounded-md w-full max-w-3xl"
                />
              </div>
            ))}
          </Slider>
        </motion.div>
      </motion.div>

      {/* Full Screen Overlay */}
      {showMore && (
        <motion.div
          className="fixed inset-0 z-50 bg-gradient-to-r from-slate-900 via-blue-800 to-green-500 bg-opacity-90 p-6 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={() => setShowMore(false)}
            className="absolute top-4 right-4 text-2xl text-gray-800"
          >
            &times;
          </button>
          <div className="max-w-4xl mx-auto p-6  rounded-lg shadow-lg">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-4"
            >
              Why Choose Us
            </motion.h2>
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="list-disc list-inside mb-4"
            >
              <li className="mb-2">
                Experienced and dedicated team of developers.
              </li>
              <li className="mb-2">
                Custom solutions tailored to your specific needs.
              </li>
              <li className="mb-2">
                Cutting-edge technology and innovative approaches.
              </li>
              <li className="mb-2">
                Timely delivery and excellent customer support.
              </li>
              <li className="mb-2">
                Competitive pricing and flexible packages.
              </li>
            </motion.ul>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg mb-6"
            >
              Our mission is to empower businesses by providing exceptional
              digital solutions that drive success. We take pride in our work
              and are committed to exceeding your expectations.
            </motion.p>

            {/* Additional Content */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mb-6"
            >
              <h3 className="text-2xl font-semibold mb-4">Our Services</h3>
              <ul className="list-disc list-inside pl-6 mb-6">
                <li className="mb-2">Custom Website Design and Development</li>
                <li className="mb-2">Mobile App Development</li>
                <li className="mb-2">E-commerce Solutions</li>
                <li className="mb-2">Digital Marketing Services</li>
                <li className="mb-2">SEO and Content Optimization</li>
              </ul>
              <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
              <p className="text-lg mb-4">We'd love to hear from you!</p>
              <a
                href="mailto:techsiksha@1999gmail.com"
                className=" bg-gradient-to-r from-green-600 via-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg shadow-lg inline-block hover:bg-blue-500 transition duration-300"
              >
                Send us an email
              </a>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Hero;
