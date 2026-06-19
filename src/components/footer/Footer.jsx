import React from "react";
import "./Footer.css";
import { FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-left">
            <h2>
              <span>Chocolate</span> a delicious
              <br />
              cure for a bad day
            </h2>
          </div>

          <div className="footer-right">
            <div className="footer-contact">
              <h4>Contact us</h4>
              <a href="tel:+380684439426">+380 (68) 443-94-26</a>
              <a href="mailto:simplychoc@gmail.com">simplychoc@gmail.com</a>
            </div>

            <div className="footer-social">
              <a href="/">
                <FaInstagram />
              </a>
              <a href="/">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-line"></div>

        <div className="footer-bottom">
          <a href="#home">Home</a>
          <a href="#made">How it's made?</a>
          <a href="#products">Our products</a>
          <a href="#sellers">Top sellers</a>
          <a href="#reviews">Chocolate is loved</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
