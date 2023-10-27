import React, { Suspense } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "../Css/Nav.css";

const Nav = () => {
  //conditional rendering for classname
  return (
    <>
      <nav>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }>
          Home
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }>
          Products
        </NavLink>
        <NavLink
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
