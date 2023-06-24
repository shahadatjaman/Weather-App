import Layout from "../Layout";
import SearchBar from "../../Shared/Search__Bar";
import { useSelector } from "react-redux";
import Empty from "./Empty";
import { Link } from "react-router-dom";

const FindLocation = () => {
  const { cities, queryText } = useSelector((state) => state.findLocation);

  return (
    <Layout content_width="w-2/5" title="Know your weather || Know your risk">
      <div>
        <SearchBar isSuggest={false} />
      </div>
      <div className={``}>
        {cities && queryText && (
          <h2 className="font-medium mt-3">
            Search for {`"${cities.error && queryText}"`}
          </h2>
        )}

        <div
          className={`mt-4 h-96 border-t-2 overflow-hidden ${
            cities && cities.locations.length === 0 ? "" : "overflow-y-scroll"
          }`}
        >
          {cities && cities.locations.length === 0 ? (
            <Empty error={cities.error} loading={cities.loading} />
          ) : (
            <ul>
              {cities &&
                cities.locations.map((location, index) => (
                  <li
                    key={index}
                    className="cursor-pointer flex hover:bg-slate-100 p-3 rounded-lg"
                  >
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
                      <span>{location.display_address}</span>
                    </Link>
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default FindLocation;

const icon =
  "https://res.cloudinary.com/dza2t1htw/image/upload/v1687593771/location_svslwy.png";
