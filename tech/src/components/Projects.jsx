import React from "react";
import { motion } from "framer-motion";

// Random feedback images and texts
const feedbackEntries = [
  {
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    text: "Fantastic work! Exceeded all our expectations.",
  },
  {
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    text: "Great attention to detail. Highly recommend.",
  },
  {
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    text: "Very professional and delivered on time.",
  },
  {
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    text: "Impressed with the quality and creativity.",
  },
  {
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    text: "Exceptional service. Will definitely work again.",
  },
  {
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    text: "The project was a huge success. Thank you!",
  },
  {
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    text: "A pleasure to work with. Outstanding results.",
  },
  {
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    text: "Highly skilled and professional. Very satisfied.",
  },
  {
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    text: "Excellent work! Exceeded all our requirements.",
  },
  {
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    text: "Fantastic job. We are very pleased with the outcome.",
  },
];

const Projects = () => {
  return (
    <div className="border-b border-neutral-950 pb-16">
      {/* Header Section */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-16 text-center text-4xl font-sans"
      >
        <span className="bg-gradient-to-r from-blue-500 via-purple-400 to-yellow-900 font-semibold bg-clip-text text-transparent">
          Featured Works
        </span>
      </motion.h1>

      {/* Projects Section */}
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-2/3 space-y-8">
          {[
            {
              name: "HUMMCARE",
              category: "Healthcare",
              image:
                "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1200",
              description: "Innovative solutions for healthcare management.",
            },
            {
              name: "POSHN",
              category: "Business",
              image:
                "https://images.pexels.com/photos/6932532/pexels-photo-6932532.jpeg?auto=compress&cs=tinysrgb&w=600",
              description: "Business solutions with a modern approach.",
            },
            {
              name: "CP PLUS",
              category: "E-Commerce",
              image:
                "https://images.pexels.com/photos/5775937/pexels-photo-5775937.jpeg?auto=compress&cs=tinysrgb&w=600",
              description: "E-commerce platform with extensive features.",
            },
            {
              name: "ACROSS THE GLOBE",
              category: "Social Network",
              image:
                "https://images.pexels.com/photos/3314294/pexels-photo-3314294.jpeg?auto=compress&cs=tinysrgb&w=600",
              description: "Connect people globally through a social network.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.7 }}
              className="flex flex-wrap lg:flex-nowrap items-center mb-16"
            >
              <div className="w-full lg:w-1/2 flex justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-64 h-64 lg:w-80 lg:h-80 rounded-2xl object-cover"
                />
              </div>
              <div className="w-full lg:w-1/2 lg:ml-6 flex flex-col justify-center text-center lg:text-left mt-6 lg:mt-0">
                <h4 className="text-xl text-purple-500 font-sans">
                  {item.name}
                </h4>
                <p className="text-lg font-light font-sans">{item.category}</p>
                <p className="text-md font-light font-sans text-gray-100 mt-2">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Clients Section */}
      <div className="text-center mt-16">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent"
        >
          Our Happy Clients
        </motion.h2>
        <div className="flex flex-wrap justify-center">
          {feedbackEntries.map((entry, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.7 }}
              className="bg-transparent p-6 rounded-lg border border-gray-500 border-solid  shadow-lg max-w-xs mx-2 mb-8"
            >
              <img
                src={entry.image}
                alt="Client Feedback"
                className="w-full rounded-lg mb-4"
              />
              <p className="text-gray-300 text-center">{entry.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
