import React, {FC, JSX} from "react";
import './sub-title.scss';

interface TProps {
    title: string,
}
const SubTitle: FC<TProps> = (prop: TProps): JSX.Element  => {
    const {
        title,
    } = prop;

    return (
        <div className="sub-title">
            <h3>
                {title}
            </h3>
        </div>
    )
}

export default SubTitle;