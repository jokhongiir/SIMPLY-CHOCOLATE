import React, { useRef, useState } from "react";
import "./About.css";

import aboutVideoPreview from "../../assets/chocolote_spoler-2d8faa6d.mp4";
import posterVideo from "../../assets/video.png";

const About = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section id="made" className="about-section">
      <div className="taste-header">
        <h2>
          HOW IT'S <span>MADE?</span>
        </h2>
      </div>

      <div className="about-container">
        <div className="about-video-wrapper">
          <video
            ref={videoRef}
            poster={posterVideo}
            className="about-video"
            onClick={toggleVideo}
            onEnded={() => setIsPlaying(false)}
          >
            <source src={aboutVideoPreview} type="video/mp4" />
          </video>

          <button
            className={`video-control ${isPlaying ? "playing" : ""}`}
            onClick={toggleVideo}
          >
            {isPlaying ? (
              <svg viewBox="0 0 24 24">
                <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
        </div>

        <div className="about-content">
          <h3>
            Try our chocolates today and discover the perfect balance of flavor
          </h3>

          <ul className="recipe-steps">
            <li>
              Heat the milk in a saucepan without bringing it to a boil.
            </li>

            <li>
              Add sugar and cocoa powder while continuously stirring.
            </li>

            <li>
              Prepare a water bath and slowly melt the butter until smooth.
            </li>

            <li>
              Combine all ingredients and mix until silky and uniform.
            </li>

            <li>
              Pour into molds, cool completely, and allow the chocolate to
              harden.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;