import React from "react";
import tulipsImage from "../images/tulips_a.jpg";
import "../styles/welcome.css"; 

const WelcomePage = ({ handleGetStarted }) => {
  return (
    <div className="welcome">
      <div className="welcome-content">
        <h2>Welcome to Our Website</h2>
        <h1 className="bloom-valentina">Bloom Valentina</h1>
        <p>Discover love infused blooms for unforgettable moments at BloomValentina</p>
        <button onClick={handleGetStarted} className="move-button">
          Get Started
        </button>
      </div>
      <img src={tulipsImage} alt="Tulips" className="background-image" />
    </div>
  );
};

export default WelcomePage;
