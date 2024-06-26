import React, { useState } from "react";
import "./Contact.css";
import Swal from "sweetalert2";
import { FaArrowRight } from "react-icons/fa";
// import ReCAPTCHA from "react-google-recaptcha";


const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [honeypot, setHoneypot] = useState(""); // Add honeypot state
  // const [cap, setCap] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    if (honeypot) {
      // If honeypot is filled, do nothing
      return;
    }
    setLoading(true);
    const formData = new FormData(event.target);
    formData.append("access_key", "7907e977-c4f6-4d12-822f-a4f46aa2e576");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const res = await response.json();

      setLoading(false);

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
          text: res.message || "Something went wrong! Please try again later.",
        });
      }
    } catch (error) {
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Please try again later.",
      });
      console.error("Error:", error);
    }
  };

  return (
    <section className="Contact" id="Contact">
      <div className="greetings">
        <p className="">Get in Touch</p>
        <h1 className="">Contact Me</h1>
      </div>

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
          <input
            type="text"
            name="honeypot"
            style={{ display: "none" }}
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />

          {/* <ReCAPTCHA
            sitekey="6Lf_WgAqAAAAAP57tH2yYuipLDYSb9cTrBbZl_bR"
            onChange={(value) => setCap(value)}
          /> */}

          <button type="submit" value="submit" disabled={loading}>
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




