import React, { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import "../Css/Nav.css";

const Nav = () => {
  return (
    <>
      <nav>
        <Link to={"/"}>
          <p className="nav-items">home</p>
        </Link>
        <Link to={"/products"}>
          <p className="nav-items">products</p>
        </Link>
        <Link to={"/about"}>
          <p className="nav-items">about</p>
        </Link>
        <Suspense>
          <Outlet />
        </Suspense>
      </nav>
    </>
  );
};

export default Nav;
