import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__logo">
          <img
            className="footer__logoimage"
            src="https://wtfup.me/assets/public/logo-final-white-214@2x.png"
            alt=""
          />
        </div>
        <div>
          <h5>Quick links</h5>
          <ul class="footer-links">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Privacy & Policy</a>
            </li>
            <li>
              <a href="#">Refund & Cancellation</a>
            </li>
            <li>
              <a href="#">WTF Store</a>
            </li>
          </ul>
        </div>
        <div>
          <h5>Explore</h5>
          <ul class="footer-links">
            <li>
              <a href="#">Arenas</a>
            </li>
            <li>
              <a href="#">Studios</a>
            </li>
            <li>
              <a href="#">Nutrition</a>
            </li>
            <li>
              <a href="#">Personal Trainer</a>
            </li>
          </ul>
        </div>

        <div>
          <h5>Contact</h5>
          <p>
            RO:- S 1502, Amrapali Silicon city, Sector 76,<br></br> Noida, Uttar
            Pradesh, India
          </p>
          <p>
            HO:- 3rd Floor, The Corenthum, India Accelerator,<br></br> Sector
            62, Noida, Uttar Pradesh 201301
          </p>
          <p>+919090639005</p>
          <p>support@wtfup.me</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
