import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Register = lazy(() => import("./Navigation/Register"));
const Loginz = lazy(() => import("./Navigation/login"));

const StartingRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Loginz />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Loginz />} />
    </Routes>
  );
};

export default StartingRoute;
