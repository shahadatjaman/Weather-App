import "./Styles.css";
import { cloud } from "./data";

const Temparetures = () => {
  return (
    <div className="tem_wrapper">
      <div>
        <h1 className="h1_styled">Madrid</h1>
        <span className="rain_chance_styled">Chance of rain: 0%</span>
        <h1 className="deg_styled">44°</h1>
      </div>
      <div>
        <img src={cloud} alt="sun" />
      </div>
    </div>
  );
};

export default Temparetures;
