import React, { useRef } from "react";
import "./index.css";
import { motion, useScroll, useTransform } from "framer-motion";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Navbar from "./Components/Navbar";
import Profile from "./Components/Pages/Profile";
import About from "./Components/Pages/About";
import Experience from "./Components/Pages/Experience";
import Projects from "./Components/Pages/Projects";
import Contact from "./Components/Pages/Contact";
import Footer from "./Components/Footer";

import ScrollReveal from "scrollreveal";

function App() {
  let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  ScrollReveal({
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200,
  });

  return (
    <Router>
      <div className="main" id="App" style={{ transform: y }}>
        <div className="navbar">
          <Navbar />
        </div>

        <div className="contents">
          <Routes>
            <Route path="/" element={<Navigate to="/Profile" />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/About" element={<About />} />
            <Route path="/Experience" element={<Experience />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
