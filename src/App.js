import React, { useRef } from 'react';
import './index.css';
import { motion, useScroll, useTransform } from "framer-motion";

import Navbar from "./Components/Navbar";
import Profile from "./Components/Pages/Profile";
import About from "./Components/Pages/About";
import Experience from './Components/Pages/Experience';
import Projects from './Components/Pages/Projects';
import Contact from "./Components/Pages/Contact";
import Footer from './Components/Footer';

function App() {
  let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <motion.section style={y} className="main" id='App'>
      <div className="navbar">
        <Navbar />
      </div>

      <div className="contents">
        <Profile />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </motion.section>
  );
}

export default App