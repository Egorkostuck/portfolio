import React, { FC, JSX, useEffect, useState } from "react";
import SvgSprite from "../reusable/svgSprite/SvgSprite";
import "./header.scss";
import { Sections } from "../../App";
import Logger from "../../helpers/logger";

type TNav = {
  id: number;
  title: string;
  anchorId: string;
};
const Header: FC = (): JSX.Element => {
  const [dataLinks, setDataLinks] = useState<TNav[]>();

  const getNavigationLinks = () => {
    fetch("/store/navigation-info.json")
      .then((response) => response.json())
      .then((json) => setDataLinks(json))
      .catch((error) => Logger.printError(error));
  };

  const scroll = (offset: number) => {
    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  };

  const smoothScroll = (targetId: string) => {
    if (!targetId) return null;

    const targetElement = document.getElementById(targetId);

    return targetElement ? scroll(targetElement.offsetTop) : null;
  };

  useEffect(() => {
    getNavigationLinks();
  }, []);

  return (
    <header id={Sections.header} className="header">
      <div className="container">
        <div className="header__content">
          <a
            href={Sections.header}
            onClick={() => smoothScroll(Sections.header)}
            className="header__logo"
          >
            <SvgSprite id="logo" size={[300, 37]} />
          </a>

          <div className="header__nav">
            <nav className="nav-container">
              <ul className="nav-list">
                {dataLinks?.map((item: TNav): JSX.Element => {
                  return (
                    <li key={`nav-id-${item.id}`} className="nav-item">
                      <a
                        href={item.anchorId}
                        onClick={() => smoothScroll(item.anchorId)}
                        className="link"
                      >
                        {item.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
