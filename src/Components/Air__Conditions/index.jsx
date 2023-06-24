import { useSelector } from "react-redux";
import H2 from "../../Shared/Heading/H2";
import Item from "./Item";
import "./Styles.css";
import { icons } from "./data";

const AirConditions = () => {
  const { weather } = useSelector((state) => state.weather);

  return (
    <div className="air_wrapper">
      <H2 transform="uppercase">AIR CONTITION</H2>

      <div className="flex mt-4">
        <div className="w-2/3 flex justify-start items-start flex-col">
          <Item
            icon={icons.temp}
            title="Real Feel"
            unit="°"
            value={weather?.current?.feelslike_c.toFixed(0)}
          />
          <Item
            icon={icons.rain}
            title="Humidity"
            unit=""
            value={weather?.current?.humidity.toFixed(0)}
          />
        </div>
        <div className="w-5/12 flex justify-start flex-col items-start">
          <Item
            icon={icons.wind}
            title="Wind"
            unit=" mp/h"
            value={weather?.current?.wind_mph.toFixed(0)}
          />
          <Item
            icon={icons.uv_index}
            title="UV Index"
            unit=""
            value={weather?.current?.uv}
          />
        </div>
      </div>
    </div>
  );
};

export default AirConditions;
