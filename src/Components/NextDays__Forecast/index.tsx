import React from "react";
import H2 from "../../Shared/Heading/H2";
import Item from "./Item";
import "./Styles.css";
import { useLocation } from "react-router-dom";
import { useGetForecastQuery } from "../../features/weather/weatherApi";

const NextForecast = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const state = searchParams.get("state");
  const { data: forecast } = useGetForecastQuery({ q: state, days: 7 });

  return (
    <div className="next_forecast_wrapper">
      <H2 transform="capitalize">7-day forecast</H2>

      <div>
        {forecast?.forecast?.forecastday?.map((item: any, index: number) => (
          <React.Fragment key={index}>
            <Item
              icon={item.day?.condition?.icon}
              text={item.day?.condition?.text}
              forecast={item}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default NextForecast;
