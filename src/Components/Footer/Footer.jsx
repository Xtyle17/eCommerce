import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="flex">
        <p>facebook</p>
        <p>facebook</p>
        <p>facebook</p>
        <p>facebook</p>
      </div>
      <div>
        <p>&copy; Reserved {date} </p>
      </div>
    </div>
  );
};

export default Footer;
