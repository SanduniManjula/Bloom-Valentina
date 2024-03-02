import React from "react";
import Slider from "react-slick";
import "../styles/About.css";

// Import CSS files for react-slick carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="about-container">
      <div className="about-content">
        <h2 className="about-heading1">About Us</h2>
        <h1 className="about-heading2">Why Choose Us..</h1>
        <p className="about-text">We are passionate about flowers and dedicated to bringing nature's beauty into your life. Our mission is to provide you with the freshest and most stunning flowers for all occasions.</p>
        <p className="about-text">At Bloom Valentina, we believe in the power of flowers to uplift spirits, celebrate love, and create unforgettable memories. Our team of expert florists meticulously craft each arrangement with care and attention to detail, ensuring that every bouquet is a work of art.</p>
        <p className="about-text">Whether you're celebrating a special milestone, expressing your love and appreciation, or simply brightening someone's day, Bloom Valentina is here to help you convey your heartfelt sentiments through the language of flowers.</p>
      </div>
      <div className="about-slider">
        <Slider {...settings}>
          <div>
            <img src="https://bouqs.com/product_images/classics-trio/Deluxe/64189274ee010800884435e0/detail.jpg?c=1679331956" alt="Flower Arrangement" />
          </div>
          <div>
            <img src="https://i.pinimg.com/736x/e4/10/d1/e410d18a6c0375183bf883ef317eada8.jpg" alt="Flower Arrangement" />
          </div>
          <div>
            <img src="https://acorkforkandpassport.com/wp-content/uploads/Self-Care-for-Women-March-e1583014204503-500x500.png" alt="Flower Arrangement" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default About;
