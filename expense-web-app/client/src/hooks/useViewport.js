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
      handleWindowResize();
      window.addEventListener("resize", handleWindowResize);
      window.addEventListener("orientationchange", handleWindowResize);
    }

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      window.removeEventListener("orientationchange", handleWindowResize);
    };
  }, []);

  return viewport;
};

export default useViewport;
