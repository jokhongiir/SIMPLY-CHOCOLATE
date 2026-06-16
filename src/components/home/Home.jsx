import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section id="home">
      <main className="hero">
        <div className="overlay" />

        <div className="container hero-inner">
          <div className="hero-content">
            <h1>
              Treat yourself or a loved one to our finest ingredients for a
              moment of pure delight!
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
        </div>
      </main>

      <article className="advantages">
        <div className="container advantages-container">
          <div className="adv-card">
            <div className="adv-icon">01</div>
            <h3>Unsurpassed taste</h3>
            <p>
              Crafted with the finest cocoa beans, every bite delivers deep,
              rich, premium flavor experience.
            </p>
          </div>

          <div className="adv-card">
            <div className="adv-icon">02</div>
            <h3>Affordable price</h3>
            <p>
              Luxury chocolate made accessible — premium quality without premium
              pricing.
            </p>
          </div>

          <div className="adv-card">
            <div className="adv-icon">03</div>
            <h3>Own production</h3>
            <p>
              Full production control ensures consistency, quality, and
              craftsmanship in every product.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Home;
