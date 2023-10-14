import React from "react";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: "100%" }}
        exit={{
          opacity: 0,
          x: window.innerWidth,
          transition: { duration: 0 },
        }}>
        About
      </motion.div>
      <div className="foot relative bottom-[-60px] flex justify-center">
        <Footer />
      </div>
    </div>
  );
};

export default About;
