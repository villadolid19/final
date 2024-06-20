import React from 'react';
import "./Contact.css";

import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="Contact" id="Contact">
      <div className="greetings">
        <p className="">Get in Touch</p>
        <h1 className="">Contact Me</h1>
      </div>

      <div className="con">
        <div className="mail">
          <IoIosMail />
          <a href="mailto:denzelvilladolid1999@gmail.com">MyMail@gmail.com</a>
        </div>
        <div className="gh">
          <FaGithub />
          <p>GitHub</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;