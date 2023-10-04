import React, { useContext } from "react";
import { lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Register from "./Navigation/Register";
import Login from "./Navigation/login";
// import Nav from "./Nav";
import Cart from "./Navigation/Cart";
import Product from "./Navigation/Products";
import { AnimatePresence } from "framer-motion";
import { CartContext } from "./Provider/cartProvider";
const About = lazy(() => import("./Body/About"));
const Home = lazy(() => import("./Body/Home"));

const ProductsList = lazy(() => import("./Body/ProductsList"));
const AnimatedRoutes = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(CartContext);

  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes className="routes" location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
