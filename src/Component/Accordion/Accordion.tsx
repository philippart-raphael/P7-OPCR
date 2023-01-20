import { ReactElement, useState } from "react";
import BackgroundContainer from "../BackgroundContainer/BackgroundContainer";
import vector from "./img/Vector.png";
import "./Accordion.scss";

export default function Accordion(
    {
        title,
        value,
        active,
        valueIsArray,
        txtSizeContent
    }: { title: string, value: string | string[] | any, active: boolean, valueIsArray: boolean, txtSizeContent: string }) {
    const [isActive, setIsActive] = useState(active);
    let valueProcess: ReactElement[] = [];

    if (valueIsArray) {
        for (let i = 0; i < value.length; i++) {
            valueProcess.push(<li key={`AccordionData-${i}`}>{value[i]}</li>);
        }
    } else {
        valueProcess.push(<li key={`AccordionData`}>{value}</li>);
    }

    return (
        <div className="Accordion">
            <div className="AccordionTitle" onClick={() => setIsActive(!isActive)}>
                <div>
                    {title}
                    <span>
                        <img src={vector} alt="Options" className={isActive ? "AccordionClose" : "AccordionOpen"} />
                    </span>
                </div>
            </div>
            {isActive &&
                <div className="AccordionContent">
                    <BackgroundContainer divRadius="10px" children={<ul>{valueProcess}</ul>} />
                </div>
            }
        </div>
    );
}
