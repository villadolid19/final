import React, { useState } from "react";
import "./Navbar.css";
import { LiaTimesSolid } from "react-icons/lia";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="nav-content">
      <Link
        to="Profile"
        className="logo"
        onClick={closeMenu}
        spy={true}
        smooth={true}
        offset={-40}
        duration={600}
        activeClass="active"
      >
        DenzeL
      </Link>

      <div
        className={`items ${isMenuOpen ? "show" : "hide"}`}
        onClick={closeMenu}
      >
        <Link
          to="Profile"
          className="a"
          onClick={closeMenu}
          spy={true}
          smooth={true}
          offset={-40}
          duration={600}
          activeClass="active"
        >
          Profile
        </Link>
        <Link
          to="About"
          className="a"
          onClick={closeMenu}
          spy={true}
          smooth={true}
          offset={-40}
          duration={600}
          activeClass="active"
        >
          About
        </Link>
        <Link
          to="Experience"
          className="a"
          onClick={closeMenu}
          spy={true}
          smooth={true}
          offset={-40}
          duration={600}
          activeClass="active"
        >
          Experience
        </Link>
        <Link
          to="Projects"
          className="a"
          onClick={closeMenu}
          spy={true}
          smooth={true}
          offset={-40}
          duration={600}
          activeClass="active"
        >
          Projects
        </Link>
        <Link
          to="Contact"
          className="a"
          onClick={closeMenu}
          spy={true}
          smooth={true}
          offset={-40}
          duration={600}
          activeClass="active"
        >
          Contact
        </Link>
      </div>

      <div className="buttons">
        <div
          className={`button-menu ${isMenuOpen ? "hide" : "show"}`}
          onClick={toggleMenu}
        >
          <div className="menu-row">
            <div className="menu-col"></div>
            <div className="menu-col"></div>
          </div>
          <div className="menu-row">
            <div className="menu-col"></div>
            <div className="menu-col"></div>
          </div>
        </div>

        <LiaTimesSolid
          className={`close-icon ${isMenuOpen ? "show" : "hide"}`}
          onClick={toggleMenu}
          size={38}
        />
      </div>
    </nav>
  );
};

export default Navbar;
