import React from "react";
import { button } from "./button";
import "../index.css";
import "./HeroSection.css";
import Btn from "./Btn";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>When You See</h1>
      <h2> A Good Move</h2>
      <h2>Look For A Better One.</h2>
      <div className="hero-btns">
        <Link to="/chessgame">
          <button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Let's Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
