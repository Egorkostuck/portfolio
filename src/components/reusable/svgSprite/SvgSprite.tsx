import React, { FC, JSX } from "react";

interface TProps {
  id: string;
  size?: [number | string, number | string];
  color?: string;
}

const SvgSprite: FC<TProps> = (props: TProps): JSX.Element => {
  const { id = "", size = ["auto", "auto"], color = "white" } = props;

  return (
    <svg className="svg-letter" fill={color} width={size[0]} height={size[1]}>
      <use href={`./svg-sprite.svg#${id}`} />
    </svg>
  );
};

export default SvgSprite;
