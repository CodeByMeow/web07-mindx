const { useState, useEffect } = require("react");

const useViewport = () => {
  const [viewport, setViewport] = useState({ width: 0, height: 0 });

  const handleWindowResize = () => {
    setViewport({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    if (window) {
      window.addEventListener("resize", handleWindowResize);
      window.addEventListener(
        "orientationchange",
        handleWindowOrientationChange
      );
    }

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      window.removeEventListener(
        "orientationchange",
        handleWindowOrientationChange
      );
    };
  }, []);

  return viewport;
};

export default useViewport;
