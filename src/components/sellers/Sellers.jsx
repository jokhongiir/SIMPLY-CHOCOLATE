import React from "react";
import "./Sellers.css";

import img1 from "../../assets/choco1.png";
import img2 from "../../assets/choco2.png";
import img3 from "../../assets/choco3.png";

const Sellers = () => {
  return (
    <section id="sellers" className="sellers">
      <div className="sellers__container">

        {/* TITLE */}
        <h2 className="sellers__title">
          <span>TOP</span> SELLERS
        </h2>

        {/* GRID */}
        <div className="sellers__grid">
          {[img1, img3, img2].map((img, index) => (
            <div key={index} className="sellers__card">
              <div className="sellers__imgBox">
                <img src={img} alt="Top seller chocolate" />
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="sellers__footer">
          <p className="sellers__text">
            Crazy enough chocolate originates from a bean just like the coffee
            bean called Cacao. Cacao has been around for thousands of years and
            was first discovered by the Native American tribe called the Mayans.
          </p>

          <button className="sellers__btn">
            Buy now
          </button>
        </div>

      </div>
    </section>
  );
};

export default Sellers;