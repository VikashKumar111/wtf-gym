import React from "react";
import "./Header.css";
import Banner from "./Banner";

const Header = () => {
  return (
    <div>
      <Banner />
      <header className="header">
        <div className="header_navbar">
          <div className="header__logo">
            <img
              src="https://wtfup.me/assets/public/logo-final-white-214@2x.png"
              alt=""
            />
          </div>
          <nav className="header__nav">
            <a href="#">Fitness</a>
            <a href="#">Nutrition</a>
            <a href="#">Live Class</a>
            <a href="#">Become WTF Partner</a>
            <a href="#">Login</a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
