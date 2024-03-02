import React, { useState } from "react";
import { Link } from "react-router-dom";
import list from "../data";
import "../styles/amazon.css";
import WelcomePage from "./welcome";
import Home from "./home";

const Amazon = ({ handleClick }) => {
  const [started, setStarted] = useState(false);

  const handleGetStarted = () => {
    setStarted(true);
  };

  return (
    <div className="container">
      {!started ? (
        <div>
          {list.map((item) => (
            <WelcomePage
              key={item.id}
              item={item}
              handleClick={handleClick}
              handleGetStarted={handleGetStarted}
            />
          ))}
        </div>
      ) : (
        <div className="section">
          {list.map((item) => (
            <Home key={item.id} item={item} handleClick={handleClick} />
          ))}
        </div>
      )}
     
    </div>
  );
};

export default Amazon;
