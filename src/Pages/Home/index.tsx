import { useDispatch } from "react-redux";
import AirConditions from "../../Components/Air__Conditions/";
import NextForecast from "../../Components/NextDays__Forecast";
import SearchBar from "../../Shared/Search__Bar/index";
import Temparetures from "../../Components/Tempareture/index";
import TodaysForecast from "../../Components/Today's__Forecast/";
import { useWindowWidth } from "../../Hook/useWidth";
import "./Styles.css";
import { useGetWeatherQuery } from "../../features/weather/weatherApi";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { addWeather } from "../../features/weather/weatherSlice";
import Layout from "../Layout";

const Home = () => {
  const isMatch = useWindowWidth({ width: 1000 });

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const state = searchParams.get("state");

  const dispatch = useDispatch();

  const { data: weather } = useGetWeatherQuery({ q: state });

  useEffect(() => {
    dispatch(addWeather(weather));
  }, [weather]);

  console.log(state);
  return (
    <Layout content_width="w-2/3" title="">
      {/* <=== Search Bar ====>*/}

      <div className={`${isMatch ? "w-full" : "w-3/5"}`}>
        <SearchBar isSuggest={true} />
      </div>
      <div className={`${isMatch ? "" : "flex space-x-8"} mt-3`}>
        <div className={`${isMatch ? "w-full" : "w-3/5"}`}>
          {/* <=== Recent Time Tempareture ===>*/}
          <Temparetures />

          {/* <=== Today's Temparetures ===> */}
          <TodaysForecast />

          {/* Today's Air Conditions */}
          <AirConditions />
        </div>
        <div className={`${isMatch ? "w-full" : "w-2/5"}`}>
          <NextForecast />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
