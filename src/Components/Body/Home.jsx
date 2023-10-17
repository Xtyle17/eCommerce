import React from "react";
import { motion } from "framer-motion";
import Footer from "../Footer/Footer";
import { Products } from "../../Products/products";
import "../../Css/home.css";
const Home = () => {
  const Left = () => {
    return <div className="left">yow</div>;
  };
  const Carousel = () => (
    <div className="Container">
      {Products.map((products, index) => {
        return (
          <div className="Carousel" key={index}>
            <figure>
              <img src={products.img[0]} alt="carousel" />
            </figure>
          </div>
        );
      })}
    </div>
  );
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: "100%" }}
        exit={{
          opacity: 0,
          x: window.innerWidth,
          transition: { duration: 0 },
        }}>
        <Left />
        <Carousel />
        Home
      </motion.div>

      <div className="foot relative bottom-[-60px] flex justify-center">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
