import { FC } from "react";

import { useDispatch } from "react-redux";
import { addForecast } from "../../features/weather/weatherSlice";
import getDayName from "../../Utils/getDayName";
import { getCurrentDayName } from "../../Utils/getCurrentDayName";

interface PropsTypes {
  icon: string;
  text: string;
  forecast: any;
}

const Item: FC<PropsTypes> = ({ icon, text, forecast }) => {
  const dispatch = useDispatch();

  const addWeatherHandler = () => {
    dispatch(addForecast(forecast));
  };

  return (
    <div
      onClick={addWeatherHandler}
      className="py-6 forecast_item_wrapper flex justify-between"
    >
      <div>
        {getDayName(forecast.date) === getCurrentDayName()
          ? "Today's"
          : getDayName(forecast.date)}
      </div>
      <div className="flex justify-center items-center">
        <div>
          <img src={icon} alt="sunny" width={30} />
        </div>
        <h6 className="font-bold ml-3 text-sm">{text}</h6>
      </div>
      {/* <div>
        <span className="font-bold">95</span>
        /55
      </div> */}
    </div>
  );
};

export default Item;
