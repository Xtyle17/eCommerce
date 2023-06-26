import React, { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import "../Css/Nav.css";

const Nav = () => {
  return (
    <>
      <nav>
        <Link to={"/"}>
          <p className="items">home</p>
        </Link>
        <Link to={"/products"}>
          <p className="items">products</p>
        </Link>
        <Link to={"/about"}>
          <p className="items">about</p>
        </Link>
      </nav>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Nav;
