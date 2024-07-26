import { useEffect, useState } from "react";

/**
 * Delay the execution by a certain interval
 *
 * @param {*} value
 * @param {number} [delay=500]
 * @return {*}
 */
const useDebounce = (value, delay = 500) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounceValue;
};

export default useDebounce;
