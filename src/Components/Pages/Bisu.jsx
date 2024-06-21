import React from 'react';
import './Bisu.css';

import Login from "../Assets/Log-in.jpg";
import Dash from "../Assets/Dashboard.jpg";
import Anal from "../Assets/Analytics.jpg";
import Rept from "../Assets/Report.jpg";

const Bisu = () => {
  return (
    <section className="Bisu" id="Bisu">
      <div className="greetings">
        <p className="">Thesis Project</p>
        <h1 className="">BISU Alumni Tracer System.</h1>
      </div>

      <div className="carousel">
        <h3>Carousel Area</h3>
      </div>

      <div className="info-area">
        <div className="desc">
          <h2>Project Description</h2>
          <ul>
            <li>
              The Alumni Tracer system links academia and the professional
              world, tracking alumni careers for insights into program impact.
              It evaluates relevance, updates data on alumni employment, roles,
              and achievements, and adapts programs to industry trends,
              enhancing institutional relevance.
            </li>
          </ul>
        </div>

        <div className="respo">
          <h2>Responsibilities</h2>
          <ul>
            <li>
              <span>Platform Development: </span>
              Designing, developing, and maintaining the overall platform,
              ensuring a smooth and user-friendly experience for both desktop
              and mobile users.
            </li>

            <li>
              <span>User Interface (UI) and User Experience (UX) Design: </span>
              Creating and improving the visual design, layout, and navigation
              to enhance the user experience and engagement.
            </li>

            <li>
              <span>Database Management: </span>
              Designing and implementing a robust relational database system to
              accurately retrieve comprehensive data about the alumni.
            </li>
          </ul>
        </div>
        
      </div>
    </section>
  );
}

export default Bisu;

const data = [
  {
    name: "Log-in Page",
    img: Login,
  },
  {
    name: "Dashboard Page",
    img: Dash,
  },
  {
    name: "Analytics Page",
    img: Anal,
  },
  {
    name: "Report Page",
    img: Rept,
  },
];
