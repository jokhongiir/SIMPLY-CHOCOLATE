import React from "react";
import "./Taste.css";

// Swiper komponentlari va modullarini import qilamiz
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Swiper uchun zarur bo'lgan CSS stillari
import "swiper/css";
import "swiper/css/pagination";

// Rasmlar importi
import chocolatee from "../../assets/chocolatee.png";
import milk from "../../assets/milk.png";
import walnut from "../../assets/walnut.png";
import cofee from "../../assets/cofee.png";

const ingredients = [
  {
    id: 1,
    title: "MILK CHOCOLATE",
    image: chocolatee,
    variant: "orange",
    detailTitle: "Milk Chocolate",
    tagPrimary: "Chocolate",
    tagSecondary: "Benefits",
    description:
      "Milk chocolate is a solid chocolate confectionery containing cocoa, sugar and milk. It is one of the most popular chocolate varieties around the world.",
  },
  {
    id: 2,
    title: "MILK",
    image: milk,
    variant: "white",
    detailTitle: "Milk",
    tagPrimary: "Milk",
    tagSecondary: "Benefits",
    description:
      "Milk is a nutrient-rich liquid food produced by mammals. It contains proteins, vitamins, calcium and minerals essential for growth and development.",
  },
  {
    id: 3,
    title: "NUTS",
    image: walnut,
    variant: "dark",
    detailTitle: "Nuts",
    tagPrimary: "Nuts",
    tagSecondary: "Benefits",
    description:
      "Walnuts, almonds and pistachios contain healthy fats, vitamins and antioxidants that support heart health and overall wellness.",
  },
  {
    id: 4,
    title: "SEMI-SWEET CHOCOLATE",
    image: cofee,
    variant: "outline",
    detailTitle: "Semi-Sweet",
    tagPrimary: "Chocolate",
    tagSecondary: "Benefits",
    description:
      "Semi-sweet chocolate contains a higher cocoa percentage and delivers a richer taste profile while maintaining a balanced sweetness.",
  },
];

const Taste = () => {
  return (
    <section className="taste-section" id="ingredients">
      <div className="taste-container">
        
        <div className="taste-heading">
          <h2 className="taste-title">
            IT ALL ADDS UP TO ONE EXCEPTIONAL
            <span> TASTE </span>
            SENSATION
          </h2>

          <p className="taste-description">
            At Simply Chocolate, we believe that the secret to exceptional
            chocolate is hidden in every ingredient. Each element contributes
            to an unforgettable taste experience.
          </p>
        </div>

        {/* Eski 'ingredient-grid' o'rniga Swiper-ni joylashtiramiz */}
        <Swiper
          modules={[Pagination, Autoplay]}
          className="ingredient-swiper"
          spaceBetween={30}
          slidesPerView={4}
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
              slidesPerView: 4,
            },
          }}
        >
          {ingredients.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="ingredient-card">
                <div className="ingredient-card-inner">
                  
                  {/* Front Side */}
                  <div className={`ingredient-front ingredient-${item.variant}`}>
                    <div className="ingredient-image-wrapper">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="ingredient-image"
                      />
                    </div>

                    <h3 className="ingredient-name">{item.title}</h3>
                  </div>

                  {/* Back Side */}
                  <div className="ingredient-back">
                    <h3 className="ingredient-back-title">{item.detailTitle}</h3>

                    <div className="ingredient-tags">
                      <span className="tag-primary">{item.tagPrimary}</span>
                      <span className="tag-secondary">{item.tagSecondary}</span>
                    </div>

                    <p className="ingredient-back-text">{item.description}</p>
                  </div>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Taste;