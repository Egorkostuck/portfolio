import React, { JSX } from "react";
import "./sub-title.scss";

interface TProps {
  title: string;
}
const SubTitle: (prop: TProps) => React.JSX.Element = (
  prop: TProps,
): JSX.Element => {
  const { title } = prop;

  return (
    <div className="sub-title">
      <h3>{title}</h3>
    </div>
  );
};

export default SubTitle;
