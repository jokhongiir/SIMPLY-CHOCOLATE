import React from "react";
import "./Loved.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const customerReviews = [
  {
    id: 1,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Victoria Dobrzhanska",
    review:
      "I love this chocolate bar. Perfect combination of light crispy wafer, covered in a thin layer chocolate.",
  },
  {
    id: 2,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Nazar Babenko",
    review:
      "This chocolate confection is a delight! The wafer is light and crisp, the hazelnut cream is smooth.",
  },
  {
    id: 3,
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Olena Kampusch",
    review:
      "Chocolate is a family favourite treat. Love the delicious smooth chocolate and the creaminess inside.",
  },
  {
    id: 4,
    image: "https://randomuser.me/api/portraits/women/23.jpg",
    name: "Natalia Sus",
    review:
      "The chocolate assortment was delicious. Both dark and milk chocolate pieces were smooth and perfect.",
  },
  {
    id: 5,
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    name: "Danilo Nottingham",
    review:
      "This is delicious. Rich and flavorful. I love topping an apple with almond butter and these chips.",
  },
  {
    id: 6,
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Irina Tydnyuk",
    review:
      "This is simply the best chocolate around, and I'm thrilled to support a local company.",
  },
];

const Loved = () => {
  return (
    <section className="choco-love-area" id="reviews">
      <div className="choco-love-container">
        <div className="choco-love-header">
          <h2 className="choco-love-title">
            <span>CHOCOLATE</span> IS LOVED
          </h2>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          className="choco-review-swiper"
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          speed={900}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {customerReviews.map((item) => (
            <SwiperSlide key={item.id}>
              <article className="choco-review-card">
                <div className="choco-review-photo">
                  <img src={item.image} alt={item.name} />
                </div>

                <div className="choco-review-content">
                  <h3 className="choco-review-name">{item.name}</h3>

                  <p className="choco-review-text">{item.review}</p>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="choco-review-action">
          <button className="choco-review-btn">Leave a review</button>
        </div>
      </div>
    </section>
  );
};

export default Loved;
