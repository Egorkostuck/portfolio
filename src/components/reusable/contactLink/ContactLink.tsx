import React, {FC, JSX} from "react";
import './contact-link.scss';
import SvgSprite from "../svgSprite/SvgSprite";

interface TProps {
    srcType: 'link' | 'phone' | 'email',
    title: string,
    src: string,
    iconId: string,
    target?: string
}
const ContactLink: FC<TProps> = (prop: TProps): JSX.Element  => {
    const {
        srcType,
        title,
        src,
        iconId,
        target = '_blank'
    } = prop;

    const getSrc = (): string => {
        let newSrc;

        switch (srcType) {
            case 'email':
                newSrc = `mailto: ${src}`;
                break
            case 'phone':
                newSrc = `tel: ${src}`;
                break
            case 'link':
                newSrc = src;
                break
        }

        return newSrc;
    }

    return (
        <a href={getSrc()} className="contact-link" target={ srcType === 'phone' ? '_parent' : target}>
            <span className='text'>
                {title}
            </span>

            <span className="icon-wrap">
                <SvgSprite
                    id={iconId}
                    size={[60, 60]}
                />
            </span>
        </a>
    )
}

export default ContactLink;