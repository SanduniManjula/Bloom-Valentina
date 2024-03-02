import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [notification, setNotification] = useState(""); // State to manage notification message

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add your logic to handle form submission, such as sending the message
    // For demonstration purposes, we'll just set a notification message
    setNotification("Message sent! We'll get back to you soon.");
    // Reset the form fields
    event.target.reset();
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <h2 className="contact-heading">Contact Us</h2>
        <p className="contact-description">We'd love to hear from you!</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" className="contact-input" required />
          <input type="email" placeholder="Your Email" className="contact-input" required />
          <textarea placeholder="Your Message" className="contact-input contact-textarea" required></textarea>
          <button type="submit" className="contact-btn">Send Message</button>
        </form>
        {notification && <p className="notification">{notification}</p>} {/* Display notification if it exists */}
      </div>
      <div className="contact-info">
        <h3 className="contact-info-heading">Our Office</h3>
        <p className="contact-info-text">123 Flower Street</p>
        <p className="contact-info-text">Wakwella,Galle,Southern Province,Sri Lanka</p>
        <p className="contact-info-text">Phone: (123) 456-7890</p>
        <p className="contact-info-text">Email: info@bloomvalentina.com</p>
        <div className="contact-map">
          {/* Embed Google Maps or any other map service here */}
          <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.035448376423!2d-0.14428278422981332!3d51.51518051860418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b04c8803c91%3A0x5a33cb88811067b7!2sThe%20Ritz%20London!5e0!3m2!1sen!2suk!4v1646148745182!5m2!1sen!2suk" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
