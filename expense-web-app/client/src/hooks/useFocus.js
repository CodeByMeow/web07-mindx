import { useRef } from "react";

const useFocus = () => {
  const htmlFocus = useRef(null);
  const setFocus = () => htmlFocus.current && htmlFocus.current.focus();

  return [htmlFocus, setFocus];
};

export default useFocus;
