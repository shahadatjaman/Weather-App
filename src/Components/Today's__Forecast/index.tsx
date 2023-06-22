import React from "react";
import "./Styles.css";
import Forecast from "./Forecast";
import H2 from "../../Shared/Heading/H2";

const TodaysForecast = () => {
  return (
    <div className="today_tem_wrapper">
      <H2 transform="uppercase">TODAY'S FORECAST</H2>

      <div className="mt-4 flex w-full justify-center items-center">
        {[1, 1, 1, 1, 1, 1].map((item, index) => (
          <div key={index} className="w-1/6">
            <Forecast />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodaysForecast;
