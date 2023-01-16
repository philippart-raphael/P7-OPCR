import { ReactElement, useState } from "react";
import BackgroundContainer from "../BackgroundContainer/BackgroundContainer";
import vector from "./img/Vector.png";
import "./Accordion.scss";

export default function Accordion(
    {
        title,
        value,
        active,
        valueIsArray
    }: { title: string, value: string | string[] | any, active: boolean, valueIsArray: boolean }) {
    const [isActive, setIsActive] = useState(active);
    let valueProcess:  ReactElement[] = [];

    if (valueIsArray) {
        for (let i = 0; i < value.length; i++) {
            valueProcess.push(<p key={`AccordionData-${i}`}>{value[i]}</p>);
        }
    } else {
        valueProcess.push(<p key={`AccordionData`}>{value}</p>);
    }

    return (
        <div>
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
                    <BackgroundContainer divRadius="10px" children={valueProcess} />
                </div>
            }
        </div>
    );
}
