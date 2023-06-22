import H2 from "../../Shared/Heading/H2";
import Item from "./Item";
import "./Styles.css";
import { icons } from "./data";

const AirConditions = () => {
  return (
    <div className="air_wrapper">
      <H2 transform="uppercase">AIR CONTITION</H2>

      <div className="flex mt-4">
        <div className="w-2/3 flex justify-start items-start flex-col">
          <Item icon={icons.temp} title="Real Feel" unit="°" value="11" />
          <Item icon={icons.rain} title="Chance of rain" unit="%" value="40" />
        </div>
        <div className="w-5/12 flex justify-start flex-col items-start">
          <Item icon={icons.wind} title="Wind" unit="km/h" value="0.2" />
          <Item icon={icons.uv_index} title="UX Index" unit="" value="3" />
        </div>
      </div>
    </div>
  );
};

export default AirConditions;
