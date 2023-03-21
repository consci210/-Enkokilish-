import React from 'react';


const Contact = () => {
  return (
    <section className="contact">
      <div className="Info-container">
        <div className="contactForm">
          <form
            action="https://formsubmit.co/Consci210@gmail.com"
            method="POST"
          >
            <h3>Contact Me</h3>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name "
              required
            />

            <input
              type="hidden"
              name="_subject"
              value="New Portfolio Mail!"
            />

            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />

            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Phone No. "
              required
            />

            <textarea
              name="message"
              id="message"
              placeholder="Please Enter your message here. "
              required
            ></textarea>

            <button type="submit">Send</button>
          </form>
        </div>

        <div className="contactInfo">
          <div className="box">
            <div className="icon">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className="text">
              <h3>Address</h3>
              <div>
                <p>Addis Ababa <br /> Ethiopia</p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <i className="fa-solid fa-phone"></i>
            </div>
            <div className="text">
              <h3>Phone</h3>
              <p>+251-920-333-643</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div className="text">
              <h3>Email</h3>
              <p>helinaashenafi25@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
