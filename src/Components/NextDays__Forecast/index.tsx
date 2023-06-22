import H2 from "../../Shared/Heading/H2";
import Item from "./Item";
import "./Styles.css";

const NextForecast = () => {
  return (
    <div className="next_forecast_wrapper">
      <H2 transform="capitalize">7-day forecast</H2>

      <div>
        {[1, 1, 1, 1, 1, 1, 1].map((item, index) => (
          <Item />
        ))}
      </div>
    </div>
  );
};

export default NextForecast;
