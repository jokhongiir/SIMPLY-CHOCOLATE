import React from "react";
import "./BuyModal.css";
import { X } from "lucide-react";

import choco1 from "../../assets/choco1.png";
import choco2 from "../../assets/choco2.png";
import choco3 from "../../assets/choco3.png";

const BuyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="buy-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          <X size={30} />
        </button>

        <h2 className="modal-title">
          <span>BUY</span> NOW
        </h2>

        <div className="products-grid">
          <div className="product-card">
            <img src={choco1} alt="" />
            <button>100 g</button>
          </div>

          <div className="product-card">
            <img src={choco2} alt="" />
            <button>200 g</button>
          </div>

          <div className="product-card">
            <img src={choco3} alt="" />
            <button>300 g</button>
          </div>
        </div>

        <form className="buy-form">
          <h3>Personal information</h3>

          <div className="row">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Surname" />
          </div>

          <label>Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Phone Number</label>
          <input type="tel" placeholder="+998 90 123 45 67" />

          <label>Card Number</label>
          <input type="text" placeholder="8600 0000 0000 0000" />

          <label>Comment</label>
          <textarea
            rows="5"
            placeholder="Enter text"
          ></textarea>

          <button className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BuyModal;