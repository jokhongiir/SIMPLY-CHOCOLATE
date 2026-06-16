import React from "react";
import "./Taste.css";

import chocolatee from "../../assets/chocolatee.png";
import milk from "../../assets/milk.png";
import walnut from "../../assets/walnut.png";
import cofee from "../../assets/cofee.png";

const data = [
  {
    title: "MILK CHOCOLATE",
    image: chocolatee,
    color: "orange",
    backTitle: "Milk chocolate",
    tag1: "chocolate",
    tag2: "the benefits",
    description:
      "Milk chocolate is a solid chocolate confectionery containing cocoa, sugar and milk. It is the most consumed type of chocolate.",
  },
  {
    title: "MILK",
    image: milk,
    color: "white",
    backTitle: "Milk",
    tag1: "milk",
    tag2: "the benefits",
    description:
      "Milk is a white liquid food produced by the mammary glands of mammals. It is the primary source of nutrition for young mammals (including breastfed human infants) before they are able to digest solid food.Early-lactation milk, which is called colostrum,",
  },
  {
    title: "NUTS",
    image: walnut,
    color: "dark",
    backTitle: "Nuts",
    tag1: "nuts",
    tag2: "the benefits",
    description:
      "Almonds, pistachios, and walnuts are some types of nuts that contain healthy nutrients. When eaten as part of a nutrient-dense diet, these 9 nuts may offer benefits such as reducing your risk of heart disease. They’re a good source",
  },
  {
    title: "SEMI-SWEET CHOCOLATE",
    image: cofee,
    color: "outline",
    backTitle: "Semi Sweet",
    tag1: "sweet chocolate",
    tag2: "the benefits",
    description:
      "Semi-sweet chocolate has a cocoa solid content of 35 to 65%. One of the best ways to gain an understanding of this type of chocolate is to compare it to a different type of chocolate. Semisweet is darker",
  },
];

const Taste = () => {
  return (
    <section className="taste">
      <div className="taste-header">
        <h2>
          IT ALL ADDS UP TO ONE EXCEPTIONAL
          <span> TASTE </span>
          SENSATION
        </h2>

        <p>
          At Simply Chocolate, we believe that the secret to exceptional
          chocolate is in the details. Every ingredient contributes to an
          unforgettable taste experience.
        </p>
      </div>

      <div className="taste-grid">
        {data.map((item, index) => (
          <div className="flip-card" key={index}>
            <div className="flip-card-inner">
              {/* Front */}
              <div className={`flip-front ${item.color}`}>
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
              </div>

              {/* Back */}
              <div className="flip-back">
                <h3>{item.backTitle}</h3>

                <div className="tags">
                  <span className="orange-tag">{item.tag1}</span>
                  <span className="white-tag">{item.tag2}</span>
                </div>

                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Taste;
