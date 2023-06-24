import { FC } from "react";

interface PropsTypes {
  error: any;
  loading: boolean;
}

const Empty: FC<PropsTypes> = ({ error, loading }) => {
  return (
    <div className="w-full flex justify-center items-center flex-col h-full">
      {error ? (
        error
      ) : (
        <>
          {loading ? (
            "Loading..."
          ) : (
            <>
              <img src={icon} alt="location" />

              <h1 className="text-2xl mt-3 font-medium">
                Browse For Your Weather Location
              </h1>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Empty;
const icon =
  "https://res.cloudinary.com/dza2t1htw/image/upload/v1687597932/locaiton_jp24hs.png";
