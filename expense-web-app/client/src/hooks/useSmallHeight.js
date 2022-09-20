import { useEffect } from "react";
import useViewport from "./useViewport";
import useBoolean from "./useBoolean";

const useSmallHeight = () => {
  const viewport = useViewport();
  const { value, setTrue, setFalse } = useBoolean(false);
  useEffect(() => {
    if (viewport.height <= 500) {
      setTrue();
    } else {
      setFalse();
    }
  }, [viewport]);
  return value;
};

export default useSmallHeight;
