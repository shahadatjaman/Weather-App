import "./Styles.css";

import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Temparetures = () => {
  const { weather } = useSelector((state) => state.weather);

  // Params
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get("name");

  return (
    <div className="tem_wrapper">
      <div>
        {weather && weather.location.name && (
          <>
            <h1 className="h1_styled">{name}</h1>
            <span className="rain_chance_styled">
              Cloudy: {weather?.current.cloud}
            </span>

            <h1 className="deg_styled">{weather.current.temp_c.toFixed(0)}°</h1>
          </>
        )}
      </div>
      <div>
        <img
          className="w-32"
          src={weather && weather.current.condition.icon}
          alt="sun"
        />
      </div>
    </div>
  );
};

export default Temparetures;
