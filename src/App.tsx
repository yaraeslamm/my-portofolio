// src/App.tsx
import React from 'react';

import Navbar from "./components/Navbar.tsx";
import About from "./components/About.tsx";
import Projects from "./components/Projects.tsx";
import Skills from "./components/Skills.tsx";
import Contact from "./components/Contact.tsx";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { motion } from 'framer-motion';
// **
//  * Hero section component
//  */
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-neutral-200 to-white px-6">
      <div className="max-w-4xl mt-8 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-5xl text-emerald-900 font-bold text-primary-900 mb-6">
             Yara Elshehawi
          </h1>
          <motion.h2
            className="text-2xl md:text-1xl text-primary-700 mb-8 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Exploring the world of AI, Machine Learning, and Computer Vision
          </motion.h2>
          <motion.p
            className="text-lg md:text-l text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            My curiosity lives where creativity meets AI, exploring how intelligent systems can learn, perceive, and expand the way humans create and understand the world
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <a
              href="#projects"
              className="inline-flex items-center px-8 py-4 border-2 border-teal-900 hover:bg-primary-700 text-black font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 border-2 border-teal-900 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold rounded-xl transition-all duration-300"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const App: React.FC = () => {
//   return (
//     <div>
//       <h1>Welcome to My Portfolio</h1>
//       <p>This is a simple portfolio built with React, TypeScript, and Vite.</p>
    
//          <section
//         id="about"
//         className="bg-gradient-to-r from-gray-300 to-gray-500 p-6 rounded-lg  min-h-screen flex flex-col justify-center items-center text-center px-4"
//         data-aos="fade-up"
//       >
//         <img
//           src="/src/assets/profile.jpeg"
//           alt="Profile"
//           className="w-40 h-40 rounded-full mx-auto mb-6 shadow-lg object-cover"
//         />
//         <h2 className=" text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-da-700">
//           About Me
//         </h2>
//         <p className="max-w-2xl text-lg leading-relaxed">
//           I'm a passionate Digital Media Engineering graduate specializing in
//           <span className="text-black font-semibold">AI, Machine Learning,</span>
//           and <span className="text-black font-semibold">Computer Vision.</span>
//           I love building innovative projects that make a real-world impact.
//         </p>
//       </section>
//       </div>
    useEffect(() => {
    AOS.init({ duration: 1000, once: false }); // fade in/out again on scroll
  }, []);
return (
    <div className="font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default App;
