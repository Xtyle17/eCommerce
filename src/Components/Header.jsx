import React from "react";
import "../Css/header.css";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as FaIconz from "react-icons/fi";
const Header = () => {
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
      <div className="buttons">
        <FaIconz.FiUser></FaIconz.FiUser>
        <Link to={"/cart"}>
          <FaIcons.FaShoppingCart />
        </Link>
        <FaIconz.FiSettings size={15} />

        <button className="item">LogOut</button>
      </div>
    </div>
  );
};

export default Header;
