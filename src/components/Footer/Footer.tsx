import React, { FC, JSX, useEffect, useState } from "react";
import MainTitle from "../reusable/mainTitle/MainTitle";
import SubTitle from "../reusable/subTitle/SubTitle";
import "./footer.scss";
import ContactLink from "../reusable/contactLink/ContactLink";
import { Sections } from "../../App";
import Logger from "../../helpers/logger";

export enum SourceType {
  link = "link",
  phone = "phone",
  email = "email",
}

type ContactItem = {
  id: number;
  srcType: SourceType;
  srcTitle: string;
  src: string;
  iconId: string;
};
interface ContactInfo {
  title: string;
  items: ContactItem[];
  iconId: string;
}

const Footer: FC = (): JSX.Element => {
  const [contactData, setContactData] = useState<ContactInfo>();
  const year = new Date().getFullYear();
  const getContactInfo = () => {
    fetch("/store/footer-contact.json")
      .then((response) => response.json())
      .then((json) => setContactData(json))
      .catch((error) => Logger.printError(error));
  };

  useEffect(() => {
    getContactInfo();
  }, []);

  return (
    <footer id={Sections.contact} className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <MainTitle title="Contacts" />

          <SubTitle title="Contacts" />

          <div className="footer__content">
            <div className="text-content">
              Let’s make something new, different and more important or make
              thing more visual and conceptual! <b>Just say “Hello”</b>!
            </div>

            <div className="contact">
              <div className="section-title">
                <h4>{contactData?.title ?? ""}</h4>
              </div>

              <div className="contact-list">
                {contactData?.items.map((item: ContactItem) => {
                  return (
                    <ContactLink
                      key={`contact-link-${item.id}`}
                      srcType={item?.srcType}
                      title={item?.srcTitle}
                      src={item?.src}
                      iconId={item?.iconId}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__copyright">
        <span className="text">Designed by Andrei Verenich in {year}.</span>
      </div>
    </footer>
  );
};

export default Footer;
