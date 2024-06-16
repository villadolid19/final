import React from 'react';
import './Profile.css';

import Pic1 from "../Assets/Don1.jpg";
import { FaGithub } from "react-icons/fa6";
import Resume from "../Assets/Villadolid-Resume CV.pdf";
import { Link } from "react-scroll";

const Profile = () => {

  const openResume = () => {
    window.open(Resume, "_blank");
  };

  const openGit = () => {
    window.open("https://github.com/", "_blank");
  };

  return (
    <section className="Profile" id="Profile">
      <div className="components">
        <img src={Pic1} className="pic" alt="Denzel Villadolid" />

        <div className="text-sec">
          <p className="hello" id='hello'>Hello, I'm</p>
          <h1 className="name" id='name'>Denzel Dax Darryl C. Villadolid</h1>
          <p className="front" id='front'>A Front-end Developer</p>

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