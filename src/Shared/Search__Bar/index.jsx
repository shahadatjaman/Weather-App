import { useEffect, useState } from "react";
import "./Styles.css";

import Suggestions from "./Suggestions";
import InputField from "./InputField";
import { useLocation, useNavigate } from "react-router-dom";
import useLocationAutocomplete from "../../Hook/useLocationAutocomplete";
import { useSelector } from "react-redux";
import { addLocations, addQueryText } from "../../features/find_location";
import { useDispatch } from "react-redux";

const SearchBar = ({ isSuggest }) => {
  const [isFocused, setIsFocused] = useState(false);

  const dispatch = useDispatch();
  const { queryText } = useSelector((state) => state.findLocation);

  // fetch location
  const { error, loading, locations, fetchLocations } =
    useLocationAutocomplete();

  // Params
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const q = searchParams.get("q");

  // Navigate to  another page
  const navigate = useNavigate();

  const handleInputFocuse = (value) => {
    setIsFocused(value);
  };

  useEffect(() => {
    if (queryText) {
      fetchLocations({ q: queryText });
    }
  }, [queryText]);

  useEffect(() => {
    dispatch(addQueryText(q));
  }, [q]);

  useEffect(() => {
    dispatch(addLocations({ error, loading, locations }));
  }, [locations]);

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/?q=${queryText}`);
  };

  return (
    <div className="search_wrapper">
      <form onSubmit={submitHandler}>
        <InputField handleInputFocuse={handleInputFocuse} />
      </form>

      {isFocused && isSuggest && (
        <Suggestions
          isSuggest={isSuggest}
          locations={locations}
          fetchLocations={fetchLocations}
          error={error}
          loading={loading}
        />
      )}
    </div>
  );
};

export default SearchBar;
