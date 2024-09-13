import React from "react";
import logo from "../assets/logo.png";
import {
  FaFacebook,
  FaWhatsapp,
  FaPhone,
  FaInstagram,
  FaYoutube,
  FaTelegramPlane,
  FaGoogle, // Import Gmail icon
} from "react-icons/fa";
import { motion } from "framer-motion";

const rotateAnimation = {
  rotate: [0, 360],
};

const Navbar = () => {
  return (
    <nav className="mb-20 items-center justify-between py-6 flex bg-transparent text-white">
      {/* Logo */}
      <motion.div
        className="flex-shrink-0 items-center relative"
        animate={rotateAnimation}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <img
          src={logo}
          alt="Logo"
          className="h-14 w-14 rounded-full mx-1 my-1 logo relative z-10"
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 opacity-50 z-0"></div>
      </motion.div>

      {/* Social Icons */}
      <div className="flex m-8 items-center justify-center gap-4 mx-2 text-2xl">
        <FaGoogle
          className="text-white cursor-pointer"
          onClick={() =>
            window.open(
              "mailto:techsiksha1999@gmail.com", // Replace with your Gmail address
              "_blank"
            )
          }
        />
        <FaFacebook
          className="text-white cursor-pointer"
          onClick={() =>
            window.open(
              "https://www.facebook.com/share/19DdSQdbyb/?mibextid=qi2Omg",
              "_blank"
            )
          }
        />
        <FaWhatsapp
          className="text-white cursor-pointer"
          onClick={() => window.open("https://wa.me/+919755359109", "_blank")}
        />
        <FaPhone
          className="text-white cursor-pointer"
          onClick={() => window.open("tel:+919109481480", "_blank")}
        />
        <FaInstagram
          className="text-white cursor-pointer"
          onClick={() =>
            window.open(
              "https://www.instagram.com/thewebseller?igsh=MXRrMGN5eHoyam84dg==",
              "_blank"
            )
          }
        />
        <FaYoutube
          className="text-white cursor-pointer"
          onClick={() =>
            window.open(
              "https://youtube.com/@codetech-q9m?si=a7KhTEEmdRJzQmyG", // Replace with your YouTube channel URL
              "_blank"
            )
          }
        />
        <FaTelegramPlane
          className="text-white cursor-pointer"
          onClick={() =>
            window.open(
              " https://t.me/techshiksha1999", // Replace with your Telegram handle or group link
              "_blank"
            )
          }
        />
      </div>
    </nav>
  );
};

export default Navbar;
