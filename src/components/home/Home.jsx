import React, { useState } from "react"; 
import "./Home.css";
import BuyModal from "../buymodal/BuyModal";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
              <button className="buy-btn" onClick={() => setIsModalOpen(true)}>
                Buy now
              </button>
              <a href="#made">
                <button className="made-btn">How it's made</button>
              </a>
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
              Crafted with the finest quality cocoa beans and a dedication to
              perfection, each bite is a decadent experience that simply cannot
              be matched. Savor the richness and complexity of our Unsurpassed
              Taste and discover a new level of chocolate bliss.
            </p>
          </div>

          <div className="adv-card">
            <div className="adv-icon">02</div>
            <h3>Affordable price</h3>
            <p>
              Indulge in high-quality chocolate without breaking the bank with
              Simply Chocolate's selection of affordable treats. Enjoy
              mouth-watering truffles and velvety chocolate bars without
              sacrificing taste or quality. Browse our selection and indulge in
              affordable luxury today.
            </p>
          </div>

          <div className="adv-card">
            <div className="adv-icon">03</div>
            <h3>Own production</h3>
            <p>
              We take pride in our own production process, ensuring that every
              step is carefully crafted to perfection. From selecting the finest
              ingredients to handcrafting each piece, our attention to detail is
              evident in every bite.
            </p>
          </div>
        </div>
      </article>

      <BuyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Home;