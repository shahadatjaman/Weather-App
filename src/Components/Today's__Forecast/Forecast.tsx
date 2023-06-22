import React from "react";
import "./Styles.css";
import { cloud } from "./data";

const Forecast = () => {
  return (
    <div className="forecast_wrapper">
      <span className="text_styled uppercase">6:00 AM</span>
      <span className="my-4">
        <img className="w-10" src={cloud} alt="cloud" />
      </span>
      <span className="font-bold text-2xl">44°</span>
    </div>
  );
};

export default Forecast;
