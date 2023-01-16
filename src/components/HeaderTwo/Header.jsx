import React from "react";
import "./Header.css";
import Hero from "../../assets/earth.mp4";
import { AiOutlineArrowRight } from "react-icons/ai";

const Header = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={Hero} type="video/mp4" />
      </video>
      <div className="hero-text">
        <h1>MUO INVESTMENTS</h1>
        <h2>
          <span className="blue"> Digitally and </span> truly yours
        </h2>

        <div className="btn-group">
          <button className="btn">
            Learn more <AiOutlineArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
