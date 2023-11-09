import React, { JSX } from "react";
import "./main-title.scss";

interface TProps {
  title: string;
}
const MainTitle: (prop: TProps) => React.JSX.Element = (
  prop: TProps,
): JSX.Element => {
  const { title } = prop;

  return (
    <div className="main-title">
      <h2>{title}</h2>
    </div>
  );
};

export default MainTitle;
