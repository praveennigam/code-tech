import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const About = () => {
  // State to control the keys of CountUp components
  const [countUpKeys, setCountUpKeys] = useState([0, 0, 0]);

  // Function to restart all CountUp animations
  const restartCountUps = () => {
    setCountUpKeys(
      (prevKeys) => prevKeys.map((key) => key + 1) // Increment keys to force restart
    );
  };

  useEffect(() => {
    // Set up the interval to restart CountUp animations every 10 seconds
    const interval = setInterval(() => {
      restartCountUps();
    }, 5000); // Interval of 10 seconds (3 seconds counting + 7 seconds idle)

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className="border-b border-neutral-950 pb-10 py-6">
      {/* Heading Section */}
      <motion.h1
        className="my-16 text-center text-4xl font-sans"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <span className="bg-gradient-to-r from-blue-700 via-orange-900 font-semibold to-yellow-300 bg-clip-text mr-2 text-transparent">
          About{" "}
        </span>{" "}
        <span className="text-neutral-500">Us</span>
      </motion.h1>

      {/* Introduction Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="text-center mb-12"
      >
        <p className="text-lg font-light">
          Together We Innovate, Together We Succeed.
          <br />
          At CODE-TECH, we're more than just creators - we're a team of zealous
          innovators, constantly pushing the boundaries to engineer exceptional
          solutions and deliver unmatched excellence.
        </p>
      </motion.div>

      {/* Achievements Section */}
      <div className="flex flex-wrap justify-center">
        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 2 }}
          className="flex items-center justify-center w-full lg:w-1/2 lg:p-6 "
        >
          <div className="flex flex-col items-center ">
            <CountUp
              key={countUpKeys[0]} // Key for the achievements CountUp
              className="text-6xl font-bold"
              start={0}
              end={1000}
              duration={5}
              separator=","
            />
            <p className="mt-4 text-lg font-light">Achievements</p>
          </div>
        </motion.div>
      </div>

      {/* Statistics Section */}
      <div className="w-full text-center my-12">
        <h2 className="text-3xl font-bold mb-8">Key Statistics</h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: 0.2 }}
            className="w-full md:w-1/3 lg:w-1/4 p-4 border rounded-full "
          >
            <CountUp
              key={countUpKeys[1]} // Key for Products Delivered CountUp
              className="text-4xl font-bold"
              start={0}
              end={100}
              duration={3}
              separator=","
              suffix="+"
            />
            <p className="text-lg mt-2">Products Delivered</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: 0.4 }}
            className="w-full md:w-1/3 lg:w-1/4 p-4 border rounded-full "
          >
            <CountUp
              key={countUpKeys[2]} // Key for Creative Nerds CountUp
              className="text-4xl font-bold"
              start={0}
              end={70}
              duration={3}
              separator=","
              suffix="+"
            />
            <p className="text-lg mt-2">Creative Nerds Under One Roof</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: 0.4 }}
            className="w-full md:w-1/3 lg:w-1/4 p-4 border rounded-full "
          >
            <CountUp
              key={countUpKeys[2]} // Key for Creative Nerds CountUp
              className="text-4xl font-bold"
              start={0}
              end={200}
              duration={3}
              separator=","
              suffix="+"
            />
            <p className="text-lg mt-2">Happy Client</p>
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-transparent py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          What We Can Do For You
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 lg:w-1/4 p-4 bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-2">Discover</h3>
            <p>
              We conduct a thorough market research, competitor analysis, target
              audience, and clients’ requirement.
            </p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full md:w-1/2 lg:w-1/4 p-4 bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p>
              Design and developing immersive web applications and portals to
              drive digital transformation.
            </p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-full md:w-1/2 lg:w-1/4 p-4 bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-2">App Development</h3>
            <p>We implement functionalities to bring the App into life.</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="w-full md:w-1/2 lg:w-1/4 p-4 bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-2">Designing</h3>
            <p>
              We create a research-driven design to visualize and dive deep in
              your industry.
            </p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="w-full md:w-1/2 lg:w-1/4 p-4 bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-2">Marketing</h3>
            <p>
              We constantly measure our efforts to engage new customers,
              increase ROI, and achieve unique business goals.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
