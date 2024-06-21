import React from 'react';
import "./Contact.css";

import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";

const Contact = () => {

  const openGit = () => {
    window.open("https://github.com/", "_blank");
  };

  const openMail = () => {
    window.open("mailto:denzelvilladolid1999@gmail.com", "_blank");
  };

  return (
    <section className="Contact" id="Contact">
      <div className="greetings">
        <p className="">Get in Touch</p>
        <h1 className="">Contact Me</h1>
      </div>

      <div className="con">
        <div className="mail">
          <IoIosMail onClick={openMail} className="icon" />
          <p onClick={openMail}>MyMail@gmail.com</p>
        </div>
        <div className="gh">
          <FaGithub onClick={openGit} className="icon" />
          <p onClick={openGit}>GitHub</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;