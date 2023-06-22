import { icons } from "./data";

const Item = () => {
  return (
    <div className="py-6 forecast_item_wrapper flex justify-between">
      <div>Today</div>
      <div className="flex justify-center items-center">
        <div>
          <img src={icons.sun} alt="sunny" width={30} />
        </div>
        <h6 className="font-bold ml-3 text-sm">Sunny</h6>
      </div>
      <div>
        <span className="font-bold">95</span>
        /55
      </div>
    </div>
  );
};

export default Item;
