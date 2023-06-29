import React, { useState, useContext } from "react";
import "../Css/header.css";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as FaIconz from "react-icons/fi";
import useWindowSizeHook from "./Custom-Hooks/useWindowSizeHook";
import { CartContext } from "./Provider/cartProvider";
const Header = () => {
  const { width } = useWindowSizeHook();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { cartItemCounts, cartItemCount, state } = useContext(CartContext);
  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="header">
      <div className="Logo">
        <Link to={"/"}>
          <img src="shop.png"></img>
        </Link>
        <h2 className="Name">shopping</h2>
      </div>
      <div className="search">
        <input
          type="searchbar"
          className="inp-search"
          placeholder="Search..."
        />
        <button className="btn-search">
          <FaIcons.FaSearch />
        </button>
      </div>

      <div className="buttons-links">
        <FaIconz.FiUser className="links" />
        <Link to={"/cart"} className="links">
          <FaIcons.FaShoppingCart />
          {cartItemCount}
        </Link>
        <FaIconz.FiSettings size={15} className="links" />

        <button className="item">LogOut</button>
        <div className="menu">menu</div>
      </div>
    </div>
  );
};

export default Header;
