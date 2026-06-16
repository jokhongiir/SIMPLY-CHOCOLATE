import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section id="home">
      <main className="hero">
        <div className="overlay"></div>

        <div className="hero-content">
          <h1>
            Treat yourself or a loved one to our finest ingredients for a moment
            of pure delight!
          </h1>

          <div className="hero-buttons">
            <button className="buy-btn">Buy now</button>
            <button className="made-btn">How it's made</button>
          </div>
        </div>

        <div className="scroll-down">
          <span>scroll down</span>
          <div className="circle">
            <span>↓</span>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Home;
