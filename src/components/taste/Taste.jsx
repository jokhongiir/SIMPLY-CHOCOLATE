import React from "react";
import "./Taste.css";
import chocolatee from "../../assets/chocolatee.png";
import milk from "../../assets/milk.png";
import walnut from "../../assets/walnut.png";
import cofee from "../../assets/cofee.png";

const Taste = () => {
  return (
    <section className="taste">
      {/* HEADER */}
      <div className="taste-header">
        <h2>
         IT ALL ADDS UP TO ONE EXCEPTIONAL <span>TASTE</span> SENSATION
        </h2>

        <p>
          At Simply Chocolate, we believe that the secret to exceptional
          chocolate is in the details. From the sourcing of the finest
          ingredients to the careful crafting of each individual piece, every
          step of our process adds up to one exceptional taste sensation.
        </p>
      </div>

      {/* CARDS */}
      <div className="taste-grid">
        <div className="taste-card orange">
          <img src={chocolatee} alt="chocolate" />
          <h3>MILK CHOCOLATE</h3>
        </div>

        <div className="taste-card white">
          <img src={milk} alt="milk" />
          <h3>MILK</h3>
        </div>

        <div className="taste-card dark">
          <img src={walnut} alt="nuts" />
          <h3>NUTS</h3>
        </div>

        <div className="taste-card outline">
          <img src={cofee} alt="coffee" />
          <h3>SEMI - SWEET CHOCOLATE</h3>
        </div>
      </div>
    </section>
  );
};

export default Taste;
