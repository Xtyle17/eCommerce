import React, { useEffect, useState } from "react";

const useWindowSizeHook = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    const cleanUp = () => {
      window.removeEventListener("resize", handleResize);
    };
    cleanUp();
  }, []);
  return windowSize;
};

export default useWindowSizeHook;
