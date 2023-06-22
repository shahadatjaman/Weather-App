import { FC, ReactNode } from "react";
import "./Styles.css";

interface PropsTypes {
  children: ReactNode;
  transform?: "uppercase" | "lowercase" | "capitalize";
}

const H2: FC<PropsTypes> = (props) => {
  const { children, transform } = props;
  return <h3 className={`text_styled ${transform}`}>{children}</h3>;
};

export default H2;
