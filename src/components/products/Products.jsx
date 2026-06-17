import React from "react";
import "./Products.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";

import orange from "../../assets/Chocolats/orange.png";
import apple from "../../assets/Chocolats/apple&cranberry.png";
import lime from "../../assets/Chocolats/lime&seasalt.png";
import pineapple from "../../assets/Chocolats/pineapple.png";
import classicmilk from "../../assets/Chocolats/classicmilk.png";
import honey from "../../assets/Chocolats/honey.png";
import roasted from "../../assets/Chocolats/roasted.png";
import classicwhite from "../../assets/Chocolats/classicwhite.png";

const PRODUCTS_DATA = [
  {
    id: 1,
    name: "ORANGE",
    type: "Dark chocolate",
    price: "45 UAH",
    img: orange,
  },
  {
    id: 2,
    name: "APPLE & CRANBERRY",
    type: "Milk chocolate",
    price: "50 UAH",
    img: apple,
  },
  {
    id: 3,
    name: "LIME & SEA SALT",
    type: "Dark chocolate",
    price: "66 UAH",
    img: lime,
  },
  {
    id: 4,
    name: "PINEAPPLE",
    type: "Dark chocolate",
    price: "54 UAH",
    img: pineapple,
  },
  {
    id: 5,
    name: "CLASSIC",
    type: "Milk chocolate",
    price: "45 UAH",
    img: classicmilk,
  },
  { id: 6, name: "HONEY", type: "Milk chocolate", price: "50 UAH", img: honey },
  {
    id: 7,
    name: "ROASTED FRUITS",
    type: "Dark chocolate",
    price: "66 UAH",
    img: roasted,
  },
  {
    id: 8,
    name: "CLASSIC",
    type: "White chocolate",
    price: "54 UAH",
    img: classicwhite,
  },
];

export default function Products() {
  const handleMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 18;
    const rotateX = (y / rect.height - 0.5) * -18;

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
      <div className="products-wrapper">
        <h2 className="products-title">
          OUR <span>PRODUCTS</span>
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          loop={true}
          grabCursor={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
        >
          {PRODUCTS_DATA.map((product) => (
            <SwiperSlide className="swipper" key={product.id}>
              <div
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

                <button className="product-price">{product.price}</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
