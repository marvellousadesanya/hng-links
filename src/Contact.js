import React from "react";
import "./App.css";
import "./Contact.css";

function Contact() {
  return (
    <>
      <div id="contact-me-container">
        <div id="inner-container">
          <div id="contact-header">
            <h2 id="contact-me">Contact Me</h2>
            <p id="contact-me-text">
              Hi there, contact me to ask me about anything you have in mind
            </p>
          </div>
          <div id="form-container">
            <form>
              <div id="name-row" className="inputs">
                <div id="first-name-container">
                  <label>First Name</label>
                  <input
                    id="first-name"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div id="second-name-container">
                  <label>Last Name</label>
                  <input
                    id="last-name"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
              </div>

              <div id="email" className="inputs">
                <label>Email</label>
                <input type="email" placeholder="yourname@email.com" required />
              </div>
              <div id="message-textarea" className="inputs">
                <label>Message</label>
                <textarea placeholder="send me a message" required />
              </div>
              <div id="checkbox-area" className="inputs">
                <input type="checkbox" id="checkbox" required />
                <p>
                  You agree to providing your data to Marv who may contact you
                </p>
              </div>
              <div id="submit-btn-section" className="inputs">
                <button className="submit-btn">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
