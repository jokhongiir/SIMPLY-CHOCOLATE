import React, { useState } from "react";
import "./Subscribe.css";
import subscribeBg from "../../assets/subscribe.png";
// Modal komponentini import qilamiz (fayl yo'lini loyihangizga qarab tekshirib oling)
import SubscribeModal from "../subscribemodal/SubscribeModal"; 

const Subscribe = () => {
  // Modal ochiq yoki yopiqligini saqlash uchun state
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            From the velvety texture to the rich and complex flavor, our New
            Chocolate is a true indulgence that will leave you craving more.
            Made with only the finest ingredients and handcrafted with the
            utmost care, each piece is a work of art that is sure to please.
          </p>

          {/* Tugma bosilganda stateni true qilamiz */}
          <button 
            className="subscribe-btn" 
            onClick={() => setIsModalOpen(true)}
          >
            Subscribe
          </button>
        </div>
      </div>

      {/* Modalni shu yerda chaqiramiz */}
      <SubscribeModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default Subscribe;