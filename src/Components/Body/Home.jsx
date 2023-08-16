import React from "react";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, width: 0 }}
      animate={{ opacity: 1, width: "100%" }}
      exit={{
        opacity: 0,
        x: window.innerWidth,
        transition: { duration: 0 },
      }}>
      Home
    </motion.div>
  );
};

export default Home;
