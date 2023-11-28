import React, { JSX } from "react";
import "./contact-link.scss";
import SvgSprite from "../svgSprite/SvgSprite";
import { SourceType } from "../../Footer/Footer";

enum Target {
  blank = "_blank",
}

interface TProps {
  srcType: SourceType;
  title: string;
  src: string;
  iconId: string;
  target?: Target;
}

const ContactLink: (prop: TProps) => React.JSX.Element = (
  prop: TProps,
): JSX.Element => {
  const { srcType, title, src, iconId, target = Target.blank } = prop;

  const getSrc = (): string => {
    switch (srcType) {
      case SourceType.email:
        return `mailto: ${src}`;
      case SourceType.phone:
        return `tel: ${src}`;
      case SourceType.link:
        return src;
      default:
        return src;
    }
  };

  const getTarget = (): string => {
    return srcType === "phone" ? "_parent" : target;
  };

  return (
    <a href={getSrc()} className="contact-link" target={getTarget()}>
      <span className="text">{title}</span>

      <span className="icon-wrap">
        <SvgSprite id={iconId} size={[60, 60]} />
      </span>
    </a>
  );
};

export default ContactLink;
