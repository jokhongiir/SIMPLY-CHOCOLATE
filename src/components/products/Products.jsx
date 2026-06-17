import React, { useState } from "react";
import "./Products.css";

const PRODUCTS_DATA = [
  {
    id: 1,
    name: "ORANGE",
    type: "Dark chocolate",
    price: "45 UAH",
    img: "/images/orange.png",
  },
  {
    id: 2,
    name: "APPLE & CRANBERRY",
    type: "Milk chocolate",
    price: "50 UAH",
    img: "/images/apple.png",
  },
  {
    id: 3,
    name: "LIME & SEA SALT",
    type: "Dark chocolate",
    price: "66 UAH",
    img: "/images/lime.png",
  },
  {
    id: 4,
    name: "PINEAPPLE",
    type: "Dark chocolate",
    price: "54 UAH",
    img: "/images/pineapple.png",
  },
  {
    id: 5,
    name: "CLASSIC",
    type: "Milk chocolate",
    price: "45 UAH",
    img: "/images/classic_milk.png",
  },
  {
    id: 6,
    name: "HONEY",
    type: "Milk chocolate",
    price: "50 UAH",
    img: "/images/honey.png",
  },
  {
    id: 7,
    name: "ROASTED FRUITS",
    type: "Dark chocolate",
    price: "66 UAH",
    img: "/images/roasted.png",
  },
  {
    id: 8,
    name: "CLASSIC",
    type: "White chocolate",
    price: "54 UAH",
    img: "/images/classic_white.png",
  },
];

export default function Products() {
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(PRODUCTS_DATA.length / itemsPerPage);

  const visibleProducts = PRODUCTS_DATA.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  const handleMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 18;
    const rotateX = ((y / rect.height) - 0.5) * -18;

    card.style.transform = `
      perspective(1200px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-10px)
    `;
  };

  const handleLeave = (e) => {
    e.currentTarget.style.transform =
      "perspective(1200px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <section className="products-section">
      <h2 className="products-title">
        OUR <span>PRODUCTS</span>
      </h2>

      <div className="products-grid">
        {visibleProducts.map((product) => (
          <article
            key={product.id}
            className="product-card"
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
          >
            <div className="product-image-box">
              <img
                src={product.img}
                alt={product.name}
                className="product-image"
              />
            </div>

            <h3 className="product-name">{product.name}</h3>

            <p className="product-type">{product.type}</p>

            <button className="product-price">
              {product.price}
            </button>
          </article>
        ))}
      </div>

      <div className="products-dots">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`dot ${
              currentPage === index ? "active-dot" : ""
            }`}
            onClick={() => setCurrentPage(index)}
          />
        ))}
      </div>
    </section>
  );
}