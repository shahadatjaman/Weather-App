import { FC } from "react";
import "./Styles.css";

interface PropsTypes {
  icon: string;
  title: string;
  value: string;
  unit: string;
}

const Item: FC<PropsTypes> = (props) => {
  const { icon, title, unit, value } = props;
  return (
    <div className="air_item_wrapper">
      <div>
        <img className="mr-3" src={icon} width={20} alt="" />
      </div>
      <div>
        <h2 className="air_title_h2">{title}</h2>
        <span className="air_value">
          {value}
          {unit}
        </span>
      </div>
    </div>
  );
};

export default Item;
