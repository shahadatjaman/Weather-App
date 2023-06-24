import "./Styles.css";
import Forecast from "./Forecast";
import H2 from "../../Shared/Heading/H2";
import { useGetForecastQuery } from "../../features/weather/weatherApi";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addForecast } from "../../features/weather/weatherSlice";
import { useSelector } from "react-redux";
import getDayName from "../../Utils/getDayName";
import { getCurrentDayName } from "../../Utils/getCurrentDayName";

const TodaysForecast = () => {
  const [dayName, setDayName] = useState("'Today's");
  const { forecast } = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const state = searchParams.get("state");
  const { data: getforecast } = useGetForecastQuery({ q: state, days: 1 });

  useEffect(() => {
    dispatch(addForecast(getforecast?.forecast?.forecastday[0]));
  }, [getforecast]);

  useEffect(() => {
    if (forecast) {
      const formatedDate = forecast[0].time.split(" ")[0];
      let date = getDayName(formatedDate);
      setDayName(date);
    }
  }, [forecast]);

  return (
    <div className="today_tem_wrapper">
      <H2 transform="uppercase">
        {" "}
        {dayName === getCurrentDayName() ? "Today's" : dayName} FORECAST
      </H2>

      <div className="mt-4 flex w-full justify-center items-center">
        {forecast &&
          forecast?.map((item, index) => (
            <div key={index} className="w-1/6">
              <Forecast
                icon={item.condition.icon}
                tem={item?.feelslike_c}
                time={item?.time}
                is_day={item.is_day}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default TodaysForecast;
