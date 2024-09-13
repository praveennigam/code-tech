import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import {
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJsSquare,
} from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { motion } from "framer-motion";

const Technologies = () => {
  const getAnimationProps = (index) => ({
    initial: { y: index % 2 === 0 ? -10 : 10 },
    animate: {
      y: index % 2 === 0 ? [10, -10] : [-10, 10],
      transition: {
        duration: 0.5,
        delay: 0.3,

        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

  const icons = [
    { Component: RiReactjsLine, color: "text-cyan-600" },
    { Component: FaNodeJs, color: "text-green-600" },
    { Component: SiMongodb, color: "text-green-600" },
    { Component: FaJsSquare, color: "text-yellow-500" },
    { Component: SiExpress, color: "text-fuchsia-400" },
    { Component: FaHtml5, color: "text-orange-600" },
    { Component: FaCss3Alt, color: "text-blue-600" },
    { Component: FaBootstrap, color: "text-purple-600" },
  ];

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl font-semibold text-transparent">
          Techno
          <span className="bg-gradient-to-r from-blue-900 via-green-950 to-purple-900 text-transparent bg-clip-text text-4xl tracking-tight">
            logies
          </span>
        </span>
      </motion.h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {icons.map(({ Component, color }, index) => (
          <motion.div
            key={index}
            {...getAnimationProps(index)}
            className="rounded-2xl border-2 border-neutral-700 py-4 px-6"
          >
            <Component className={`text-7xl ${color}`} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
