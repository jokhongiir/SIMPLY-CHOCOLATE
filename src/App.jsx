import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import "./index.css";
import Home from "./components/home/Home";
import Taste from "./components/taste/Taste";
import About from "./components/about/About";
import Products from "./components/products/Products";
import Sellers from "./components/sellers/Sellers";
import Loved from "./components/loved/Loved";
import Subscribe from "./components/subscribe/Subscribe";
import Footer from "./components/footer/Footer";

const App = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <Header />
      <Home />
      <Taste />
      <About />
      <Products />
      <Sellers />
      <Loved />
      <Subscribe />
      <Footer />

      <button
        className={`scroll-to-top-btn ${showScrollTop ? "visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </div>
  );
};

export default App;
