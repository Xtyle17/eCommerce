import React, {
  useState,
  useContext,
  startTransition,
  useCallback,
  useEffect,
} from "react";
import "../Css/header.css";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as FaIconz from "react-icons/fi";
import useWindowSizeHook from "./Custom-Hooks/useWindowSizeHook";
import { CartContext } from "./Provider/cartProvider";
const Header = () => {
  const { width } = useWindowSizeHook();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { cartItemCount, search, setSearch, setIsLoggedIn, isClass } =
    useContext(CartContext);

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
