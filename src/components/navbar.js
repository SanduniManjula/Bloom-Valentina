import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = ({ setShow, size }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="bloomvalentina">Bloom Valentina</span>
        <div className="links">
          <Link to="/" className="nav_link" onClick={() => setShow(true)}> 
            Home
          </Link>
          <Link to="/about" className="nav_link"onClick={() => console.log("About clicked")} >
            About
          </Link>
          <Link to="/contact" className="nav_link"onClick={() => console.log("Contact clicked")} >
           Contact Us
          </Link>
          
          <div className="cart" onClick={() => setShow(false)}>
            <span>
              <i className="fas fa-cart-plus"></i>
            </span>
            <span>{size}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
