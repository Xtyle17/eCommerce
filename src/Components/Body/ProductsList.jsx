import React, { useState, useReducer, useContext, useEffect } from "react";
import { motion } from "framer-motion";
import "../../Css/products.css";
import { Link } from "react-router-dom";
import AddToCart from "./AddToCart";
import { CartContext } from "../Provider/cartProvider";
import { reducer, initialState, ACTIONS } from "../reducer";

const ProductsList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;
  const { searchResult, productType, setProductType } = useContext(CartContext);
  const pages = Array.from(
    { length: Math.ceil(searchResult.length / productsPerPage) },
    (_, index) => index + 1
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = searchResult.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  useEffect(() => {
    setCurrentPage(1);
  }, [productType]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <motion.div
      className="Body"
      initial={{ opacity: 0, width: 0 }}
      animate={{ opacity: 1, width: "100%" }}
      exit={{
        opacity: 0,
        x: window.innerWidth,
        transition: { duration: 0 },
      }}>
      <select
        value={productType}
        onChange={(e) => setProductType(e.target.value)}>
        <option value="">All</option>
        <option value="electronics">electronics</option>
        <option value="wear">wear</option>
      </select>
      <h2>PRODUCTS</h2>
      <motion.div
        className="products"
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: "80%" }}
        exit={{
          opacity: 0,
          x: window.innerWidth,
          transition: { duration: 0 },
        }}>
        {currentProducts.map((product) => (
          <motion.div
            key={product.id}
            className="items"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "18%" }}
            exit={{
              opacity: 0,
              x: window.innerWidth,
              transition: { duration: 0 },
            }}>
            <Link to={`/products/${product.id}`}>
              <img src={product.img}></img>
              <h2>{product.name}</h2>
            </Link>
            <h4>${product.price}</h4>
            <p>
              {product.description.length <= 15
                ? product.description
                : `${product.description.slice(0, 15)}...`}
            </p>
            <AddToCart product={product} className="border-1" />
          </motion.div>
        ))}
      </motion.div>
      <div className="flex flex-row gap-x-2">
        {pages.map((page) => (
          <button
            className="items-center w-7 bg-red-300"
            key={page}
            onClick={() => handlePageChange(page)}
            disabled={page === currentPage}>
            {page}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default ProductsList;
