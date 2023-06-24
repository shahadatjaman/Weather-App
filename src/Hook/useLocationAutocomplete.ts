import { useState } from "react";
import axios from "axios";

interface LocationAutocompleteProps {
  q: string;
}

const useLocationAutocomplete = () => {
  const [locations, setLocations] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchLocations = async (props: LocationAutocompleteProps) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_AUTOCOMPLETE}/v1/autocomplete`,
        {
          params: {
            key: process.env.REACT_APP_API_KEY_FOR_AUTOCOMPLETE,
            q: props.q,
          },
        }
      );

      setLocations(response.data);
    } catch (error) {
      setError("Not found");
      setLocations([]);
    } finally {
      setLoading(false);
    }
  };

  return { locations, loading, error, fetchLocations };
};

export default useLocationAutocomplete;
