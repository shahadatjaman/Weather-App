import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { addQueryText } from "../../features/find_location";

const InputField = ({ handleInputFocuse }) => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const val = e.target.value;
    setValue(val || "");
  };

  const handleFocuse = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
    }, 400);
  };

  useEffect(() => {
    handleInputFocuse(isFocused);
  }, [isFocused]);

  // Stote query string to global state
  useEffect(() => {
    dispatch(addQueryText(value));
  }, [value]);

  return (
    <input
      type="text"
      onChange={handleChange}
      onFocus={handleFocuse}
      onBlur={handleBlur}
      value={value}
      className="search_input"
      placeholder="Search for cities"
    />
  );
};

export default InputField;
