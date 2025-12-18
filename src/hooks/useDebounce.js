import { useState, useEffect } from "react";

export default function useDebounce(inputValue, delay) {
  const [value, setValue] = useState(() => {
    if (typeof inputValue === "function") return inputValue();
    return inputValue;
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(inputValue);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [inputValue, delay]);

  return value;
}
