import React, { useState } from "react"; // useState import qilindi
import "./Sellers.css";
import BuyModal from "../buymodal/BuyModal"; // BuyModal komponentini import qildik

import img1 from "../../assets/choco1.png";
import img2 from "../../assets/choco2.png";
import img3 from "../../assets/choco3.png";

const Sellers = () => {
  // Modalni boshqarish uchun state
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="sellers" className="sellers">
      <div className="sellers__container">
        <h2 className="sellers__title">
          <span>TOP</span> SELLERS
        </h2>

        <div className="sellers__grid">
          {[img1, img3, img2].map((img, index) => (
            <div key={index} className="sellers__card">
              <div className="sellers__imgBox">
                <img src={img} alt="Top seller chocolate" />
              </div>
            </div>
          ))}
        </div>

        <div className="sellers__footer">
          <p className="sellers__text">
            Crazy enough chocolate originates from a bean just like the coffee
            bean called Cacao. Cacao has been around for thousands of years and
            was first discovered by the Native American tribe called the Mayans.
          </p>

          {/* Tugmaga klik bo'lganda stateni true qilamiz */}
          <button className="sellers__btn" onClick={() => setIsModalOpen(true)}>
            Buy now
          </button>
        </div>
      </div>

      {/* Modalni komponentga ulash va kerakli propslarni uzatish */}
      <BuyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Sellers;