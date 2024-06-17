

// Siding Profile

// import React, { useState } from "react";
// import "./Navbar.css";
// import { LiaTimesSolid } from "react-icons/lia";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <nav className="nav-content">
//       <NavLink to="/Profile" className="logo">
//         DenzeL
//       </NavLink>

//       <div
//         className={`items ${isMenuOpen ? "show" : "hide"}`}
//         onClick={closeMenu}
//       >
//         <NavLink
//           to="/Profile"
//           className={({ isActive }) => (isActive ? "a active" : "a")}
//           onClick={closeMenu}
//         >
//           Profile
//         </NavLink>
//         <NavLink
//           to="/About"
//           className={({ isActive }) => (isActive ? "a active" : "a")}
//           onClick={closeMenu}
//         >
//           About
//         </NavLink>
//         <NavLink
//           to="/Experience"
//           className={({ isActive }) => (isActive ? "a active" : "a")}
//           onClick={closeMenu}
//         >
//           Experience
//         </NavLink>
//         <NavLink
//           to="/Projects"
//           className={({ isActive }) => (isActive ? "a active" : "a")}
//           onClick={closeMenu}
//         >
//           Projects
//         </NavLink>
//         <NavLink
//           to="/Contact"
//           className={({ isActive }) => (isActive ? "a active" : "a")}
//           onClick={closeMenu}
//         >
//           Contact
//         </NavLink>
//       </div>

//       <div className="buttons">
//         <div
//           className={`button-menu ${isMenuOpen ? "hide" : "show"}`}
//           onClick={toggleMenu}
//         >
//           <div className="menu-row">
//             <div className="menu-col"></div>
//             <div className="menu-col"></div>
//           </div>
//           <div className="menu-row">
//             <div className="menu-col"></div>
//             <div className="menu-col"></div>
//           </div>
//         </div>

//         <LiaTimesSolid
//           className={`close-icon ${isMenuOpen ? "show" : "hide"}`}
//           onClick={toggleMenu}
//           size={38}
//         />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// --------------------------------------------------------------------------------------------------
// import React, { useRef } from "react";
// import "./index.css";
// import { motion, useScroll, useTransform } from "framer-motion";

// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Navigate,
// } from "react-router-dom";

// import Navbar from "./Components/Navbar";
// import Profile from "./Components/Pages/Profile";
// import About from "./Components/Pages/About";
// import Experience from "./Components/Pages/Experience";
// import Projects from "./Components/Pages/Projects";
// import Contact from "./Components/Pages/Contact";
// import Footer from "./Components/Footer";

// function App() {
//   let ref = useRef(null);
//   let { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });
//   let y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

//   return (
//     <Router>
//       <div className="main" id="App" style={{ transform: y }}>
//         <div className="navbar">
//           <Navbar />
//         </div>

//         <div className="contents">
//           <Routes>
//             <Route path="/" element={<Navigate to="/Profile" />} />
//             <Route path="/Profile" element={<Profile />} />
//             <Route path="/About" element={<About />} />
//             <Route path="/Experience" element={<Experience />} />
//             <Route path="/Projects" element={<Projects />} />
//             <Route path="/Contact" element={<Contact />} />
//           </Routes>
//         </div>

//         <div className="footer">
//           <Footer />
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;




// Link Profile
// ____________________________________________________
// import React, { useState } from "react";
// import "./Navbar.css";
// import { LiaTimesSolid } from "react-icons/lia";
// import { Link } from "react-scroll";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <nav className="nav-content">
//       <Link
//         to="Profile"
//         className="logo"
//         onClick={closeMenu}
//         spy={true}
//         smooth={true}
//         offset={-45}
//         duration={600}
//       >
//         DenzeL
//       </Link>

//       <div
//         className={`items ${isMenuOpen ? "show" : "hide"}`}
//         onClick={closeMenu}
//       >
//         <Link
//           to="Profile"
//           className="a"
//           onClick={closeMenu}
//           spy={true}
//           smooth={true}
//           offset={-45}
//           duration={600}
//           activeClass="active"
//         >
//           Profile
//         </Link>
//         <Link
//           to="About"
//           className="a"
//           onClick={closeMenu}
//           spy={true}
//           smooth={true}
//           offset={-45}
//           duration={600}
//           activeClass="active"
//         >
//           About
//         </Link>
//         <Link
//           to="Experience"
//           className="a"
//           onClick={closeMenu}
//           spy={true}
//           smooth={true}
//           offset={-45}
//           duration={600}
//           activeClass="active"
//         >
//           Experience
//         </Link>
//         <Link
//           to="Projects"
//           className="a"
//           onClick={closeMenu}
//           spy={true}
//           smooth={true}
//           offset={-45}
//           duration={600}
//           activeClass="active"
//         >
//           Projects
//         </Link>
//         <Link
//           to="Contact"
//           className="a"
//           onClick={closeMenu}
//           spy={true}
//           smooth={true}
//           offset={-45}
//           duration={600}
//           activeClass="active"
//         >
//           Contact
//         </Link>
//       </div>

//       <div className="buttons">
//         <div
//           className={`button-menu ${isMenuOpen ? "hide" : "show"}`}
//           onClick={toggleMenu}
//         >
//           <div className="menu-row">
//             <div className="menu-col"></div>
//             <div className="menu-col"></div>
//           </div>
//           <div className="menu-row">
//             <div className="menu-col"></div>
//             <div className="menu-col"></div>
//           </div>
//         </div>

//         <LiaTimesSolid
//           className={`close-icon ${isMenuOpen ? "show" : "hide"}`}
//           onClick={toggleMenu}
//           size={38}
//         />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



//----------------------------------------------------

// import React, { useRef } from "react";
// import "./index.css";
// import { motion, useScroll, useTransform } from "framer-motion";

// import Navbar from "./Components/Navbar";
// import Profile from "./Components/Pages/Profile";
// import About from "./Components/Pages/About";
// import Experience from "./Components/Pages/Experience";
// import Projects from "./Components/Pages/Projects";
// import Contact from "./Components/Pages/Contact";
// import Footer from "./Components/Footer";

// function App() {
//   let ref = useRef(null);
//   let { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });
//   let y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

//   return (
//     <motion.section style={y} className="main" id="App">
//       <div className="navbar">
//         <Navbar />
//       </div>

//       <div className="contents">
//         <Profile />
//         <About />
//         <Experience />
//         <Projects />
//         <Contact />
//       </div>

//       <div className="footer">
//         <Footer />
//       </div>
//     </motion.section>
//   );
// }

// export default App;