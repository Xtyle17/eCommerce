import React, { Suspense, useState } from "react";
import "../../Css/slider.css";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { Products } from "../../Products/products";
import AddToCart from "../Body/AddToCart";

const Product = () => {
  const [current, setCurrent] = useState(0);

  const { id } = useParams();
  const items = Products.find((item) => item.id.toString() === id);
  //for slider carousel
  const length = items.img.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(items.img) || items.img.length <= 0) {
    return null;
  }
  if (!items) {
    return (
      <main>
        <article>
          <h1>Post not found</h1>
          <p>Sorry, the requested post does not exist.</p>
          <p>
            <Link to="/">Visit the Home Page</Link>
          </p>
        </article>
      </main>
    );
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center mt-4">
        <section className="slider">
          <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
          <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
          {
            //slide is the current img and the index is its current index
          }
          {items.img.map((slide, index) => {
            return (
              <div
                className={index === current ? "slide_active" : "slide"}
                key={index}>
                {index === current ? (
                  <img src={slide} alt="travel image" className="image" />
                ) : null}
              </div>
            );
          })}
        </section>

        <h1>{items.name}</h1>
        <h3>${items.price}</h3>
        <p>{items.description}</p>
      </div>
      <AddToCart product={items} />
    </div>
  );
};

export default Product;
