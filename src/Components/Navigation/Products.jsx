import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import { Products } from "../../Products/products";

const Product = () => {
  const { id } = useParams();
  const items = Products.find((item) => item.id.toString() === id);

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
    <div>
      <div>
        <img src={items.img} />
        <h1>{items.name}</h1>
        <h3>{items.price}</h3>
      </div>
    </div>
  );
};

export default Product;
