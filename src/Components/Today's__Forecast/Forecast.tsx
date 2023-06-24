import { FC } from "react";
import "./Styles.css";

interface ForecasrProps {
  icon: string;
  time: string;
  tem: number;
  is_day: number;
}

const Forecast: FC<ForecasrProps> = (props) => {
  const { icon, tem, time, is_day } = props;
  const formatedTime = parseFloat(time.split(" ")[1]).toFixed(2);
  return (
    <div className="forecast_wrapper">
      <span className="text_styled uppercase">
        {parseFloat(formatedTime) === 0 ? "01:00" : formatedTime}{" "}
        {!is_day ? "AM" : "PM"}
      </span>
      <span className="my-4">
        <img className="w-10" src={icon} alt="cloud" />
      </span>
      <span className="font-bold text-2xl">{tem}°</span>
    </div>
  );
};

export default Forecast;
