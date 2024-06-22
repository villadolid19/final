import React from 'react';
import './Bisu.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { EffectCoverflow } from "swiper/modules";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

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
        <Swiper
          effect={"coverflow"}
          loop={true}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          navigation={true}
          pagination={{
            type: "progressbar",
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
          className="swiper-sec"
        >
          {data.map((grab, idx) => (
            <SwiperSlide className="swiperSlide-sec">

              <div key={idx.name} className="img-sec">
                <img
                  src={grab.img}
                  alt=""
                  className=""
                />
              </div>

              <div className="name-sec">
                <h1 className="">{grab.name}</h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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
