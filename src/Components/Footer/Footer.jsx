import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="flex gap-x-10 ">
        <FaFacebook size={20} />
        <FaInstagram size={20} />
        <FaLinkedin size={20} />
        <FaYoutube size={20} />
      </div>
      <div>
        <p>&copy; Reserved {date} </p>
      </div>
    </div>
  );
};

export default Footer;
