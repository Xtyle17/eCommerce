import React, {
  useState,
  useContext,
  useEffect,
  startTransition,
  useCallback,
} from "react";
import "../Css/header.css";
import { Link, useNavigate } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as FaIconz from "react-icons/fi";
import useWindowSizeHook from "./Custom-Hooks/useWindowSizeHook";
import { CartContext } from "./Provider/cartProvider";
const Header = () => {
  const { width } = useWindowSizeHook();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { cartItemCount, state, search, setSearch, isLoggedIn, setIsLoggedIn } =
    useContext(CartContext);
  const logout = useNavigate();
  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };
  const handleLogOut = useCallback(() => {
    startTransition(() => {
      setIsLoggedIn(false);
    });
  }, []);

  return (
    <div className="header">
      <div className="Logo">
        <Link to={"/"}>
          <img src="shop.png"></img>
        </Link>
        <h2 className="Name">shopping</h2>
      </div>
      <form className="search" onSubmit={(e) => e.preventDefault()}>
        <input
          type="searchbar"
          className="inp-search"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn-search">
          <FaIcons.FaSearch style={{ width: "50px" }} />
        </button>
      </form>

      <div className="buttons-links">
        <FaIconz.FiUser className="links" />
        <Link to={"/cart"} className="link">
          <FaIcons.FaShoppingCart
            className="crt-icn"
            style={{ color: cartItemCount >= 1 ? "green" : "antiquewhite" }}
          />
          <p className="rdn-cnt">{cartItemCount >= 1 ? cartItemCount : ""}</p>
        </Link>
        <FaIconz.FiSettings size={15} className="links" />

        <button className="item" onClick={handleLogOut}>
          LogOut
        </button>
        <button className="menu" onClick={toggleNavbar}>
          <FaIconz.FiMenu />
        </button>
        <ul className={isCollapsed ? "collapsed" : ""}>
          <li>Account</li>
          <li>settings</li>
          <li>logout</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
