import React from "react";
import logo from "../assets/logo.png";
import {
  FaFacebook,
  FaWhatsapp,
  FaPhone,
  FaInstagram,
  FaYoutube,
  FaTelegramPlane,
  FaGoogle,
} from "react-icons/fa";
import { motion } from "framer-motion";

const rotateAnimation = {
  rotate: [0, 360],
};

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 bg-transparent text-white">
      <motion.div
        className="flex-shrink-0 items-center relative"
        animate={rotateAnimation}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <img
          src={logo}
          alt="Logo"
          className="h-12 w-12 rounded-full mx-1 my-1 logo relative z-10"
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 opacity-50 z-0"></div>
      </motion.div>

      <div className="flex-grow"></div>

      <div className="flex items-center gap-4 mx-2 text-xl">
        <FaGoogle
          className="text-white cursor-pointer text-lg"
          onClick={() =>
            window.open("mailto:techsiksha1999@gmail.com", "_blank")
          }
        />
        <FaFacebook
          className="text-white cursor-pointer text-lg"
          onClick={() =>
            window.open(
              "https://www.facebook.com/share/19DdSQdbyb/?mibextid=qi2Omg",
              "_blank"
            )
          }
        />
        <FaWhatsapp
          className="text-white cursor-pointer text-lg"
          onClick={() => window.open("https://wa.me/+919755359109", "_blank")}
        />
        <FaPhone
          className="text-white cursor-pointer text-lg"
          onClick={() => window.open("tel:+919109481480", "_blank")}
        />
        <FaInstagram
          className="text-white cursor-pointer text-lg"
          onClick={() =>
            window.open(
              "https://www.instagram.com/thewebseller?igsh=MXRrMGN5eHoyam84dg==",
              "_blank"
            )
          }
        />
        <FaYoutube
          className="text-white cursor-pointer text-lg"
          onClick={() =>
            window.open(
              "https://youtube.com/@codetech-q9m?si=a7KhTEEmdRJzQmyG",
              "_blank"
            )
          }
        />
        <FaTelegramPlane
          className="text-white cursor-pointer text-lg"
          onClick={() => window.open("https://t.me/techshiksha1999", "_blank")}
        />
      </div>
    </nav>
  );
};

export default Navbar;
