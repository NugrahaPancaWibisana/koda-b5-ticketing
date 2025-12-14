import { useState } from "react";

export default function useInput(initialState, validationRules) {
  const [value, setValue] = useState(() => {
    if (typeof initialState === "function") return initialState();
    return initialState;
  });
  const [error, setError] = useState("");

  const validate = (name, type, val, checked, rules) => {
    if (rules.required && val === "") {
      setError(`${name} cannot be empty`);
      return;
    }

    if (
      rules.required &&
      (type === "checkbox" || type === "radio") &&
      checked === false
    ) {
      setError(`${name} must be checked`);
      return;
    }

    if (rules.unique) {
      setError(`This ${name} has already been registered.`);
      return;
    }

    if (val.length < rules.minLength) {
      setError(`${name} cannot be less than ${rules.minLength} character(s)`);
      return;
    }

    setError("");
  };

  const onChangeHandler = (e) => {
    const { name, type, value, checked } = e.target;

    setValue(type === "checkbox" || type === "radio" ? checked : value);
    validate(name, type, value, checked, validationRules);
  };

  return { value, setValue, onChangeHandler, isValid: !error, error };
}
