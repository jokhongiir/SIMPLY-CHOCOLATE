import React from "react";
import "./Subscribe.css";

import subscribeBg from "../../assets/subscribe.png";

const Subscribe = () => {
  return (
    <section className="subscribe-section">
      <div
        className="subscribe-banner"
        style={{ backgroundImage: `url(${subscribeBg})` }}
      >
        <div className="subscribe-overlay"></div>

        <div className="subscribe-content">
          <h2 className="subscribe-title">
            EXPLORE OUR NEW
            <br />
            CHOCOLATE FIRST
          </h2>

          <p className="subscribe-text">
            From the velvety texture to the rich and complex flavor,
            our New Chocolate is a true indulgence that will leave
            you craving more. Made with only the finest ingredients
            and handcrafted with the utmost care, each piece is a
            work of art that is sure to please.
          </p>

          <button className="subscribe-btn">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;