import React, { FC, JSX, useEffect, useState } from "react";
import "./hero.scss";
import Logger from "../../helpers/logger";
import { ContactItem } from "../Footer/Footer";

type TPhoto = {
  srs: string;
  alt: string;
};

type TContent = {
  name: string;
  number: string;
  position: string;
  photo: TPhoto;
  video: string;
  links: ContactItem[];
};

const Hero: FC = (): JSX.Element => {
  const [content, setContent] = useState<TContent>();
  const getContent = () => {
    fetch("/store/hero.json")
      .then((response) => response.json())
      .then((json) => setContent(json))
      .catch((error) => Logger.printError(error));
  };

  useEffect(() => {
    getContent();
  }, []);

  return (
    <section className="section__hero">
      <div className="container">
        <div className="section__hero--wrapper">
          <div className="section__hero--content">
            <div className="section__hero--left-block">
              <span className="section__hero--text text-content">
                Hello, I&apos;m
              </span>

              <div className="section__hero--name">{content?.name}</div>

              <span className="section__hero--text text-content">
                {content?.position}
              </span>

              <a
                className="section__hero--button--call"
                href={`tel:${content?.number}`}
              >
                Call me
              </a>
            </div>

            <div className="section__hero--right-block">
              <div className="section__hero--video">
                <video
                  className="section__hero--preview-video"
                  width={720}
                  height={720}
                  poster={content?.photo?.srs}
                  controls={false}
                  autoPlay
                  muted
                  loop
                >
                  <source
                    src={`../src/assets/video/${content?.video}`}
                    type="video/mp4;"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
