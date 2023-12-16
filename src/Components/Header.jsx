import React, { useState, useContext, useEffect } from "react";
import "../Css/header.css";
import { Link, useNavigate } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as FaIconz from "react-icons/fi";
import useWindowSizeHook from "./Custom-Hooks/useWindowSizeHook";
import { CartContext } from "./Provider/cartProvider";
const Header = () => {
  const { width } = useWindowSizeHook();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { cartItemCount, search, setSearch, isClass } = useContext(CartContext);
  const toProducts = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    toProducts("/products");
  };
  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    if (width > 768 && !isCollapsed) {
      setIsCollapsed(true);
    }
  }, [width, isCollapsed]);
  return (
    <div className="header bg-red-400">
      <div className="Logo">
        <Link to={"/"}>
          <img src="https://www.svgrepo.com/show/217771/shopping-logo.svg"></img>
        </Link>
        <h2 className="Name">shopping</h2>
      </div>
      <form className="search" onSubmit={(e) => handleSearch(e)}>
        <input
          type="searchbar"
          className="inp-search bg-white"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button type="submit" className="btn-search">
          <FaIcons.FaSearch style={{ width: "50px" }} />
        </button>
      </form>

      <div className={width < 768 ? isClass.phone : isClass.pc}>
        <FaIconz.FiUser className="links" />
        <Link to={"/cart"} className="link">
          <FaIcons.FaShoppingCart
            className="crt-icn"
            style={{ color: cartItemCount >= 1 ? "green" : "antiquewhite" }}
          />
          <p className="rdn-cnt">{cartItemCount >= 1 ? cartItemCount : ""}</p>
        </Link>
        <FaIconz.FiSettings size={15} className="links" />

        <button className="menu" onClick={toggleNavbar}>
          <FaIconz.FiMenu />
        </button>
        <ul className={isCollapsed ? "collapsed" : "show "}>
          <li>Account</li>
          <li>settings</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
