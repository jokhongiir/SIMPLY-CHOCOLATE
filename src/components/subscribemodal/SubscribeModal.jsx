import React, { useState } from 'react';
import './SubscribeModal.css';
import choco from '../../assets/choco.png';

const SubscribeModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Obuna bo‘lgan email:', email);
    
    setEmail('');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div 
          className="modal-banner"
          style={{ backgroundImage: `url(${choco})` }}
        >
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