import React from "react";
import { motion } from "framer-motion";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <div className="flex flex-col justify-between">
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

      <div className="absolute left-2/4 bottom-0">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
