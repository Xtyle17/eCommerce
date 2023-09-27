import React, { useState, useReducer, useContext, useEffect } from "react";
import Footer from "../Footer/Footer";
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
    <div className="box flex flex-col justify-center ">
      <motion.div
        className="Body justify-center "
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: "100%" }}
        exit={{
          opacity: 0,
          x: window.innerWidth,
          transition: { duration: 0 },
        }}>
        <form className=" flex flex-col gap-y-0 absolute left-5 top-36  md:left-5 md:top-15 lg:left-5 lg:top-20 ">
          <label className="flex ">
            <input
              type="radio"
              name="productType"
              value=""
              placeholder="all"
              checked={productType === ""}
              onChange={(e) => setProductType(e.target.value)}
            />
            all
          </label>

          <label className="flex">
            <input
              type="radio"
              name="productType"
              value="electronics"
              checked={productType === "electronics"}
              onChange={(e) => setProductType(e.target.value)}
            />
            electronics
          </label>

          <label className="flex">
            <input
              type="radio"
              name="productType"
              value="wear"
              checked={productType === "wear"}
              onChange={(e) => setProductType(e.target.value)}
            />
            wear
          </label>
        </form>
        <div className="w-48 md:w-3/5 lg:w-5/5 flex flex-col content-center justify-center items-center">
          <h2>PRODUCTS</h2>

          <motion.div
            className="products w-5/5 flex gap-x-10 "
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
                animate={{ opacity: 1, width: "80%" }}
                exit={{
                  opacity: 0,
                  x: window.innerWidth,
                  transition: { duration: 0 },
                }}>
                <Link to={`/products/${product.id}`}>
                  <img src={product.img} className="w-32"></img>
                  <h2>{product.name}</h2>
                </Link>
                <h4>${product.price}</h4>
                <p>
                  {product.description.length <= 15
                    ? product.description
                    : `${product.description.slice(0, 15)}...`}
                </p>
                <AddToCart product={product} />
              </motion.div>
            ))}
          </motion.div>
          <div className="flex flex-row gap-x-2 mt-3 mb-2">
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
        </div>
      </motion.div>
      <div className="absolute left-2/4 bottom-0">
        <Footer />
      </div>
    </div>
  );
};

export default ProductsList;
