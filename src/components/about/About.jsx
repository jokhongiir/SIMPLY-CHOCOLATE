import React from "react";
import "./About.css";
import aboutVideoPreview from "../../assets/video.png";

const About = () => {
  return (
    <section id="howitsmade" className="taste about-section">
      <div className="taste-header">
        <h2>
          HOW IT'S <span>MADE?</span>
        </h2>
      </div>

      <div className="about-container">
        <div className="about-video-wrapper">
          <img
            src={aboutVideoPreview}
            alt="How chocolate is made"
            className="about-video-img"
          />
          <button className="play-btn" aria-label="Play video">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>

        <div className="about-content">
          <h3>
            Try our chocolates today and discover the perfect balance of flavor
          </h3>

          <ul className="recipe-steps">
            <li>
              Heat the milk in a saucepan without bringing it to a boil. Add
              sugar and cocoa powder.
            </li>
            <li>
              At the same time, prepare a water bath. Melt the butter on it.
            </li>
            <li>
              "Mix" the milk mixture and already liquid butter. Mix thoroughly
              with a silicone spatula so that the mass becomes uniform and
              silky.
            </li>
            <li>Heat the mixture over low heat, letting it barely boil.</li>
            <li>
              Pour the chocolate into special containers (can be replaced with
              ice molds). Allow to cool and harden.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
