import { useState, useCallback } from "react";

const useBoolean = (defaultValue = false) => {
    const [value, setValue] = useState(!!defaultValue);

    const setTrue = useCallback(() => setValue(true), []);
    const setFalse = useCallback(() => setValue(false), []);
    const toggle = useCallback(() => setValue((x) => !x), []);

    return { value, setValue, setTrue, setFalse, toggle };
};

export default useBoolean;
