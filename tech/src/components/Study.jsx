import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png"; // Add your logo image
import additionalImage from "../assets/project-4.jpg"; // Add your additional image

const listItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Study = () => {
  return (
    <div className="border-b my-7 border-neutral-900 pb-4">
      {/* Top Section with Lists and Logo */}
      <div className="flex flex-wrap mb-8">
        {/* Centered Title */}
        <div className="w-full text-center mb-8">
          <h2 className="text-3xl font-semibold">
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
        </div>

        {/* Services List */}
        <div className="w-full md:w-1/2 p-4">
          <ul className="list-disc list-inside text-left max-w-xl mx-auto">
            {[
              "Website development",
              "Digital marketing",
              "ReactJS",
              "NodeJS",
              "UI / UX design",
              "Progressive web app development",
              "MERN Stack Development",
              "Project Supplyment Student",
              "Blockchain Development",
            ].map((service, index) => (
              <motion.li
                key={index}
                variants={listItemVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-2 text-lg"
              >
                {service}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Logo */}
        <div className="w-full md:w-1/2 p-2 flex justify-center items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-3/4 max-w-sm object-cover rounded-full"
          />
        </div>
      </div>

      {/* YouTube Video */}
      <div className="text-center mt-8 mb-8">
        <h2 className="bg-gradient-to-r from-pink-600 via-slate-400 to-purple-700 bg-clip-text text-transparent font-bold text-3xl mb-8">
          Watch Our Video
        </h2>
        <div className="relative pb-[56.25%] mb-8">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/xM-Yd-hEU1Y" // Updated to embed URL format
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Additional Image */}
      <div className="flex justify-center mt-32 mb-8">
        <img
          src={additionalImage}
          alt="Additional"
          className="w-full max-w-4xl object-cover"
        />
      </div>
    </div>
  );
};

export default Study;
