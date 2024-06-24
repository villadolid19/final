import React, { useState } from "react";
import "./Contact.css";
import Swal from "sweetalert2";

// import { IoIosMail } from "react-icons/io";
// import { FaGithub } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";


const Contact = () => {

  // const openGit = () => {
  //   window.open("https://github.com/", "_blank");
  // };

  // const openMail = () => {
  //   window.open("mailto:denzelvilladolid1999@gmail.com", "_blank");
  // };

  const [loading, setLoading] = useState(false); // State to manage loading state

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Show loading animation

    const formData = new FormData(event.target);
    formData.append("access_key", "7907e977-c4f6-4d12-822f-a4f46aa2e576");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    setLoading(false); // Hide loading animation

    if (res.success) {
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Your message has been sent successfully.",
      });
      event.target.reset();
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Please try again later.",
      });
    }
  };

  return (
    <section className="Contact" id="Contact">
      <div className="greetings">
        <p className="">Get in Touch</p>
        <h1 className="">Contact Me</h1>
      </div>

      {/* <div className="con">
        <div className="mail">
          <IoIosMail onClick={openMail} className="icon" />
          <p onClick={openMail}>MyMail@gmail.com</p>
        </div>
        <div className="gh">
          <FaGithub onClick={openGit} className="icon" />
          <p onClick={openGit}>GitHub</p>
        </div>
      </div> */}

      <div className="form-con">
        {loading && <div className="loading-spinner"></div>}

        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            autoComplete="off"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            autoComplete="off"
            required
          />
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
            autoComplete="off"
            required
          />
          <textarea
            name="message"
            id="message"
            placeholder="Your Message"
            cols="30"
            rows="10"
            autoComplete="off"
            required
          ></textarea>

          <button type="submit" disabled={loading}>
            {loading ? (
              "Submitting..."
            ) : (
              <>
                Submit
                <span>
                  <FaArrowRight />
                </span>
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
