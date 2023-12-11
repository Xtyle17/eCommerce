import React, { useState, useEffect, useRef } from "react";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";
import about from "../../Css/about.css";
const About = () => {
  const [visible, setVisible] = useState([false, false, false]);
  const [visibleDev, setVisibleDev] = useState(false);
  const contentRef = useRef();

  useEffect(() => {
    const opt = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, opt);
    if (contentRef.current) {
      observer.observe(contentRef.current);
    }
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const timeOut = [500, 1200, 1800].map((delay, index) => {
      setTimeout(() => {
        setVisible((prevVisible) => {
          const newVisible = [...prevVisible];
          newVisible[index] = true;
          return newVisible;
        });
      }, delay);
    });

    return () => timeOut.forEach((timeOut) => clearTimeout(timeOut));
  }, []);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setVisibleDev(true);
      }
    });
  };
  console.log(visibleDev);
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
        <Contents
          visible={visible}
          contentRef={contentRef}
          visibleDev={visibleDev}
        />
      </motion.div>
      <div className="foot relative bottom-[-60px] flex justify-center">
        <Footer />
      </div>
    </div>
  );
};

export default About;

const Contents = ({ visible, contentRef, visibleDev }) => {
  return (
    <div className="container mx-auto w-full flex flex-col justify-center items-center gap-y-16">
      <div className="  text-center justify-center items-center flex flex-col gap-y-2 mission p-3  w-64 sm:w-[380px] md:w-[450px] lg:w-[500px]">
        <h1 className="font-semibold text-xl">Our Mission</h1>
        <p className={`mission-1 missions ${visible[0] ? "visible" : ""}`}>
          At XYZ eCommerce, our mission is to empower individuals and businesses
          by providing a seamless and inspiring online shopping experience. We
          are dedicated to offering a diverse selection of high-quality
          products, fostering customer trust, and building lasting
          relationships.
        </p>
        <p className={`mission-2 missions ${visible[1] ? "visible" : ""}`}>
          Driven by innovation and a commitment to excellence, we strive to
          exceed customer expectations at every touchpoint. We aim to create a
          platform where users discover, connect, and transact with confidence.
          Our passion for customer satisfaction, ethical business practices, and
          community engagement forms the foundation of our mission.
        </p>
        <p className={`mission-3 missions ${visible[2] ? "visible" : ""}`}>
          We believe in the transformative power of e-commerce to enrich lives
          and create opportunities. Through our platform, we seek to simplify
          the complexities of online shopping, making it accessible, enjoyable,
          and rewarding for everyone.
        </p>
      </div>
      <div
        className={`developer ${visibleDev ? "visible" : ""}`}
        ref={contentRef}>
        <h1>Developer</h1>
        <p>Name</p>
        <p>story</p>
      </div>
    </div>
  );
};
