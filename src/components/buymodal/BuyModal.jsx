import React, { useState, useEffect } from "react"; // useEffect qo'shildi
import "./BuyModal.css";
import { X } from "lucide-react";

import choco1 from "../../assets/choco1.png";
import choco2 from "../../assets/choco2.png";
import choco3 from "../../assets/choco3.png";

const BuyModal = ({ isOpen, onClose }) => {
  const [selectedProduct, setSelectedProduct] = useState("100g");
  const [cardNumber, setCardNumber] = useState("");

  // --- ORQA FONDAGI SKROLLNI BLOKLASH QISMI ---
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Skrollni o'chirish
    } else {
      document.body.style.overflow = "unset"; // Skrollni tiklash
    }

    // Komponent unmount bo'lganda (o'chganda) xavfsizlik uchun skrollni ochib yuborish
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
  // --------------------------------------------

  if (!isOpen) return null;

  const handleCardChange = (e) => {
    let input = e.target.value.replace(/\D/g, "");
    if (input.length > 16) input = input.substr(0, 16);

    const formattedResult = input.match(/.{1,4}/g)?.join(" ") || "";
    setCardNumber(formattedResult);
  };

  return (
    <div className="buymodal-overlay" onClick={onClose}>
      <div className="buymodal-container" onClick={(e) => e.stopPropagation()}>
        <button className="buymodal-close" onClick={onClose}>
          <X size={24} />
        </button>

        <h2 className="buymodal-title">
          <span>BUY</span> NOW
        </h2>

        <div className="buymodal-products">
          <div 
            className={`buymodal-card ${selectedProduct === "100g" ? "active" : ""}`}
            onClick={() => setSelectedProduct("100g")}
          >
            <div className="buymodal-img-wrapper">
              <img src={choco1} alt="Chocolate" className="buymodal-card-image" />
            </div>
            <span className="buymodal-card-weight">100 g</span>
          </div>

          <div 
            className={`buymodal-card ${selectedProduct === "200g" ? "active" : ""}`}
            onClick={() => setSelectedProduct("200g")}
          >
            <div className="buymodal-img-wrapper">
              <img src={choco2} alt="Chocolate" className="buymodal-card-image" />
            </div>
            <span className="buymodal-card-weight">200 g</span>
          </div>

          <div 
            className={`buymodal-card ${selectedProduct === "300g" ? "active" : ""}`}
            onClick={() => setSelectedProduct("300g")}
          >
            <div className="buymodal-img-wrapper">
              <img src={choco3} alt="Chocolate" className="buymodal-card-image" />
            </div>
            <span className="buymodal-card-weight">300 g</span>
          </div>
        </div>

        <form className="buymodal-form" onSubmit={(e) => e.preventDefault()}>
          <h3 className="buymodal-form-title">Personal information</h3>

          <div className="buymodal-row">
            <input type="text" placeholder="Name" className="buymodal-input" />
            <input type="text" placeholder="Surname" className="buymodal-input" />
          </div>

          <div className="buymodal-field">
            <label className="buymodal-label">Email</label>
            <input type="email" placeholder="Enter your email" className="buymodal-input" />
          </div>

          <div className="buymodal-field">
            <label className="buymodal-label">Phone number</label>
            <div className="buymodal-phone-wrapper">
              <div className="buymodal-phone-country">
                <span className="buymodal-flag">🇺🇦</span>
                <span className="buymodal-code">+380</span>
              </div>
              <div className="buymodal-divider"></div>
              <input type="tel" placeholder="Phone number" className="buymodal-phone-input" />
            </div>
          </div>

          <div className="buymodal-field">
            <label className="buymodal-label">Card number</label>
            <div className="buymodal-card-wrapper">
              <input 
                type="text" 
                placeholder="Enter card" 
                className="buymodal-card-input"
                value={cardNumber}
                onChange={handleCardChange}
                maxLength={19}
              />
              <div className="buymodal-mastercard-logo">
                <span className="circle-red"></span>
                <span className="circle-orange"></span>
              </div>
            </div>
          </div>

          <div className="buymodal-field">
            <label className="buymodal-label">Comment</label>
            <textarea rows="4" placeholder="Enter text" className="buymodal-textarea" />
          </div>

          <button type="submit" className="buymodal-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BuyModal;