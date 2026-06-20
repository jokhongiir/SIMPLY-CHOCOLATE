import React, { useState } from 'react';
import './SubscribeModal.css';

const SubscribeModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Obuna bo‘lgan email:', email);
    
    // Bu yerda backend yoki API ga yuborish logikasi bo'ladi
    
    setEmail('');
    onClose(); // Email yuborilgach modalni yopish
  };

  return (
    <div className="modal-overlay">
      {/* Modal o'zi */}
      <div className="modal-container">
        
        {/* Yuqori qism: Shokoladli rasm va yopish tugmasi */}
        <div className="modal-banner">
          <button className="modal-close-btn" onClick={onClose} aria-label="Yopish">
            <svg 
              width="14" 
              height="14" 
              viewBox="0 0 14 14" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M1 1L13 13M13 1L1 13" 
                stroke="white" 
                strokeWidth="2" 
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Pastki qism: Matn va Form */}
        <div className="modal-content">
          <h2 className="modal-title">
            EXPLORE OUR <br />
            <span className="highlight-text">NEW CHOCOLATE</span> FIRST!
          </h2>

          <form className="modal-form" onSubmit={handleSubmit}>
            <input
              type="email"
              className="modal-input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="modal-submit-btn">
              Submit
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default SubscribeModal;