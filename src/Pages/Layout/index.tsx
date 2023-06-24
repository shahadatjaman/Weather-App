import { FC, ReactNode } from "react";
import { useWindowWidth } from "../../Hook/useWidth";
import "./Styles.css";

interface PropsTypes {
  children: ReactNode;
  content_width: string;
  title: string;
}

const Layout: FC<PropsTypes> = ({ children, content_width, title }) => {
  const isMatch = useWindowWidth({ width: 1000 });
  const isSmall = useWindowWidth({ width: 900 });
  return (
    <div
      className={`wrapper ${isMatch ? `${!isSmall && "py-8"}` : `h-screen`}`}
    >
      {title && !isSmall && (
        <div className="mb-16 z-10 ">
          <h2 className="text-5xl font-semibold text-white">{title}</h2>
        </div>
      )}

      <div
        className={`content_wrapper ${title ? "bg_tras" : "bg-white"} ${
          isSmall ? "w-full" : content_width
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
