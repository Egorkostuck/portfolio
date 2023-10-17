import React, {FC, JSX, useEffect, useState} from "react";
import SvgSprite from "../reusable/svgSprite/SvgSprite";
import './header.scss';

type TNav = {
    title: string,
    id: string
}
const Header: FC = (): JSX.Element => {
    const [dataLinks, setDataLinks] = useState<TNav[]>();

    const getNavigationLinks = () => {
        fetch(`${process.env.REACT_APP_API_URL}/navigationInfo`)
            .then(response => response.json())
            .then(json => setDataLinks(json))
            .catch(error => console.log(error))
    }

    const scroll = (offset: number) => {
        window.scrollTo({
            top: offset,
            behavior: "smooth",
        });
    }

    const smoothScroll = (targetId: string) => {
        if (targetId) {
            if(targetId === '#') {
                return scroll(0);
            }

            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offset: number = targetElement.offsetTop;

                return scroll(offset);
            }
        }
    }

    useEffect(() => {
        getNavigationLinks();
    }, []);

    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <a  onClick={() => smoothScroll('#')} className="header__logo">
                        <SvgSprite id={'logo'} size={[300, 37]} />
                    </a>

                    <div className="header__nav">
                        <nav className="nav-container">
                            <ul className="nav-list">
                                {dataLinks?.map((item: TNav, index: number): JSX.Element => {
                                    return (
                                        <li key={`nav-id-${index}`} className="nav-item">
                                            <a onClick={() => smoothScroll(item.id)} className="link">
                                                {item.title}
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;