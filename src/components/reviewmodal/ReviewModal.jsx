import React, { useEffect } from "react";
import "./ReviewModal.css";
import { X } from "lucide-react";

const ReviewModal = ({ isOpen, onClose }) => {
  // Orqa fon skrollini bloklash
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="reviewmodal-overlay" onClick={onClose}>
      <div className="reviewmodal-container" onClick={(e) => e.stopPropagation()}>
        {/* Yopish tugmasi */}
        <button className="reviewmodal-close" onClick={onClose}>
          <X size={24} />
        </button>

        {/* Sarlavha (Aynan rasmdagidek ikki rangda) */}
        <h2 className="reviewmodal-title">
          LEAVE A REVIEW ABOUT <br />
          <span>OUR CHOCOLATE</span>
        </h2>

        {/* Forma */}
        <form className="reviewmodal-form" onSubmit={(e) => e.preventDefault()}>
          <div className="reviewmodal-field">
            <input type="text" placeholder="Name" className="reviewmodal-input" />
          </div>

          <div className="reviewmodal-field">
            <input type="email" placeholder="Enter your email" className="reviewmodal-input" />
          </div>

          <div className="reviewmodal-field">
            <div className="reviewmodal-phone-wrapper">
              <div className="reviewmodal-phone-country">
                <span className="reviewmodal-flag">🇺🇦</span>
                <span className="reviewmodal-code">+380</span>
              </div>
              <div className="reviewmodal-divider"></div>
              <input type="tel" placeholder="Phone number" className="reviewmodal-phone-input" />
            </div>
          </div>

          <div className="reviewmodal-field">
            <textarea rows="5" placeholder="Enter text" className="reviewmodal-textarea" />
          </div>

          <button type="submit" className="reviewmodal-submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewModal;