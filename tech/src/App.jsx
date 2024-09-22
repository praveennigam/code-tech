import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Study from "./components/Study";
import Projects from "./components/Contact";
import Contact from "./components/Contact";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

      {showButton && (
        <span className="bg-black fixed bottom-5 right-2 p-2 h-12 w-9 opacity-50 hover:opacity-900 hover:bg-green-900 rounded-xl ">
        <button 
          onClick={scrollToTop} 
          className="fixed bottom-5 right-2 p-2 bg-gradient-to-r from-yellow-400  to-violet-800 bg-clip-text text-4xl  tracking-normal text-transparent font-bold opacity-100 hover:[bg-gradient-to-r from-green-400  to-violet-800]"
          aria-label="Back to Top"
        >
          ↑
        </button>
        </span>
      )}
    </div>
  );
};

export default App;
