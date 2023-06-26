import React, { useState, useReducer, useContext } from "react";
import { Products } from "../../Products/products";
import "../../Css/products.css";
import { Link } from "react-router-dom";
import AddToCart from "./AddToCart";
import { reducer, initialState, ACTIONS } from "../reducer";

const ProductsList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;
  const pages = Array.from(
    { length: Math.ceil(state.products.length / productsPerPage) },
    (_, index) => index + 1
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = state.products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleAddToCart = (item) => {
    dispatch({ type: ACTIONS.ADD_CART, payload: item });
  };
  return (
    <div className="Body">
      <h2>PRODUCTS</h2>
      <div className="products">
        {currentProducts.map((product) => (
          <div key={product.id} className="items">
            <Link to={`/products/${product.id}`}>
              <img src={product.img}></img>
              <h2>{product.name}</h2>
            </Link>
            <h4>{product.price}</h4>
            <p>
              {product.description.length <= 15
                ? product.description
                : `${product.description.slice(0, 15)}...`}
            </p>
            <AddToCart product={product} />
          </div>
        ))}
      </div>
      <div>
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            disabled={page === currentPage}>
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
