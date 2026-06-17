import React, { useRef, useState } from "react";
import "./About.css";

import aboutVideoPreview from "../../assets/chocolote_spoler-2d8faa6d.mp4";
import posterVideo from "../../assets/video.png";

const About = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <section id="howitsmade" className="taste about-section">
      <div className="taste-header">
        <h2>
          HOW IT'S <span>MADE?</span>
        </h2>
      </div>

      <div className="about-container">
        <div className="about-video-wrapper">
          <video
            ref={videoRef}
            controls
            poster={posterVideo}
            className="about-video-img"
          >
            <source src={aboutVideoPreview} type="video/mp4" />
          </video>

          {!isPlaying && (
            <button
              className="play-btn"
              onClick={handlePlay}
              aria-label="Play video"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          )}
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
              Mix the milk mixture and already liquid butter. Mix thoroughly
              with a silicone spatula so that the mass becomes uniform and
              silky.
            </li>

            <li>Heat the mixture over low heat, letting it barely boil.</li>

            <li>
              Pour the chocolate into special containers and allow it to cool
              and harden.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
