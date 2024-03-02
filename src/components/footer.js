import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
          Bloom Valentina offers fresh, beautiful flowers for every occasion. With vibrant bouquets and elegant arrangements, it's your go-to destination for spreading joy effortlessly. Celebrate with style and quality blooms.
          </p>
          <div className="contact">
            <span><i className="fas fa-phone"></i> 123-456-789</span>
            <span><i className="fas fa-envelope"></i> info@bloomvalentina.com</span>
          </div>
        </div>
        <div className="footer-section socials">
          <h2>Socials</h2>
          <div>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
        <div className="footer-section quick-links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 Bloom Valentina. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
