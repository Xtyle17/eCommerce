import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../Footer/Footer";
import { Products } from "../../Products/products";
import "../../Css/home.css";

const Home = () => {
  //this is just the content for home
  const Content = () => {
    return (
      <div className="Contents">
        <div className="bg-blue-400 p-2 flex flex-col items-center">
          <h1 className="text-3xl">Welcome to our store</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            assumenda accusantium quos quia, illum quidem fugiat quam eligendi
            nihil suscipit quod, repellat pariatur blanditiis itaque consequatur
            minima! Aliquid, tenetur eligendi.
          </p>
        </div>
        <div className="bg-yellow-300 p-1 images">
          <p className="grid justify-center">Our Summer Collections</p>
          <Link to="/products">
            <img
              className="w-full "
              src="https://images.macrumors.com/t/1aW4MKNlmsv_HyxRnORrkGP3qzg=/1600x/article-new/2019/01/iphone11splash.jpg"
              alt="iphone"
            />
          </Link>
        </div>
        <div className=" span-2 p-2 grid justify-center items-center">
          <h1 className="grid justify-center">Why Choose eStore?</h1>
          <div className="chose">
            <div className=" flex justify-center">
              <div className="flex flex-col justify-center items-center bg-green-300 w-36 border ">
                <img
                  src="https://image.shutterstock.com/image-photo/image-260nw-1059620540.jpg"
                  alt="reliable"
                />
                <p>we are reliable</p>
              </div>
            </div>
            <div className=" flex  justify-center ">
              <div className="flex flex-col justify-center items-center bg-green-300 w-36 border ">
                <img
                  src="https://www.logomaven.com/blog/wp-content/uploads/2016/12/Trust_466709245-1200x900.jpg"
                  alt="trustworthy"
                  className="w-1/2"
                />
                <p>we are trustworthy</p>
              </div>
            </div>
            <div className=" flex  justify-center ">
              <div className="flex flex-col justify-center items-center bg-green-300 w-36 border">
                <img
                  src="https://www.logomaven.com/blog/wp-content/uploads/2016/12/Trust_466709245-1200x900.jpg"
                  alt="trustworthy"
                  className="w-1/2"
                />
                <p>Great Service</p>
              </div>
            </div>
            <div className=" flex  justify-center ">
              <div className="flex flex-col justify-center items-center w-36 border ">
                <img
                  src="https://www.logomaven.com/blog/wp-content/uploads/2016/12/Trust_466709245-1200x900.jpg"
                  alt="trustworthy"
                  className="w-1/2"
                />
                <p>we care</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-between min-h-screen m-2 ">
      <motion.div
        key="unique-key-for-home"
        className="Home home-items"
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: "100%" }}
        exit={{
          opacity: 0,
          x: "100%",
          transition: { duration: 0.1 },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}>
        <Content />
      </motion.div>

      <div className="foot relative bottom-[-60px] flex justify-center">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
