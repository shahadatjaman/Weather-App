import { Link } from "react-router-dom";
import "./Styles.css";

const Suggestions = ({ locations, error, loading }) => {
  if (locations) {
    console.log(locations);
  }

  return (
    <div className="suggetion_wrapper absolute">
      {loading && <div className="empty_message">loading...</div>}

      {error && <div className="empty_message">{error}</div>}
      {!loading && (
        <ul>
          {locations.map((location, index) => (
            <li key={index} className="my-3 cursor-pointer font-medium">
              <Link
                to={`/weather/?name=${location?.address?.name}&country=${
                  location?.address?.country
                }&state=${
                  location.address.state
                    ? location.address.state
                    : location.address.country
                }`}
                className="flex"
              >
                <span className="mr-3">
                  <img className="w-5" src={icon} alt="loca" />
                </span>
                {location.display_name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Suggestions;

const icon =
  "https://res.cloudinary.com/dza2t1htw/image/upload/v1687593771/location_svslwy.png";
