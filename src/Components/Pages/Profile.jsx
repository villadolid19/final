import React, {useRef} from 'react';
import './Profile.css';

import Pic1 from "../Assets/Don1.jpg";
import { FaGithub } from "react-icons/fa6";
import Resume from "../Assets/Villadolid-Resume CV.pdf";
import ScrollReveal from "scrollreveal";
import Type from "typed.js";
// import { Link } from "react-scroll";

const Profile = () => {

  const openResume = () => {
    window.open(Resume, "_blank");
  };

  const openGit = () => {
    window.open("https://github.com/", "_blank");
  };

  // Scroll Reveal
  ScrollReveal({
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200
  });

  ScrollReveal().reveal(".img-sec", { origin: "top" });
  ScrollReveal().reveal(".text-sec", { origin: "bottom" });

  // Type.js
  const el = React.useRef(null);
  
  React.useEffect(() => {
    const typed = new Type(el.current, {
      strings: ["A Front-end Web Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  

  return (
    <section className="Profile" id="Profile">

      <div className="components">
        
        <div className="img-sec">
          <img src={Pic1} className="pic" alt="Denzel Villadolid" />
          <div className="circle"></div>
        </div>

        <div className="text-sec">
          <p className="hello" id="hello">
            Hello, I'm
          </p>
          <h1 className="name" id="name">
            Denzel Dax Darryl C. Villadolid
          </h1>
          <p className="front" id="front">
            <span ref={el}></span>
          </p>

          <div className="buttons-sec">
            <button className="dl-cv" onClick={openResume}>
              Download CV
            </button>

            <div className="git-sec">
              <FaGithub className="git-img" onClick={openGit} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;