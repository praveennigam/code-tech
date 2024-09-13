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
const words = ["Website", "Business", "Brand", "Strategy "];

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

  return (
    <div className="relative border-neutral-900 pb-10 lg:mb-16 mx-6 px-4 sm:px-8 md:px-10 rounded-3xl md:py-10  border-b  ">
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
            className="pb-6 pt-6 text-xl sm:text-5xl md:text-3xl lg:text-5xl tracking-tight lg:mt-5 font-sans font-bold text-white"
          >
            <b>
              <motion.span
                animate={gradientAnimation}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="bg-gradient-to-r from-orange-400 via-blue-800 to-green-800 bg-clip-text text-transparent"
                style={{ backgroundSize: "200%" }}
              >
                APP & WEB
              </motion.span>

              <motion.span
                animate={gradientAnimation}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="bg-gradient-to-r from-slate-900 via-blue-800 to-green-300 bg-clip-text text-transparent"
                style={{ backgroundSize: "200%" }}
              >
                <span></span> DEVELOPMENT AGENCY
              </motion.span>
            </b>
          </motion.h1>
          <motion.div
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-400 via-blue-400 to-purple-400 bg-clip-text text-xl sm:text-2xl tracking-tight text-transparent font-thin"
          >
            <b>
              Develop your{" "}
              <motion.span
                key={currentWord}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
              >
                <b className="text-blue-500"> {currentWord}</b>{" "}
              </motion.span>{" "}
              .
            </b>
          </motion.div>
          <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="my-2 max-w-full py-6 font-medium tracking-wide text-gradient-to-r from-blue-600 via-slate-500 to-purple-700 text-center lg:text-left"
          >
            {HERO_CONTENT}
          </motion.p>
          <button
            onClick={() => setShowMore(true)}
            className=" bg-gradient-to-r  from-blue-600 via-blue-600 to-purple-600 bg mt-4 px-6 py-3  text-white font-bold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 mb-16"
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Why Choose CODE-TECH?</h2>
            <ul className="list-disc list-inside mb-6">
              <li className="mb-2">
                <b>Customized Web Solutions:</b> Your business is unique, and
                your website should reflect that. We offer bespoke web
                development services tailored to your specific needs and goals.
                From custom designs to unique functionalities, our team ensures
                your website stands out and serves as a powerful tool for your
                business.
              </li>
              <li className="mb-2">
                <b>Cutting-Edge Technologies:</b> Stay ahead of the curve with
                our expertise in the latest web technologies and trends. We use
                the most advanced tools and frameworks to build websites that
                are not only visually appealing but also highly functional and
                secure.
              </li>
              <li className="mb-2">
                <b>User-Centric Design:</b> Great design is more than just
                aesthetics; it’s about creating an exceptional user experience.
                Our designers focus on intuitive navigation, responsive layouts,
                and engaging visuals to ensure your visitors have a seamless and
                enjoyable experience on your site.
              </li>
              <li className="mb-2">
                <b>SEO and Performance Optimization:</b> What’s a great website
                if it’s not seen? We incorporate best practices for SEO and
                performance optimization from the ground up, ensuring that your
                site ranks well in search engines and loads quickly, enhancing
                user satisfaction and engagement.
              </li>
              <li className="mb-2">
                <b>End-to-End Support:</b> From the initial concept to the final
                launch, and beyond, we provide comprehensive support throughout
                the development process. Our team is always here to assist with
                updates, maintenance, and any challenges you may encounter.
              </li>
            </ul>
            <h3 className="text-xl font-semibold mb-4">
              Success Stories from Our Clients
            </h3>
            <blockquote className="mb-4 italic">
              "Working with [Your Company Name] was a game-changer for us. They
              took our vision and turned it into a stunning website that not
              only looks great but performs exceptionally well. The whole
              process was smooth and professional." – [Client Name], [Position],
              [Company]
            </blockquote>
            <blockquote className="mb-4 italic">
              "The team at [Your Company Name] went above and beyond to ensure
              our site met all our requirements. Their expertise in web
              development and dedication to customer satisfaction was evident
              throughout our project." – [Client Name], [Position], [Company]
            </blockquote>
            <p className="mt-4">
              Ready to Elevate Your Online Presence? Whether you’re launching a
              new website or revamping an existing one, [Your Company Name] is
              here to help. Contact us today to discuss your project and
              discover how we can turn your digital vision into reality.
            </p>
            <a
              href="[contact link]"
              className="mt-4 inline-block px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
            >
              Get a Free Consultation
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Hero;
