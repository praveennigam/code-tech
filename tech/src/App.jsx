import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Study from "./components/Study";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "slick-carousel/slick/slick.css"; // Updated import
import "slick-carousel/slick/slick-theme.css"; // Updated import

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-20 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Study />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
