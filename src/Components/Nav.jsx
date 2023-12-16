import React, { Suspense } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "../Css/Nav.css";

const Nav = () => {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  //conditional rendering for classname
  return (
    <>
      <nav>
        <NavLink
          onClick={scrollTop}
          to="/home"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }>
          Home
        </NavLink>
        <NavLink
          onClick={scrollTop}
          to="/products"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }>
          Products
        </NavLink>
        <NavLink
          onClick={scrollTop}
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }>
          About
        </NavLink>
        <Suspense>
          <Outlet />
        </Suspense>
      </nav>
    </>
  );
};

export default Nav;
