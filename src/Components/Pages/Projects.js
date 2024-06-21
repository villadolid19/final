import React from 'react';
import './Projects.css';

import Login from "../Assets/Log-in.jpg";
import Dash from "../Assets/Dashboard.jpg";
import Anal from "../Assets/Analytics.jpg";
import Rept from "../Assets/Report.jpg";

import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Projects = () => {
  return (
    <div className="Projects" id="Projects">
      <div className="greetings">
        <p className="">Explore My</p>
        <h1 className="">Projects</h1>

        <div className="proj-sec">

          <div className="proj-div">
            <img src={Login} alt="" />
            <div className="info">
              <h2>BISU Alumni Tracer System</h2>
              <FaArrowUpRightFromSquare className="icon"/>
            </div>
          </div>

          <div className="proj-div"><h2>Upcoming</h2></div>
          <div className="proj-div"><h2>Upcoming</h2></div>
          <div className="proj-div"><h2>Upcoming</h2></div>

        </div>

        

      </div>
    </div>
  );
}

export default Projects;