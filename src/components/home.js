import React from "react";
import "../styles/amazon.css"; 
import tulipsImage from "../images/3.jpg";



const Home = ({ item, handleClick }) => {
  const { title, description, price, img } = item;

  const handleAddToCart = () => {
    handleClick(item);
  };

  return (
    <div className="home-container">
      <div className="home1-content">
      <h2 className="home-home">Natural & Beautiful Flowers</h2>
        <h1>Fresh Flowers</h1>
        
        <p>BloomValentina is your go-to online destination for a diverse selection of flowers and blooms. With an array of vibrant bouquets and elegant arrangements, we aim to help you celebrate special occasions and express emotions effortlessly. Enjoy a seamless shopping experience and spread joy with our curated floral offerings.</p>
        <button className="move1-button">
          Shop Now
        </button>
        <div className="home2-content">
        <h3>Latest Products</h3>
      </div>
        
      </div>
      
      <div className="section">
      
      <div className="image-box">
        <img src={img} alt={title} className="flower-image" />
      </div>
      
      </div>
      <div className="details">
        <h2 className="title">{title}</h2>
        <p className="description">About: {description}</p>
        <p className="price">Price: ${price}</p>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
        
      </div>
      <img src={tulipsImage} alt="Tulips" className="background-image" />
     
    </div>
    
  );
  
};

export default Home;
