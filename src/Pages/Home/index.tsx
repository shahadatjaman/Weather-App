import AirConditions from "../../Components/Air__Conditions";
import NextForecast from "../../Components/NextDays__Forecast";
import SearchBar from "../../Components/Search__Bar";
import Temparetures from "../../Components/Tempareture";
import TodaysForecast from "../../Components/Today's__Forecast";
import { useWindowWidth } from "../../Hook/useWidth";
import "./Styles.css";

const Home = () => {
  const isMatch = useWindowWidth({ width: 1000 });
  const isSmall = useWindowWidth({ width: 900 });
  return (
    <div
      className={`wrapper ${isMatch ? `${!isSmall && "py-8"}` : "h-screen"}`}
    >
      {/* <=== Search Bar ====>*/}
      <div className={`content_wrapper ${isSmall ? "w-full" : "w-2/3"}`}>
        <div className={`${isMatch ? "w-full" : "w-3/5"}`}>
          <SearchBar />
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
      </div>
    </div>
  );
};

export default Home;
