import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../Provider/cartProvider";

const Login = () => {
  const { setIsLoggedIn, isLoggedIn } = useContext(CartContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    //possible logic here

    setIsLoggedIn(true);
    navigate("/home");
  };

  console.log(isLoggedIn);
  return (
    <div className="flex flex-col  justify-center items-center min-h-screen bg-amber-300 ">
      <div
        className="reg bg-red-500 p-3  md:p-8 flex flex-col gap-y-4 rounded-md w-[220px] sm:w-[500px] md:w-[500px]
  lg:w-[500px] ">
        <h1>Sign-in</h1>

        <form
          action=""
          className="flex flex-col  gap-y-2"
          onSubmit={(e) => {
            handleSubmit(e);
          }}>
          <input
            type="email"
            required
            placeholder="Ex. user@gmail.com"
            className="p-2 bg-white"
          />
          <input
            type="password"
            required
            placeholder="*******"
            className="p-2 bg-white"
          />
          <input
            type="user"
            required
            placeholder="name"
            className="p-2 bg-white"
          />
          <button className="bg-gray-600 ">Submit</button>
        </form>

        <p className="text-sm">
          Don't have an account?{" "}
          <Link to={"/register"} className="ml-2 text-sm">
            Sign-up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
