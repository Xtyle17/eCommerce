import React, { Suspense, useContext } from "react";
import { lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Register from "./Navigation/Register";
import Login from "./Navigation/login";
// import Nav from "./Nav";
import Cart from "./Navigation/Cart";
import Product from "./Navigation/Products";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { CartContext } from "./Provider/cartProvider";
// const About = lazy(() => import("./Body/About"));
// const Home = lazy(() => import("./Body/Home"));
// const ProductsList = lazy(() => import("./Body/ProductsList"));
import Home from "./Body/Home";
import ProductsList from "./Body/ProductsList";
import About from "./Body/About";
import CheckOut from "./CheckOut";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AnimatePresence>
        <Routes className="routes" location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};

export default AnimatedRoutes;
